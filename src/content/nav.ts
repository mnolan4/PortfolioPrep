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
  { path: "/", label: "Define", title: "Define", stage: "define" },
  { path: "/curate", label: "Curate", title: "Curate", stage: "curate" },
  { path: "/examples", label: "Examples", title: "Examples", stage: "curate" },
  { path: "/document", label: "Document", title: "Document", stage: "document" },
  { path: "/explain", label: "Explain", title: "Explain", stage: "explain" },
  { path: "/test", label: "Test", title: "Test", stage: "test" },
  { path: "/revise", label: "Revise", title: "Revise", stage: "revise" },
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
  return guidePages.find((page) => page.stage === id)?.path ?? "/";
}

