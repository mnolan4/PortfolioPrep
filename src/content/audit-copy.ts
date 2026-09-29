import type { TextKey } from "../audit/types";

export interface AuditField {
  key: TextKey;
  label: string;
  hint: string;
  rows?: number;
}

export const purposeFields: AuditField[] = [
  {
    key: "audience",
    label: "Target audience",
    hint: "Who do you want to see this portfolio?",
    rows: 3,
  },
  {
    key: "goal",
    label: "Portfolio goal",
    hint: "What do you want them to understand about you?",
    rows: 3,
  },
  {
    key: "identity",
    label: "Professional identity",
    hint: "A lens, not a box. Name the mix in your own words.",
    rows: 2,
  },
  {
    key: "workWanted",
    label: "Work you want more chances to make",
    hint: "What kind of work do you want more opportunities to make?",
    rows: 3,
  },
];

export const curationFields: AuditField[] = [
  {
    key: "remove",
    label: "Project to remove",
    hint: "Name the project you will cut or move to an archive.",
    rows: 2,
  },
  {
    key: "needsDocs",
    label: "Project needing better documentation",
    hint: "Which project is weakest in the record, not in the idea?",
    rows: 2,
  },
];

export const revisionFields: AuditField[] = [
  {
    key: "homepageRevision",
    label: "Homepage revision",
    hint: "What should change on the first screen?",
    rows: 3,
  },
  {
    key: "projectPageRevision",
    label: "Project page revision",
    hint: "Which project page, and which part of it?",
    rows: 3,
  },
  {
    key: "documentationImprovement",
    label: "Documentation improvement",
    hint: "The caption, clip, diagram, or credit you will add.",
    rows: 3,
  },
  {
    key: "authorshipRevision",
    label: "Collaboration / authorship revision",
    hint: "The vague line, rewritten. The same draft as on Collaboration and authorship.",
    rows: 4,
  },
  {
    key: "mediaToCapture",
    label: "Media to capture",
    hint: "What still needs to be photographed, recorded, or diagrammed?",
    rows: 3,
  },
  {
    key: "accessibilityFix",
    label: "Accessibility fix",
    hint: "Alt text, captions, contrast, a transcript, or keyboard access. Name one.",
    rows: 2,
  },
  {
    key: "nextAction",
    label: "Next action",
    hint: "The change you can finish in one sitting.",
    rows: 3,
  },
];
