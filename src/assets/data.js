import React from "react";
import { FaLinux, FaJs, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Jamie Grimwood",
  title: "Fullstack Developer",
  social: {
    github: "https://github.com/JamieGrimwood",
    email: "jamie@jmgcoding.com",
  },
  about: {
    title: "About Me",
    description:
      "I am a Fullstack Developer that owns Votion Development (https://votion.dev), and I am the founder of FalconHosting (https://falconhosting.co.uk).",
  },
  skills: [
    {
      skillName: "Fullstack",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "JavaScript",
      skillIcon: <FaJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Sysadmin",
      skillIcon: <FaLinux className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "CrossHatch",
      description: "An opensouce dashboard to control docker containers via the web.",
      tags: [
        "docker",
        "controller",
        "dashboard",
        "ejs"
      ],
      link: "https://github.com/JamieGrimwood/Crosshatch"
    },
    {
      title: "https://sendmessage.jmgcoding.com",
      description: "A simple program that sends a message to my alexa through a website.",
      tags: [
        "website",
        "alexa",
        "torture",
        "interactive"
      ],
      link: "https://github.com/JamieGrimwood/sendmessage.jmgcoding.com"
    }
  ]
};
export default data;
