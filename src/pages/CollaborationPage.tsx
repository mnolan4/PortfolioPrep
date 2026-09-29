import { AskYourself, ExampleComparison, Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { TextField } from "../components/TextField";
import { useAudit } from "../audit/AuditContext";
import { collaboration } from "../content/collaboration";

export function CollaborationPage() {
  const { state, setText } = useAudit();

  return (
    <Page
      title="Collaboration and authorship"
      lede={collaboration.lede}
      wide
      sections={[
        { id: "name", label: "What to name" },
        { id: "rewrite", label: "Rewrite" },
      ]}
    >
      <Outcomes items={collaboration.outcomes} />
      <section id="name">
        <h2>What to name</h2>
        <ul>
          {collaboration.nameThese.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {collaboration.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </section>
      <section id="rewrite">
        <h2>Rewrite the vague contribution</h2>
        {collaboration.pairs.map((pair) => (
          <ExampleComparison key={pair.caption} caption={pair.caption} weak={pair.weak} better={pair.better} />
        ))}
        <TextField
          id="contribution-draft"
          label="Your rewrite"
          hint="Take one vague line from your own portfolio and rewrite it. Saved in this browser with the Portfolio Audit."
          rows={5}
          value={state.authorshipRevision}
          onChange={(value) => setText("authorshipRevision", value)}
        />
      </section>
      <AskYourself items={collaboration.ask} />
    </Page>
  );
}
