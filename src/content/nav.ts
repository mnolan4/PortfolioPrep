export type StageId = "define" | "curate" | "document" | "explain" | "test" | "revise";

export interface GuidePage {
  path: string;
  label: string;
  title: string;
  stage: StageId;
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
  {
    path: "/",
    label: "Start here",
    title: "What is your portfolio for?",
    stage: "define",
  },
  {
    path: "/foundations",
    label: "Portfolio foundations",
    title: "Portfolio foundations",
    stage: "define",
  },
  {
    path: "/problems",
    label: "Common portfolio problems",
    title: "Common portfolio problems",
    stage: "curate",
  },
  {
    path: "/document",
    label: "Document immersive work",
    title: "Document immersive work",
    stage: "document",
  },
  {
    path: "/process",
    label: "Show your process",
    title: "Show your process",
    stage: "document",
  },
  {
    path: "/media",
    label: "Visual and media documentation",
    title: "Visual and media documentation",
    stage: "document",
  },
  {
    path: "/project-pages",
    label: "Build your project pages",
    title: "Build your project pages",
    stage: "explain",
  },
  {
    path: "/collaboration",
    label: "Collaboration and authorship",
    title: "Collaboration and authorship",
    stage: "explain",
  },
  {
    path: "/timed-test",
    label: "The 10-second / 30-second / 3-minute test",
    title: "The 10-second / 30-second / 3-minute test",
    stage: "test",
  },
  {
    path: "/evidence",
    label: "Portfolio evidence audit",
    title: "Portfolio evidence audit",
    stage: "test",
  },
  {
    path: "/critique",
    label: "Portfolio critique toolkit",
    title: "Portfolio critique toolkit",
    stage: "test",
  },
  {
    path: "/sprint",
    label: "Portfolio revision sprint",
    title: "Portfolio revision sprint",
    stage: "revise",
  },
  {
    path: "/publish",
    label: "Before you publish",
    title: "Before you publish",
    stage: "revise",
  },
  {
    path: "/technical",
    label: "Technical portfolio practices",
    title: "Technical portfolio practices",
    stage: "revise",
  },
];

export function stageLabel(id: StageId): string {
  return stages.find((stage) => stage.id === id)?.label ?? id;
}

export function firstPath(id: StageId): string {
  return guidePages.find((page) => page.stage === id)?.path ?? "/";
}

export function navGroups() {
  return stages.map((stage) => ({
    ...stage,
    items: guidePages.filter((page) => page.stage === stage.id),
  }));
}
