import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Outcomes({ items }: { items: string[] }) {
  return (
    <div className="outcomes">
      <p>By the end of this section, you should be able to:</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Callout({
  tone = "note",
  children,
}: {
  tone?: "note" | "try";
  children: ReactNode;
}) {
  return <aside className={`callout callout-${tone}`}>{children}</aside>;
}

export function AskYourself({ items }: { items: string[] }) {
  return (
    <aside className="ask">
      <p className="kicker">Ask yourself</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export function ExampleComparison({
  weak,
  better,
  caption,
}: {
  weak: string;
  better: string;
  caption?: string;
}) {
  return (
    <div className="compare">
      {caption ? <p className="compare-caption">{caption}</p> : null}
      <figure className="compare-col compare-weak">
        <figcaption>Weak</figcaption>
        <blockquote>{weak}</blockquote>
      </figure>
      <figure className="compare-col compare-better">
        <figcaption>Better</figcaption>
        <blockquote>{better}</blockquote>
      </figure>
    </div>
  );
}

export function ProblemCard({
  title,
  problem,
  hurts,
  fix,
}: {
  title: string;
  problem: string;
  hurts: string;
  fix: string;
}) {
  return (
    <article className="card problem-card">
      <h3>{title}</h3>
      <h4>The problem</h4>
      <p>{problem}</p>
      <h4>Why it hurts</h4>
      <p>{hurts}</p>
      <h4>The fix</h4>
      <p>{fix}</p>
    </article>
  );
}

export function ProjectTypeGuide({
  id,
  title,
  show,
  capture,
  explain,
  mistake,
  evidence,
}: {
  id: string;
  title: string;
  show: string;
  capture: string;
  explain: string;
  mistake: string;
  evidence: string;
}) {
  const rows = [
    ["What to show", show],
    ["What to capture", capture],
    ["What to explain", explain],
    ["Common mistake", mistake],
    ["Good evidence", evidence],
  ];
  return (
    <article className="card type-guide" id={id}>
      <h3>{title}</h3>
      <dl>
        {rows.map(([label, text]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function Reminder({ title, to, children }: { title: string; to: string; children: string }) {
  return (
    <aside className="reminder">
      <p>
        <strong>{title}.</strong> {children}
      </p>
      <Link to={to}>Read more</Link>
    </aside>
  );
}

export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav className="section-nav" aria-label="On this page">
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function StepList({ items }: { items: { label: string; text: string }[] }) {
  return (
    <ol className="steps">
      {items.map((item) => (
        <li key={item.label}>
          <span>{item.label}</span>
          {item.text}
        </li>
      ))}
    </ol>
  );
}
