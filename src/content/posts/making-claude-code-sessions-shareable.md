---
title: Making Claude Code sessions shareable
label: Dev
createdAt: Feb 16, 2026
author:
---

_Claudebin is a project I built together with Vlad Temian.
You can follow him on [X](https://x.com/vtemian) and
[GitHub](https://github.com/vtemian)._

---

I use Claude Code daily, Vlad does too, we often work on
the same projects. A typical exchange looked like this.

I would spend thirty minutes debugging something with
Claude, iterating on prompts, running commands, inspecting
files, adjusting constraints, refining the output until it
felt correct. Then I would want to show Vlad what I did.

<figure className="space-y-2 text-center text-gray-500 text-xs">
  <img src="/images/making-claude-code-sessions-shareable/slack-conversation.png" alt="Sharing Claude Code sessions over Slack" />
  <figcaption>Sharing Claude Code sessions over Slack</figcaption>
</figure>

At that point, the workflow would fall apart.

Screenshots of the terminal lose structure immediately and
become hard to follow once there are more than a few of
them, copy-pasting chunks into Slack strips formatting and
makes tool calls blend into noise, dumping the entire
session into a gist technically preserves everything, but
turns it into a wall of text that no one realistically
wants to scroll through.

None of these options preserve the session as it actually
happened.

```
⏺ Read 1 file (ctrl+o to expand)
⏺ Bash(cp /Users/balajmarius/Desktop/slack-conversation.png /Users/balajmarius/Work/balajmarius.com
      /public/images/making-claude-code-sessions-shareable/slack-conversat…)
  ⎿  Done
⏺ Update(src/content/posts/making-claude-code-sessions-shareable.md)
  ⎿  Added 5 lines
```

What we wanted was much simpler: a link with the actual
session.

## The process is invisible

A pull request shows the final diff, it does not show what
I tried first, what the model suggested and I rejected,
which files were inspected along the way, what commands
were executed in the terminal, how the solution evolved
over multiple iterations, or what product specifications
and constraints I initially gave to the AI.

_When AI is part of the workflow, the conversation becomes
part of the engineering process._

Claude Code supports
[resume](https://code.claude.com/docs/en/common-workflows#resume-previous-conversations)
inside the terminal, which is useful when you want to
continue working. What it does not provide is a way to
inspect that session comfortably outside of the terminal
or share it with someone else in a structured way, the
session still remains trapped in the terminal.

## Documentation without context

The same problem appeared when writing tutorials and
documentation.

Most AI based examples show the final prompt and the final
result, which makes the process look clean and linear. In
reality, the useful part is often the messy middle, the
adjustments to prompts, the tool calls, the corrections
after unexpected outputs, the gradual tightening of the
specification.

```
claude "Create hotfix branch from main, apply the fix for issue #456, and create emergency PR"
```

If I am building something with Claude Code and writing
about it, the interaction with the model is not incidental.
It is part of the material.

- Screenshots are static and do not scale.
- Copy paste removes structure and makes longer sessions
  hard to follow.
- Raw logs preserve everything but sacrifice readability.

There was no good way to embed a real session in a blog
post or documentation page while keeping it navigable.

That gap became Claudebin.

## Claudebin

Claudebin is a Claude Code plugin that takes a terminal
session and turns it into something you can actually share
and read comfortably.

After installing it, sharing a session is a single command:

```
/claudebin:share
```

That command captures the current session and generates a
URL. There is no exporting, no cleaning up logs, no
screenshots.

The session is rendered in a web UI where code blocks are
syntax highlighted, tool calls such as file reads, writes,
bash commands, web searches, and MCP calls can be
collapsed, and user and assistant messages are clearly
separated so the conversation remains easy to follow.

**Threads can be public and discoverable or unlisted and
shared privately with a link**, depending on the use case.

Instead of scrolling through a terminal buffer, you get a
session that can be browsed, referenced, and sent to
someone else without explanation.

## Embedding and continuation

Often you do not need the entire session.

You need a specific segment that illustrates a decision, a
mistake, or a useful pattern. Claudebin lets you select a
range of messages and generate an embed snippet that can
be included in a blog post, tutorial, or README, preserving
structure and formatting instead of flattening everything
into plain text.

<iframe className="w-full h-72 rounded-lg" src="https://claudebin.com/threads/ogSG_7hLgP/embed?from=0&to=1"></iframe>

Anyone with access to a shared thread can also resume it locally using a simple
`curl ... | claude` command, which makes sessions portable
across developers instead of tied to a single machine.

<figure className="space-y-2 text-center text-gray-500 text-xs">
  <img className="rounded-lg" src="/images/making-claude-code-sessions-shareable/continue-conversation.png" alt="Continue conversation in your terminal" />
  <figcaption>Continue conversation in your terminal</figcaption>
</figure>

Claude Code handles execution and continuation, Claudebin
handles visibility and sharing.

## Building it

We built
[Claudebin](https://github.com/wunderlabs-dev/claudebin.com)
while actively using it ourselves, iterating on the CLI
flow, the viewer, and the sharing model as we encountered
real friction in day to day work.

**It is open source and free to use**.

If you are using Claude Code and want your sessions to be
inspectable, readable, and shareable, start on GitHub, try
it in your workflow, and open a pull request if you see
something that can be improved.

_PRs are welcome_.
