import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useAudit } from "../audit/AuditContext";
import { completion } from "../audit/storage";
import { navGroups } from "../content/nav";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

export function Layout() {
  const [open, setOpen] = useState(false);
  const mobile = useMediaQuery("(max-width: 860px)");
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const first = useRef(true);
  const { state, status } = useAudit();
  const progress = completion(state);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setOpen(false);
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const saveText =
    status === "error" ? "This browser blocked saving." : status === "saved" ? "Saved." : "";

  return (
    <div className="app">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="topbar">
        <Link to="/" className="topbar-title">
          Portfolio Prep
        </Link>
        <div className="topbar-actions">
          <Link to="/audit" className="topbar-audit">
            Portfolio Audit
          </Link>
          <button
            ref={menuRef}
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      {open ? (
        <button type="button" className="backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
      ) : null}
      <div className="sidebar" id="site-nav" inert={mobile && !open ? true : undefined}>
        <div className="sidebar-scroll">
          <button ref={closeRef} type="button" className="sidebar-close" onClick={() => setOpen(false)}>
            Close menu
          </button>
          <Link to="/" className="site-title">
            Portfolio Prep
          </Link>
          <p className="site-tag">A guide for immersive media portfolios.</p>
          <nav aria-label="Guide">
            {navGroups().map((group) => (
              <div key={group.id} className="nav-group">
                <p className="nav-label" id={`nav-${group.id}`}>
                  {group.label}
                </p>
                <ul aria-labelledby={`nav-${group.id}`}>
                  {group.items.map((item) => (
                    <li key={item.path}>
                      <NavLink to={item.path} end={item.path === "/"}>
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="audit-dock">
          <NavLink to="/audit">
            Portfolio Audit
            <span>
              {progress.filled === 0 ? "Not started" : `${progress.filled} of ${progress.total} started`}
            </span>
          </NavLink>
          <p className="save-permanent">Answers are saved in this browser.</p>
        </div>
      </div>
      {saveText ? (
        <p className="save-toast" role="status">
          {saveText}
        </p>
      ) : null}
      <main id="content" className="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}
