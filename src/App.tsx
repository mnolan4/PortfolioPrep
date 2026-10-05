import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CuratePage } from "./pages/CuratePage";
import { DefinePage } from "./pages/DefinePage";
import { DocumentPage } from "./pages/DocumentPage";
import { ExamplesPage } from "./pages/ExamplesPage";
import { ExplainPage } from "./pages/ExplainPage";
import { LegacyRedirect } from "./pages/LegacyRedirect";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PlacesPage } from "./pages/PlacesPage";
import { RevisePage } from "./pages/RevisePage";
import { SelfAuditPage } from "./pages/SelfAuditPage";
import { TestPage } from "./pages/TestPage";
import { legacyPaths } from "./content/nav";

export function App() {
  return (
    <BrowserRouter basename="/PortfolioPrep">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DefinePage />} />
          <Route path="places" element={<PlacesPage />} />
          <Route path="curate" element={<CuratePage />} />
          <Route path="examples" element={<ExamplesPage />} />
          <Route path="document" element={<DocumentPage />} />
          <Route path="explain" element={<ExplainPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="revise" element={<RevisePage />} />
          <Route path="audit" element={<SelfAuditPage />} />
          {legacyPaths.map((path) => (
            <Route key={path} path={path.slice(1)} element={<LegacyRedirect />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
