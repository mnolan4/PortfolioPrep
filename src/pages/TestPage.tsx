import { useState } from "react";
import { ChapterTask, Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { critiqueQuestions, evidenceCategories, timedBands } from "../content/self-audit";

const critiquePlain = critiqueQuestions.map((question, index) => `${index + 1}. ${question}`).join("\n\n");

export function TestPage() {
  const [copied, setCopied] = useState(false);

  async function copyQuestions() {
    try {
      await navigator.clipboard.writeText(critiquePlain);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Page
      title="Test"
      lede="Open the portfolio. See what a stranger can actually tell, first by yourself and then with another person."
      sections={[
        { id: "timed", label: "Timed test" },
        { id: "evidence", label: "Evidence" },
        { id: "critique", label: "Another person" },
        { id: "task", label: "In your notes" },
      ]}
    >
      <Outcomes
        items={[
          "Find out what the first screen communicates before anyone explains it.",
          "Notice which kinds of evidence are strong, thin, or missing.",
          "Ask questions a person can answer from the page.",
        ]}
      />
      <section id="timed">
        <h2>10 seconds, 30 seconds, 3 minutes</h2>
        <p>Keep the site open beside you. Write what you notice. Do not pause to defend the work.</p>
        {timedBands.map((band) => (
          <section key={band.id} id={band.id} className="card band">
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
      <section id="evidence">
        <h2>What a stranger can verify</h2>
        <p>
          This is a reflection, not a grade. For each kind of evidence, notice whether it is strong, present, thin, or missing, and which project carries it.
        </p>
        <dl className="structure-list">
          {evidenceCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <dt>{category.label}</dt>
              <dd>{category.description}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section id="critique">
        <h2>Ask someone else</h2>
        <p>
          Do not ask “Do you like my portfolio?” Give these questions to a classmate, a friend outside the program, or a tutor. Ask them to spend about ten minutes, then write sentences. No scores.
        </p>
        <div className="noprint worksheet-actions">
          <button type="button" className="button button-secondary" onClick={() => void copyQuestions()}>
            Copy questions
          </button>
          <button type="button" className="button button-secondary" onClick={() => window.print()}>
            Print questions
          </button>
          {copied ? (
            <p className="hint" role="status">
              Copied.
            </p>
          ) : null}
        </div>
        <ol className="prompt-list">
          {critiqueQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
        <details className="plain-copy noprint">
          <summary>Show the questions as plain text</summary>
          <pre>{critiquePlain}</pre>
        </details>
      </section>
      <ChapterTask id="test" />
    </Page>
  );
}
