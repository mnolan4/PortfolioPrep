import { Outcomes, Panel } from "../components/blocks";
import { Page } from "../components/Page";
import { placesPage } from "../content/places";

export function PlacesPage() {
  return (
    <Page
      title={placesPage.title}
      lede={placesPage.lede}
      wide
      showLocation={false}
      sections={[
        ...placesPage.destinations.map((destination) => ({
          id: destination.id,
          label: destination.title,
        })),
        { id: "task", label: "In your notes" },
      ]}
    >
      <Outcomes items={placesPage.outcomes} />
      <Panel title="Keep one body of evidence">
        <p>{placesPage.intro}</p>
      </Panel>
      <section>
        <h2>Common destinations</h2>
        <div className="panel-grid">
          {placesPage.destinations.map((destination) => (
            <Panel key={destination.id} id={destination.id} title={destination.title}>
              <p>{destination.examples}</p>
              <h4>What they need to verify</h4>
              <p>{destination.verify}</p>
              <h4>How to adapt the portfolio</h4>
              <p>{destination.adapt}</p>
            </Panel>
          ))}
        </div>
      </section>
      <Panel as="section" id="task" tone="blue" title="In your own notes" heading="h2">
        <p className="kicker">Compare</p>
        <p>{placesPage.task}</p>
        <ul className="prompt-list">
          {placesPage.prompts.map((prompt) => (
            <li key={prompt}>{prompt}</li>
          ))}
        </ul>
      </Panel>
    </Page>
  );
}
