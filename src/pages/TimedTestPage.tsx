import { useAudit } from "../audit/AuditContext";
import { Page } from "../components/Page";
import { TextField } from "../components/TextField";
import { timedBands } from "../content/timed";

export function TimedTestPage() {
  const { state, toggleTimed, setTimedNote } = useAudit();
  const total = timedBands.reduce((sum, band) => sum + band.checks.length, 0);
  const marked = timedBands.reduce(
    (sum, band) => sum + band.checks.filter((check) => state.timedChecks[check.id]).length,
    0,
  );

  return (
    <Page
      title="The 10-second / 30-second / 3-minute test"
      lede="Open your portfolio beside this page. Use the time in the label, then mark only what was actually true."
      sections={timedBands.map((band) => ({ id: band.id, label: band.time }))}
    >
      <p className="quiet-count">
        {marked} of {total} checks marked.
      </p>
      {timedBands.map((band) => (
        <section key={band.id} id={band.id} className="card band">
          <p className="kicker">{band.time}</p>
          <h2>{band.question}</h2>
          <ul className="checks">
            {band.checks.map((check) => (
              <li key={check.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={Boolean(state.timedChecks[check.id])}
                    onChange={(event) => toggleTimed(check.id, event.target.checked)}
                  />
                  <span>{check.label}</span>
                </label>
              </li>
            ))}
          </ul>
          <TextField
            id={`note-${band.id}`}
            label="Revision note"
            hint="What should change, in one or two sentences?"
            rows={3}
            value={state.timedNotes[band.note]}
            onChange={(value) => setTimedNote(band.note, value)}
          />
        </section>
      ))}
    </Page>
  );
}
