<h1 class="my-8 text-3xl font-bold">HackOHI/O Badges</h1>

<img src="/assets/img/projects/hack_project1.png" width="600" height="300" class="mx-auto my-6 rounded-sm">

<h2 class="mb-2 text-xl">Who?</h2>

<p class="mb-4">Matt Nichols completed the design and came up with the vision for these badges. Additionally, the Electronics
  Club officers were instrumental in adding additional features and giving
  feedback on the design and look. Special thanks to: Eddy Lui, Max Fojtik, Siddharth Venkatesan, Jason Jiang,
  Jonah Mikesell, and Zach Kittleson.
</p>

<h2 class="mb-2 text-xl">What/Why?</h2>

<p class="mb-4">Ohio State University’s OHI/O club coordinates numerous marathon hacking and making events over the semester.
  Autumn 2022 was the 10th anniversary of their hackathon event, HackOHI/O. In commemoration of this milestone,
  the Electronics Club elected to fund and design PCB badges for the event staff to wear during the event. These
  were inspired by the DEFCON badges.</p>

<h2 class="mb-2 text-xl">How?</h2>

<p>The design of these badges was intended to be very simplistic. Many ideas were discussed, but due to time
  constraints a simple LED circuit with an on off switch was decided upon. Most of the “cool factor” for these
  badges comes from the PCB itself so less emphasis was placed on the circuitry. KiCad 5 was used for the
  design.
  The HackOHI/O and Electronics Club logos and an image of the state of Ohio
  were imported so they could be traced out with copper fills. To create the artwork a combination of the black
  soldermask, white silkscreen, bare copper, and bare FR4 material were used. Areas that are visibly silver on
  the badge are bare copper that have had hot air solder leveling (HASL) applied with a lead-free solder. </p>

<br>

<p class="mb-8">Electrically, the badges consist of an LED, CR2032 battery, SPST slide switch, and a 100 Ω resistor. The LED
  is reverse mounted so that it shines through the FR4 material and illuminates the X on the front of the badge.
  The soldermask and copper were removed from both the X and where the LED mounts to enable this. A fun bonus
  feature is that the word “hack” is connected to the negative terminal of the battery and the word
  “OHI/O” is positive (connected to the 100 Ω resistor). This allows the wearer to use the badge as a LED
  tester. No current limiting resistor is required since it is already built into the back of the badge. The
  battery life is calculated to power the LED for a minimum of 12 hours. Preliminary testing is showing the
  practical life to be higher than that which is excellent. A minimum requirement is that it last for one full
  event day which is roughly 12 hours.
</p>



