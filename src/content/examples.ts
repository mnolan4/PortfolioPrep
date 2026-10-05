export interface ExamplePerson {
  name: string;
  url: string;
}

export interface ExampleGroup {
  id: string;
  title: string;
  empty?: string;
  people: ExamplePerson[];
}

export const examplesPage: {
  groups: ExampleGroup[];
} = {
  groups: [
    {
      id: "alumni",
      title: "Alumni",
      people: [
        {
          name: "Andrei Davydov",
          url: "https://andreid2.wordpress.com",
        },
        {
          name: "Caroline Dinh",
          url: "https://urlocalcyb.org/",
        },
        {
          name: "Leyla Park",
          url: "https://leylapark.framer.website",
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
        },
        {
          name: "Myungin Lee",
          url: "https://www.myunginlee.com/projects",
        },
        {
          name: "Jun Nishida",
          url: "https://junis.sakura.ne.jp/wp/",
        },
        {
          name: "Ian McDermott",
          url: "http://www.ian-mcd.com/",
        },
        {
          name: "Matt Nolan",
          url: "https://www.mattnolanart.com",
        },
        {
          name: "Mollye Bendell",
          url: "https://mollyebendell.com",
        },
        {
          name: "Jonathan David Martin",
          url: "https://www.jonathan-david-martin.com/",
        },
        {
          name: "Cy Keener",
          url: "https://www.cykeener.com",
        },
        {
          name: "Shannon Leah Collis",
          url: "https://www.shannoncollis.ca/conflux",
        },
        {
          name: "Brandon Morse",
          url: "https://www.coplanar.org",
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
        },
      ],
    },
    {
      id: "space",
      title: "Immersive installation and space",
      people: [
        { name: "Char Davies", url: "https://www.immersence.com/osmose" },
        { name: "Rafael Lozano-Hemmer", url: "https://www.lozano-hemmer.com/" },
        { name: "Janet Cardiff & George Bures Miller", url: "https://cardiffmiller.com/" },
        { name: "Olafur Eliasson", url: "https://olafureliasson.net/" },
        { name: "teamLab", url: "https://www.teamlab.art/" },
        { name: "Random International", url: "https://www.random-international.com/" },
      ],
    },
    {
      id: "interactive",
      title: "Interactive and computational work",
      people: [
        { name: "Camille Utterback", url: "http://camilleutterback.com/" },
        { name: "Golan Levin", url: "https://www.flong.com/" },
        { name: "Lauren Lee McCarthy", url: "https://get-lauren.net/" },
        { name: "Memo Akten", url: "https://www.memo.tv/" },
        { name: "Refik Anadol", url: "https://refikanadol.com/" },
      ],
    },
    {
      id: "moving-image",
      title: "Moving image and sculptural media",
      people: [
        { name: "Matthew Barney", url: "http://drawingrestraint.net/" },
        { name: "Tony Oursler", url: "https://tonyoursler.com/" },
        { name: "Pipilotti Rist", url: "https://www.pipilottirist.net/" },
        { name: "Bill Viola", url: "https://www.billviola.com/" },
      ],
    },
    {
      id: "sound",
      title: "Sound, music, and wearables",
      people: [
        { name: "Imogen Heap", url: "https://imogenheap.com/" },
        { name: "Laurie Anderson", url: "https://laurieanderson.com/" },
        { name: "Holly Herndon", url: "https://holly.plus/" },
        { name: "Pamela Z", url: "https://www.pamelaz.com/" },
        { name: "Ryoji Ikeda", url: "https://www.ryojiikeda.com/" },
      ],
    },
    {
      id: "performance",
      title: "Performance, body, and VR",
      people: [
        { name: "Stelarc", url: "https://stelarc.org/projects.php" },
        { name: "Rebecca Allen", url: "https://www.rebeccaallen.com/" },
        { name: "Marshmallow Laser Feast", url: "https://www.marshmallowlaserfeast.com/" },
        { name: "Nonny de la Peña", url: "https://emblematicgroup.com/" },
      ],
    },
  ] satisfies ExampleGroup[],
};
