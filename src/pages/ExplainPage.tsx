import { ChapterTask, ExampleComparison, Outcomes, ProjectTypeGuide } from "../components/blocks";
import { Page } from "../components/Page";
import { explainChapter } from "../content/explain";

export function ExplainPage() {
  const hybrid = explainChapter.interdisciplinary;
  return (
    <Page
      title={explainChapter.title}
      lede={explainChapter.lede}
      wide
      sections={[
        { id: "structure", label: "Project page" },
        { id: "pairs", label: "Weak and better" },
        { id: "authorship", label: "Authorship" },
        { id: "name", label: "Credits" },
        { id: "interdisciplinary", label: "Hybrid work" },
        { id: "identity", label: "One sentence" },
        { id: "task", label: "In your notes" },
      ]}
    >
      <Outcomes items={explainChapter.outcomes} />
      <section id="structure">
        <h2>The same parts, every time</h2>
        <dl className="structure-list">
          {explainChapter.structure.map((item) => (
            <div key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section id="pairs">
        <h2>Replace the vague sentence</h2>
        {explainChapter.pairs.map((pair) => (
          <ExampleComparison key={pair.caption} {...pair} />
        ))}
      </section>
      <section id="authorship">
        <h2>{explainChapter.authorship.title}</h2>
        <p>{explainChapter.authorship.lede}</p>
        <section id="name">
          <h3>Name these</h3>
          <ul>
            {explainChapter.authorship.nameThese.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {explainChapter.authorship.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </section>
        {explainChapter.authorship.pairs.map((pair) => (
          <ExampleComparison key={pair.caption} {...pair} />
        ))}
      </section>
      <section id="interdisciplinary">
        <h2>{hybrid.title}</h2>
        <section id="identity">
          {hybrid.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <section id="sentence">
          <h3>Field, role, and the combination</h3>
          {hybrid.pairs.map((pair) => (
            <ExampleComparison key={pair.caption} {...pair} />
          ))}
        </section>
        <section id="field">
          <h3>One image cannot hold it</h3>
          <ul>
            {hybrid.show.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section id="roles">
          <ProjectTypeGuide {...hybrid.guide} />
        </section>
        <div id="document" />
        <div id="language" />
      </section>
      <ChapterTask id="explain" />
    </Page>
  );
}
