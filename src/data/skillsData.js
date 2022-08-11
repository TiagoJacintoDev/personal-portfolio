import Bootstrap from '../images/bootstrap_4-icon.png';
import CSharp from '../images/c-sharp-c.svg';
import Jest from '../images/file-type-jest.svg';
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
import Redux from '../images/icons8-redux.svg';
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
      { text: 'Jest', img: Jest },
      { text: 'Unity', img: Unity },
      { text: 'Bootstrap', img: Bootstrap },
      { text: 'Redux', img: Redux },
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