export const start = {
  lede: "A guided process for developing an immersive media portfolio.",
  who: "Immersive Media Design students, and readers who do not know the program.",
  canDo: "Choose what to show, explain your role, and leave with revisions you can finish.",
  outside:
    "That reader might be a festival, a lab, a museum, a studio, a creative technology firm, a design agency, a graduate program, an internship, or a collaborator.",
  outcomes: [
    "Name who the portfolio is for.",
    "Say what you want that person to understand.",
    "Name the kind of work you want more chances to make.",
  ],
  prompts: [
    {
      key: "audience" as const,
      id: "prompt-audience",
      label: "Who do I want to see this portfolio?",
      hint: "A person, not a pile of categories. Example: a curator reading festival applications, or a producer at a small studio.",
    },
    {
      key: "goal" as const,
      id: "prompt-goal",
      label: "What do I want them to understand about me?",
      hint: "This becomes your portfolio goal. One or two sentences.",
    },
    {
      key: "workWanted" as const,
      id: "prompt-work",
      label: "What kind of work do I want more opportunities to make?",
      hint: "Games, rooms, research prototypes, scores, performances. Be specific.",
    },
  ],
  identityHint:
    "A lens, not a box. Example: installation artist working with real-time graphics, or a game designer who also writes the interaction code.",
  lenses:
    "These names are lenses, not categories: creative technologist, game designer, technical artist, XR designer or developer, interaction designer, sound designer, creative coder, HCI researcher or designer, installation artist, motion designer, interdisciplinary media artist. Hybrid directions are normal. The portfolio makes that mix understandable to someone outside the program.",
  ask: [
    "Could someone outside this program tell who the portfolio is for?",
    "If they remember one thing, is it the thing I want remembered?",
  ],
};
