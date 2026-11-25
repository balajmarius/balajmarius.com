---
title: Hacking the Casio F-91W
label: Dev
createdAt: Nov 23, 2026
---

I came across an _F-91W_ with its own wallpaper in a Reddit thread about watches and immediately wanted to give mine one too.

<Artifact
  name="casio-watch-scroll"
  title="A Casio F-91W with the Golden Gate Bridge behind the LCD"
  className="aspect-4/3"
/>

At first I thought it was some kind of hardware upgrade, a bit of research showed me that the wallpaper was just a picture behind the LCD, sorry if the title gave you the same idea.

If you want to try it on your own _F-91W_, a [small screwdriver](https://www.amazon.de/s?k=watch+precision+phillips+screwdriver), a [strap removal tool](https://www.amazon.de/s?k=watch+spring+bar+tool) and a [pair of tweezers](https://www.amazon.de/s?k=precision+tweezers) will get the watch open.

## The print

The LCD on my _F-91W_ is about `10×20mm`, so I made a little tool to crop the pictures to that size and get the framing right before printing.

I was choosing between a portrait of Richard Feynman, Bliss (the default Windows XP wallpaper) and the Golden Gate Bridge.

The picture needs to be printed on transparency film so light can pass through it. Since I didn’t have a printer or any film, I checked with my local print shop, where a full A4 sheet cost less than a dollar.

A picture that small barely takes up any room on A4, so I laid out nine columns and 21 rows with gaps for cutting, that gave me room to try different pictures and make copies at `100%`, `90%` and a few other opacities to see how they’d look behind the digits.

The Golden Gate Bridge at `80%` opacity looked best to me.

## Opening the watch

Once the four screws are out and the back is off, you’ll see a rubber gasket around the edge of the case. It helps seal the watch, so note how it sits before lifting it out with tweezers.

There’s a gap along the side of the case where the strap removal tool fits. Slip the tip in there and gently lift the module out.

## LCD

A metal cover holds the circuit board and LCD in place and clips onto the plastic holder at four points. Once you free the clips, the cover lifts off and you can take out the board.

Behind the plastic holder there’s a thin strip of conductive rubber. It connects the board to the LCD, so keep it with the other parts.

At the front, a small plastic tab holds the LCD in place. Press down gently on the tab, then lift the screen and slide it out. The piece of paper behind it can come out too, since that’s where the picture goes.

## Peeling the reflector

The LCD has several layers, and the silver reflector at the back is the one that has to come off for the picture to show through.

The film is stuck down, so use the tip of a craft knife to gently lift one corner. Getting that first corner up took a bit of fiddling on mine. Once it’s loose, grab it with tweezers and slowly peel the film off.

Once you’ve cut out the print, stick a piece of aluminium tape to the back so it reflects light through the picture and makes the digits easier to read. Then lay the print flat in the plastic holder with the picture facing the LCD.

## Putting it back together

<p className="underline">Before putting the LCD back in, look at it from the front and make sure the three small dots are on the left.</p>

The LCD goes back into the holder top edge first. From the back, you can gently pull the plastic tab aside with a finger to ease the bottom edge in, then let go once the screen sits flat.

The rubber strip goes in its slot first, followed by the circuit board. The metal cover clips back onto the holder at all four points.

The buttons can catch the module on its way into the case, so pushing them outward first gives it room to slide in. Once the module is seated, the rubber gasket goes back into its groove the same way it came out, then you can fit the back cover and tighten the screws.

## Debugging

If some segments are missing from the digits after you put the watch back together, you might need an AC reset.

With the back cover off and the battery still in place, touch one tip of a pair of metal tweezers to the contact inside the hole marked `AC` and the other to the upper-right clip on the metal battery holder. <span className="underline">Hold both tips there for about two seconds to reset the watch</span>.
