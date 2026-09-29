export interface ExamplePerson {
  name: string;
  url: string;
  notice: string;
}

export interface ExampleGroup {
  id: string;
  title: string;
  empty?: string;
  people: ExamplePerson[];
}

export const examplesPage: {
  lede: string;
  note: string;
  groups: ExampleGroup[];
} = {
  lede: "Look at these for evidence, for role, and for whether you can tell what the person makes quickly. Do not copy their visual style.",
  note: "Nothing from these sites is embedded here. Open the page. Read how the work is explained.",
  groups: [
    {
      id: "alumni",
      title: "Alumni",
      people: [
        {
          name: "Andrei Davydov",
          url: "https://andreid2.wordpress.com",
          notice:
            "Selected projects are named, and a line under each title says what the piece is: a co-op ice dance game, an AR app, a VR conversation, a motion-capture dance game.",
        },
        {
          name: "Caroline Dinh",
          url: "https://urlocalcyb.org/",
          notice:
            "The work is filed as traditional, digital, or computational, and the pieces are named. The computational page says those works were scripted, and it separates them from generated images.",
        },
        {
          name: "Leyla Park",
          url: "https://leylapark.framer.website",
          notice:
            "Selected work names the piece and what kind of project it is: re/flection is an interactive installation, ARise is an AR experience. Tools and years sit beside the title, and a case study or project link opens the longer explanation.",
        },
      ],
    },
    {
      id: "faculty",
      title: "Faculty",
      people: [
        {
          name: "Stefano Passeri",
          url: "https://stefanopasseri.com",
          notice:
            "Each project says what the object does. Several pages also show the mechanism, the fabrication, or a collaborator, so a still is not the only evidence.",
        },
        {
          name: "Myungin Lee",
          url: "https://www.myunginlee.com/projects",
          notice:
            "Titles name the system and the setting, so sound, XR, and research are visible without a slash list. Role and the clip live on the project you open.",
        },
        {
          name: "Jun Nishida",
          url: "https://junis.sakura.ne.jp/wp/",
          notice:
            "Paper titles name the device and the question, and a video link sits beside the citation. The author list shows who made the work, including when it was a collaboration.",
        },
        {
          name: "Ian McDermott",
          url: "http://www.ian-mcd.com/",
          notice:
            "The home page lists named projects, from a motion-capture performance to generative sketches. A project page can give the year, the materials, and a link to the code.",
        },
        {
          name: "Matt Nolan",
          url: "https://www.mattnolanart.com",
          notice:
            "Named projects sit in the menu, and a project page says how the work was made: Serveau includes the motors, the drawing, and an augmented layer. The sound and video page gives the year and says who programmed and performed.",
        },
      ],
    },
    {
      id: "mfa",
      title: "MFA Students",
      people: [
        {
          name: "Wednesday Kim",
          url: "https://wednesdaykim.xyz/",
          notice:
            "The first screen is a desktop of images, with her name in the corner. The About page names the media: 3D animation, video, performance, installation, print, and sculpture.",
        },
      ],
    },
    {
      id: "professional",
      title: "Professional artists",
      people: [
        {
          name: "Char Davies",
          url: "https://www.immersence.com/osmose",
          notice:
            "Osmose is described as an encounter: breath and balance move someone through a virtual forest, and an audience can watch. Credits separate direction from the software, the graphics, and the sound.",
        },
        {
          name: "Stelarc",
          url: "https://stelarc.org/projects.php",
          notice:
            "Projects are named for the action or the apparatus, with a span of years, so you can tell what the body and the machine did. A single photograph cannot show a body suspended from hooks, a robotic third hand, or an ear grown on an arm.",
        },
      ],
    },
  ] satisfies ExampleGroup[],
};
