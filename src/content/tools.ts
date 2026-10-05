export interface ToolOption {
  id: string;
  name: string;
  goodFor: string;
  weak: string;
}

export const toolsPage = {
  lede: "Pick a home a stranger can open. The tool should show the work. It should not become the work.",
  outcomes: [
    "Choose one public home, and know what that home is bad at.",
    "Keep long video and code off the front page, and link to them.",
    "Use a domain you can say out loud, and a résumé that matches the projects.",
  ],
  frontDoor: {
    title: "A support file is not the front door",
    paragraphs: [
      "A GitHub profile, a drive folder, a Behance page, or a course blog can hold drafts, code, and class files. They can support a portfolio. They should not be the only front door.",
      "A reader should not have to request access, guess which repository to open, or already be in the class.",
    ],
  },
  optionsIntro:
    "None of these is the one correct platform. Each is a tradeoff of cost, video and sound, design control, maintenance, and how hard it is to leave.",
  options: [
    {
      id: "pages",
      name: "A small site on GitHub Pages, or a similar static host",
      goodFor:
        "You want control, and you will maintain the pages. A public site can be free. You keep the files, and you decide the order of the work.",
      weak:
        "You have to keep it updated. A README in a repository is not the site. Do not put long video in the repo: the page gets slow, and the history gets heavy. If you will not open the HTML, choose a tool you will actually use.",
    },
    {
      id: "cargo",
      name: "Cargo",
      goodFor:
        "An image-led artist site you can publish without building a stack. Project pages are straightforward.",
      weak:
        "A template can make every project look the same, and long writing, sound, and video are easy to skip. It is a paid host. If you leave, you rebuild the pages. Fine as a home when the projects are still easy to find by name.",
    },
    {
      id: "adobe",
      name: "Adobe Portfolio",
      goodFor:
        "A simple project site when you already have a Creative Cloud plan and you need pages up soon.",
      weak:
        "Design control is limited. If the subscription lapses, the site can go with it. A sound piece, a paper, or a room is awkward when the template expects a grid of images.",
    },
    {
      id: "squarespace",
      name: "Squarespace or Format",
      goodFor:
        "A paid site with a clear menu, a contact page, and a résumé file. Format is built around art and photography. Squarespace is a general builder that can hold the same structure.",
      weak:
        "The subscription is a real cost for a student, and leaving means rebuilding. Templates look finished before the projects are explained. Pay for it if you will use the contact page and keep the work current.",
    },
    {
      id: "design",
      name: "Readymag, Framer, or Semplice",
      goodFor:
        "Layout, when the sequence of images, text, and video is part of how you explain a project. You get more control than a standard template.",
      weak:
        "A beautiful site where the work is hard to find. If a visitor cannot name the projects from the first screen, the design is in the way. These tools cost money, and the pages do not leave cleanly. Hidden titles, missing roles, and clips with no captions fail the same test as a folder of stills.",
    },
    {
      id: "artstation",
      name: "ArtStation",
      goodFor:
        "Games and technical art audiences. Models, materials, lighting, real-time stills, and a reel have a place people in that field already look.",
      weak:
        "A weak choice as the only home for installation, sound, or research. The format wants images and a breakdown. A room, a composition, or a study gets cropped into a thumbnail. Link it when that audience matters. Do not make it the whole practice.",
    },
    {
      id: "itch",
      name: "itch.io",
      goodFor: "A playable game. Someone can play in the browser or download a build.",
      weak:
        "It is not the whole portfolio. A page there does not explain an installation, a paper, or your role across projects. Use it as the play link from a project page.",
    },
    {
      id: "video",
      name: "Vimeo, or YouTube if you need a free host",
      goodFor:
        "Video, so the portfolio stays fast. Embed a short clip. Keep the heavy master somewhere else.",
      weak:
        "A channel is not a portfolio. It does not state your role, and a stranger should not scrub a long upload to find the project. Title the video with the project name. The portfolio link should still open without an account.",
    },
    {
      id: "domain",
      name: "A custom domain and a downloadable résumé",
      goodFor:
        "A URL you can say in a hallway, with your name in it, and a résumé file that uses the same project titles as the site.",
      weak:
        "A clever domain that hides your name. A résumé that lists different work than the site. The domain is a yearly cost at a registrar. Update the file when the portfolio changes. It is not a second brand.",
    },
  ] satisfies ToolOption[],
  tryThis:
    "Pick one home. Put your strongest three projects on it. For each, write the sentence, your role, and one piece of evidence. Link out for the long video and the code. Then send the URL to someone outside the program and ask what they think you make.",
};
