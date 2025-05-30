---
title: "Unconventional typing: part 2"
subtitle: "Building and living with a DIY ergonomic split keyboard."
author: "José Duarte Lopes"
date: 2025-05-06

post_title: "Unconventional typing: part 2 - Scuffed Ergo-Keyboards"
post_summary: |
  Put your hands together and clap while I split mine and no look type this banger sequel. 

  Powered by the magic of and open hardware and chinese electronics.
toc_on: true
numbering: true
credits: true
draft: false
---

## A splitting decision

[Last post](/posts/unconventional-typing-p1) I left of with a banger software based typing setup. I got my Colemak-dh, my homerow mods (which I extensively praised) and my layers all neatly integrated into my workflow, it was great! However, lingering around was still an unease, a general feeling of disquiet. And this feeling was one I could quite literally get my hands on. My issue wasn't with the way I typed, you see, it was but with the keyboard itself! It bothered me: there was still further optimization to be done.

Allow me explain. What if I told you've been lied to? What if I told you the standard keyboard **shape**, i.e. the way the keys are positioned, is not really designed with ergonomics in mind? Ever wondered why the keys don't align with each other into a neat little grid? Ever considered the possibility that the strongest and most agile finger, the thumb, could be used to hit more that the space bar?

Peaked your interest? Let me introduce you to the world of split ergonomic keyboards. Yet again down another rabbit hole.

## Choosing the right keyboard

With all that said, there are pretty valid concerns with the way standard keyboards are designed, how it affects your typing posture and how it can spiral into other health issues. I'm not an expert, and as such I'm not gonna delve too much into them. To be completely honest, I just wanted a chance to play around with electronics and build a really cool custom mechanical keyboard.

I like to think of keybards as being categorized along 4 axis:

- Split / Non Split
- Row Staggered / Collumn Staggered / Ortholinear layout
- Number of keys
- Flat / Tenting / Weird Madness

Here's a collection of popular keyboards I looked into while doing my research, complete whith their respective distribution among the categories.


HERE I HAVE TO FACT CHECK THESE NUMBERS, LIKE SOME ARE PER HAND, OTHERS PER WHOLE KEYBOARD!

| Keyboard                                                          | Split / Non Split | Layout Type       | Number of Keys | Form Factor          | Open Source Hardware      |
| ----------------------------------------------------------------- | ----------------- | ----------------- | -------------- | -------------------- | ------------------------- |
| [Standard 104-Key](https://en.wikipedia.org/wiki/Keyboard_layout) | Non-Split         | Row Staggered     | 104            | Flat                 | ❌                        |
| [Kinesis Advantage2](https://kinesis-ergo.com/shop/advantage2/)   | Split\*           | Column Staggered  | ~76            | Sculpted / Tented    | ❌                        |
| [Glove80](https://moergo.com/)                                    | Split             | Column Staggered  | 80             | Tenting / Wireless   | ❌                        |
| [ErgoDox EZ](https://ergodox-ez.com/)                             | Split             | Column Staggered  | 76             | Tenting / Adjustable | ❌ (Based on open design) |
| [Moonlander](https://www.zsa.io/moonlander/)                      | Split             | Column Staggered  | 78             | Tenting / Adjustable | ❌                        |
| [Lily58](https://github.com/kata0510/Lily58)                      | Split             | Column Staggered  | ~58            | Flat / Tenting (kit) | ✅                        |
| [Corne (CRKBD)](https://github.com/foostan/crkbd)                 | Split             | Column Staggered  | 42             | Flat / Tenting (kit) | ✅                        |
| [Dactyl Manuform](https://github.com/adereth/dactyl-keyboard)     | Split             | Column Staggered  | 50–70 (varies) | Sculpted / "Madness" | ✅                        |
<!-- | [Redox](https://github.com/mattdibi/redox-keyboard)               | Split             | **Row Staggered** | ~70            | Tenting / Flat (kit) | ✅                        | -->
<!-- | [Kyria](https://splitkb.com/products/kyria-pcb-kit)               | Split             | Column Staggered  | ~58            | Tenting (optional)   | ✅                        | -->
<!-- | [Reviung41](https://github.com/gtips/reviung)                     | Non-Split         | Column Staggered  | 41             | Flat                 | ✅                        | -->
<!-- | [Planck](https://olkb.com/planck/)                                | Non-Split         | Ortholinear       | 47–48          | Flat                 | ✅                        | -->

In the end, I chose to go with the Lily58. I felt like it was a fairly conservative choice at the time and that proved to be right. It was split and column staggered, the main things I wanted to try, while keeping a *sane* number of keys, which allowed me to keep the number row. Further, since the design was open hardware, that gave me the chance to order my own parts and assemble it all by myself, which would make it a significantly cheaper than the pre-built options (I was not about to drop 300€ on a keyboard I didn't even know I'd like).

## Ordering parts

When choosing the parts for your keyboard, the main components you need to worry about are:

### PCB's 

This ultimately comes down to choosing (or designing) the keyboard, as discussed on the last section. Some things to look for are switch compatibility and hot-swap compatibility. Optionally, you might also want a board with support for LEDs, OLED display or encoders.

### Microcontrollers

Pro-micro (and other compatible types like rp2040)
Nice!nano

### Swithes and keycaps

Here talk about MX vs choc style swithes. Also mention the different types, like tactile, linear, mixed. 


### Other optional components

1. Diodes
1. Hot-swap sockets
1. TRS cable and sockets
1. Batterys (if wireless)
1. LED's (if RGB)
1. OLED displays
1. Reset buttons
1. Encoders

### Breaking down my costs




## Assembly

## Learning Curve

## Conclusion

## Epilogue
