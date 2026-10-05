export interface PortfolioDestination {
  id: string;
  title: string;
  examples: string;
  verify: string;
  adapt: string;
}

export const placesPage: {
  title: string;
  lede: string;
  outcomes: string[];
  intro: string;
  destinations: PortfolioDestination[];
  task: string;
  prompts: string[];
} = {
  title: "Places You Might Send Your Portfolio",
  lede:
    "The same work can serve several audiences, but the same order and explanation will not serve all of them.",
  outcomes: [
    "Recognize the common places that ask for a portfolio.",
    "Decide what each reader needs to verify.",
    "Reorder and reframe the work without rebuilding the whole site.",
  ],
  intro:
    "A portfolio is not only for a job application. It may be read by a curator, admissions committee, funder, client, or future collaborator. Keep one strong body of evidence, then adjust what appears first.",
  destinations: [
    {
      id: "work",
      title: "Jobs and internships",
      examples:
        "Studios, design agencies, game and XR teams, creative technology firms, production companies, and cultural organizations.",
      verify:
        "What you can do now, which parts of a project were yours, whether you can finish work with other people, and whether your skills match the role.",
      adapt:
        "Lead with the projects closest to the position. Make your role, tools, constraints, and contribution easy to scan. Remove unrelated exercises from the opening path.",
    },
    {
      id: "study",
      title: "Graduate programs and research labs",
      examples:
        "MFA, MA, MS, and PhD programs; university labs; research assistantships; and interdisciplinary centers.",
      verify:
        "What questions hold your attention, how you investigate them, how your work is developing, and whether you can explain process as well as results.",
      adapt:
        "Keep experimentation and unresolved questions visible. Connect projects through a direction, not a claim that every project is finished or belongs to one medium.",
    },
    {
      id: "present",
      title: "Festivals, exhibitions, and screenings",
      examples:
        "Film and media festivals, galleries, museums, performance programs, public-art calls, and conference exhibitions.",
      verify:
        "What the audience experiences, what the work requires in a room or program, whether it has been presented before, and whether it fits the curatorial context.",
      adapt:
        "Lead with strong documentation of the finished experience. Include duration, footprint, equipment, accessibility needs, and a short installation or presentation history.",
    },
    {
      id: "develop",
      title: "Residencies and fellowships",
      examples:
        "Artist residencies, studio programs, research fellowships, fabrication programs, and community-based placements.",
      verify:
        "Why this setting matters to the next stage of the work, what you will do with the time and resources, and whether your earlier projects make the proposal credible.",
      adapt:
        "Show the work that proves you can begin the proposed project. State what is already known, what still needs testing, and what the host makes possible.",
    },
    {
      id: "fund",
      title: "Grants, commissions, and open calls",
      examples:
        "Project grants, commissions, production funds, prizes, civic programs, and calls for new work.",
      verify:
        "Whether the idea is clear, feasible, relevant to the call, and supported by evidence that you can deliver it.",
      adapt:
        "Match the language and limits of the call without copying its slogans. Put the most relevant precedent first. Make scale, collaborators, schedule, and current project status legible.",
    },
    {
      id: "connect",
      title: "Clients, collaborators, and collectives",
      examples:
        "Independent clients, performers, musicians, engineers, community partners, artist collectives, and people inviting you into a team.",
      verify:
        "What you bring to a shared project, how you communicate across roles, whether you credit other people clearly, and what working with you might look like.",
      adapt:
        "Foreground collaboration and boundaries of responsibility. Show a useful range, but do not promise every service. Give people a clear way to contact you.",
    },
  ],
  task:
    "Choose two destinations that could realistically receive your portfolio. Compare them before changing the site.",
  prompts: [
    "Which project should appear first for each destination?",
    "How should your opening sentence change for each reader?",
    "What evidence matters to one destination but not the other?",
  ],
};
