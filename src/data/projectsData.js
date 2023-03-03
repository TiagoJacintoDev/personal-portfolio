import { SiReact, SiTailwindcss, SiTypescript, SiPrettier } from 'react-icons/si'
import MultiStepForm from '../images/multi-step-form.png'
import GPT3 from '../images/gpt3.png'
import WeatherApp from '../images/weather-app.png'
import SneakerProductPage from '../images/sneaker-product-page.png'
import GitHubUsers from '../images/github-users.png'

export const projectsData = [
  {
    title: 'Sneaker Product Page',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      {
        text: 'TypeScript',
        img: <SiTypescript />,
      },
      {
        text: 'Tailwind CSS',
        img: <SiTailwindcss />,
      },
      {
        text: 'React Responsive',
      },
    ],
    description:
      "This application was inspired by a design made by the Frontend Mentor team. I've used the same design and tried to replicate the same functionality. I've used the React Responsive library to make the application responsive.",
    demoURL: 'https://sneaker-product-page-tiago.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/sneaker-product-page',
    img: SneakerProductPage,
  },
  {
    title: 'Multi Step Form',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      { text: 'TypeScript', img: <SiTypescript /> },
      { text: 'Tailwind CSS', img: <SiTailwindcss /> },
    ],
    description:
      'A multi step form to show my skills with state management and styling.',
    demoURL: 'https://multi-step-form-pt.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/multi-step-form',
    img: MultiStepForm,
  },
  {
    title: 'GitHub Users',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      {
        text: 'TypeScript',
        img: <SiTypescript />,
      },
      {
        text: 'Tailwind CSS',
        img: <SiTailwindcss />,
      },
    ],
    description:
      "In this app I've worked with the GitHub Search API to make a calls to their API. With this application I've improved my skills with fetching data from APIs",
    demoURL: 'https://github-users-pt.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/github-users',
    img: GitHubUsers,
  },
  {
    title: 'GPT-3 Landing Page',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      {
        text: 'TypeScript',
        img: <SiTypescript />,
      },
      {
        text: 'Tailwind CSS',
        img: <SiTailwindcss />,
      },
      {
        text: 'Prettier',
        img: <SiPrettier />,
      },
    ],
    description:
      'This landing page was made thinking of a mobile first design. My main goal in this project was to have a visually appealing page with responsive functionality.',
    demoURL: 'https://gpt3-landing-page-app.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/gpt3-landing-page',
    img: GPT3,
  },
  {
    title: 'Weather App',
    skills: [
      {
        text: 'React',
        img: <SiReact />,
      },
      {
        text: 'TypeScript',
        img: <SiTypescript />,
      },
      {
        text: 'Tailwind CSS',
        img: <SiTailwindcss />,
      },
      {
        text: 'Axios',
      },
    ],
    description:
      "In this application you can search for different cities to know the their weather. I've used the OpenWeather API to fetch data from.",
    demoURL: 'https://weather-app-pt.vercel.app/',
    codeURL: 'https://github.com/TiagoJacintoDev/weather-app',
    img: WeatherApp,
  },
]
