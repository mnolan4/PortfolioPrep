export type Rating = "strong" | "present" | "weak" | "missing";

export type EvidenceId =
  | "creative"
  | "technical"
  | "design"
  | "collaborative"
  | "professional"
  | "reflective";

export type NoteBand = "ten" | "thirty" | "three";

export interface AuditState {
  audience: string;
  goal: string;
  identity: string;
  workWanted: string;
  strongest: [string, string, string];
  remove: string;
  needsDocs: string;
  missingEvidence: string;
  homepageRevision: string;
  projectPageRevision: string;
  authorshipRevision: string;
  documentationImprovement: string;
  mediaToCapture: string;
  accessibilityFix: string;
  nextAction: string;
  timedChecks: Record<string, boolean>;
  timedNotes: Record<NoteBand, string>;
  evidenceRatings: Record<EvidenceId, Rating | "">;
  evidenceNotes: Record<EvidenceId, string>;
  publishChecks: Record<string, boolean>;
}

export type TextKey = {
  [K in keyof AuditState]: AuditState[K] extends string ? K : never;
}[keyof AuditState];

export const EVIDENCE_IDS: EvidenceId[] = [
  "creative",
  "technical",
  "design",
  "collaborative",
  "professional",
  "reflective",
];

export const STORAGE_KEY = "portfolio-prep-audit-v1";
