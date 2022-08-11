import { SiReact, SiJavascript, SiSass } from 'react-icons/si';
import Project from '../images/ing.png';

export const projectsData = [
  {
    title: 'Title',
    skills: [
      {
        text: 'JavaScript',
        img: <SiJavascript />,
      },
      { text: 'Sass', img: <SiSass /> },
      { text: 'React', img: <SiReact /> },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, a deleniti? Possimus sit quos omnis, veritatis quisquam et maxime maiores labore soluta natus nulla ab laudantium laborum recusandae vero dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, a deleniti? Possimus sit quos omnis, veritatis quisquam et maxime maiores labore soluta natus nulla ab laudantium laborum recusandae vero dolor!',
    demoURL: 'https://www.google.com/',
    codeURL: 'https://www.google.com/',
    img: Project,
    img2: 'https://dummyimage.com/350x650.png',
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, a deleniti? Possimus sit quos omnis, veritatis quisquam et maxime maiores labore soluta natus nulla ab laudantium laborum recusandae vero dolor!',
    demoURL: 'https://www.google.com/',
    codeURL: 'https://www.google.com/',
    img: 'https://dummyimage.com/350x650.png',
    img2: 'https://dummyimage.com/350x650.png',
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, a deleniti? Possimus sit quos omnis, veritatis quisquam et maxime maiores labore soluta natus nulla ab laudantium laborum recusandae vero dolor!',
    demoURL: 'https://www.google.com/',
    codeURL: 'https://www.google.com/',
    img: 'https://dummyimage.com/350x650.png',
    img2: 'https://dummyimage.com/350x650.png',
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, a deleniti? Possimus sit quos omnis, veritatis quisquam et maxime maiores labore soluta natus nulla ab laudantium laborum recusandae vero dolor!',
    demoURL: 'https://www.google.com/',
    codeURL: 'https://www.google.com/',
    img: 'https://dummyimage.com/350x650.png',
    img2: 'https://dummyimage.com/350x650.png',
  },
];
