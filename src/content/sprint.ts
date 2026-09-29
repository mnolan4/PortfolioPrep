import type { TextKey } from "../audit/types";

export const sprintFields: { key: TextKey; label: string; hint: string }[] = [
  {
    key: "homepageRevision",
    label: "One homepage revision",
    hint: "What changes on the first screen, and why?",
  },
  {
    key: "projectPageRevision",
    label: "One project-page revision",
    hint: "Name the project and the section you will rewrite.",
  },
  {
    key: "documentationImprovement",
    label: "One documentation improvement",
    hint: "A caption, a clip, a diagram, or a credit. Name what you will make.",
  },
  {
    key: "remove",
    label: "One project to remove or demote",
    hint: "Name it, and say whether it moves to an archive or leaves the site.",
  },
  {
    key: "missingEvidence",
    label: "One missing piece of evidence to create",
    hint: "Which project, and what will you record, photograph, or diagram?",
  },
  {
    key: "authorshipRevision",
    label: "One authorship statement to clarify",
    hint: "Replace a vague line with what you designed or built.",
  },
];

export const sprintPage = {
  lede: "Pick one change in each line. Small enough to finish. These answers are the same ones stored in your Portfolio Audit.",
  outcomes: [
    "Leave with six specific revisions, not a plan to redesign everything.",
    "Name one change you can finish today.",
  ],
  todayLabel: "What can you improve today?",
  todayHint: "A caption, a credit, a cut, or a clip. Not a new website.",
};
