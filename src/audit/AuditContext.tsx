import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { emptyState, loadState, saveState } from "./storage";
import type { AuditState, EvidenceId, NoteBand, Rating, TextKey } from "./types";

type Status = "idle" | "saved" | "error";

interface AuditApi {
  state: AuditState;
  status: Status;
  setText: (key: TextKey, value: string) => void;
  setStrongest: (index: 0 | 1 | 2, value: string) => void;
  toggleTimed: (id: string, checked: boolean) => void;
  setTimedNote: (band: NoteBand, value: string) => void;
  setRating: (id: EvidenceId, rating: Rating) => void;
  setEvidenceNote: (id: EvidenceId, value: string) => void;
  togglePublish: (id: string, checked: boolean) => void;
  clear: () => void;
}

const AuditContext = createContext<AuditApi | null>(null);

export function AuditProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuditState>(() => loadState());
  const [status, setStatus] = useState<Status>("idle");
  const skipSave = useRef(true);

  useEffect(() => {
    if (skipSave.current) {
      skipSave.current = false;
      return;
    }
    const ok = saveState(state);
    setStatus(ok ? "saved" : "error");
    if (!ok) return;
    const timer = window.setTimeout(() => setStatus("idle"), 1600);
    return () => window.clearTimeout(timer);
  }, [state]);

  const api: AuditApi = {
    state,
    status,
    setText: (key, value) => setState((current) => ({ ...current, [key]: value })),
    setStrongest: (index, value) =>
      setState((current) => {
        const strongest: [string, string, string] = [...current.strongest];
        strongest[index] = value;
        return { ...current, strongest };
      }),
    toggleTimed: (id, checked) =>
      setState((current) => ({
        ...current,
        timedChecks: { ...current.timedChecks, [id]: checked },
      })),
    setTimedNote: (band, value) =>
      setState((current) => ({
        ...current,
        timedNotes: { ...current.timedNotes, [band]: value },
      })),
    setRating: (id, rating) =>
      setState((current) => ({
        ...current,
        evidenceRatings: { ...current.evidenceRatings, [id]: rating },
      })),
    setEvidenceNote: (id, value) =>
      setState((current) => ({
        ...current,
        evidenceNotes: { ...current.evidenceNotes, [id]: value },
      })),
    togglePublish: (id, checked) =>
      setState((current) => ({
        ...current,
        publishChecks: { ...current.publishChecks, [id]: checked },
      })),
    clear: () => setState(emptyState()),
  };

  return <AuditContext.Provider value={api}>{children}</AuditContext.Provider>;
}

export function useAudit(): AuditApi {
  const value = useContext(AuditContext);
  if (!value) throw new Error("useAudit must be used within AuditProvider");
  return value;
}
