import React from "react";

import python from "./imgs/skills/python.png";
import html from "./imgs/skills/html.png";
import css from "./imgs/skills/css.png";
import javascript from "./imgs/skills/javascript.png";
import react from "./imgs/skills/react.png";
import node from "./imgs/skills/node.png";
import mongo from "./imgs/skills/mongodb.png";

function Skills() {
  const skillImgs = [python, html, css, javascript, react, node, mongo];
  const skillStr = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
  ];
  const alts = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
  ];

  return (
    <ul className="skills">
      {skillImgs.map((i, index) => (
        <li>
          <img src={i} alt={alts[index]} />
          <span>{skillStr[index]}</span>
        </li>
      ))}
    </ul>
  );
}

export default Skills;
