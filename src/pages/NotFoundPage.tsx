import { Link } from "react-router-dom";
import { Page } from "../components/Page";

export function NotFoundPage() {
  return (
    <Page title="That page is not in the guide">
      <p>
        The address does not match a section. Go back to <Link to="/">Define</Link> or open the{" "}
        <Link to="/audit">Self-Audit</Link>.
      </p>
    </Page>
  );
}
