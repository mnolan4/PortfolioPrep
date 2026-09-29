export const projectPages = {
  lede: "A project page is a short case study: the same parts, in an order a stranger can learn. Repeat the structure. Change the evidence.",
  outcomes: [
    "Draft a project page a reader can follow without the syllabus.",
    "Replace a vague role or reflection with a sentence that names a decision.",
  ],
  structure: [
    {
      term: "Title",
      text: "The name you want remembered. The course number can sit in the context line.",
    },
    {
      term: "One-sentence description",
      text: "What a person experiences. Not the tool list, and not the assignment prompt.",
    },
    {
      term: "Hero media",
      text: "One image or a short video of the experience. It should make sense before the paragraph.",
    },
    {
      term: "My role",
      text: "What you designed or built. On a team, this is a sentence, not a percentage.",
    },
    {
      term: "Project context",
      text: "Course, client, research, or independent. Team size and timeframe. One or two lines.",
    },
    {
      term: "Tools and technologies",
      text: "Name what you used for the part you built: Unity, Unreal, Blender, TouchDesigner, Max/MSP, Arduino, Quest, a motion-capture system, or whatever it actually was. Tie each name to a job.",
    },
    {
      term: "Design challenge",
      text: "The problem the project was trying to solve, in language a stranger can follow.",
    },
    {
      term: "Process",
      text: "Research, prototype, testing, iteration. Keep a step only when a decision changed.",
    },
    {
      term: "Final experience",
      text: "What it is like to use, play, hear, or walk through. Point at the hero media.",
    },
    {
      term: "Reflection",
      text: "What worked, what changed, and what you would do differently. Name a real decision.",
    },
  ],
  pairs: [
    {
      caption: "Role",
      weak: "I worked on programming.",
      better:
        "I developed the Unity interaction system that connected Kinect skeletal tracking to the projected environment.",
    },
    {
      caption: "Description",
      weak: "A VR experience about memory.",
      better:
        "On a Quest headset, you open three drawers. Each drawer plays an interview I recorded, and the room light shifts to the place described.",
    },
    {
      caption: "Sound",
      weak: "I did the audio.",
      better:
        "I composed the stereo score and built the Max patch that moves a voice from the doorway to the far wall as a visitor walks the length of the room.",
    },
    {
      caption: "Reflection",
      weak: "This project taught me a lot about iteration and working with other people.",
      better:
        "The first sensor failed beside the window. I moved it to the shaded wall and replaced the gesture with a floor button after people found the zone and did not know what to do with their hands.",
    },
    {
      caption: "Research",
      weak: "We did user testing and the feedback was positive.",
      better:
        "Five people used the first prototype. Four could not tell which object was active. I added a single lit edge. In the next test, people started in the right place.",
    },
  ],
  ask: [
    "Could someone understand this project without knowing the course assignment?",
    "Would this page still make sense three years from now?",
  ],
};
