export const explainChapter = {
  title: "Explain",
  lede: "A project page is a short case study: the same parts, in an order a stranger can learn. Repeat the structure. Change the evidence.",
  outcomes: [
    "Draft a project page a reader can follow without the syllabus.",
    "Separate your role from collaborators and from material you did not make.",
    "Say what you make in one sentence a stranger can repeat.",
  ],
  structure: [
    { term: "Title", text: "The name you want remembered. The course number can sit in the context line." },
    {
      term: "One-sentence description",
      text: "What a person experiences. Not the tool list, and not the assignment prompt.",
    },
    {
      term: "Hero media",
      text: "One image or a short video of the experience. It should make sense before the paragraph.",
    },
    { term: "My role", text: "What you designed or built. On a team, this is a sentence, not a percentage." },
    {
      term: "Project context",
      text: "Course, client, research, or independent. Team size and timeframe. One or two lines.",
    },
    {
      term: "Tools and technologies",
      text: "Name what you used for the part you built, and tie each name to a job.",
    },
    {
      term: "Design challenge",
      text: "The problem the project was trying to solve, in language a stranger can follow.",
    },
    {
      term: "Process",
      text: "Keep a step only when a decision changed.",
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
  authorship: {
    title: "Authorship is a set of plain sentences",
    lede: "Readers can enjoy a team project and still have no idea what you did.",
    nameThese: [
      "Team size, and the role you actually held.",
      "What collaborators designed or built.",
      "What you personally designed or built.",
      "External assets, libraries, templates, tutorials, starter code, or generated material.",
    ],
    notes: [
      "“We” is fine for a decision the team made. It is not a substitute for your part.",
      "If you used generated code, images, text, or sound, say so, and say what you changed. A reader should be able to tell what you authored.",
      "Credit the pack, the sample, the scan, the tutorial, and the classmate who built the rig. If you cannot say what you added, the project is not ready for the front of the portfolio.",
    ],
    pairs: [
      {
        caption: "A game",
        weak: "I helped make the game.",
        better:
          "I designed the enemy state system and implemented enemy movement, attack behavior, and health logic in Unity C#.",
      },
      {
        caption: "A team XR project",
        weak: "We built the VR scene.",
        better:
          "I implemented the hand-tracking for grab and placement. My teammate built the environment art and lighting in Unity.",
      },
    ],
  },
  interdisciplinary: {
    title: "A slash pile is not a description",
    paragraphs: [
      "You can work across sound, code, installation, performance, research, and visual systems. That mix is ordinary in immersive media. It is not, by itself, an answer to what you do.",
      "“Artist / designer / developer / researcher” names the menu. It does not name the work. Pick the through-line a person would still recognize after they forget the tools.",
      "Write the sentence you want a stranger to repeat. If it needs a course number, a software list, or the word interdisciplinary, it is not ready.",
    ],
    pairs: [
      {
        caption: "What you make",
        weak: "I do sound design, creative coding, and performance.",
        better:
          "I make performances where the sound in the room changes as people move, and I write the patches that do that.",
      },
      {
        caption: "Field and role",
        weak: "This project is an interdisciplinary XR research installation.",
        better:
          "The project is an XR study about how people share a space. I built the interaction and recorded the sessions. A teammate designed the environment.",
      },
      {
        caption: "Two jobs, and a collaborator",
        weak: "I did the sound, the code, the visuals, and the concept.",
        better:
          "I recorded the voices, mixed the piece, and ran sound for the shows. My collaborator designed the projection. We set the cue structure together.",
      },
    ],
    show: [
      "The room, and the sound a person hears there.",
      "The interaction, and the system that answers.",
      "What someone sees or hears, and a second view of them doing it.",
      "The performance, and the cue or patch that shows your part.",
    ],
    guide: {
      id: "hybrid",
      title: "A hybrid project",
      show: "The combination. The room and the sound, or the person and the system, on the same project page.",
      capture:
        "A wide shot of the space, a clip of the interaction, and the sound or the system a still cannot carry. Record them while the work is still up.",
      explain: "What a person encountered, which parts belong together, and which part you made.",
      mistake:
        "One screenshot of the software, or one beauty shot of an empty room, asked to stand for the whole project.",
      evidence:
        "A person moves, the image or sound answers, and a second clip or diagram shows the system behind that answer. The caption says which part is yours.",
    },
  },
};
