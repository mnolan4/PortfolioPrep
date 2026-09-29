import { Link } from "react-router-dom";
import { useAudit } from "../audit/AuditContext";
import { Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { TextField } from "../components/TextField";
import { sprintFields, sprintPage } from "../content/sprint";

export function SprintPage() {
  const { state, setText } = useAudit();
  const started = sprintFields.some((field) => state[field.key].trim()) || state.nextAction.trim();

  return (
    <Page
      title="Portfolio revision sprint"
      lede={sprintPage.lede}
      sections={[
        { id: "choices", label: "Six revisions" },
        { id: "today", label: "Today" },
      ]}
    >
      <Outcomes items={sprintPage.outcomes} />
      {!started ? (
        <p className="empty-banner">Start with the three projects you would show someone first.</p>
      ) : null}
      <div id="choices">
        {sprintFields.map((field) => (
          <TextField
            key={field.key}
            id={`sprint-${field.key}`}
            label={field.label}
            hint={field.hint}
            rows={3}
            value={state[field.key]}
            onChange={(value) => setText(field.key, value)}
          />
        ))}
      </div>
      <section id="today" className="card today-card">
        <h2>{sprintPage.todayLabel}</h2>
        <TextField
          id="sprint-today"
          label="One concrete change"
          hint={sprintPage.todayHint}
          rows={3}
          value={state.nextAction}
          onChange={(value) => setText("nextAction", value)}
        />
        <p>
          The printable reading of these answers is at the bottom of the{" "}
          <Link to="/audit#summary">Portfolio Audit</Link>.
        </p>
      </section>
    </Page>
  );
}
