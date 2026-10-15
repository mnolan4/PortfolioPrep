export type StageId = "define" | "curate" | "document" | "explain" | "test" | "revise";

export interface GuidePage {
  path: string;
  label: string;
  title: string;
  purpose?: string;
  stage?: StageId;
}

export const stages: { id: StageId; label: string; blurb: string }[] = [
  { id: "define", label: "Define", blurb: "Who it is for" },
  { id: "curate", label: "Curate", blurb: "What stays" },
  { id: "document", label: "Document", blurb: "The experience" },
  { id: "explain", label: "Explain", blurb: "Your role" },
  { id: "test", label: "Test", blurb: "A real reader" },
  { id: "revise", label: "Revise", blurb: "Change it" },
];

export const guidePages: GuidePage[] = [
  { path: "/", label: "Home", title: "Home" },
  {
    path: "/define",
    label: "Define",
    title: "Define",
    purpose: "Who is a portfolio for and what should they know?",
    stage: "define",
  },
  {
    path: "/places",
    label: "Places",
    title: "Places You Might Send Your Portfolio",
    purpose: "Where might your portfolio go?",
    stage: "define",
  },
  {
    path: "/curate",
    label: "Curate",
    title: "Curate",
    purpose: "Choose the work that shows you best.",
    stage: "curate",
  },
  {
    path: "/examples",
    label: "Examples",
    title: "Examples",
    purpose: "Learn from how artists present their work.",
    stage: "curate",
  },
  {
    path: "/document",
    label: "Document",
    title: "Document",
    purpose: "Show what the experience was really like.",
    stage: "document",
  },
  {
    path: "/explain",
    label: "Explain",
    title: "Explain",
    purpose: "Make your role and decisions clear.",
    stage: "explain",
  },
  {
    path: "/test",
    label: "Test",
    title: "Test",
    purpose: "See what a reader can actually tell.",
    stage: "test",
  },
  {
    path: "/revise",
    label: "Revise",
    title: "Revise",
    purpose: "Make the next version stronger.",
    stage: "revise",
  },
];

/** Old guide URLs. GitHub Pages needs a copy of the app at each path so the redirect can run. */
export const legacyPaths = [
  "/foundations",
  "/problems",
  "/process",
  "/media",
  "/project-pages",
  "/collaboration",
  "/interdisciplinary",
  "/timed-test",
  "/evidence",
  "/critique",
  "/sprint",
  "/publish",
  "/technical",
  "/tools",
];

export function stageLabel(id: StageId): string {
  return stages.find((stage) => stage.id === id)?.label ?? id;
}

export function firstPath(id: StageId): string {
  return guidePages.find((page) => page.stage === id)?.path ?? "/define";
}

