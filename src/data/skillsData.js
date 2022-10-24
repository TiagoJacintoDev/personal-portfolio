import CSharp from '../images/c-sharp-c.svg';
import JavaScript from '../images/icons8-javascript.svg';
import CSS from '../images/icons8-css3.svg';
import HTML from '../images/icons8-html-5.svg';
import Git from '../images/icons8-git.svg';
import GitHub from '../images/icons8-github.svg';
import Figma from '../images/icons8-figma.svg';
import Linux from '../images/linux.png';
import npm from '../images/icons8-npm.svg';
import Unity from '../images/icons8-unity.svg';
import React from '../images/icons8-react-native.svg';
import Tailwind from '../images/icons8-tailwind-css.svg';
import Firebase from '../images/icons8-firebase.svg';
import SASS from '../images/icons8-sass.svg';

export const skillsData = [
  {
    type: 'Languages',
    list: [
      { text: 'HTML', img: HTML },
      { text: 'CSS', img: CSS },
      { text: 'JavaScript', img: JavaScript },
      { text: 'C#', img: CSharp },
      { text: 'Sass', img: SASS },
    ],
  },
  {
    type: 'Frameworks/Libraries',
    list: [
      { text: 'React', img: React },
      { text: 'Tailwind', img: Tailwind },
      { text: 'Firebase', img: Firebase },
      { text: 'Unity', img: Unity },
    ],
  },
  {
    type: 'Technologies',
    list: [
      { text: 'Git', img: Git },
      { text: 'GitHub', img: GitHub },
      { text: 'npm', img: npm },
      { text: 'Figma', img: Figma },
      { text: 'Linux', img: Linux },
    ],
  },
];
