import { Link } from "react-router-dom";
import { Outcomes, ProblemCard } from "../components/blocks";
import { Page } from "../components/Page";
import { problems } from "../content/problems";

export function ProblemsPage() {
  return (
    <Page
      title="Common portfolio problems"
      lede={problems.lede}
      wide
      sections={[
        { id: "choosing", label: "Choosing" },
        { id: "problems", label: "The problems" },
      ]}
    >
      <Outcomes items={problems.outcomes} />
      <div className="split-lists" id="choosing">
        <section>
          <h2>What to foreground</h2>
          <ul>
            {problems.foreground.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>What to demote</h2>
          <ul>
            {problems.demote.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
        <p>
          When you know what to cut, name it in the <Link to="/audit">Portfolio Audit</Link>. The timed test
          also lives under Test. This page is about selection.
        </p>
      <section id="problems">
        <h2>Eight problems</h2>
        <div className="problem-grid">
          {problems.cards.map((card) => (
            <ProblemCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </Page>
  );
}
