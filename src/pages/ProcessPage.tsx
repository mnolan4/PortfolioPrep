import { AskYourself, Outcomes, StepList } from "../components/blocks";
import { Page } from "../components/Page";
import { processPage } from "../content/process";

export function ProcessPage() {
  return (
    <Page
      title="Show your process"
      lede={processPage.lede}
      sections={[
        { id: "framework", label: "Framework" },
        { id: "floor", label: "Floor marker" },
        { id: "sound", label: "A sound revision" },
      ]}
    >
      <Outcomes items={processPage.outcomes} />
      <section id="framework">
        <h2>Problem, decision, prototype, observation, revision</h2>
        <StepList items={processPage.steps} />
        <p>
          “We changed it” is not a reason. “People found the zone and ignored the gesture, so the gesture
          became a button” is.
        </p>
      </section>
      <section id="floor" className="card example-story">
        <h2>An installation example</h2>
        <StepList items={processPage.floor} />
      </section>
      <section id="sound" className="card example-story">
        <h2>A sound example</h2>
        <p>Same framework, different room. The revision names why the first decision was not enough.</p>
        <StepList items={processPage.sound} />
      </section>
      <AskYourself items={processPage.ask} />
    </Page>
  );
}
