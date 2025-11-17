// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/foto-perfil.jpg";

import PenweaveImage from "./assets/projects/penweave.png";
import MGUScraperImage from "./assets/projects/mguscraper.png";
import WeatherifyImage from "./assets/projects/weatherify.png";
import aplicamovil1 from "./assets/projects/aplica-movil-1.png";
import aplicamovil2 from "./assets/projects/aplica-movil-2.png";
import aplicaweb1 from "./assets/projects/aplica-web-1.png";
import aplicaweb2 from "./assets/projects/aplica-web-2.png";
import aplicaweb3 from "./assets/projects/aplica-web-3.png";

import logovw from "./assets/projects/logo-vw.png";

export const SITE_URL: string = "https://shonebinu.com";

export const meta = {
  about: {
    // index page
    title: "Nestor Ramirez",
    description:
      "Hi, I'm Nestor Ramirez, a software engineer. Welcome to my little corner of the internet!",
  },
  projects: {
    title: "Proyectos | Nestor Ramirez",
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

export const header: Header = { logoTitle: "NR" };

export const footer: Footer = {
  // parses html
  content:
    "Made with ❤️ by Shone Binu • <a href='https://github.com/shonebinu/portfolio' class='link'>Source Code</a>",
};

export const about: About = {
  // parses html
  headLine: " <span class='fancy-highlight'>Nestor Ramirez</span>",
  tagLine: "QA Engineer",
  profilePic: ProfilePic,
  // parses html
  description:
    "Soy egresado en <u>Sistemas Computacionales</u> y actualmente me enfoco en el área de <u>QA Engineer</u> donde busco garantizar la calidad del software mediante la detección y prevención de errores. Me motiva seguir aprendiendo y mejorando continuamente mis habilidades en el ámbito tecnológico.",
  links: [
    // Lucide icons
    { icon: "Github", href: "https://github.com/nesdrj" },
    { icon: "Linkedin", href: "https://linkedin.com/in/nestordrj" },
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
        "Me formé en el área de informática, adquiriendo conocimientos en programación, bases de datos, redes y arquitectura de computadoras. Complementé mi preparación con estudios en gestión de proyectos, ingeniería de software y administración, lo que me permitió desarrollar una visión integral para el diseño y mejora de soluciones tecnológicas.",
    },
  ],
  // parses html
  getInTouch:
    "Enviame un correo electronico a <a href='mailto:nesdrj@gmail.com' class='primary-underline'>nesdrj@gmail.com</a>",
};

export const projects: Project[] = [
  {
    logoImage: PenweaveImage,
    title: "Diseño de Pruebas para Aplicaciones Web",
    techs: ["Excel", "Jira", "Devtools"],
    description:
      "Ejecuion de pruebas funcionales y de usabilidad para una aplicacion web de renta de autos.",
    images: [aplicaweb1, aplicaweb2, aplicaweb3],
  },
  {
    logoImage: MGUScraperImage,
    title: "Pruebas de Aplicaciones Moviles",
    techs: ["Excel", "AndroidStudio", "Jira"],
    description:
      "Ejecucion de pruebas funcionales y de usabilidad para una aplicacion movil.",
      images:[aplicamovil1, aplicamovil2],
   // sourceHref: "https://github.com/shonebinu/MGUScraper",
   // liveHref: "https://mguscraper.streamlit.app/",
  },
  {
    logoImage: logovw,
    title: "Visualizador de archivos PDF",
    techs: ["Tyscript", "Angular"],
    description:
      "Creacion de una herramienta para la visualizacion de archivos PDF en el entorno empresarial de Volkswagen.",
    //sourceHref: "https://github.com/shonebinu/flashify",
    //liveHref: "https://flashify.shonebinu.com/",
  },
  
];

// add blog articles in /src/content/blog

//Listo
