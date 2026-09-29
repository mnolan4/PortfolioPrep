import { AskYourself, Callout, ExampleComparison, Outcomes, ProjectTypeGuide, Reminder } from "../components/blocks";
import { Page } from "../components/Page";
import { interdisciplinary } from "../content/interdisciplinary";

const sections = [
  { id: "identity", label: "A description" },
  { id: "sentence", label: "One sentence" },
  { id: "language", label: "Across fields" },
  { id: "field", label: "Field and role" },
  { id: "roles", label: "More than one job" },
  { id: "document", label: "Documentation" },
];

export function InterdisciplinaryPage() {
  const page = interdisciplinary;

  return (
    <Page title="Interdisciplinary work" lede={page.lede} wide sections={sections}>
      <Outcomes items={page.outcomes} />
      <section id="identity">
        <h2>{page.identity.title}</h2>
        {page.identity.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section id="sentence">
        <h2>{page.sentence.title}</h2>
        {page.sentence.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section id="language">
        <h2>{page.language.title}</h2>
        <p>{page.language.intro}</p>
        {page.pairs.map((pair) => (
          <ExampleComparison key={pair.caption} caption={pair.caption} weak={pair.weak} better={pair.better} />
        ))}
      </section>
      <section id="field">
        <h2>{page.field.title}</h2>
        {page.field.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ExampleComparison caption={page.field.pair.caption} weak={page.field.pair.weak} better={page.field.pair.better} />
      </section>
      <section id="roles">
        <h2>{page.roles.title}</h2>
        {page.roles.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ExampleComparison caption={page.roles.pair.caption} weak={page.roles.pair.weak} better={page.roles.pair.better} />
        <Reminder title={page.roleReminder.title} to={page.roleReminder.to}>
          {page.roleReminder.text}
        </Reminder>
      </section>
      <section id="document">
        <h2>{page.document.title}</h2>
        {page.document.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul>
          {page.pairsToShow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ProjectTypeGuide {...page.guide} />
        <Reminder title={page.evidenceReminder.title} to={page.evidenceReminder.to}>
          {page.evidenceReminder.text}
        </Reminder>
      </section>
      <Callout>
        <p>
          Hybrid identities are normal. The sentence is specific. The page shows more than one medium, and it still says
          which part you made.
        </p>
      </Callout>
      <AskYourself items={page.ask} />
    </Page>
  );
}
