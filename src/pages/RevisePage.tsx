import { ChapterTask, Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { publishItems, revisionLines } from "../content/self-audit";
import { technical } from "../content/technical";
import { toolsPage } from "../content/tools";

export function RevisePage() {
  return (
    <Page
      title="Revise"
      lede="Change a few things a stranger will actually meet. The portfolio is also a project: the phone, the file, and the link are part of the work."
      wide
      sections={[
        { id: "choices", label: "What to change" },
        { id: "today", label: "Today" },
        { id: "publish", label: "Before you send it" },
        { id: "technical", label: "The site itself" },
        { id: "tools", label: "Where it lives" },
        { id: "task", label: "In your notes" },
      ]}
    >
      <Outcomes
        items={[
          "Leave with a few specific revisions, not a plan to redesign everything.",
          "Check the site the way a stranger will: on a phone, with sound, without guessing.",
        ]}
      />
      <section id="choices">
        <h2>Six changes, each small enough to finish</h2>
        <dl className="structure-list">
          {revisionLines.map((line) => (
            <div key={line.id} id={line.id}>
              <dt>{line.label}</dt>
              <dd>{line.hint}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section id="today" className="card today-card">
        <h2>What can you do today?</h2>
        <p>A caption, a credit, a cut, or a clip. Not a new website.</p>
      </section>
      <section id="publish">
        <h2>Before you send the link</h2>
        <p>Walk through the live site. These are things a visitor can check.</p>
        <ul>
          {publishItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section id="technical">
        <h2>The site has to hold up</h2>
        <p>{technical.lede}</p>
        {technical.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h3>{section.title}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </section>
      <details className="reference" id="tools">
        <summary>
          <span className="kicker">Reference</span>
          <h2>Where the portfolio can live</h2>
        </summary>
        <div className="reference-body">
          <p>{toolsPage.lede}</p>
          <section id="door">
            <h3>{toolsPage.frontDoor.title}</h3>
            {toolsPage.frontDoor.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <section id="options">
            <h3>Tradeoffs</h3>
            <p>{toolsPage.optionsIntro}</p>
            <div className="type-list">
              {toolsPage.options.map((option) => (
                <article key={option.id} id={option.id} className="card option-card">
                  <h3>{option.name}</h3>
                  <p>
                    <strong>Useful when. </strong>
                    {option.goodFor}
                  </p>
                  <p>
                    <strong>Watch for. </strong>
                    {option.weak}
                  </p>
                </article>
              ))}
            </div>
          </section>
          <p>{toolsPage.tryThis}</p>
        </div>
      </details>
      <ChapterTask id="revise" />
    </Page>
  );
}
