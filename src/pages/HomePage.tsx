import { Link } from "react-router-dom";
import { Outcomes, Panel } from "../components/blocks";
import { Page } from "../components/Page";
import { homePage } from "../content/home";
import { guidePages } from "../content/nav";

export function HomePage() {
  return (
    <Page
      title={homePage.title}
      lede={homePage.lede}
      wide
      showLocation={false}
      sections={[
        { id: "for", label: "Who this site is for" },
        { id: "guide", label: "The guide" },
        { id: "how", label: "How to use it" },
        { id: "made", label: "How it was made" },
      ]}
    >
      <Panel id="for" title={homePage.for.title} heading="h2">
        <p>{homePage.for.text}</p>
      </Panel>
      <Panel id="guide" title="The guide" heading="h2">
        <ol className="stage-jump">
          {guidePages
            .filter((page) => page.purpose)
            .map((page, index) => (
              <li key={page.path}>
                <Link to={page.path}>
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="name">{page.label}</span>
                  <span className="blurb">{page.purpose}</span>
                </Link>
              </li>
            ))}
          <li>
            <Link to="/audit">
              <span className="num">09</span>
              <span className="name">Portfolio Audit</span>
              <span className="blurb">Prompts for your own notes.</span>
            </Link>
          </li>
        </ol>
      </Panel>
      <Panel tone="blue" title="What you can do" heading="h2">
        <p>{homePage.canDo}</p>
      </Panel>
      <Outcomes items={homePage.outcomes} />
      <div className="panel-grid">
        <Panel title={homePage.isNot.title} heading="h2">
          <p>{homePage.isNot.text}</p>
        </Panel>
        <Panel id="how" title={homePage.how.title} heading="h2">
          <p>{homePage.how.text}</p>
        </Panel>
      </div>
      <Panel id="made" title={homePage.made.title} heading="h2">
        {homePage.made.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Panel>
    </Page>
  );
}
