// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

import PenweaveImage from "./assets/projects/penweave.png";
import MGUScraperImage from "./assets/projects/mguscraper.png";
import FlashifyImage from "./assets/projects/flashify.png";
import WeatherifyImage from "./assets/projects/weatherify.png";

export const SITE_URL: string = "https://shonebinu.com";

export const meta = {
  about: {
    // index page
    title: "Nestor Ramirez",
    description:
      "Hi, I'm Nestor Ramirez, a software engineer. Welcome to my little corner of the internet!",
  },
  projects: {
    title: "Projects | Shone Binu",
    description:
      "Here are some of my projects — things I’ve built, experimented with, and had fun creating.",
  },
  blog: {
    title: "Blog | Shone Binu",
    description:
      "This is my blog — a place where I share thoughts, ideas, and things I’m learning along the way.",
  },
  // blog post title and description are taken from the variables in markdown file
};

export const header: Header = { logoTitle: "SB" };

export const footer: Footer = {
  // parses html
  content:
    "Made with ❤️ by Shone Binu • <a href='https://github.com/shonebinu/portfolio' class='link'>Source Code</a>",
};

export const about: About = {
  // parses html
  headLine: "Hi, I'm <span class='fancy-highlight'>Shone Binu</span>",
  tagLine: "Software Engineer / Full Stack Developer",
  profilePic: ProfilePic,
  // parses html
  description:
    "I’m a recent <u>Software Engineer</u> graduate from India 🇮🇳 who likes to keep tackling new problems. Currently, I’m working on the <u>React and Node.js</u> side of things. Outside of this, I work on improving myself in whatever I see fit.",
  links: [
    // Lucide icons
    { icon: "Github", href: "https://github.com/nesdrj" },
    { icon: "Linkedin", href: "www.linkedin.com/in/nestordrj" },
    //{ icon: "Youtube", href: "https://www.youtube.com/@shone_binu" },
  ],
  resumeHref:
    "https://drive.google.com/file/d/1XTyUAmdCwaiUtlRKsx6VueyOaxGBQ_oG/view?usp=sharing",
  workExperience: [
    {
      title: "Desarrollador Web Pasante",
      timeline: "May 2024 - Abr 2025",
      company: "Volskwagen • Veracruz",
      description:
        "Colabore con el equipo de desarrollo para la mejora continua de sus sistema Tecnologia usada: HTML, Css, TypeScript, Php, Angular, Postman",
    },
  ],
  education: [
    {
      title: "Licenciatura en Sistemas Computacionales",
      timeline: "Sep 2021 - Dic 2024",
      institution: "Universidad Mexicana • Ver, Mexico",
      description:
        "Me formé en el área de informática, con conocimientos en programación utilizando lenguajes como Java, Python y PHP. También tengo experiencia en el manejo de bases de datos con SQL Server, así como en redes básicas y arquitectura de computadoras.Durante mi formación, cursé asignaturas relacionadas con gestión de proyectos, ingeniería de software y administración, lo que me permitió desarrollar una perspectiva completa tanto en la parte técnica como en la organización y planeación de soluciones tecnológicas.",
    },
  ],
  // parses html
  getInTouch:
    "Drop me an email at <a href='mailto:mail@shonebinu.com' class='primary-underline'>mail@shonebinu.com</a> or connect with me on one of my socials.",
};

export const projects: Project[] = [
  {
    logoImage: PenweaveImage,
    title: "Penweave",
    techs: ["React", "Supabase", "daisyUI"],
    description:
      "Penweave is a CodePen‑like tool that lets users run their HTML/CSS/JS in a browser environment with secure preview and sharing.",
    sourceHref: "https://github.com/shonebinu/penweave/",
  },
  {
    logoImage: MGUScraperImage,
    title: "MGU Scraper",
    techs: ["Python", "Streamlit", "Beautiful Soup"],
    description:
      "MGU Scraper is a tool designed to simplify the extraction and analysis of bulk student exam results from MGU Kottayam University.",
    sourceHref: "https://github.com/shonebinu/MGUScraper",
    liveHref: "https://mguscraper.streamlit.app/",
  },
  {
    logoImage: FlashifyImage,
    title: "Flashify",
    techs: ["PHP", "MySQL", "LAMP"],
    description:
      "Flashify is a minimal, beautiful, and responsive web-based flashcard application built using the LAMP stack.",
    sourceHref: "https://github.com/shonebinu/flashify",
    liveHref: "https://flashify.shonebinu.com/",
  },
  
];

// add blog articles in /src/content/blog
