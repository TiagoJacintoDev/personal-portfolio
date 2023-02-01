import CSharp from "../images/c-sharp-c.svg";
import JavaScript from "../images/icons8-javascript.svg";
import TypesScript from "../images/icons8-typescript.svg";
import CSS from "../images/icons8-css3.svg";
import HTML from "../images/icons8-html-5.svg";
import Git from "../images/icons8-git.svg";
import GitHub from "../images/icons8-github.svg";
import Figma from "../images/icons8-figma.svg";
import Linux from "../images/linux.png";
import npm from "../images/icons8-npm.svg";
import Unity from "../images/icons8-unity.svg";
import React from "../images/icons8-react-native.svg";
import Tailwind from "../images/icons8-tailwind-css.svg";
import Firebase from "../images/icons8-firebase.svg";
import SASS from "../images/icons8-sass.svg";
import Jest from "../images/jest-logo-svg-vector.svg";
import ReactTesting from "../images/react-testing-library.png";
import ReactRouter from "../images/react-router-seeklogo.com.svg";
import ReactQuery from "../images/react-query.svg";

export const skillsData = [
  {
    type: "Languages",
    list: [
      { text: "HTML", img: HTML },
      { text: "CSS", img: CSS },
      { text: "JavaScript", img: JavaScript },
      { text: "TypeScript", img: TypesScript },
      { text: "C#", img: CSharp },
    ],
  },
  {
    type: "Frameworks/Libraries",
    list: [
      { text: "React", img: React },
      { text: "Sass", img: SASS },
      { text: "Tailwind", img: Tailwind },
      { text: "Jest", img: Jest },
      { text: "React Testing", img: ReactTesting },
      { text: "React Query", img: ReactQuery },
      { text: "React Router", img: ReactRouter },
    ],
  },
  {
    type: "Technologies",
    list: [
      { text: "Git", img: Git },
      { text: "GitHub", img: GitHub },
      { text: "npm", img: npm },
      { text: "Figma", img: Figma },
      { text: "Linux", img: Linux },
    ],
  },
];
