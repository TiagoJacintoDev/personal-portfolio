import {
  SiReact,
  SiJavascript,
  SiCss3,
  SiStyledcomponents,
  SiFramer,
} from 'react-icons/si';
import CVMaker from '../images/cv-maker.png';
import TravelLandingPage from '../images/travel-landing-page.png';
import GitHubSearch from '../images/github-search.png';
import RentACarLandingPage from '../images/rent-a-car-landing-page.png';
import DogWiki from '../images/dog-wiki-app.vercel.app_.png';

export const projectsData = [
  {
    title: 'CV Maker',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      { text: 'JavaScript', img: <SiJavascript /> },
      { text: 'CSS Modules', img: <SiCss3 /> },
    ],
    description:
      "A CV Maker app that updates/changes the CV when you type your information out. With this project I've worked mostly with a large state management and controlled inputs.",
    demoURL: 'https://cv-makerapp.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/cv-maker',
    img: CVMaker,
  },
  {
    title: 'Travel Landing Page',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      {
        text: 'JavaScript',
        img: <SiJavascript />,
      },
      {
        text: 'styled-components',
        img: <SiStyledcomponents />,
      },
    ],
    description:
      'This project is a travel agency landing page with a mobile first design. My main focus for this project was to have a visually appealing page with responsive functionality. ',
    demoURL: 'https://travel-landing-pageapp.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/travel-landing-page',
    img: TravelLandingPage,
  },
  {
    title: 'GitHub Search',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      {
        text: 'JavaScript',
        img: <SiJavascript />,
      },
      {
        text: 'CSS',
        img: <SiCss3 />,
      },
    ],
    description:
      "In this app I've worked with the GitHub Search API to make a search application with the API. With this application I've improved my skills with fetching data from APIs, changing and filtering state, debouncing functions and pagination",
    demoURL: 'https://github-searchapp.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/github-search-api',
    img: GitHubSearch,
  },
  {
    title: 'Rent a Car Landing Page',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      {
        text: 'JavaScript',
        img: <SiJavascript />,
      },
      {
        text: 'styled-components',
        img: <SiStyledcomponents />,
      },
      {
        text: 'Framer Motion',
        img: <SiFramer />,
      },
    ],
    description:
      'A landing page using the Eleanor Auto website design. This was my first time working with animations. My main challenge here was managing exit animations & positioning images depending on the media screen. Other than that I managed to improve on file structure & defining props with objects',
    demoURL: 'https://rent-a-car-landing-page-tiagojacintodev.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/rent-a-car-landing-page',
    img: RentACarLandingPage,
  },
  {
    title: 'Dog Wiki',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      {
        text: 'JavaScript',
        img: <SiJavascript />,
      },
      {
        text: 'React Query',
      },
      {
        text: 'styled-components',
        img: <SiStyledcomponents />,
      },

      {
        text: 'Axios',
      },
    ],
    description:
      "In this application you can search for different dog breeds and get to know about them. I've used this API to fetch data from.",
    demoURL: 'https://dog-wiki-app.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/dog-wiki',
    img: DogWiki,
  },
];
