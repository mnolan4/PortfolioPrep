import { Link } from "react-router-dom";
import { ChapterTask, Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { defineChapter } from "../content/define";
import { firstPath, stages } from "../content/nav";

export function DefinePage() {
  return (
    <Page
      title={defineChapter.title}
      lede={defineChapter.lede}
      wide
      sections={[
        { id: "audience", label: "Who it is for" },
        { id: "evidence", label: "Evidence" },
        { id: "outside", label: "An outside reader" },
        { id: "lenses", label: "Lenses" },
        { id: "task", label: "In your notes" },
      ]}
    >
      <dl className="home-facts">
        <div>
          <dt>Who it is for</dt>
          <dd>{defineChapter.who}</dd>
        </div>
        <div>
          <dt>What you can do</dt>
          <dd>{defineChapter.canDo}</dd>
        </div>
      </dl>
      <ol className="stage-jump">
        {stages.map((stage, index) => (
          <li key={stage.id}>
            <Link to={firstPath(stage.id)}>
              <span className="num">{String(index + 1).padStart(2, "0")}</span>
              <span className="name">{stage.label}</span>
              <span className="blurb">{stage.blurb}</span>
            </Link>
          </li>
        ))}
      </ol>
      <section id="audience">
        <h2>Who it is for</h2>
        <Outcomes items={defineChapter.outcomes} />
        <p>{defineChapter.outside}</p>
      </section>
      <section id="evidence">
        <h2>{defineChapter.evidence.title}</h2>
        {defineChapter.evidence.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <h2 id="think">{defineChapter.both.title}</h2>
        {defineChapter.both.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section id="outside">
        <h2>{defineChapter.outsideReader.title}</h2>
        {defineChapter.outsideReader.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {defineChapter.principles.map((principle) => (
          <section key={principle.id} id={principle.id}>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
            <p>
              <Link to={principle.to}>Continue</Link>
            </p>
          </section>
        ))}
      </section>
      <section id="lenses">
        <h2>Directions are lenses</h2>
        <p>{defineChapter.lenses}</p>
      </section>
      <ChapterTask id="define" />
    </Page>
  );
}
