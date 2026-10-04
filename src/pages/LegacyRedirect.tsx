import { Navigate, useLocation } from "react-router-dom";

const targets: Record<string, string> = {
  "/foundations": "/",
  "/problems": "/curate",
  "/process": "/document",
  "/media": "/document",
  "/project-pages": "/explain",
  "/collaboration": "/explain",
  "/interdisciplinary": "/explain",
  "/timed-test": "/test",
  "/evidence": "/test",
  "/critique": "/test",
  "/sprint": "/revise",
  "/publish": "/revise",
  "/technical": "/revise",
  "/tools": "/revise",
};

export function LegacyRedirect() {
  const { pathname, hash } = useLocation();
  const base = targets[pathname] ?? "/";
  const nextHash = hash || defaultHash(pathname);
  return <Navigate to={`${base}${nextHash}`} replace />;
}

function defaultHash(pathname: string): string {
  if (pathname === "/media") return "#media";
  if (pathname === "/collaboration") return "#authorship";
  if (pathname === "/interdisciplinary") return "#interdisciplinary";
  if (pathname === "/evidence") return "#evidence";
  if (pathname === "/critique") return "#critique";
  if (pathname === "/publish") return "#publish";
  if (pathname === "/technical") return "#technical";
  if (pathname === "/tools") return "#tools";
  if (pathname === "/process") return "#process";
  return "";
}
