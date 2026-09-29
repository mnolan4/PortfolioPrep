import { Callout, Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { toolsPage } from "../content/tools";

const sections = [
  { id: "door", label: "The front door" },
  { id: "options", label: "Options" },
];

export function ToolsPage() {
  return (
    <Page title="Portfolio tools" lede={toolsPage.lede} wide sections={sections}>
      <Outcomes items={toolsPage.outcomes} />
      <section id="door">
        <h2>{toolsPage.frontDoor.title}</h2>
        {toolsPage.frontDoor.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section id="options">
        <h2>Where you might build it</h2>
        <p>{toolsPage.optionsIntro}</p>
        <div className="type-list">
          {toolsPage.options.map((option) => (
            <article key={option.id} className="card option-card">
              <h3>{option.name}</h3>
              <h4>Good for</h4>
              <p>{option.goodFor}</p>
              <h4>A weak choice when</h4>
              <p>{option.weak}</p>
            </article>
          ))}
        </div>
      </section>
      <Callout tone="try">
        <p className="kicker">Try this</p>
        <p>{toolsPage.tryThis}</p>
      </Callout>
    </Page>
  );
}
