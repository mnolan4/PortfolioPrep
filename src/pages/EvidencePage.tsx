import { EvidenceMatrix } from "../components/EvidenceMatrix";
import { Outcomes } from "../components/blocks";
import { Page } from "../components/Page";

export function EvidencePage() {
  return (
    <Page
      title="Portfolio evidence audit"
      lede="What evidence does my portfolio provide about the person who made it?"
      wide
    >
      <Outcomes
        items={[
          "Rate six kinds of evidence without turning the result into a score.",
          "Name a project that could strengthen anything weak or missing.",
        ]}
      />
      <p>
        Not every project needs all six. The set of projects should. Rate what a stranger could verify,
        not what you remember from the lab.
      </p>
      <EvidenceMatrix />
    </Page>
  );
}
