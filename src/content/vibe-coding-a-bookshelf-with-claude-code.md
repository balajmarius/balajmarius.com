---
title: Vibe coding a bookshelf with Claude Code
author:
label: Dev
createdAt: Dec 27, 2025
---

I love books. Not just reading them, owning them. I buy more than I'll ever finish, and I'm okay with that.

The problem: I owned roughly 500 books and had no reliable way to answer a simple question: **what do I actually have?**

I'd buy duplicates. I'd forget what I'd read. Friends would ask for recommendations and I'd blank. Every time I looked at the shelves, there was this low-grade frustration. Not shame exactly, but close.

This post is about how I finally cataloged them, and my experience with vibe coding, agentic coding, or whatever we're calling it these days.

---

For years, I had a small frustration. I wanted to catalog my collection. Nothing fancy, a spreadsheet would do.

But every attempt failed.

[ISBN scanners](https://apps.apple.com/us/app/isbn-scan-book-info-ratings/id6463488866) choked on Romanian editions. Apps like [Goodreads](https://www.goodreads.com/user/show/47935304-marius-balaj) couldn't find obscure publishers or anything from the antiquarian shops I haunt. And partial data felt worse than none at all.

So the project stayed stuck in "someday."

For context: I built this website by hand in spring 2025. No AI, just me and the code.

Then, at the end of the summer, [Vlad](https://vtemian.com) told me about _Claude Code_. I approached it with caution, as I do with most hyped things, but I decided to try it on a small project.

While _Claude_ was doing its thing, I opened a new terminal tab and ran `cat package.json` to find the dev command.

Vlad stopped me. **"Just tell it to run dev."**

I did. It ran. That was my t0.

This wasn't fancy autocomplete. It was something else entirely.

A few weeks later, I dusted off the bookshelf idea.

---

## The data

Every good project starts with bad data.

Armed with my iPhone and patience, I spent an afternoon photographing every book I own. 470 shots, duplicates included. Spines, covers, the occasional blurry thumb.

[insert image: raw phone photos of book spines]

I AirDropped them to my Mac and opened _Claude_.

The first asks were simple:

- Rename these files incrementally
- Convert them from HEIC to JPG

But then I pushed further: write a script that sends each image to _OpenAI's_ vision API and extracts author, title, and publisher. Normalize the names. I wanted "Dostoievski, Fiodor," not seventeen different spellings. Resize images first so we don't burn tokens on pixels.

_Claude_ wrote the script and ran it.

And somehow, it worked. Not perfectly. A few titles came back garbled. Some authors were guessed wrong. One book got labeled as a 1987 Soviet agricultural manual (it was a novel). But **90% accuracy on 470 books** felt like magic.

The 10% that failed? I fixed those manually. That was a human call: good enough is good enough.

Later, I realized I forgot a few books I got for Christmas. So we built another script that runs the whole pipeline for new additions: photo in, metadata and cover out.

---

## The covers

Now I had data, but I still needed covers. My phone photos showed spines, not the front artwork.

My first thought was a simple grid, just the covers, tiled. _Claude_ suggested _OpenLibrary's_ API to fetch them.

It worked, sort of.

Half the covers came back pixelated or wrong. Romanian editions barely existed in their database. So we iterated.

_Claude_ wrote a "judge", another _OpenAI_ call that scored each cover's quality and flagged the bad ones. For flagged books, we fell back to Google Images via _SerpAPI_.

About ten results were photos of physical books instead of clean covers, mostly my antiquarian finds and a few obscure Soviet boxing manuals. No database is going to have those.

I fixed them in Photoshop. For 460 books, **ten manual edits** felt like a victory.

[insert image: before/after cover quality comparison]

---

## The shelf

With covers in hand, I started building the UI. A simple CSS grid.

It worked, but it felt lifeless.

I kept staring at my actual bookshelf, the way spines of different widths press against each other, the colors bleeding into a texture. I wanted that. Not a gallery. A shelf.

That vision was mine. _Claude_ couldn't have come up with it. But it could execute it.

Back to the data.

_Claude_ wrote a script to extract dominant colors from each cover using color quantization, then computed contrasting text colors for readability. Dropped it into the JSON.

Better, but still off. Every book was the same width. Real books aren't like that.

Another script: hit _Open Library_ for page counts, map them to spine widths, sprinkle in some padding variation to break up the uniformity.

Now it looked like a bookshelf.

[insert image: shelf UI with varying spine widths and colors]

---

## The animation

But it sat there, static.

I wanted it to feel alive, like when you run your finger along a row of spines and they tilt slightly under the pressure.

I described this to _Claude_. One prompt.

It came back with a scroll-based tilt animation: books rotate a few degrees based on scroll velocity, using _Framer Motion_. I dropped it in and scrolled.

[animation gif here]

Close, but the movement felt snappy. The rotation jumped instead of flowing.

I told _Claude_ it felt off, and it explained the problem immediately: we were updating React state on every scroll event, causing re-renders. The fix was to use `useMotionValue` and `useSpring`, values that animate outside React's render cycle.

Two minutes later, the scroll was buttery.

I must have scrolled back and forth fifty times just watching it move.

Not everything worked, though. At one point I asked for infinite scroll to lazy-load books as you scrolled. _Claude_ implemented it. It broke the smooth scrolling completely. The scroll container wouldn't resize properly, the last books were unreachable. We tried MutationObserver, ResizeObserver, various hacks. Nothing worked.

I said stop. We reverted. Sometimes the answer is: don't do that.

---

## The stack

The shelf worked beautifully on desktop.

But horizontal scrolling isn't for everyone, and on mobile, it felt cramped. I wanted an alternative: books lying flat, stacked vertically, text readable without tilting your head.

I pointed _Claude_ at the shelf implementation and asked for a stack view.

It read through the code, picked up the patterns on its own: the animation constants, the spring config, the fade-in timing. Then it built the new component and wired up a toggle between the two layouts.

What surprised me was how little I had to explain. It understood that the stack needed the same scroll-triggered opacity, the same color extraction, the same data shape.

It just worked.

[insert image: stack view on mobile]

---

## Looking back

The thing that surprised me most wasn't that _Claude_ could write code.

It's that we could _iterate_ together.

This wasn't me writing a spec and _Claude_ executing it. It was conversation: "try this," "that feels off," "what if we..." The kind of back-and-forth I'd have with a human collaborator.

But here's what I want to be clear about: I made all the decisions.

The visual metaphor (shelf, not grid). The accuracy threshold (90% is fine, fix the rest by hand). The manual Photoshop fixes for rare books. The call to revert infinite scroll when it didn't work. The spring config that felt right.

_Claude_ executed. I curated. That's the division of labor.

Even this blog post is a combination of drafts I wrote, commits _Claude_ made, and code it read to get context. Meta, I know.

After years of false starts, my bookshelf finally exists. **460 books**, cataloged and displayed, at [/bookshelf](/bookshelf).

And the tool that made it possible was one I almost dismissed as hype.
