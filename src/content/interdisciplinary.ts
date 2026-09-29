export const interdisciplinary = {
  lede: "A hybrid practice is normal here. A list of every field you have touched is not a description of it.",
  outcomes: [
    "Say what you make in one sentence a stranger can repeat.",
    "Separate the field a project sits in from the part you made.",
    "Show the combination: the room and the sound, the person and the system.",
  ],
  identity: {
    title: "A slash pile is not a description",
    paragraphs: [
      "You can work across sound, code, installation, performance, research, and visual systems. That mix is ordinary in immersive media. It is not, by itself, an answer to what you do.",
      "“Artist / designer / developer / researcher” names the menu. It does not name the work. Pick the through-line a person would still recognize after they forget the tools.",
    ],
  },
  sentence: {
    title: "One sentence someone can repeat",
    paragraphs: [
      "Write the sentence you want a stranger to repeat after they close the tab. It should say what a person encounters, and what you make that encounter out of.",
      "If the sentence needs a course number, a software list, or the word interdisciplinary, it is not ready.",
    ],
  },
  language: {
    title: "Language for work that crosses fields",
    intro:
      "Name the encounter first. Then name your part. The examples below are not a script. They are a test: could someone outside the program say this back?",
  },
  pairs: [
    {
      caption: "Sound",
      weak: "I do sound design, creative coding, and performance.",
      better:
        "I make performances where the sound in the room changes as people move, and I write the patches that do that.",
    },
    {
      caption: "An installation",
      weak: "I work in installation, sensors, and visual systems.",
      better:
        "I make installations a person walks through. Their path changes the projection. I built the sensing and the image system.",
    },
    {
      caption: "Research with a collaborator",
      weak: "HCI, wearables, VR, and research.",
      better:
        "I prototype wearables that let one person feel another person’s movement. I designed the device and ran the study. A partner wrote the analysis code.",
    },
  ],
  field: {
    title: "The field, and the part you made",
    paragraphs: [
      "The field is where the project sits. Your role is what you made inside it. Those are different sentences.",
      "“This is an immersive media project” tells a reader the shelf. It does not tell them your job.",
    ],
    pair: {
      caption: "Field and role",
      weak: "This project is an interdisciplinary XR research installation.",
      better:
        "The project is an XR study about how people share a space. I built the interaction and recorded the sessions. A teammate designed the environment.",
    },
  },
  roles: {
    title: "When you did more than one job",
    paragraphs: [
      "You can do more than one kind of work on a project. Say each job in plain words. Do not erase a collaborator by saying you did everything.",
      "“We” is right for a decision you made together. It is not a role.",
    ],
    pair: {
      caption: "Two jobs, and a collaborator",
      weak: "I did the sound, the code, the visuals, and the concept.",
      better:
        "I recorded the voices, mixed the piece, and ran sound for the shows. My collaborator designed the projection. We set the cue structure together.",
    },
  },
  document: {
    title: "One screenshot cannot hold it",
    paragraphs: [
      "A still of the patch, the engine, or the empty room shows one layer. Hybrid work has at least two. Put them where a reader can see they belong to the same project.",
      "Pair the media. The combination is the evidence.",
    ],
  },
  pairsToShow: [
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
    mistake: "One screenshot of the software, or one beauty shot of an empty room, asked to stand for the whole project.",
    evidence:
      "A person moves, the image or sound answers, and a second clip or diagram shows the system behind that answer. The caption says which part is yours.",
  },
  roleReminder: {
    title: "Make your role clear",
    to: "/collaboration",
    text: "Name your part, and name what a collaborator made.",
  },
  evidenceReminder: {
    title: "Show evidence of the experience",
    to: "/document",
    text: "The record has to show the encounter, not only the tool that made it.",
  },
  ask: [
    "If someone repeats my first sentence, do they know what I make?",
    "Did I name the field and my role as two different facts?",
    "Which half of the project disappears if they only see one image?",
  ],
};
