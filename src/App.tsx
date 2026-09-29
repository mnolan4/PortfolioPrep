import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuditProvider } from "./audit/AuditContext";
import { Layout } from "./components/Layout";
import { AuditPage } from "./pages/AuditPage";
import { CollaborationPage } from "./pages/CollaborationPage";
import { CritiquePage } from "./pages/CritiquePage";
import { DocumentPage } from "./pages/DocumentPage";
import { EvidencePage } from "./pages/EvidencePage";
import { ExamplesPage } from "./pages/ExamplesPage";
import { FoundationsPage } from "./pages/FoundationsPage";
import { InterdisciplinaryPage } from "./pages/InterdisciplinaryPage";
import { MediaPage } from "./pages/MediaPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProblemsPage } from "./pages/ProblemsPage";
import { ProcessPage } from "./pages/ProcessPage";
import { ProjectPagesPage } from "./pages/ProjectPagesPage";
import { PublishPage } from "./pages/PublishPage";
import { SprintPage } from "./pages/SprintPage";
import { StartPage } from "./pages/StartPage";
import { TechnicalPage } from "./pages/TechnicalPage";
import { ToolsPage } from "./pages/ToolsPage";
import { TimedTestPage } from "./pages/TimedTestPage";

export function App() {
  return (
    <AuditProvider>
      <BrowserRouter basename="/PortfolioPrep">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<StartPage />} />
            <Route path="foundations" element={<FoundationsPage />} />
            <Route path="problems" element={<ProblemsPage />} />
            <Route path="examples" element={<ExamplesPage />} />
            <Route path="document" element={<DocumentPage />} />
            <Route path="process" element={<ProcessPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="project-pages" element={<ProjectPagesPage />} />
            <Route path="collaboration" element={<CollaborationPage />} />
            <Route path="interdisciplinary" element={<InterdisciplinaryPage />} />
            <Route path="timed-test" element={<TimedTestPage />} />
            <Route path="evidence" element={<EvidencePage />} />
            <Route path="critique" element={<CritiquePage />} />
            <Route path="sprint" element={<SprintPage />} />
            <Route path="publish" element={<PublishPage />} />
            <Route path="technical" element={<TechnicalPage />} />
            <Route path="tools" element={<ToolsPage />} />
            <Route path="audit" element={<AuditPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuditProvider>
  );
}
