import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { firstPath, guidePages, stageLabel, stages, type StageId } from "../content/nav";
import { SectionNav } from "./blocks";

export function Page({
  title,
  lede,
  wide = false,
  sections,
  children,
}: {
  title: string;
  lede?: string;
  wide?: boolean;
  sections?: { id: string; label: string }[];
  children: ReactNode;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${title} · Portfolio Prep`;
  }, [title]);

  const index = guidePages.findIndex((page) => page.path === pathname);
  const current = index >= 0 ? guidePages[index] : undefined;
  const prev = index > 0 ? guidePages[index - 1] : undefined;
  const next = index >= 0 && index < guidePages.length - 1 ? guidePages[index + 1] : undefined;

  return (
    <article className={wide ? "page wide" : "page"}>
      <p className="print-banner">Portfolio Prep</p>
      <StageTrail current={current?.stage} />
      <p className="where">
        {current ? (
          current.label === stageLabel(current.stage) ? (
            stageLabel(current.stage)
          ) : (
            <>
              {stageLabel(current.stage)}
              <span aria-hidden="true"> · </span>
              {current.label}
            </>
          )
        ) : (
          "Self-Audit · prompts for your own notes"
        )}
      </p>
      <header className="page-head">
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </header>
      {sections && sections.length > 0 ? <SectionNav items={sections} /> : null}
      <div className="page-body">{children}</div>
      <nav className="page-end noprint" aria-label="Continue">
        {current ? (
          <>
            {prev ? (
              <Link to={prev.path} className="page-end-prev">
                Previous
                <span>{prev.label}</span>
              </Link>
            ) : (
              <span />
            )}
            <Link to="/audit" className="page-end-audit">
              Self-Audit
            </Link>
            {next ? (
              <Link to={next.path} className="page-end-next">
                Next
                <span>{next.label}</span>
              </Link>
            ) : (
              <span />
            )}
          </>
        ) : (
          <Link to="/" className="page-end-next">
            Return
            <span>Define</span>
          </Link>
        )}
      </nav>
    </article>
  );
}

function StageTrail({ current }: { current?: StageId }) {
  return (
    <nav className="stage-trail" aria-label="Stages">
      <ol>
        {stages.map((stage) => (
          <li key={stage.id}>
            <Link to={firstPath(stage.id)} aria-current={stage.id === current ? "step" : undefined}>
              {stage.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
