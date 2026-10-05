export const processPage = {
  lede: "Documenting process is not a folder of every file you touched. Keep the sequence that shows why a decision changed.",
  outcomes: [
    "Write one decision as problem, decision, prototype, observation, and revision.",
    "Cut process images that do not change what a reader understands.",
  ],
  steps: [
    { label: "Problem", text: "What people could not do, understand, or hear." },
    { label: "Decision", text: "What you chose to try, in one sentence." },
    { label: "Prototype", text: "The rough version that made the decision testable." },
    { label: "Observation", text: "What actually happened when someone used it." },
    { label: "Revision", text: "What you changed, and why that observation required it." },
  ],
  floor: [
    { label: "Problem", text: "Users could not tell where to interact." },
    { label: "Decision", text: "We added a visible interaction zone." },
    { label: "Prototype", text: "A simple glowing floor marker." },
    { label: "Observation", text: "Users found the area but ignored the gesture prompt." },
    { label: "Revision", text: "We replaced the gesture prompt with a physical button." },
  ],
  sound: [
    {
      label: "Problem",
      text: "The binaural mix only made sense on headphones, and the gallery had a speaker pair.",
    },
    {
      label: "Decision",
      text: "Stop rendering that showing for headphones, and write a two-channel version for the room.",
    },
    {
      label: "Prototype",
      text: "The voice stayed on the left speaker until someone stood on a floor mark.",
    },
    {
      label: "Observation",
      text: "People who entered from the right door heard the opening as if it were behind them.",
    },
    {
      label: "Revision",
      text: "The opening cue played from both speakers for ten seconds, then traveled. The door they used stopped mattering.",
    },
  ],
  ask: [
    "If you deleted this process image, would the project page say less? If not, cut it.",
    "Did you write why the decision changed, or only that it changed?",
  ],
};
