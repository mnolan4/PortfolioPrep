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
  lede: string;
  groups: ExampleGroup[];
} = {
  lede: "Look at these for evidence, for role, and for whether you can tell what the person makes quickly. Do not copy their visual style.",
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
      id: "professional",
      title: "Professional artists",
      people: [
        {
          name: "Char Davies",
          url: "https://www.immersence.com/osmose",
        },
        {
          name: "Stelarc",
          url: "https://stelarc.org/projects.php",
        },
      ],
    },
  ] satisfies ExampleGroup[],
};
