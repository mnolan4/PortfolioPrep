import { evidenceSummary, categories, ratingOptions } from "../content/evidence";
import { publishItems } from "../content/publish";
import { timedBands } from "../content/timed";
import type { AuditState } from "./types";

function line(label: string, value: string): string {
  const text = value.trim() ? value.trim() : "(not answered)";
  return `**${label}**\n${text}`;
}

export function toMarkdown(state: AuditState): string {
  const strongest = state.strongest.map((item) => item.trim()).filter(Boolean);
  const parts: string[] = [
    "# Portfolio Audit",
    "",
    "Exported from Portfolio Prep. These answers were saved in the browser where you wrote them.",
    "",
    "## Purpose",
    "",
    line("Target audience", state.audience),
    "",
    line("Portfolio goal", state.goal),
    "",
    line("Professional identity", state.identity),
    "",
    line("Work you want more chances to make", state.workWanted),
    "",
    "## Curation",
    "",
    line(
      "Strongest three projects",
      strongest.length ? strongest.map((item, index) => `${index + 1}. ${item}`).join("\n") : "",
    ),
    "",
    line("Project to remove", state.remove),
    "",
    line("Project needing better documentation", state.needsDocs),
    "",
    "## Evidence",
    "",
    line("Missing evidence", state.missingEvidence),
    "",
    evidenceSummary(state.evidenceRatings),
    "",
  ];

  for (const category of categories) {
    const rating = state.evidenceRatings[category.id];
    const label = ratingOptions.find((option) => option.id === rating)?.label ?? "Not rated";
    const note = state.evidenceNotes[category.id].trim();
    parts.push(`- ${category.label}: ${label}${note ? ` — ${note}` : ""}`);
  }

  parts.push(
    "",
    "## Revision",
    "",
    line("Homepage revision", state.homepageRevision),
    "",
    line("Project page revision", state.projectPageRevision),
    "",
    line("Documentation improvement", state.documentationImprovement),
    "",
    line("Collaboration / authorship revision", state.authorshipRevision),
    "",
    line("Media to capture", state.mediaToCapture),
    "",
    line("Accessibility fix", state.accessibilityFix),
    "",
    line("Next action", state.nextAction),
    "",
    "## Revision summary",
    "",
    line("My portfolio goal", state.goal),
    "",
    line("My strongest projects", strongest.join("; ")),
    "",
    line(
      "My biggest documentation gap",
      state.needsDocs.trim() || state.missingEvidence.trim() || state.documentationImprovement.trim(),
    ),
    "",
    line(
      "My most important revision",
      state.projectPageRevision.trim() ||
        state.homepageRevision.trim() ||
        state.authorshipRevision.trim() ||
        state.documentationImprovement.trim(),
    ),
    "",
    line("Media I need to capture", state.mediaToCapture),
    "",
    line("My next action", state.nextAction),
    "",
    "## Timed test",
    "",
  );

  for (const band of timedBands) {
    parts.push(`### ${band.time} — ${band.question}`, "");
    for (const check of band.checks) {
      parts.push(`- [${state.timedChecks[check.id] ? "x" : " "}] ${check.label}`);
    }
    parts.push("", line("Revision note", state.timedNotes[band.note]), "");
  }

  parts.push("## Before you publish", "");
  for (const item of publishItems) {
    parts.push(`- [${state.publishChecks[item.id] ? "x" : " "}] ${item.label}`);
  }
  parts.push("");
  return parts.join("\n");
}

export function downloadMarkdown(state: AuditState): void {
  const blob = new Blob([toMarkdown(state)], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "portfolio-audit.md";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
