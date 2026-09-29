import { AskYourself, Callout, Outcomes, ProjectTypeGuide, Reminder } from "../components/blocks";
import { Page } from "../components/Page";
import { documentPage, projectTypes } from "../content/document";

export function DocumentPage() {
  return (
    <Page
      title="Document immersive work"
      lede={documentPage.lede}
      wide
      sections={projectTypes.map((item) => ({ id: item.id, label: item.title }))}
    >
      <Outcomes items={documentPage.outcomes} />
      <Reminder title="Show evidence of the experience" to="/foundations#evidence">
        A screenshot of the software is rarely enough on its own.
      </Reminder>
      <Callout tone="try">
        <p className="kicker">Try this</p>
        <p>{documentPage.tryThis}</p>
      </Callout>
      <div className="type-list">
        {projectTypes.map((item) => (
          <ProjectTypeGuide key={item.id} {...item} />
        ))}
      </div>
      <AskYourself items={documentPage.ask} />
    </Page>
  );
}
