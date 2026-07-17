---
title: "Notes on AI Engineering, chapter 9: Inference optimisation"
author:
label: Book
createdAt: Nov 24, 2025
---

This blog post consists of notes based on the Kindle highlights I made while reading Chip Huyen's [_AI Engineering_](https://www.amazon.com/dp/1098166302).

---

<figure className="space-y-2 text-center text-gray-500 text-xs">
  <img
    src="/images/notes-on-ai-engineering-chapter-9-inference-optimisation/snowy-owl.webp"
    alt="An owl perched on a log"
  />
  <figcaption>An owl perched on a log by Tim Zänkert</figcaption>
</figure>

There is no single best way to optimize inference. The right solution depends on the model, the available hardware, the serving workload, the task, and the performance requirements.

Inference can be optimized at three levels:

- _Model_ - change or compress the model, its decoding process, or its attention mechanism.
- _Hardware_ - choose and use accelerators suited to the workload.
- _Service_ - improve how requests, memory, and compute resources are managed.

Chapter 9 introduces metrics for evaluating inference efficiency and then examines optimization techniques, experiments, and research results. Although it discusses all three levels conceptually, its detailed optimization techniques focus mainly on the model and inference service levels.

## Measuring inference efficiency

“Fast” is too vague to describe an inference system. Several metrics are needed.

- _Latency:_ The time required to process a request.
- _Time to first token (TTFT):_ The time between submitting a prompt and receiving the first output token.
- _Time per output token (TPOT):_ The average time required to produce each subsequent output token.
- _Throughput:_ The amount of work processed per unit of time, such as requests per second or tokens per second.
- _Goodput:_ The portion of throughput that satisfies a service requirement, such as a latency limit.

An approximate latency relationship is:

```text
total latency ≈ TTFT + TPOT × (number of output tokens - 1)
```

Input length primarily affects prefill and TTFT. Output length determines the number of sequential decoding steps and therefore has a large effect on total latency.

### FLOPs and FLOP/s

- A _FLOP_ is one floating-point operation.
- _FLOPs_ can describe the quantity of computation required.
- _FLOP/s_ measures the rate at which hardware performs floating-point operations.
- _TFLOP/s_ means trillions of floating-point operations per second.

The distinction matters: the amount of computation a model needs is different from the rate at which hardware can execute it.

## Prefill and decode

LLM inference has two phases with different resource profiles.

| Phase   | What happens                                                                | Typical bottleneck | Main metric affected |
| ------- | --------------------------------------------------------------------------- | ------------------ | -------------------- |
| Prefill | Process input tokens in parallel and populate the initial KV cache          | Compute            | TTFT                 |
| Decode  | Generate output tokens sequentially while reading weights and cached states | Memory bandwidth   | TPOT                 |

The model weights are normally already stored in accelerator memory during decoding. However, every decoding step needs to transfer/read the weights from high-bandwidth memory into the compute units. This repeated data movement, combined with relatively little computation for a single token, makes decoding memory-bandwidth-bound.

Because prefill and decode have different resource requirements, a large serving system can place them on different instances. This prevents compute-heavy prefill jobs from interfering with active decoding jobs and allows each group of machines to be optimized independently. The trade-off is the cost and complexity of transferring intermediate state, especially the KV cache, between instances.

## Model-level optimization

### Model compression

_Quantization_ represents model values with fewer bits. It reduces the memory footprint and can increase throughput. Weight-only quantization is popular because it is effective and relatively easy to apply, although aggressive quantization can affect model quality.

_Distillation_ trains a smaller student model to imitate a larger teacher model. This produces a genuinely smaller model that can be cheaper and faster, but it might not preserve all of the teacher’s capabilities.

_Pruning_ removes neural-network components or sets less useful parameters to zero. It can create a smaller or sparser model, but practical speed improvements depend on whether the hardware can exploit the resulting sparsity.

### Speculative decoding

Speculative decoding addresses the sequential generation bottleneck:

- A fast draft model proposes several tokens.
- The target model evaluates those tokens in parallel.
- It accepts the longest valid prefix and generates an additional token.
- The process repeats from the new position.

The target model is not checking whether the draft is factually correct. It checks whether the proposed tokens are compatible with what the target model would generate.

This can be faster because verifying several tokens in parallel is more efficient than generating them one at a time with the target model. It works best when the draft model is fast and its acceptance rate is high. Structured outputs such as code can have high acceptance rates because many tokens are relatively predictable.

Speculative decoding is not automatically faster or cheaper. If many draft tokens are rejected, the system pays for draft generation and verification while making little progress.

## Attention and the KV cache

During inference, the KV cache stores the key and value vectors of previous tokens so the model does not recompute them at every decoding step. It trades memory for computation.

Key and value vectors are computed during both training and inference, but the growing KV cache is an inference mechanism. During training, all tokens are available and their computations can be parallelized.

KV-cache memory grows with:

- Sequence length
- Batch size
- Number of transformer layers
- Model dimension
- Numerical precision

Consequently, long prompts, long conversations, and high concurrency can make the KV cache a major memory bottleneck. Available memory can limit context length, batch size, or the number of simultaneous requests.

Attention optimization falls into three broad groups:

- _Redesign the attention mechanism_
  - Local windowed attention
  - Multi-query attention
  - Grouped-query attention
  - Cross-layer attention

- _Manage or compress the KV cache_
  - PagedAttention
  - KV-cache quantization
  - Adaptive compression
  - Selective caching

- _Optimize attention computation_
  - Specialized kernels such as FlashAttention
  - Operator fusion and improved memory-access patterns

PagedAttention divides the cache into non-contiguous blocks, which reduces fragmentation and enables more flexible memory use. Kernel optimization solves a related but different problem: it accelerates computation and reduces unnecessary data movement rather than primarily shrinking the cache.

## Service-level optimization

### Batching

Batching improves throughput by processing multiple requests together, but it introduces a latency trade-off.

| Type                | How it works                                           | Main trade-off                                           |
| ------------------- | ------------------------------------------------------ | -------------------------------------------------------- |
| Static batching     | Wait for a fixed number of requests                    | Full batches, but early requests might wait a long time  |
| Dynamic batching    | Process when the batch is full or a timer expires      | Bounds waiting time, but batches may be partially filled |
| Continuous batching | Remove completed requests and replace them immediately | Better utilization, but more complex scheduling          |

Continuous batching is similar to a bus that can drop off one passenger and immediately use the free seat for another. It is particularly useful for LLM requests because response lengths vary substantially.

### Prompt caching

Prompt caching, also called prefix or context caching, reuses the processed state of overlapping prompt prefixes. For example, a long system prompt can be processed once and reused across many requests.

It is valuable for:

- Long, repeated system prompts
- Multiple questions about the same document or codebase
- Many-shot prompts with repeated examples
- Multi-turn conversations whose earlier messages remain unchanged

Prompt caching can reduce TTFT and input-processing cost. Like other caches, it trades memory for computation and introduces storage, eviction, invalidation, and implementation concerns.

### Parallelism

| Strategy             | What is duplicated or split?       | Primary benefit                                  | Main cost                                             |
| -------------------- | ---------------------------------- | ------------------------------------------------ | ----------------------------------------------------- |
| Replica parallelism  | Complete model copies              | Serve more requests concurrently                 | Each replica requires memory for the whole model      |
| Tensor parallelism   | Tensor operations within layers    | Fit large models and potentially reduce latency  | Frequent communication between devices                |
| Pipeline parallelism | Consecutive model layers or stages | Fit large models and improve pipeline throughput | Communication and potentially greater request latency |

If the model fits on one GPU but traffic is too high, replica parallelism is a natural choice. If the model cannot fit on one GPU, tensor parallelism is commonly preferred for latency-sensitive inference. Pipeline parallelism can also make large models fit, but is especially common in training, where throughput is often more important than individual request latency.

## Personal conclusion

The most important lesson is that inference optimization is workload-dependent. There is no fixed collection of techniques that is always best. An optimization that helps one application can hurt another by increasing latency, memory use, engineering complexity, or quality degradation.

The decision should begin with questions such as:

- What model are we serving?
- What hardware is available?
- Are inputs or outputs usually long?
- Do prompts contain repeated prefixes?
- Is the workload interactive or asynchronous?
- Is latency, throughput, cost, or output quality the highest priority?
- Which service-level objective must requests satisfy?

Optimization should follow measurement. First identify the actual bottleneck, then choose a technique whose trade-offs match the task.
