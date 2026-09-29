import { Link } from "react-router-dom";
import { AskYourself, Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { technical } from "../content/technical";

export function TechnicalPage() {
  return (
    <Page
      title="Technical portfolio practices"
      lede={technical.lede}
      sections={technical.sections.map((section) => ({ id: section.id, label: section.title }))}
    >
      <Outcomes items={technical.outcomes} />
      {technical.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
      <p>
        If you already know the fix, write it in the{" "}
        <Link to="/audit">Portfolio Audit</Link> under accessibility.
      </p>
      <AskYourself items={technical.ask} />
    </Page>
  );
}
