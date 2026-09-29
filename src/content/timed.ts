import type { NoteBand } from "../audit/types";

export interface TimedCheck {
  id: string;
  label: string;
}

export interface TimedBand {
  id: string;
  note: NoteBand;
  time: string;
  question: string;
  checks: TimedCheck[];
}

export const timedBands: TimedBand[] = [
  {
    id: "ten",
    note: "ten",
    time: "10 seconds",
    question: "Who are you? What kind of work do you make?",
    checks: [
      { id: "ten-who", label: "My name and a direction are visible quickly." },
      { id: "ten-work", label: "The kind of work I make is visible quickly." },
      {
        id: "ten-first",
        label: "The first screen is not a long introduction or a row of software logos.",
      },
    ],
  },
  {
    id: "thirty",
    note: "thirty",
    time: "30 seconds",
    question: "What are your strongest projects? What did you contribute?",
    checks: [
      { id: "thirty-projects", label: "My strongest projects are easy to find." },
      { id: "thirty-role", label: "My role is visible on those projects." },
      {
        id: "thirty-contrib",
        label: "A visitor could say what I contributed without opening another document.",
      },
    ],
  },
  {
    id: "three",
    note: "three",
    time: "3 minutes",
    question: "How do you think? What can you actually do? Why should someone keep exploring?",
    checks: [
      { id: "three-decision", label: "At least one project page shows a decision I changed." },
      {
        id: "three-ability",
        label: "There is evidence of technical, creative, or design ability.",
      },
      { id: "three-personal", label: "It is clear what I personally contributed." },
      { id: "three-more", label: "There is a clear reason to open a second project." },
    ],
  },
];
