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

[On my last post](/posts/unconventional-typing-p1) I left of with a banger software based typing setup. I got my Colemak-dh, my homerow mods (which I extensively praised) and my layers all neatly integrated into my workflow, it was great! However, lingering around was still an unease, a general feeling of disquiet. And this feeling was one I could quite literally get my hands on. My issue wasn't with the way I typed, you see, it was but with the keyboard itself! It bothered me: there was still further optimization to be done.

Allow me explain. What if I told you've been lied to? What if I told you the standard keyboard **shape**, i.e. the way the keys are positioned, is not really designed with ergonomics in mind? Ever wondered why the keys don't align with each other into a neat little grid? Ever considered the possibility that the strongest and most agile finger, the thumb, could be used to hit more that the space bar?

Peaked your interest? Let me introduce you to the world of split ergonomic keyboards.

Down another rabbit hole yet again.

## Choosing the right keyboard

With all that said, there are pretty valid concerns with the way standard keyboards are designed, how it affects your typing posture and how it can spiral into other health issues. I'm not an expert, and as such I'm not gonna delve too much into them. To be completely honest, I just wanted a chance to play around with electronics and build a really cool custom mechanical keyboard. In this post I hope to share some of what I learned building my own.

I like to think of keyboards as being categorized along 4 axis:

- Split / Non Split
- Row Staggered / Column Staggered / Ortholinear layout
- Number of keys
- Flat / Tenting / Weird Madness

Here's a collection of popular keyboards I looked into while doing my research, complete with their respective distribution among the categories.

HERE I HAVE TO FACT CHECK THESE NUMBERS, LIKE SOME ARE PER HAND, OTHERS PER WHOLE KEYBOARD!

| Keyboard                                                          | Split / Non Split | Layout Type      | Number of Keys | Form Factor          | Open Source Hardware      |
| ----------------------------------------------------------------- | ----------------- | ---------------- | -------------- | -------------------- | ------------------------- |
| [Standard 104-Key](https://en.wikipedia.org/wiki/Keyboard_layout) | Non-Split         | Row Staggered    | 104            | Flat                 |                           |
| [Kinesis Advantage2](https://kinesis-ergo.com/shop/advantage2/)   | Split\*           | Column Staggered | ~76            | Sculpted / Tented    | ❌                        |
| [Glove80](https://moergo.com/)                                    | Split             | Column Staggered | 80             | Tenting / Wireless   | ❌                        |
| [ErgoDox EZ](https://ergodox-ez.com/)                             | Split             | Column Staggered | 76             | Tenting / Adjustable | ❌ (Based on open design) |
| [Moonlander](https://www.zsa.io/moonlander/)                      | Split             | Column Staggered | 78             | Tenting / Adjustable | ❌                        |
| [Lily58](https://github.com/kata0510/Lily58)                      | Split             | Column Staggered | ~58            | Flat / Tenting (kit) | ✅                        |
| [Corne (CRKBD)](https://github.com/foostan/crkbd)                 | Split             | Column Staggered | 42             | Flat / Tenting (kit) | ✅                        |
| [Dactyl Manuform](https://github.com/adereth/dactyl-keyboard)     | Split             | Column Staggered | 50–70 (varies) | Sculpted / "Madness" | ✅                        |

In the end, I went with the [Lily58](https://github.com/kata0510/Lily58). I felt like it was a fairly conservative choice at the time and that proved to be right. It was split and column staggered, the main things I wanted to try, while maintaining a _sane_ number of keys, which allowed me to keep the number row. Further, since the design was open hardware, that gave me the chance to source my own parts and assemble it all by myself, which would make it a significantly cheaper than the pre-built options (I was not about to drop 300€ on a keyboard I didn't even know I'd like).

## Ordering parts

When choosing the parts for your keyboard, the main components you need to worry about are:

### PCB's

This ultimately comes down to choosing (or designing) the keyboard, as discussed on the last section. Some things to look for are switch compatibility and hot-swap compatibility. Optionally, you might also want a board with support for LEDs, OLED display or encoders.

### Microcontrollers

The microcontroller is what, well, controls the whole keyboard. It detects the keypresses and sends the information to the computer via USB. The most common form factor for these is the [`pro-micro`](https://www.sparkfun.com/pro-micro-5v-16mhz.html) and there are a ton of compatible clones out there! Some come with more powerful chips, like the [`rp2040`](https://www.raspberrypi.com/products/rp2040/) instead of the classic [`ATmega32U4`](https://www.microchip.com/en-us/product/ATmega32U4), so thats something to look out for if you want a fancy animated display. If you want Bluetooth keyboard, you'll want something like a [`nice!nano`](https://nicekeyboards.com/nice-nano/).

As for firmware, you got [`QMK`](https://qmk.fm/) for wired and [`ZMK`](https://zmk.dev/) for wireless setups. They are extensively customizable, with all the cool features like layers, tap-mod keys, key-combos, etc. And if that's not enough you could always write your own firmware!

### Swithes and keycaps

Alright, keyboard switches really are an entire world. They really come down to personal preference. I'd just double check that the switch type you choose is supported by the PCB. There are two main designs that came up during my research: MX style and Choc style. I ended up with Kailh Choc Pro-Reds and really like them.

### Other optional components

1. Diodes
1. Hot-swap sockets
1. TRS cable and sockets
1. Batteries (if wireless)
1. LED's (if RGB)
1. OLED displays
1. Reset buttons
1. Encoders

### Breaking down costs

Ok, now for the most important part, how much did this all cost? Let me break it down for you:

**Disclaimer**: the following links are in no way affiliate. I don't get anything from sharing this, this is legit just what I bought. Also, some of the deals might not be in place anymore, so the pricing may vary (especially for AliExpress, I feel like the prices change every refresh).

| Source         | Item                                                                                                                  | Qty    | Price (€)  |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | ------ | ---------- |
| **SplitKB**    | [Aurora Lily58 PCB Kit (incl. PCBs, diodes, etc.)](https://splitkb.com/products/aurora-lily58?variant=43553010123011) | 1      | 31,36      |
| **SplitKB**    | [Blank MBK Choc Keycaps (1.5u, black, 5 pcs)](https://splitkb.com/products/blank-mbk-choc-low-profile-keycaps)        | 1 set  | 3,68       |
|                | **SplitKB Subtotal**                                                                                                  |        | **35,04**  |
|                | Shipping                                                                                                              |        | 11,04      |
|                | VAT (PT)                                                                                                              |        | 10,60      |
|                | **SplitKB Total**                                                                                                     |        | **56,68**  |
| **AliExpress** | [PBT Low Profile Keycaps (white, 50 pcs)](https://pt.aliexpress.com/item/1005006734545486.html)                       | 1 set  | 28,51      |
| **AliExpress** | [Choc V1 Red Pro Switches (70 pcs)](https://pt.aliexpress.com/item/1005005446722280.html)                             | 1 pack | 20,49      |
| **AliExpress** | [Type-C Pro Micro Clone (5V 16MHz)](https://pt.aliexpress.com/item/1576902211.html?)                                  | 2      | 9,62       |
| **AliExpress** | [Low Profile Keycaps (black, 6 pcs each)](https://pt.aliexpress.com/item/1005005902080016.html)                       | 2 sets | 6,82       |
| **AliExpress** | [Coiled TRRS Audio Cable (1m, 4-pole)](https://pt.aliexpress.com/item/1005006177816125.html)                          | 1      | 2,87       |
|                | **AliExpress Total**                                                                                                  |        | **68,31**  |
| **Total**      |                                                                                                                       |        | **124,99** |

Ok, so as you can see it was not cheap, unfortunately :(

I really played it safe by ordering the kit from SplitKB. Since it was my first build I really just wanted it to work, so paid a little more for the convenience of having the PCB's and all the other small components (diodes, hot-swap sockets, resistors, jacks) in a nice package from a reputable source.

Also, holy shit are switches and keycaps ever expensive! Especially for the Choc style switches, the pricing really caught me off guard, even buying from AliExpress. The good thing is that I was smart enough to get hot-swaps instead of soldering the switches to the board, that way if I want to do another build in the future I can just use these existing switches and keycaps.

If I were to do it again, I'd definitely be a little less scared of sourcing all of the components individually. Perhaps even looking into getting the PCB's from a PCB manufacturing service, since its an open design. Further, if budget was my key concern, I'd 3d print the keycaps. Doing this (and going with the more traditional MX style switches), the pricing could easily be cut in half.

All in all, I'd say I didn't do that bad. I was conservative, yes, but also got a working keyboard with really solid parts (the low profile switches and PBT keycaps are really nice!) and still beat the price of a pre-assembled keyboard by some margin. When it comes down to it, I guess these things are just niche and expensive.

## Assembly

The assembly was a fairly straight forward process, no doubt thanks to the quality of the Lily58's PCB design. Having access to [HackerSchool](https://hackerschool.tecnico.ulisboa.pt/)'s awesome soldering setup also helped, many thanks for letting me borrow it!

### Soldering

The first step was soldering all the components onto the PCB. This includes the [SMD](https://en.wikipedia.org/wiki/Surface-mount_technology) diodes, the hot-swap sockets, the reset button and the TRS connector. I'll talk about soldering the micro-controller on the next section, as it was a bit more... peculiar.

Since this was my first time soldering [SMD](https://en.wikipedia.org/wiki/Surface-mount_technology) components, I was a bit nervous going into it. As it turns out, it's not complicated once you get the technique down, and after a couple of [YouTube Tutorials](https://www.youtube.com/watch?v=EW9Y8rDm4kE&t=280s) I was blazing.

{{<figure src="images/soldering.jpeg" title="Lily58 - Midway through the soldering process">}}

The hardest part was for sure the sheer amount of components that needed soldering, particularly diodes and hot-swap sockets (1 per key), 116 in total! For me this part of the process was about 2~3 hours of manual labour, but I believe it could be done much faster by someone more experienced. I believe I could do it much faster now.

#### Low-profile socket shenanigans

The last component that needed soldering was the micro-controllers.

I wanted to avoid soldering them directly to the PCB in case I wanted to upgrade to a wireless setup in the future (I never did). I also wanted to use low-profile sockets for the cool looks. This last part turned out to be a problem, since I did not take into account that the included pin headers were the standard square ones and did not fit the low profile sockets I had available.

Some hacking was in order.

As it turns out, I found that resistor legs made for the perfect fit on my low-profile sockets. I figured that I could take those legs and repurpose them as my headers (see picture below) (sorry for bad quality) (not sorry for what I did to those resistors).

{{<figure src="images/hero-donors.jpg" title="Lily58 - Hero resistors, their sacrifice shall not be forgotten">}}


The process goes like this:

1. Tape the sockets with electrical tape to avoid soldering the controller to the socket.
2. Insert the resistor through the hole in the micro-controller until it is firmly lodged on the socket bellow.
3. Solder resistor leg to micro-controller and cut the excess.
4. Repeat until all pins are soldered.

The image below shows the donor legs already inserted and ready to be soldered.

{{<figure src="images/scuffed-soldering.jpg" title="Lily58 - Scuffed soldering of the micro-controller with the forbidden Donor Resistor Leg Technique">}}


And that's it, all the soldering was done! All that was left was inserting all the keys and keycaps and the assembly was complete.

### Uploading the Firmware

Finally, the last missing step to get a functional keyboard was to upload the [`QMK`](https://qmk.fm/) firmware.

[`QMK`](https://qmk.fm/) offers an amazing [online configurator](https://config.qmk.fm) that supports a lot of popular keyboards. After configuring, you download the JSON and compile and upload the firmware with the command:

```bash
 qmk flash -bl avrdude config.json
```

Assuming [`QMK`](https://qmk.fm/) is installed. After the compilation step there is a prompt to put the device in bootmode (double tap the reset button on the Lily58) and the firmware is uploaded. 

The keyboard was now ready for use!

### Finishing Touches

Well, not quite ready yet. As it was, it remained an exposed, wobbly board with keys. A *key-board*, indeed.

#### Tape mod

First, I used some painters tape on the backside of the PCB, my goal being to protect the components while simultaneously improving the clicking sound. I'll let you, dear reader, be the judge of that:

{{< video src="videos/tape-mod-blog.mp4" desc="Clicking sound comparison: regular (left) vs tape mod (right)" width="720" >}}

#### 3D Printed Case

Since pre-made cases available to purchase were too expensive I went with 3D printing! Plus, it was a good excuse to put my good ol' Anet-A8 to use. 

I looked through printables and found [this case model](https://www.printables.com/model/909621-aurora-lily58-choc-low-profile-case-version-2) I really liked made by [Gabbajoe](https://www.printables.com/@Gabbajoe), and modified the back cover a tiny bit by adding supporting holes where I could mount tenting screws. Here's the [STL file](models/lily58-case-tilting.stl).


{{<figure src="images/back-cover.png" title="Lily58 - Modified back case with tenting holes.">}}


I chose to print in clear PETG because I wanted something more durable and more flexible than PLA, allowing me to bend it a little bit on the account of potential sizing issues. Luckily, it was also the only filament I had laying around.

After printing all the parts, I assembled the switches onto the front plate and pressure fitted the back cover.


{{<figure src="images/case-assembly.jpg" title="Lily58 - Mounting switches onto front cover.">}}


I truly had low expectations but case really came out amazing! It provides a lot of protection to the PCB and the front cover in particular securely keeps the switches in place, fixing the wobbling. Plus, the tenting makes such a huge difference when typing, definitely more ergonomic experience for my hands. 



{{<figure src="images/final.jpg" title="Lily58 - Final keyboard, with 3D printed tenting case.">}}


I'm so glad it only took me 5 months to finally stop being lazy and print the thing.



## Thoughts after 10+ months of use





## Conclusion

## Epilogue

<!-- https://splitkb.com/products/aurora-lily58?variant=43553010123011 -->
<!-- Aurora Lily58 PCB Kit × 1  - this includes: -->
<!-- €31,36 -->
<!---->
<!--     1 × Left PCB; -->%);
<!--     1 × Right PCB; -->
<!--     65 × 1N4148 axial signal diode; -->
<!--     5 × 4k7 Ohm axial resistor; -->
<!--     2 × PJ-3200B-4A TRRS Jack, black, and; -->
<!--     2 × Reset button. -->
<!---->
<!-- Choc Hotswap -->
<!-- 	Blank MBK Choc Low Profile Keycaps × 1 -->
<!-- 5 × 1.5u / Black -->
<!-- €3,68 -->
<!---->
<!-- Subtotal -->
<!-- 	€35,04 -->
<!---->
<!-- Shipping -->
<!-- 	€11,04 -->
<!---->
<!-- PT VAT -->
<!-- 	€10,60 -->
<!---->
<!-- Total -->
<!-- 	€56,68 EUR -->
<!---->
<!---->
<!-- ok, now from aliexpress: -->
<!---->
<!-- Choc Red Pro S, X70 PCS -->
<!-- 20,49€ -->
<!-- x1 -->
<!---->
<!-- Low Profile Keycaps para Teclado Gaming Mecânica, Keycaps DIY, 1350 Interruptor Chocolate, Branco e Preto Cor, 6PCs -->
<!-- black, China -->
<!-- 3,41€ -->
<!-- x2 -->
<!---->
<!-- Rallonge-Primavera enrolado espiral cabo, macho para fêmea, fone de ouvido, Áudio estéreo, Aux Jack, 3.5mm, 4 Pole, 3 Pole -->
<!-- (4 Pole) M-M, 1m -->
<!-- 2,87€ -->
<!-- x1 -->
<!---->
<!-- Micro USB Pro para Arduino, Módulo com 2 pinos de linha para Leonardo, em estoque, melhor qualidade, ATmega32U4, MINI, TYPE-C, 5V, 16MHz -->
<!-- TYPE-C USB 5V16MHz -->
<!-- 4,81€ -->
<!-- x2 -->
<!---->
<!-- PBT Keycaps para teclado mecânico, Low Profile Choc Keycaps, Ultra fino, preto, branco, transparente, Kailh 1350, 50pcs -->
<!-- White -->
<!-- 28,51€ -->
<!-- x1 -->
<!---->
