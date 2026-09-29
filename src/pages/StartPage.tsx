import { Link } from "react-router-dom";
import { useAudit } from "../audit/AuditContext";
import { AskYourself, Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { TextField } from "../components/TextField";
import { stages, firstPath } from "../content/nav";
import { start } from "../content/start";

export function StartPage() {
  const { state, setText } = useAudit();

  return (
    <Page title="What is your portfolio for?" lede={start.lede} wide>
      <dl className="home-facts">
        <div>
          <dt>Who it is for</dt>
          <dd>{start.who}</dd>
        </div>
        <div>
          <dt>What you can do</dt>
          <dd>{start.canDo}</dd>
        </div>
      </dl>
      <div className="home-actions">
        <a className="button button-primary" href="#prompts">
          Start your portfolio audit
        </a>
        <Link className="button button-secondary" to="/foundations">
          Explore the guide
        </Link>
      </div>
      <ol className="stage-jump">
        {stages.map((stage, index) => (
          <li key={stage.id}>
            <Link to={firstPath(stage.id)}>
              <span className="num">{String(index + 1).padStart(2, "0")}</span>
              <span className="name">{stage.label}</span>
              <span className="blurb">{stage.blurb}</span>
            </Link>
          </li>
        ))}
      </ol>
      <p>{start.outside}</p>
      <section id="prompts">
        <h2>Start here</h2>
        <Outcomes items={start.outcomes} />
        <p>Portfolio building is iterative. You can rewrite these answers after you test the site with someone else.</p>
        {start.prompts.map((prompt) => (
          <TextField
            key={prompt.id}
            id={prompt.id}
            label={prompt.label}
            hint={prompt.hint}
            rows={3}
            value={state[prompt.key]}
            onChange={(value) => setText(prompt.key, value)}
          />
        ))}
        <TextField
          id="prompt-identity"
          label="Professional identity"
          hint={start.identityHint}
          rows={2}
          value={state.identity}
          onChange={(value) => setText("identity", value)}
        />
        <p className="hint">Answers are saved in this browser and appear in the Portfolio Audit.</p>
      </section>
      <section id="lenses">
        <h2>Directions are lenses</h2>
        <p>{start.lenses}</p>
        <AskYourself items={start.ask} />
      </section>
    </Page>
  );
}
