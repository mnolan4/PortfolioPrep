export const technical = {
  lede: "The portfolio is itself a project. These are the practical habits that keep a reader from bouncing off it.",
  outcomes: [
    "Check the site the way a stranger will: on a phone, with sound, without guessing.",
    "Leave a record that still makes sense when the interactive build no longer runs.",
  ],
  sections: [
    {
      id: "phone",
      title: "Phones and small screens",
      paragraphs: [
        "Open the site on a phone before you send the link. The projects have to be on the first screen. A simpler layout is fine. Hiding the work is not.",
        "Check that video controls are visible, that text is not sitting on top of a photograph, and that you can reach contact information without hunting.",
      ],
    },
    {
      id: "access",
      title: "Accessibility basics",
      paragraphs: [
        "Write alt text for what the image shows about the project, not “screenshot 3.” If a diagram is complex, let the caption carry the meaning and point the alt text at that caption.",
        "Caption videos. Transcribe speech when the words matter. A music cue does not need a transcript. A research interview does.",
        "Use type you can read for three minutes, and put captions on a solid ground. Pale gray on a photograph fails. Anything you can operate with a mouse should also work from a keyboard, with a visible focus.",
      ],
    },
    {
      id: "files",
      title: "Video, audio, and loading",
      paragraphs: [
        "Export a 1080p file for the page and keep a heavier master offline. A 400 MB upload will not make the tracking look more precise, and it will make the page feel broken.",
        "Compress until the motion and the type in the image are still clear. Test on a normal connection, not only on campus wifi.",
      ],
    },
    {
      id: "contact",
      title: "Name, contact, résumé, links",
      paragraphs: [
        "Put an email on the site. A contact form that goes nowhere is worse than an address. A simple domain is enough. A clever domain that hides your name is not. The URL should be easy to say in a hallway.",
        "Link a current résumé as a file. Match the project names to the portfolio. Click every project, every video, and the résumé before you send the URL to anyone.",
      ],
    },
    {
      id: "github",
      title: "GitHub supports the project page",
      paragraphs: [
        "A repository can show the code. It does not replace the project page. Say what the code does, what you wrote, and how to run it.",
        "A stranger should not have to open the repo to learn what the project was.",
      ],
    },
    {
      id: "archive",
      title: "When the demo dies, and when work gets old",
      paragraphs: [
        "Quest builds, local servers, and Max patches will break. Keep the video, the diagram, and the writing. Label the build as no longer running, and leave the evidence up.",
        "When you take a project off the front, you can keep a short archive labeled as earlier work. Do not give it the same size as the projects you want read.",
      ],
    },
  ],
  ask: ["What evidence supports the claim that I know this tool?"],
};
