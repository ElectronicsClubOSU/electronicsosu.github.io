<script lang="ts">
	import { resolve } from '$app/paths';
</script>


<div class="h-64 text-center w-full relative">
  <img src="/assets/img/circuits.jpg" class="h-full w-full">
  <div class="absolute top-0 w-full h-full">
    <img src="/assets/img/logo/electronics_club_logo-alt.png" class="px-16 object-contain h-full m-auto">
  </div>
</div>

<div class="mx-auto px-16 pb-8 pt-4 max-w-6xl leading-7">
  <p class="text-center font-semibold text-[#646464]">
    Welcome to the Electronics Club at The Ohio State University! Our organization is committed to
    fostering interest in the field of electronics.
    The club has its own workspace equipped with oscilloscopes, signal generators, rudimentary
    tools,
    and components which are accessible to members.
    We also allot storage space to members for their personal projects. If students would like to
    work
    on their projects, ask questions or just hangout
    in our club room, attend our office hours or email <b>electronicsosu@gmail.com</b>. The club
    hosts
    workshops every other week to provide hands-on opportunities
    and experience in numerous technologies and standards. Our meetings are a great way to learn
    about
    practical electronics and are appropriate for all experience
    levels; we encourage you to stop by!
  </p>

  <div class="h-px bg-gray-300 my-8"></div>

  <div class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <h2 class="mb-2 text-xl font-semibold">Workshops</h2>
      <p> This semester, the club will have workshops for various hardware components and
        skills. Previous workshops have included: audio amplification, radio frequency applications, shift
        registers, printed circuit board design software,
        serial communications, microcontrollers, theremins, soldering, and more. Sign up for our mailing
        list to stay up to date on our workshop schedule! </p>
    </div>

    <div>
      <h2 class="mb-2 text-xl font-semibold">Office Hours</h2>
      <p> Check our <a href={resolve('/calendar')} class="text-[#6699cc] underline">calendar</a> 
        for our updated office hours.
        If students would like to work on their projects, ask questions, or just hangout, attend our
        office hours. Office hours are held in our club room.
      </p>
    </div>

    <div>
      <h2 class="mb-2 text-xl font-semibold">Membership</h2>
      <p> Electronics Club is easy to join, not to mention free. Subscribe to our mailing
        list (top right corner of the page) and attend our next meeting.
        If you would like to rent tools, take components for projects, or work on projects in the club room,
        attend our office hours.
        Members who are interested are encouraged to take on a leadership role, granting 24/7 lab room
        access. Check out the <a
          href="https://docs.google.com/document/d/1OxxTEgoFEKW6KYmKq6apu3rXFO7MPtv0v90C1z1ucUg/edit?usp=drivesdk"
          target="_blank"
          class="text-[#6699cc] underline">Student Project Funding Rules</a> if you're
        interested in starting your own project! </p>
    </div>

    <div>
      <h2 class="mb-2 text-xl font-semibold"> Location</h2>
      <p> Our club room is located in the basement of Caldwell Laboratory, room 078.
        To find the room, enter through the main entrance of Caldwell. Proceed through the hallway
        until you reach the first staircase on your right.
        Walk down the stairs and enter through the large doors that have a sign for the Electronics Club and
        CHPPE's High Voltage lab.
        Continue straight through this door, up the small set of stairs and to the right. Our room is the
        second door from the left, (right of the big red door) room 078. Workshops are every other Monday at 7 PM in
        <b> Bolz 114</b>.
      </p>
    </div>
  </div>



</div>

