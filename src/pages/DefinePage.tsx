import { Link } from "react-router-dom";
import { ChapterTask, Outcomes, Panel } from "../components/blocks";
import { Page } from "../components/Page";
import { defineChapter } from "../content/define";

export function DefinePage() {
  return (
    <Page
      title={defineChapter.title}
      lede={defineChapter.lede}
      wide
      showLocation={false}
      sections={[
        { id: "audience", label: "Who it is for" },
        { id: "evidence", label: "Evidence" },
        { id: "qualities", label: "What to show" },
        { id: "outside", label: "An outside reader" },
        { id: "lenses", label: "Lenses" },
        { id: "task", label: "In your notes" },
      ]}
    >
      <div className="panel-grid">
        <Panel tone="blue" title="Who it is for" heading="h2">
          <p>{defineChapter.who}</p>
        </Panel>
        <Panel tone="blue" title="What you can do" heading="h2">
          <p>{defineChapter.canDo}</p>
        </Panel>
      </div>
      <section id="audience">
        <Outcomes items={defineChapter.outcomes} />
        <Panel title="Who it is for" heading="h2">
          <p>{defineChapter.outside}</p>
        </Panel>
      </section>
      <div className="panel-grid" id="evidence">
        <Panel title={defineChapter.evidence.title} heading="h2">
          {defineChapter.evidence.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Panel>
        <Panel id="think" title={defineChapter.both.title} heading="h2">
          {defineChapter.both.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Panel>
      </div>
      <section id="qualities">
        <Panel title={defineChapter.qualities.title} heading="h2">
          <p>{defineChapter.qualities.intro}</p>
        </Panel>
        <div className="panel-grid">
          {defineChapter.qualities.items.map((item) => (
            <Panel key={item.title} title={item.title}>
              <p>{item.text}</p>
            </Panel>
          ))}
        </div>
      </section>
      <section id="outside">
        <Panel title={defineChapter.outsideReader.title} heading="h2">
          {defineChapter.outsideReader.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Panel>
        <div className="panel-grid">
          {defineChapter.principles.map((principle) => (
            <Panel key={principle.id} id={principle.id} title={principle.title}>
              <p>{principle.text}</p>
              <p>
                <Link to={principle.to}>Continue</Link>
              </p>
            </Panel>
          ))}
        </div>
      </section>
      <Panel id="lenses" title="Directions are lenses" heading="h2">
        <p>{defineChapter.lenses}</p>
      </Panel>
      <ChapterTask id="define" />
    </Page>
  );
}
