import type { EvidenceId, Rating } from "../audit/types";

export interface EvidenceCategory {
  id: EvidenceId;
  label: string;
  description: string;
}

export const categories: EvidenceCategory[] = [
  {
    id: "creative",
    label: "Creative",
    description: "Concept, originality, and visual or sonic judgment.",
  },
  {
    id: "technical",
    label: "Technical",
    description: "Programming, tools, fabrication, and systems.",
  },
  {
    id: "design",
    label: "Design",
    description: "Interaction, iteration, user experience, and problem solving.",
  },
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

export const ratingOptions: { id: Rating; label: string }[] = [
  { id: "strong", label: "Strong" },
  { id: "present", label: "Present" },
  { id: "weak", label: "Weak" },
  { id: "missing", label: "Missing" },
];

function joinList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export function evidenceSummary(ratings: Record<EvidenceId, Rating | "">): string {
  const strong = categories.filter((item) => ratings[item.id] === "strong").map((item) => item.label);
  const present = categories.filter((item) => ratings[item.id] === "present").map((item) => item.label);
  const needs = categories
    .filter((item) => ratings[item.id] === "weak" || ratings[item.id] === "missing")
    .map((item) => item.label);

  if (strong.length + present.length + needs.length === 0) {
    return "Rate a few categories. A short summary will appear here. This is a reflection, not a grade.";
  }

  const parts: string[] = [];
  parts.push(
    strong.length > 0
      ? `Your strongest evidence: ${joinList(strong)}.`
      : "No category is marked Strong yet.",
  );
  parts.push(
    needs.length > 0
      ? `Needs more evidence: ${joinList(needs)}.`
      : "Nothing is marked Weak or Missing.",
  );
  if (present.length > 0) parts.push(`Also present: ${joinList(present)}.`);
  return parts.join(" ");
}
