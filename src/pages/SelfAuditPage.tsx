import { Panel } from "../components/blocks";
import { Page } from "../components/Page";
import {
  critiqueQuestions,
  evidenceCategories,
  publishItems,
  revisionLines,
  selfAuditPage,
  selfAuditStages,
  timedBands,
} from "../content/self-audit";

export function SelfAuditPage() {
  return (
    <Page
      title="Portfolio Audit"
      lede={selfAuditPage.lede}
    >
      <p>{selfAuditPage.note}</p>
      <div className="panel-grid">
        {selfAuditStages.map((stage) => (
          <Panel key={stage.id} id={stage.id} title={stage.title} heading="h2">
            {stage.id === "define" ? <span id="purpose" className="visually-hidden" /> : null}
            {stage.id === "curate" ? <span id="curation" className="visually-hidden" /> : null}
            <p>{stage.task}</p>
            <ol className="prompt-list">
              {stage.prompts.map((prompt) => (
                <li key={prompt}>{prompt}</li>
              ))}
            </ol>
          </Panel>
        ))}
      </div>
      <section id="timed-test">
        <h2>Timed test</h2>
        <div className="panel-grid">
          {timedBands.map((band) => (
            <Panel key={band.id} title={band.time}>
              <p>{band.question}</p>
              <ul>
                {band.checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>
      </section>
      <Panel as="section" id="evidence-list" title="Evidence to notice" heading="h2">
        <ul>
          {evidenceCategories.map((category) => (
            <li key={category.id}>
              <strong>{category.label}.</strong> {category.description}
            </li>
          ))}
        </ul>
      </Panel>
      <Panel as="section" id="questions" title="Questions for another person" heading="h2">
        <ol className="prompt-list">
          {critiqueQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </Panel>
      <Panel as="section" id="revision" title="Revisions" heading="h2">
        <ul>
          {revisionLines.map((line) => (
            <li key={line.id}>
              <strong>{line.label}.</strong> {line.hint}
            </li>
          ))}
        </ul>
      </Panel>
      <Panel as="section" id="summary" title="Before you send the link" heading="h2">
        <ul>
          {publishItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Panel>
    </Page>
  );
}
