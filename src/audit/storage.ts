import {
  EVIDENCE_IDS,
  STORAGE_KEY,
  type AuditState,
  type EvidenceId,
  type NoteBand,
  type Rating,
} from "./types";

const RATINGS = new Set<Rating>(["strong", "present", "weak", "missing"]);

export function emptyState(): AuditState {
  return {
    audience: "",
    goal: "",
    identity: "",
    workWanted: "",
    strongest: ["", "", ""],
    remove: "",
    needsDocs: "",
    missingEvidence: "",
    homepageRevision: "",
    projectPageRevision: "",
    authorshipRevision: "",
    documentationImprovement: "",
    mediaToCapture: "",
    accessibilityFix: "",
    nextAction: "",
    timedChecks: {},
    timedNotes: { ten: "", thirty: "", three: "" },
    evidenceRatings: {
      creative: "",
      technical: "",
      design: "",
      collaborative: "",
      professional: "",
      reflective: "",
    },
    evidenceNotes: {
      creative: "",
      technical: "",
      design: "",
      collaborative: "",
      professional: "",
      reflective: "",
    },
    publishChecks: {},
  };
}

function str(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function boolMap(value: unknown): Record<string, boolean> {
  if (!value || typeof value !== "object") return {};
  const out: Record<string, boolean> = {};
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === "boolean") out[key] = entry;
  }
  return out;
}

export function loadState(): AuditState {
  const base = emptyState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return base;
    const data = parsed as Record<string, unknown>;
    const strongestRaw = Array.isArray(data.strongest) ? data.strongest : [];
    const notesRaw =
      data.timedNotes && typeof data.timedNotes === "object"
        ? (data.timedNotes as Record<string, unknown>)
        : {};
    const ratingsRaw =
      data.evidenceRatings && typeof data.evidenceRatings === "object"
        ? (data.evidenceRatings as Record<string, unknown>)
        : {};
    const evidenceNotesRaw =
      data.evidenceNotes && typeof data.evidenceNotes === "object"
        ? (data.evidenceNotes as Record<string, unknown>)
        : {};

    const ratings = { ...base.evidenceRatings };
    const evidenceNotes = { ...base.evidenceNotes };
    for (const id of EVIDENCE_IDS) {
      const rating = ratingsRaw[id];
      if (typeof rating === "string" && RATINGS.has(rating as Rating)) {
        ratings[id] = rating as Rating;
      }
      evidenceNotes[id] = str(evidenceNotesRaw[id]);
    }

    const bands: NoteBand[] = ["ten", "thirty", "three"];
    const timedNotes = { ...base.timedNotes };
    for (const band of bands) timedNotes[band] = str(notesRaw[band]);

    return {
      audience: str(data.audience),
      goal: str(data.goal),
      identity: str(data.identity),
      workWanted: str(data.workWanted),
      strongest: [str(strongestRaw[0]), str(strongestRaw[1]), str(strongestRaw[2])],
      remove: str(data.remove),
      needsDocs: str(data.needsDocs),
      missingEvidence: str(data.missingEvidence),
      homepageRevision: str(data.homepageRevision),
      projectPageRevision: str(data.projectPageRevision),
      authorshipRevision: str(data.authorshipRevision),
      documentationImprovement: str(data.documentationImprovement),
      mediaToCapture: str(data.mediaToCapture),
      accessibilityFix: str(data.accessibilityFix),
      nextAction: str(data.nextAction),
      timedChecks: boolMap(data.timedChecks),
      timedNotes,
      evidenceRatings: ratings,
      evidenceNotes,
      publishChecks: boolMap(data.publishChecks),
    };
  } catch {
    return base;
  }
}

export function saveState(state: AuditState): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function textValues(state: AuditState): string[] {
  return [
    state.audience,
    state.goal,
    state.identity,
    state.workWanted,
    state.strongest[0],
    state.strongest[1],
    state.strongest[2],
    state.remove,
    state.needsDocs,
    state.missingEvidence,
    state.homepageRevision,
    state.projectPageRevision,
    state.authorshipRevision,
    state.documentationImprovement,
    state.mediaToCapture,
    state.accessibilityFix,
    state.nextAction,
  ];
}

export function completion(state: AuditState): { filled: number; total: number } {
  const fields = textValues(state);
  return {
    filled: fields.filter((value) => value.trim().length > 0).length,
    total: fields.length,
  };
}

export function hasAnyAnswer(state: AuditState): boolean {
  if (completion(state).filled > 0) return true;
  if (Object.values(state.timedChecks).some(Boolean)) return true;
  if (Object.values(state.publishChecks).some(Boolean)) return true;
  if (Object.values(state.evidenceRatings).some(Boolean)) return true;
  if (Object.values(state.timedNotes).some((value) => value.trim())) return true;
  if (Object.values(state.evidenceNotes).some((value) => value.trim())) return true;
  return false;
}

export function ratingProgress(state: AuditState): { filled: number; total: number } {
  const values = EVIDENCE_IDS.map((id) => state.evidenceRatings[id]);
  return { filled: values.filter(Boolean).length, total: values.length };
}

export type { EvidenceId };
