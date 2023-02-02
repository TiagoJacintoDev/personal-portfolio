import {
  SiReact,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiPrettier,
} from "react-icons/si";
import CVMaker from "../images/cv-maker.png";
import GitHubSearch from "../images/github-search.png";
import EcommerceApp from "../images/ecommerce.png";
import GPT3 from "../images/gpt3.png";
import WeatherApp from "../images/weather-app.png";

export const projectsData = [
  {
    title: "Ecommerce",
    skills: [
      {
        text: "React",
        img: <SiReact />,
      },
      {
        text: "Javascript",
        img: <SiJavascript />,
      },
      {
        text: "Firebase",
        img: <SiFirebase />,
      },
      {
        text: "Tailwind CSS",
        img: <SiTailwindcss />,
      },
      {
        text: "React Query",
      },
      {
        text: "Axios",
      },
    ],
    description:
      "This application was inspired in the website KuantoKusta. This was a large project that taught me what are the pain points of building and scaling a large app.",
    demoURL: "https://ecommerce-tiago.vercel.app/",
    codeURL: "https://github.com/TiagoJacintoDev/ecommerce",
    img: EcommerceApp,
  },
  {
    title: "GPT-3 Landing Page",
    skills: [
      {
        text: "React",
        img: <SiReact />,
      },
      {
        text: "TypeScript",
        img: <SiTypescript />,
      },
      {
        text: "Tailwind CSS",
        img: <SiTailwindcss />,
      },
      {
        text: "Prettier",
        img: <SiPrettier />,
      },
    ],
    description:
      "This landing page was made thinking of a mobile first design. My main goal in this project was to have a visually appealing page with responsive functionality.",
    demoURL: "https://gpt3-landing-page-app.vercel.app/",
    codeURL: "https://github.com/TiagoJacintoDev/gpt3-landing-page",
    img: GPT3,
  },
  {
    title: "CV Maker",
    skills: [
      {
        text: "React",
        img: <SiReact />,
      },
      { text: "JavaScript", img: <SiJavascript /> },
      { text: "CSS Modules", img: <SiCss3 /> },
    ],
    description:
      "A CV Maker app that updates/changes the CV when you type your information out. With this project I've worked mostly with a large state management and controlled inputs.",
    demoURL: "https://cv-makerapp.vercel.app/",
    codeURL: "https://github.com/TiagoJacintoDev/cv-maker",
    img: CVMaker,
  },
  {
    title: "Weather App",
    skills: [
      {
        text: "React",
        img: <SiReact />,
      },
      {
        text: "TypeScript",
        img: <SiTypescript />,
      },
      {
        text: "Tailwind CSS",
        img: <SiTailwindcss />,
      },
      {
        text: "Axios",
      },
    ],
    description:
      "In this application you can search for different cities to know the their weather. I've used the OpenWeather API to fetch data from.",
    demoURL: "https://weather-app-pt.vercel.app/",
    codeURL: "https://github.com/TiagoJacintoDev/weather-app",
    img: WeatherApp,
  },
  {
    title: "GitHub Search",
    skills: [
      {
        text: "React",
        img: <SiReact />,
      },
      {
        text: "JavaScript",
        img: <SiJavascript />,
      },
      {
        text: "CSS",
        img: <SiCss3 />,
      },
    ],
    description:
      "In this app I've worked with the GitHub Search API to make a search application with the API. With this application I've improved my skills with fetching data from APIs, changing and filtering state, debouncing functions and pagination",
    demoURL: "https://github-searchapp.vercel.app/",
    codeURL: "https://github.com/TiagoJacintoDev/github-search-api",
    img: GitHubSearch,
  },
];
