import { useState } from "react";
import { Page } from "../components/Page";
import { critique } from "../content/critique";

export function CritiquePage() {
  const [copied, setCopied] = useState(false);
  const plain = critique.questions.map((question, index) => `${index + 1}. ${question}`).join("\n\n");

  async function copyQuestions() {
    try {
      await navigator.clipboard.writeText(plain);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Page title="Portfolio critique toolkit" lede={critique.lede}>
      <p>{critique.intro}</p>
      <div className="noprint worksheet-actions">
        <button type="button" className="button button-secondary" onClick={() => void copyQuestions()}>
          Copy questions
        </button>
        <button type="button" className="button button-secondary" onClick={() => window.print()}>
          Print worksheet
        </button>
        {copied ? (
          <p className="hint" role="status">
            Copied.
          </p>
        ) : null}
      </div>
      <ol className="worksheet">
        {critique.questions.map((question) => (
          <li key={question}>
            <p>{question}</p>
            <div className="rule-box" aria-hidden="true" />
          </li>
        ))}
      </ol>
      <details className="plain-copy noprint">
        <summary>Show the questions as plain text</summary>
        <pre>{plain}</pre>
      </details>
    </Page>
  );
}
