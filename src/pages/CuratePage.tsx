import { Link } from "react-router-dom";
import { ChapterTask, Outcomes, ProblemCard } from "../components/blocks";
import { Page } from "../components/Page";
import { problems } from "../content/problems";

export function CuratePage() {
  return (
    <Page
      title="Curate"
      lede={problems.lede}
      wide
      sections={[
        { id: "choosing", label: "What stays" },
        { id: "problems", label: "Common failures" },
        { id: "task", label: "In your notes" },
      ]}
    >
      <Outcomes items={problems.outcomes} />
      <div className="split-lists" id="choosing">
        <section>
          <h2>Foreground</h2>
          <ul>
            {problems.foreground.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Demote</h2>
          <ul>
            {problems.demote.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <p>
        Then look at <Link to="/examples">other portfolios</Link> for evidence, role, and whether you can tell what the person makes quickly.
      </p>
      <section id="problems">
        <h2>When the choice did not happen</h2>
        <div className="problem-grid">
          {problems.cards.map((card) => (
            <ProblemCard key={card.title} {...card} />
          ))}
        </div>
      </section>
      <ChapterTask id="curate" />
    </Page>
  );
}
