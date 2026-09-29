import { AskYourself, ExampleComparison, Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { mediaPage } from "../content/media";

export function MediaPage() {
  return (
    <Page
      title="Visual and media documentation"
      lede={mediaPage.lede}
      wide
      sections={[
        ...mediaPage.sections.map((section) => ({ id: section.id, label: section.title })),
        { id: "caption-pairs", label: "Caption pairs" },
      ]}
    >
      <Outcomes items={mediaPage.outcomes} />
      {mediaPage.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
      <section id="caption-pairs">
        <h2>Weak captions, better captions</h2>
        {mediaPage.captions.map((pair) => (
          <ExampleComparison key={pair.caption} caption={pair.caption} weak={pair.weak} better={pair.better} />
        ))}
      </section>
      <AskYourself items={mediaPage.ask} />
    </Page>
  );
}
