import { Panel } from "../components/blocks";
import { Page } from "../components/Page";
import { examplesPage } from "../content/examples";

export function ExamplesPage() {
  return (
    <Page
      title="Learn from how artists present their work."
      wide
      showLocation={false}
    >
      {examplesPage.groups.map((group) => (
        <section key={group.id} id={group.id}>
          <h2>{group.title}</h2>
          {group.people.length === 0 ? (
            <p>{group.empty}</p>
          ) : (
            <div className="panel-grid">
              {group.people.map((person) => (
                <Panel key={person.url} compact title={person.name}>
                  <p>
                    <a href={person.url} target="_blank" rel="noopener noreferrer">
                      {person.url}
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </p>
                </Panel>
              ))}
            </div>
          )}
        </section>
      ))}
    </Page>
  );
}
