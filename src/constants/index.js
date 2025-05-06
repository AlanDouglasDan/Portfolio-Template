import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  // rubyrails,
  graphql,
  // komikult,
  // leaderboard,
  // math,
  // movie,
  // nyeusi,
  // space,
  // coverhunt,
  // simbaLogo,
  // kelhel,
  // microverse,
  // coauthWeb,
  // coauthMobile,
  // africweddings,
  aladdin,
  // lifeeremit,
  // nairabox,
  // lendsqr,
  africweddingsLogo,
  lifeeremitLogo,
  // nairaboxLogo,
  bookdLogo,
  dopperLogo,
  aladdinLogo,
  bitfinexLogo,
  jumiaLogo,
  bookd,
  bitfinex,
  gopuff,
  hudi,
  nominalx,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Developer",
    icon: ux,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Rails",
  //   icon: rubyrails,
  // },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Javascript Developer",
    company_name: "Africweddings",
    icon: africweddingsLogo,
    iconBg: "#FFF",
    date: "Apr 2019 - Sep 2020",
  },
  {
    title: "MERN Stack Developer",
    company_name: "Lifeeremit",
    icon: lifeeremitLogo,
    iconBg: "#FFF",
    date: "Oct 2020 - Aug 2021",
  },
  {
    title: "Software Engineer",
    company_name: "Jumia Group",
    icon: jumiaLogo,
    iconBg: "#FFF",
    date: "Sep 2021 - Feb 2022",
  },
  {
    title: "Full Stack Developer",
    company_name: "Dopper",
    icon: dopperLogo,
    iconBg: "#0067E5",
    date: "Feb 2022 - Jun 2023",
  },
  {
    title: "Mobile Developer",
    company_name: "Bitfinex",
    icon: bitfinexLogo,
    iconBg: "#0E3451",
    date: "May 2023 - Mar 2024",
  },
  {
    title: "Lead Mobile Developer",
    company_name: "Book-d",
    icon: bookdLogo,
    iconBg: "#FAF7E7",
    date: "Apr 2024 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Book-d Pro",
    description:
      "An app that allows stylists to manage bookings and clients",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bookd,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://book-d.co.uk/",
  },
  {
    id: "project-2",
    name: "Bitfinex",
    description: "An app that allows users to buy and sell cryptocurrencies",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bitfinex,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://bitfinex.com",
  },
  {
    id: "project-3",
    name: "Hudi",
    description: `A Muslim app that helps users build habits and track their progress`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hudi,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://gethudi.com",
  },
  {
    id: "project-4",
    name: "Nominalx",
    description: "An app for shopping for jewelries",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nominalx,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://nominalx.com",
  },
  {
    id: "project-5",
    name: "Gopuff",
    description: "A web app for buying and selling goods",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gopuff,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://gopuff.com",
  },
  {
    id: "project-6",
    name: "Aladdin Digital",
    description: "Africa's Global Payment Solution",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: aladdin,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://www.linkedin.com/company/aladdindigitalng?originalSubdomain=ng",
  },
];

export { services, technologies, experiences, projects };
