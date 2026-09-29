import { Link } from "react-router-dom";
import { AskYourself, Callout, Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { foundations } from "../content/foundations";

const sections = [
  { id: "evidence", label: "Evidence" },
  { id: "think", label: "How you think" },
  { id: "role", label: "Your role" },
  { id: "curate", label: "Curate" },
  { id: "decisions", label: "Decisions" },
  { id: "mix", label: "The mix" },
  { id: "outside", label: "Outside readers" },
  { id: "documentation", label: "Documentation" },
];

export function FoundationsPage() {
  return (
    <Page title="Portfolio foundations" lede={foundations.lede} sections={sections}>
      <Outcomes items={foundations.outcomes} />
      <Callout>
        <h2 id="evidence">{foundations.evidence.title}</h2>
        {foundations.evidence.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Callout>
      <Callout>
        <h2 id="think">{foundations.both.title}</h2>
        {foundations.both.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Callout>
      {foundations.principles.map((principle) => (
        <section key={principle.id} id={principle.id}>
          <h2>{principle.title}</h2>
          {principle.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {principle.more ? (
            <p>
              <Link to={principle.more.to}>{principle.more.label}</Link>
            </p>
          ) : null}
        </section>
      ))}
      <AskYourself items={foundations.ask} />
    </Page>
  );
}
