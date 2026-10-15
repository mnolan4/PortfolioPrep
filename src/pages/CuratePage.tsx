import { Link } from "react-router-dom";
import { ChapterTask, Outcomes, Panel, ProblemCard } from "../components/blocks";
import { Page } from "../components/Page";
import { problems } from "../content/problems";

export function CuratePage() {
  return (
    <Page
      title="Choose the work that shows you best."
      lede={problems.lede}
      wide
      showLocation={false}
    >
      <Outcomes items={problems.outcomes} />
      <section id="choosing">
        <div className="panel-grid">
          <Panel as="section" tone="blue" title="Foreground" heading="h2">
            <ul>
              {problems.foreground.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
          <Panel as="section" tone="blue" title="Demote" heading="h2">
            <ul>
              {problems.demote.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>
      <p>
        Then look at <Link to="/examples">other portfolios</Link> for evidence, role, and whether you can tell what the person makes quickly.
      </p>
      <section id="problems">
        <h2>When the choice did not happen</h2>
        <div className="problem-grid">
          {problems.cards.map((card, index) => (
            <ProblemCard key={card.title} {...card} index={index + 1} />
          ))}
        </div>
      </section>
      <ChapterTask id="curate" />
    </Page>
  );
}
