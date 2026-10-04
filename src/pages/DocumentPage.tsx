import { ChapterTask, Callout, ExampleComparison, Outcomes, ProjectTypeGuide, StepList } from "../components/blocks";
import { Page } from "../components/Page";
import { documentPage, projectTypes } from "../content/document";
import { mediaPage } from "../content/media";
import { processPage } from "../content/process";

export function DocumentPage() {
  return (
    <Page
      title="Document"
      lede={documentPage.lede}
      wide
      sections={[
        { id: "capture", label: "Capture" },
        { id: "process", label: "Decisions" },
        { id: "media", label: "Media" },
        { id: "types", label: "By project type" },
        { id: "task", label: "In your notes" },
      ]}
    >
      <Outcomes items={["Record the encounter while the work still exists.", "Keep a decision only when you can say what changed.", "Caption the image so a stranger knows what they are seeing."]} />
      <section id="capture">
        <h2>Capture the encounter</h2>
        <Callout tone="try">
          <p>{documentPage.tryThis}</p>
        </Callout>
        <p>
          Lead with play, the room, the sound, or a person using the work. Keep one view of the software only when a caption says what that view is doing.
        </p>
      </section>
      <section id="process">
        <h2>Show why a decision changed</h2>
        <p>{processPage.lede}</p>
        <section id="framework">
          <h3>One sequence</h3>
          <StepList items={processPage.steps} />
        </section>
        <section id="floor" className="card example-story">
          <h3>A floor that nobody understood</h3>
          <StepList items={processPage.floor} />
        </section>
        <section id="sound" className="card example-story">
          <h3>A mix written for the wrong room</h3>
          <StepList items={processPage.sound} />
        </section>
      </section>
      <section id="media">
        <h2>Make the picture mean something</h2>
        <p>{mediaPage.lede}</p>
        {mediaPage.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h3>{section.title}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <section id="caption-pairs">
          <h3>Caption examples</h3>
          {mediaPage.captions.map((pair) => (
            <ExampleComparison key={pair.caption} caption={pair.caption} weak={pair.weak} better={pair.better} />
          ))}
        </section>
      </section>
      <details className="reference" id="types">
        <summary>
          <span className="kicker">Reference</span>
          <h2>Evidence by project type</h2>
        </summary>
        <div className="reference-body">
          <p>Use the row that matches the project. This is a lookup, not a second chapter.</p>
          <div className="type-list">
            {projectTypes.map((type) => (
              <ProjectTypeGuide key={type.id} {...type} />
            ))}
          </div>
        </div>
      </details>
      <ChapterTask id="document" />
    </Page>
  );
}
