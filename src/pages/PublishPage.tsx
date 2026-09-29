import { useAudit } from "../audit/AuditContext";
import { Page } from "../components/Page";
import { publishItems } from "../content/publish";

export function PublishPage() {
  const { state, togglePublish } = useAudit();
  const marked = publishItems.filter((item) => state.publishChecks[item.id]).length;

  return (
    <Page
      title="Before you publish"
      lede="Use this when you think the site is ready to send. The checks are about what a visitor can verify."
    >
      <p className="quiet-count">
        {marked} of {publishItems.length} checked. Saved in this browser.
      </p>
      <ul className="checks publish-checks">
        {publishItems.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={Boolean(state.publishChecks[item.id])}
                onChange={(event) => togglePublish(item.id, event.target.checked)}
              />
              <span>{item.label}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="noprint">
        <button type="button" className="button button-secondary" onClick={() => window.print()}>
          Print checklist
        </button>
      </p>
    </Page>
  );
}
