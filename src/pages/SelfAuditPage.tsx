import { useState } from "react";
import { Page } from "../components/Page";
import {
  critiqueQuestions,
  evidenceCategories,
  publishItems,
  revisionLines,
  selfAuditPage,
  selfAuditPlain,
  selfAuditStages,
  timedBands,
} from "../content/self-audit";

export function SelfAuditPage() {
  const [copied, setCopied] = useState(false);
  const plain = selfAuditPlain();

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(plain);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Page
      title="Self-Audit"
      lede={selfAuditPage.lede}
      sections={selfAuditStages.map((stage) => ({ id: stage.id, label: stage.title }))}
    >
      <p>{selfAuditPage.note}</p>
      <div className="noprint worksheet-actions">
        <button type="button" className="button button-secondary" onClick={() => void copyAll()}>
          Copy all prompts
        </button>
        <button type="button" className="button button-secondary" onClick={() => window.print()}>
          Print prompts
        </button>
        {copied ? (
          <p className="hint" role="status">
            Copied.
          </p>
        ) : null}
      </div>
      <details className="plain-copy noprint">
        <summary>Show every prompt as plain text</summary>
        <pre>{plain}</pre>
      </details>
      {selfAuditStages.map((stage) => (
        <section key={stage.id} id={stage.id}>
          <h2>
            {stage.title}
            {stage.id === "define" ? <span id="purpose" className="visually-hidden" /> : null}
            {stage.id === "curate" ? <span id="curation" className="visually-hidden" /> : null}
          </h2>
          <p>{stage.task}</p>
          <ol className="prompt-list">
            {stage.prompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ol>
        </section>
      ))}
      <section id="timed-test">
        <h2>Timed test</h2>
        {timedBands.map((band) => (
          <section key={band.id}>
            <h3>{band.time}</h3>
            <p>{band.question}</p>
            <ul>
              {band.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </section>
        ))}
      </section>
      <section id="evidence-list">
        <h2>Evidence to notice</h2>
        <ul>
          {evidenceCategories.map((category) => (
            <li key={category.id}>
              <strong>{category.label}.</strong> {category.description}
            </li>
          ))}
        </ul>
      </section>
      <section id="questions">
        <h2>Questions for another person</h2>
        <ol className="prompt-list">
          {critiqueQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </section>
      <section id="revision">
        <h2>Revisions</h2>
        <ul>
          {revisionLines.map((line) => (
            <li key={line.id}>
              <strong>{line.label}.</strong> {line.hint}
            </li>
          ))}
        </ul>
      </section>
      <section id="summary">
        <h2>Before you send the link</h2>
        <ul>
          {publishItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
