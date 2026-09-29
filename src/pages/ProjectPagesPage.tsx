import { Link } from "react-router-dom";
import { AskYourself, ExampleComparison, Outcomes, Reminder } from "../components/blocks";
import { Page } from "../components/Page";
import { projectPages } from "../content/project-pages";

export function ProjectPagesPage() {
  return (
    <Page
      title="Build your project pages"
      lede={projectPages.lede}
      wide
      sections={[
        { id: "structure", label: "Structure" },
        { id: "pairs", label: "Weak and better" },
      ]}
    >
      <Outcomes items={projectPages.outcomes} />
      <Reminder title="Show how you think" to="/process">
        Keep a process step when it shows a decision that changed the project.
      </Reminder>
      <section id="structure">
        <h2>A repeatable structure</h2>
        <dl className="structure-list">
          {projectPages.structure.map((item) => (
            <div key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section id="pairs">
        <h2>Weak and better</h2>
        <p>Read these out loud. The better line names a system, a place, or a change.</p>
        {projectPages.pairs.map((pair) => (
          <ExampleComparison key={pair.caption} caption={pair.caption} weak={pair.weak} better={pair.better} />
        ))}
        <p>
          When you know which page you will rewrite, record it in the{" "}
          <Link to="/sprint">revision sprint</Link>.
        </p>
      </section>
      <AskYourself items={projectPages.ask} />
    </Page>
  );
}
