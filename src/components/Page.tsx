import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { guidePages, stageLabel } from "../content/nav";

export function Page({
  title,
  lede,
  wide = false,
  showLocation = true,
  children,
}: {
  title: string;
  lede?: string;
  wide?: boolean;
  showLocation?: boolean;
  children: ReactNode;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${title} · Portfolio Prep`;
  }, [title]);

  const normalizedPathname = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const index = guidePages.findIndex((page) => page.path === normalizedPathname);
  const current = index >= 0 ? guidePages[index] : undefined;
  const prev = index > 0 ? guidePages[index - 1] : undefined;
  const next = index >= 0 && index < guidePages.length - 1 ? guidePages[index + 1] : undefined;

  return (
    <article className={wide ? "page wide" : "page"}>
      <p className="print-banner">Portfolio Prep</p>
      <StageTrail currentPath={current?.path} />
      {showLocation ? (
        <p className="where">
          {current?.stage ? (
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
            "Six Steps to polish your portfolio"
          )}
        </p>
      ) : null}
      <header className="page-head">
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </header>
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
              Portfolio Audit
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
            <span>Home</span>
          </Link>
        )}
      </nav>
    </article>
  );
}

function StageTrail({ currentPath }: { currentPath?: string }) {
  const pages = guidePages.filter((page) => page.path !== "/");
  return (
    <nav className="stage-trail" aria-label="Guide">
      <ol>
        {pages.map((page) => (
          <li key={page.path}>
            <Link to={page.path} aria-current={page.path === currentPath ? "page" : undefined}>
              {page.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
