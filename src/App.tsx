import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuditProvider } from "./audit/AuditContext";
import { Layout } from "./components/Layout";
import { AuditPage } from "./pages/AuditPage";
import { CollaborationPage } from "./pages/CollaborationPage";
import { CritiquePage } from "./pages/CritiquePage";
import { DocumentPage } from "./pages/DocumentPage";
import { EvidencePage } from "./pages/EvidencePage";
import { FoundationsPage } from "./pages/FoundationsPage";
import { MediaPage } from "./pages/MediaPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProblemsPage } from "./pages/ProblemsPage";
import { ProcessPage } from "./pages/ProcessPage";
import { ProjectPagesPage } from "./pages/ProjectPagesPage";
import { PublishPage } from "./pages/PublishPage";
import { SprintPage } from "./pages/SprintPage";
import { StartPage } from "./pages/StartPage";
import { TechnicalPage } from "./pages/TechnicalPage";
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
            <Route path="document" element={<DocumentPage />} />
            <Route path="process" element={<ProcessPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="project-pages" element={<ProjectPagesPage />} />
            <Route path="collaboration" element={<CollaborationPage />} />
            <Route path="timed-test" element={<TimedTestPage />} />
            <Route path="evidence" element={<EvidencePage />} />
            <Route path="critique" element={<CritiquePage />} />
            <Route path="sprint" element={<SprintPage />} />
            <Route path="publish" element={<PublishPage />} />
            <Route path="technical" element={<TechnicalPage />} />
            <Route path="audit" element={<AuditPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuditProvider>
  );
}
