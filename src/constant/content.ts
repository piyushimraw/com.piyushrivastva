import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  leenalogo,
  mindticklelogo,
  partsavatarlogo,
  squadcastlogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full stack Javascript Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer 2",
    company_name: "MindTickle",
    icon: mindticklelogo,
    iconBg: "#383E56",
    date: "Oct 2022 - Present",
    points: [
      "Developed and implemented an on-call utility CLI application in Golang, empowering on-call engineers to efficiently execute common tasks in Run-books, resulting in a 40% reduction in incident response time. ",
      "Written AWS lambda to consume SQS events for async workflows such as generate a certificate, send completion /. reminder email for the assessment using Golang",
      "Worked on and delivered core readiness Learning Apps features using React.js, GraphQL which helped us to renew customer accounts amounting to 2 million dollars.",
      "Improved frontend codebase code coverage from 30% to 80% and added playwright based automated smoke test for critical user paths (sign in, create module, update module, delete module), along with Jest and React Testing Library to test common hooks and reusable components.",
      "Worked on Mindtickle mobile App and developed features for learner's app such as integration of topics in Assessment, Auto attendance feature for ILT. using React Native.link https://play.google.com/store/apps/details?id=com.mindtickle&hl=en_IN&gl=US",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "Squadcast",
    icon: squadcastlogo,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Aug 2022",
    points: [
      "Worked and Revamped Squadcast Mobile Application and owned both Android and iOS release pipeline, worked on following features using React Native:  Overriding mobile  DND /. Silent mode to deliver high priority incident notification, Incident listing page using React native virtualised list, Implemented automated testing for critical screens",
      "Added Microsoft teams integration as notification channel and released it in Microsoft Teams marketplace used Golang to write backend service and consumed events from HTTP calls https://appsource.microsoft.com/en-us/product/office/wa200004390?tab=overview",
      "Worked on incident-specific slack / Microsoft teams and other collaboration channel features and used Golang to write backend service and MongoDB for persistence.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Leena AI",
    icon: leenalogo,
    iconBg: "#383E56",
    date: "Jan 2019 - July 2021",
    points: [
      "Developed and maintained web based chat application using React.js and Redux.",
      "Developed and maintained Chatbot flow builder application using React.js, Redux and Three.js.",
      "Developed and maintained Mobile application using React Native.",
      "Developed marketing website using Next.js.",
      "Developed and maintained backend services using Node.js, Express.js and MongoDB.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
