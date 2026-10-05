import type { StageId } from "./nav";

export interface SelfAuditStage {
  id: StageId;
  title: string;
  verb: string;
  task: string;
  prompts: string[];
}

export const timedBands: { id: string; time: string; question: string; checks: string[] }[] = [
  {
    id: "ten",
    time: "10 seconds",
    question: "What should a visitor understand about you and the work you make?",
    checks: [
      "The name you use and your creative direction are visible quickly.",
      "A visitor can tell what kind of work you make.",
      "The first screen leads with work, not a long introduction or a row of software logos.",
    ],
  },
  {
    id: "thirty",
    time: "30 seconds",
    question: "What are your strongest projects? What did you contribute?",
    checks: [
      "Your strongest projects are easy to find.",
      "Your role is visible on those projects.",
      "A visitor could say what you contributed without opening another document.",
    ],
  },
  {
    id: "three",
    time: "3 minutes",
    question: "How do you think? What can you actually do? Why should someone keep exploring?",
    checks: [
      "At least one project page shows a decision you changed.",
      "There is evidence of fundamentals, teamwork, a change you made, and a creative decision.",
      "What you personally contributed is clear.",
      "There is a clear reason to open a second project.",
    ],
  },
];

export const evidenceCategories: { id: string; label: string; description: string }[] = [
  { id: "creative", label: "Creative", description: "Concept, originality, and visual or sonic judgment." },
  { id: "technical", label: "Technical", description: "Programming, tools, fabrication, and systems." },
  { id: "design", label: "Design", description: "Interaction, iteration, user experience, and problem solving." },
  {
    id: "collaborative",
    label: "Collaborative",
    description: "Teamwork, communication, and defined responsibilities.",
  },
  {
    id: "professional",
    label: "Professional",
    description: "Documentation, presentation, delivery, constraints, and reliability.",
  },
  {
    id: "reflective",
    label: "Reflective",
    description: "Evaluating decisions, failures, learning, and next steps.",
  },
];

export const critiqueQuestions: string[] = [
  "What do you think this person does?",
  "Which project do you remember most?",
  "What skill can you verify from the evidence?",
  "What do you think their strongest contribution is?",
  "Where were you confused?",
  "What felt unnecessary?",
  "What would you like to see more of?",
  "What project would you click first?",
  "What project would you remove or shorten?",
  "Could you distinguish individual work from team work?",
];

export const revisionLines: { id: string; label: string; hint: string }[] = [
  {
    id: "homepage",
    label: "One homepage revision",
    hint: "What changes on the first screen, and why?",
  },
  {
    id: "project-page",
    label: "One project-page revision",
    hint: "Name the project and the section you will rewrite.",
  },
  {
    id: "documentation",
    label: "One documentation improvement",
    hint: "A caption, a clip, a diagram, or a credit. Name what you will make.",
  },
  {
    id: "remove",
    label: "One project to remove or demote",
    hint: "Name it, and say whether it moves to an archive or leaves the site.",
  },
  {
    id: "missing",
    label: "One missing piece of evidence to create",
    hint: "Which project, and what will you record, photograph, or diagram?",
  },
  {
    id: "authorship",
    label: "One authorship statement to clarify",
    hint: "Replace a vague line with what you designed or built.",
  },
];

export const publishItems: string[] = [
  "Name, role, and creative direction are clear.",
  "Strongest work appears first.",
  "Projects have clear descriptions.",
  "Individual roles are identified.",
  "Collaborators are credited.",
  "Videos play.",
  "Audio works.",
  "Mobile layout works.",
  "Links are tested.",
  "Contact information is visible.",
  "Résumé is current.",
  "Captions give context.",
  "No placeholder content.",
  "Course assignments are explained for outside audiences.",
  "No unexplained software screenshots.",
  "Accessibility basics are covered.",
  "Projects are labeled accurately as prototypes, works in progress, or finished.",
];

export const selfAuditStages: SelfAuditStage[] = [
  {
    id: "define",
    title: "Define",
    verb: "Write",
    task: "Open the portfolio beside a notebook. Write these where you keep notes. This site does not store them.",
    prompts: [
      "Who is this portfolio for? Name a person, not a category.",
      "What should that person understand about you?",
      "What kind of work do you want more chances to make?",
      "Write the sentence you want a stranger to repeat after they close the tab.",
      "Which project shows fundamentals, which shows teamwork, which shows a change you made, and which shows a creative decision?",
    ],
  },
  {
    id: "curate",
    title: "Curate",
    verb: "Notice",
    task: "Look at the live site, not the folder of everything you have made.",
    prompts: [
      "Which three projects should a stranger meet first, and why do they belong together?",
      "Which project should move to a labeled archive, or leave?",
      "Which failure in Curate is closest to the site you have now?",
    ],
  },
  {
    id: "document",
    title: "Document",
    verb: "Notice",
    task: "Pick one project that is still installed, still running, or about to come down.",
    prompts: [
      "What did a person see, hear, or do?",
      "If the build were struck tonight, what record would you still have?",
      "Write one change as problem, decision, prototype, observation, and revision. If you cannot write the observation, the photo is a souvenir.",
    ],
  },
  {
    id: "explain",
    title: "Explain",
    verb: "Write",
    task: "Rewrite from the project page, in sentences someone could check.",
    prompts: [
      "What does a person experience, without the course number or the tool list?",
      "What did you personally design or build?",
      "What did a collaborator make, and what template, pack, tutorial, or generated material did you start from?",
    ],
  },
  {
    id: "test",
    title: "Test",
    verb: "Test",
    task: "Keep the portfolio open. Time yourself, then hand the critique questions to someone else. Do not ask whether they like it.",
    prompts: [
      "After 10 seconds, 30 seconds, and 3 minutes, what could a stranger actually say about you?",
      "Where is the evidence strong, and where is it thin or missing?",
      "What did another person remember, confuse, or want removed?",
    ],
  },
  {
    id: "revise",
    title: "Revise",
    verb: "Revise",
    task: "Leave with a few changes small enough to finish. A caption, a credit, a cut, or a clip counts. A new website does not.",
    prompts: [
      "What changes on the first screen?",
      "Which project page will you rewrite, and which record is still missing?",
      "What can you do today?",
    ],
  },
];

export const selfAuditPage = {
  lede: "A set of questions to answer in your own notes.",
  note: "Copy them or print them. Write in a notebook, a document, or wherever you already keep project notes.",
};

export function selfAuditPlain(): string {
  const stages = selfAuditStages
    .map((stage) => `${stage.title}\n${stage.task}\n\n${numbered(stage.prompts)}`)
    .join("\n\n");
  const timed = timedBands
    .map((band) => `${band.time}\n${band.question}\n${band.checks.map((item) => `- ${item}`).join("\n")}`)
    .join("\n\n");
  const evidence = evidenceCategories
    .map((item) => `- ${item.label}: ${item.description}`)
    .join("\n");
  const critique = numbered(critiqueQuestions);
  const revisions = revisionLines.map((item) => `- ${item.label} — ${item.hint}`).join("\n");
  const publish = publishItems.map((item) => `- ${item}`).join("\n");
  return [
    "Portfolio Prep — Self-Audit",
    "Write these in your own notes. The site does not store them.",
    stages,
    `Timed test\n\n${timed}`,
    `Evidence to notice\n\n${evidence}`,
    `Questions for another person\n\n${critique}`,
    `Revisions\n\n${revisions}`,
    `Before you send the link\n\n${publish}`,
  ].join("\n\n");
}

function numbered(items: string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}
