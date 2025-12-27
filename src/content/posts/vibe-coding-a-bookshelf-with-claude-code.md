---
title: Vibe coding a bookshelf with Claude Code
author:
label: Dev
createdAt: Dec 27, 2025
---

I love books. Not just reading them—owning them. Sometimes I catch myself fetishizing them in the Žižekian sense: the object becomes a stand-in for the knowledge I intend to consume but haven't yet. The unread Dostoevsky on my shelf isn't a book—it's a promise to a future self who finally has the time.

For years, this love came with a quiet frustration. I wanted to catalog my collection. Nothing fancy—a spreadsheet would do. But every attempt failed. ISBN scanners choked on Romanian editions. Apps like Goodreads couldn't find obscure publishers or anything from the antiquarian shops I haunt. And partial data felt worse than none at all. Most of my books sit together on the same shelves; sorting through what was scanned versus what wasn't seemed pointless. So the project stayed stuck in "someday."

Then, a few months ago, my friend Vlad told me about Claude Code. I was skeptical—I'm always skeptical—but I decided to try it on a small project. I wrote a prompt, hit enter, then instinctively opened a new terminal tab to run `npm install` myself.

Vlad stopped me. "No. Just tell it to do that."

That was the moment everything clicked. This wasn't autocomplete with better marketing. It was something else entirely. And suddenly, my dusty bookshelf project felt possible again.

---

I started where any good project starts: with bad data. Armed with my iPhone, I spent an afternoon photographing every book I own. 470 shots. Spines, covers, the occasional blurry thumb. I AirDropped them to my Mac and opened Claude.

The first asks were simple. Rename these files incrementally. Convert them from HEIC to JPG. But then I pushed further: write a script that sends each image to OpenAI's vision API and extracts author, title, and publisher. Normalize the names—I wanted "Dostoievski, Fiodor," not seventeen different spellings. Resize images first so we don't burn tokens on pixels.

Claude wrote the script. I ran it. And somehow, it worked. Not perfectly—a few titles came back garbled, some authors were guessed wrong—but 90% accuracy on 470 books felt like magic.

---

Now I had data, but I still needed covers. My phone photos showed spines, not the front artwork. My first thought was a simple grid—just the covers, tiled. Claude suggested OpenLibrary's API to fetch them.

It worked, sort of. Half the covers came back pixelated or wrong. Romanian editions barely existed in their database. So we iterated. Claude wrote a "judge"—another OpenAI call that scored each cover's quality and flagged the bad ones. For flagged books, we fell back to Google Images via SerpAPI.

This was messier. About ten results were photos of physical books instead of clean covers—mostly my antiquarian finds, plus a few obscure Soviet boxing manuals. Those I fixed in Photoshop. But for 460 books, ten manual edits felt like a victory.

---

With covers in hand, I started building the UI. But the grid felt lifeless. I kept staring at my actual bookshelf—the way spines of different widths press against each other, the colors bleeding into a texture—and I wanted that. Not a gallery. A shelf.

So I went back to Claude. Extract the dominant color from each cover. Compute a contrasting text color so titles stay readable. The JSON file grew: now each book had a background color, a text color, a cover URL.

It looked better. But something still felt off. Every book was the same width. Real books aren't like that. A 200-page novel is thinner than a 600-page doorstop.

Another conversation with Claude: fetch page counts from Open Library, calculate a spine width in pixels (360–520px, scaled by page count), add slight padding variation to break up the uniformity. Run it.

Now it looked like a bookshelf.

---

But it sat there, static. I wanted it to feel alive—like when you run your finger along a row of spines and they tilt slightly under the pressure.

I described this to Claude. One prompt. It came back with a scroll-based tilt animation: books rotate a few degrees based on scroll velocity, using Framer Motion. I dropped it in and scrolled.

[animation gif here]

Close, but the movement felt snappy. The rotation jumped instead of flowing. I told Claude it felt off, and it explained the problem immediately: we were updating React state on every scroll event, causing re-renders. The fix was to use `useMotionValue` and `useSpring`—values that animate outside React's render cycle.

Two minutes later, the scroll was buttery. I must have scrolled back and forth fifty times just watching it move.

---

The shelf worked beautifully on desktop. But horizontal scrolling isn't for everyone—and on mobile, it felt cramped. I wanted an alternative: books lying flat, stacked vertically, text readable without tilting your head.

I asked Claude to look at the shelf implementation and build something similar for a stack view. It picked up the patterns on its own—the animation constants, the component structure, the fade-in timing—and produced a toggle between the two layouts. Consistent, clean, and I barely had to explain anything.

---

Looking back, the thing that surprised me most wasn't that Claude could write code. It's that we could *iterate* together. This wasn't me writing a spec and Claude executing it. It was conversation—"try this," "that feels off," "what if we..."—the kind of back-and-forth I'd have with a human collaborator.

The commit history tells the story better than I can: `feat: add scroll-based tilt animation`, then `perf: use motion values to avoid re-renders`, then `refactor: extract infinite loading logic`. Each one a small dialogue that pushed the project forward.

After years of false starts, my bookshelf finally exists—460 books, cataloged and displayed, at [/bookshelf](/bookshelf). And the tool that made it possible was one I almost dismissed as hype.

Sometimes you just have to stop being skeptical and let the agent cook.
