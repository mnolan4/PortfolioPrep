import { Link } from "react-router-dom";
import type { ElementType, ReactNode } from "react";
import { selfAuditStages, type SelfAuditStage } from "../content/self-audit";

export function Panel({
  as: Tag = "article",
  id,
  tone = "green",
  title,
  heading: Heading = "h3",
  index,
  compact = false,
  children,
}: {
  as?: ElementType;
  id?: string;
  tone?: "green" | "blue";
  title?: string;
  heading?: "h2" | "h3";
  index?: string;
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={`panel panel-${tone}${compact ? " panel-compact" : ""}`}
    >
      {index ? (
        <span className="panel-index" aria-hidden="true">
          {index}
        </span>
      ) : null}
      {title ? <Heading className="panel-title">{title}</Heading> : null}
      <div className="panel-body">{children}</div>
    </Tag>
  );
}

export function Outcomes({ items }: { items: string[] }) {
  return (
    <Panel tone="blue" title="By the end of this section, you should be able to:">
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Panel>
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
  index,
}: {
  title: string;
  problem: string;
  hurts: string;
  fix: string;
  index?: number;
}) {
  return (
    <Panel title={title} index={index ? `Field note · ${String(index).padStart(2, "0")}` : undefined}>
      <h4>The problem</h4>
      <p>{problem}</p>
      <h4>Why it hurts</h4>
      <p>{hurts}</p>
      <h4>The fix</h4>
      <p>{fix}</p>
    </Panel>
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
    <Panel id={id} title={title}>
      <dl className="type-guide">
        {rows.map(([label, text]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </Panel>
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

export function ChapterTask({ id }: { id: SelfAuditStage["id"] }) {
  const stage = selfAuditStages.find((item) => item.id === id);
  if (!stage) return null;
  return (
    <Panel as="section" id="task" tone="blue" title="In your own notes" heading="h2">
      <p className="kicker">{stage.verb}</p>
      <p>{stage.task}</p>
      <ul className="prompt-list">
        {stage.prompts.map((prompt) => (
          <li key={prompt}>{prompt}</li>
        ))}
      </ul>
      <p>
        <Link to={`/audit#${stage.id}`}>All the prompts are on the Portfolio Audit.</Link>
      </p>
    </Panel>
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
