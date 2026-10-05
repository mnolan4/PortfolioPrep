import { Outcomes } from "../components/blocks";
import { Page } from "../components/Page";
import { placesPage } from "../content/places";

export function PlacesPage() {
  return (
    <Page
      title={placesPage.title}
      lede={placesPage.lede}
      wide
      sections={[
        ...placesPage.destinations.map((destination) => ({
          id: destination.id,
          label: destination.title,
        })),
        { id: "task", label: "In your notes" },
      ]}
    >
      <Outcomes items={placesPage.outcomes} />
      <p>{placesPage.intro}</p>
      <section>
        <h2>Common destinations</h2>
        <div className="type-list">
          {placesPage.destinations.map((destination) => (
            <article key={destination.id} id={destination.id} className="card option-card">
              <h3>{destination.title}</h3>
              <p>{destination.examples}</p>
              <h4>What they need to verify</h4>
              <p>{destination.verify}</p>
              <h4>How to adapt the portfolio</h4>
              <p>{destination.adapt}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="task" id="task">
        <p className="kicker">Compare</p>
        <h2>In your own notes</h2>
        <p>{placesPage.task}</p>
        <ul className="prompt-list">
          {placesPage.prompts.map((prompt) => (
            <li key={prompt}>{prompt}</li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
