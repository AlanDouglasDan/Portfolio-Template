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
  simbaLogo,
  // kelhel,
  // microverse,
  // coauthWeb,
  coauthMobile,
  africweddings,
  aladdin,
  lifeeremit,
  nairabox,
  lendsqr,
  africweddingsLogo,
  lifeeremitLogo,
  nairaboxLogo,
  aladdinLogo,
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
    date: "Jun 2021 - Nov 2022",
  },
  {
    title: "MERN Stack Developer",
    company_name: "Lifeeremit",
    icon: lifeeremitLogo,
    iconBg: "#FFF",
    date: "Sep 2022 - Jan 2023",
  },
  {
    title: "React Native Engineer",
    company_name: "nairabox",
    icon: nairaboxLogo,
    iconBg: "#333",
    date: "May 2022 - Oct 2022",
  },
  {
    title: "Frontend Developer",
    company_name: "Simba",
    icon: simbaLogo,
    iconBg: "#FFF",
    date: "Sep 2022 - Sep 2023",
  },
  {
    title: "Mobile Developer",
    company_name: "Aladdin Digital",
    icon: aladdinLogo,
    iconBg: "#FFF",
    date: "Jun 2023 - Oct 2023",
  },
];

const projects = [
  // {
  //   id: "project-1",
  //   name: "Coauth Web",
  //   description:
  //     "A website that showcases info about the product and has a live demo feature",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: coauthWeb,
  //   repo: "https://github.com/shaqdeff/KomiKult",
  //   demo: "https://coauth.app",
  // },
  {
    id: "project-2",
    name: "Coauth",
    description:
      "An app that provides a way to spend, authorise and manage your payments",
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
    image: coauthMobile,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://coauth.app/personal",
  },
  {
    id: "project-3",
    name: "Afric Weddings",
    description: "An All In One Wedding Event App",
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
    image: africweddings,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://africweddings.com",
  },
  {
    id: "project-4",
    name: "Aladdin Digial",
    description: `Africa’s Global Payment Solution`,
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
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://aladdin.ng",
  },
  {
    id: "project-5",
    name: "Lifeeremit",
    description: "A Stress free software License Payments and Renewals",
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
    image: lifeeremit,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://lifeeremit.com",
  },
  {
    id: "project-6",
    name: "Nairabox",
    description: "A one-stop lifestyle platform",
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
    image: nairabox,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://nairabox.com",
  },
  {
    id: "project-7",
    name: "Lendsqr",
    description: "An Automated Way to handle a lending business",
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
    image: lendsqr,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://alan-douglas-dan-lendsqr-fe-test.vercel.app/dashboard",
  },
];

export { services, technologies, experiences, projects };
