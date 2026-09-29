import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAudit } from "../audit/AuditContext";
import { downloadMarkdown } from "../audit/export";
import { completion, hasAnyAnswer, ratingProgress } from "../audit/storage";
import { EvidenceMatrix } from "../components/EvidenceMatrix";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { Page } from "../components/Page";
import { TextField } from "../components/TextField";
import { categories, ratingOptions } from "../content/evidence";
import { curationFields, purposeFields, revisionFields } from "../content/audit-copy";
import { publishItems } from "../content/publish";
import { timedBands } from "../content/timed";

function show(value: string): string {
  return value.trim() ? value.trim() : "Not written yet.";
}

export function AuditPage() {
  const audit = useAudit();
  const { state, setText, setStrongest, clear } = audit;
  const [confirming, setConfirming] = useState(false);
  const progress = completion(state);
  const ratings = ratingProgress(state);
  const started = hasAnyAnswer(state);
  const strongest = state.strongest.map((item) => item.trim()).filter(Boolean);
  const gap =
    state.needsDocs.trim() || state.missingEvidence.trim() || state.documentationImprovement.trim();
  const revision =
    state.projectPageRevision.trim() ||
    state.homepageRevision.trim() ||
    state.authorshipRevision.trim() ||
    state.documentationImprovement.trim();

  function printAudit() {
    document.querySelectorAll("details").forEach((item) => {
      item.open = true;
    });
    window.print();
  }

  return (
    <Page
      title="Portfolio Audit"
      lede="The working notes for the whole guide. Nothing here is uploaded. It stays in this browser until you clear it or export it."
      wide
      sections={[
        { id: "purpose", label: "Purpose" },
        { id: "curation", label: "Curation" },
        { id: "evidence", label: "Evidence" },
        { id: "revision", label: "Revision" },
        { id: "summary", label: "Summary" },
      ]}
    >
      <div className="audit-toolbar noprint">
        <p className="save-permanent">
          {progress.filled} of {progress.total} fields started. Answers are saved in this browser.
        </p>
        <button type="button" className="button button-secondary" onClick={printAudit}>
          Print
        </button>
        <button type="button" className="button button-secondary" onClick={() => downloadMarkdown(state)}>
          Download text
        </button>
        <button type="button" className="button button-danger" onClick={() => setConfirming(true)}>
          Clear
        </button>
      </div>
      {!started ? (
        <p className="empty-banner">
          Nothing is saved yet. Start with the three projects you would show someone first. You can also
          answer the three questions on <Link to="/#prompts">Start here</Link>.
        </p>
      ) : null}

      <AuditGroup id="purpose" kicker="Purpose" title="Who it is for">
        {purposeFields.map((field) => (
          <TextField
            key={field.key}
            id={`audit-${field.key}`}
            label={field.label}
            hint={field.hint}
            rows={field.rows}
            value={state[field.key]}
            onChange={(value) => setText(field.key, value)}
          />
        ))}
      </AuditGroup>

      <AuditGroup id="curation" kicker="Curation" title="What stays in front">
        <fieldset className="strongest">
          <legend>Strongest three projects</legend>
          <p className="hint">Start with the three projects you would show someone first.</p>
          {([0, 1, 2] as const).map((index) => (
            <TextField
              key={index}
              id={`strongest-${index + 1}`}
              label={`Project ${index + 1}`}
              rows={1}
              value={state.strongest[index]}
              onChange={(value) => setStrongest(index, value)}
            />
          ))}
        </fieldset>
        {curationFields.map((field) => (
          <TextField
            key={field.key}
            id={`audit-${field.key}`}
            label={field.label}
            hint={field.hint}
            rows={field.rows}
            value={state[field.key]}
            onChange={(value) => setText(field.key, value)}
          />
        ))}
      </AuditGroup>

      <AuditGroup id="evidence" kicker="Evidence" title="What a stranger can verify">
        <p>
          {ratings.filled} of {ratings.total} categories rated. The same ratings are on the{" "}
          <Link to="/evidence">evidence audit</Link>.
        </p>
        <TextField
          id="audit-missing"
          label="Missing evidence"
          hint="What is not in the portfolio yet?"
          rows={3}
          value={state.missingEvidence}
          onChange={(value) => setText("missingEvidence", value)}
        />
        <EvidenceMatrix />
        <details className="nested-notes">
          <summary>Timed-test notes</summary>
          {timedBands.map((band) => (
            <p key={band.id}>
              <strong>{band.time}.</strong> {show(state.timedNotes[band.note])}
            </p>
          ))}
          <p>
            <Link to="/timed-test">Edit the timed test</Link>
          </p>
        </details>
      </AuditGroup>

      <AuditGroup id="revision" kicker="Revision" title="What you will change">
        {revisionFields.map((field) => (
          <TextField
            key={field.key}
            id={`audit-${field.key}`}
            label={field.label}
            hint={field.hint}
            rows={field.rows}
            value={state[field.key]}
            onChange={(value) => setText(field.key, value)}
          />
        ))}
        <details className="nested-notes">
          <summary>Publish checklist</summary>
          <ul>
            {publishItems.map((item) => (
              <li key={item.id}>
                {state.publishChecks[item.id] ? "Checked" : "Open"} — {item.label}
              </li>
            ))}
          </ul>
          <p>
            <Link to="/publish">Edit the checklist</Link>
          </p>
        </details>
      </AuditGroup>

      <section id="summary" className="revision-summary">
        <h2>Revision summary</h2>
        <p>A plain reading of what you have written. Print this page when you want it on paper.</p>
        <dl>
          <div>
            <dt>My portfolio goal</dt>
            <dd className={state.goal.trim() ? undefined : "empty-value"}>{show(state.goal)}</dd>
          </div>
          <div>
            <dt>My strongest projects</dt>
            <dd className={strongest.length ? undefined : "empty-value"}>
              {strongest.length ? strongest.join(" · ") : "Not written yet."}
            </dd>
          </div>
          <div>
            <dt>My biggest documentation gap</dt>
            <dd className={gap ? undefined : "empty-value"}>{gap || "Not written yet."}</dd>
          </div>
          <div>
            <dt>My most important revision</dt>
            <dd className={revision ? undefined : "empty-value"}>{revision || "Not written yet."}</dd>
          </div>
          <div>
            <dt>Media I need to capture</dt>
            <dd className={state.mediaToCapture.trim() ? undefined : "empty-value"}>
              {show(state.mediaToCapture)}
            </dd>
          </div>
          <div>
            <dt>My next action</dt>
            <dd className={state.nextAction.trim() ? undefined : "empty-value"}>{show(state.nextAction)}</dd>
          </div>
          <div>
            <dt>Evidence</dt>
            <dd>
              {categories
                .map((category) => {
                  const rating = state.evidenceRatings[category.id];
                  const label = ratingOptions.find((option) => option.id === rating)?.label ?? "Not rated";
                  return `${category.label}: ${label}`;
                })
                .join(". ")}
              .
            </dd>
          </div>
        </dl>
      </section>

      <ConfirmDialog
        open={confirming}
        title="Clear the saved audit?"
        confirmLabel="Clear the audit"
        cancelLabel="Keep my answers"
        onCancel={() => setConfirming(false)}
        onConfirm={() => {
          clear();
          setConfirming(false);
        }}
      >
        <p>
          This deletes the answers stored in this browser, including checklist marks and revision notes. It
          does not change any portfolio you have published elsewhere.
        </p>
      </ConfirmDialog>
    </Page>
  );
}

function AuditGroup({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="audit-section" id={id}>
      <details open>
        <summary>
          <span className="kicker">{kicker}</span>
          <h2>{title}</h2>
        </summary>
        <div className="audit-section-body">{children}</div>
      </details>
    </section>
  );
}
