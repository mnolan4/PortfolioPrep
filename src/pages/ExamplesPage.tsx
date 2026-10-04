import { Page } from "../components/Page";
import { examplesPage } from "../content/examples";

export function ExamplesPage() {
  return (
    <Page
      title="Examples"
      lede={examplesPage.lede}
      wide
      sections={examplesPage.groups.map((group) => ({ id: group.id, label: group.title }))}
    >
      {examplesPage.groups.map((group) => (
        <section key={group.id} id={group.id}>
          <h2>{group.title}</h2>
          {group.people.length === 0 ? (
            <p>{group.empty}</p>
          ) : (
            <div className="type-list">
              {group.people.map((person) => (
                <article key={person.url} className="card example-entry">
                  <h3>{person.name}</h3>
                  <p>
                    <a href={person.url} target="_blank" rel="noopener noreferrer">
                      {person.url}
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}
    </Page>
  );
}
