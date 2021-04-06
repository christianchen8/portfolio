import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Christian Chen | Developer', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Bienvenido a mi portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola! 👋🏼, soy',
  name: 'Christian Chen',
  subtitle: 'Fullstack Developer y Abogado.',
  sub1: 'Fullstack ',
  sub2: 'Developer y ',
  sub3: 'Abogado.',
  cta: 'Conoceme',
};

// ABOUT DATA
const cvEn = `https://drive.google.com/file/d/1fTlzWGaV0UbC11q4K76IJouE4oV79cQf/view?usp=sharing`;
const cvEs = `https://drive.google.com/file/d/1Ry4lWGRYY756sXW8L8_z27BLFLMQa12a/view?usp=sharing`;

export const aboutData = {
  img: 'https://i.imgur.com/dpdnKCd.jpg',
  paragraphOne: 'Hola! 👋🏼',
  paragraphTwo: 'Soy Desarrollador Fullstack y Abogado',
  paragraphThree:
    'Aún habiendo hecho una carrera profesional enfocada en el ámbito jurídico, hoy busco insertarme en la industria tecnológica como programador Full Stack. Intento superarme constantemente con nuevos desafíos y estar al día ante los cambios que se presentan en la actualidad.',
  resume: [cvEn, cvEs], // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'https://i.imgur.com/oAvvRIY.png',
    title: 'CONCURSO MESSI 644 | BUDWEISER',
    info:
      'Desarrollo de página web para el Sorteo de productos de Budweiser Chile, tanto para escritorio como mobile responsive.',
    info2: 'Tecnologías utilizadas: React, Firebase, Ant-Design',
    url: 'https://messi644concurso.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.imgur.com/s2nmhWr.png',
    title: 'TALENTOS 2020 | ITESA',
    info:
      'Aplicación desarrollada de manera grupal dentro del Coding Bootcamp a favor de la empresa Itesa para la gestión de trabajo con freelancers. ',
    info2:
      'Se utilizó principalmente React-Redux, Recoil, Ant-Design, Firebase, entre otras tecnologías.',
    url: 'https://talentos-itesa.web.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.imgur.com/GVbAdMD.png',
    title: 'SOVIETICA INDUMENTARIA | E-COMMERCE',
    info:
      'E-commerce de venta de indumentaria unisex creado de manera grupal, utilizando React-Redux, MongoDB, Material UI, y Bootstrap 4, entre otras.',
    info2: '',
    url: '',
    repo: 'https://github.com/christianchen8/Sovietica', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.imgur.com/pZGtxe7.png',
    title: 'OMDB',
    info:
      'Página web para buscar películas y series, con funciones para registrarse y poder guardar en favoritos.',
    info2: 'Tecnologías utilizadas: React-Redux, Express, Passport, Sequelize, Axios, entre otras.',
    url: '',
    repo: 'https://github.com/christianchen8/OMDB', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Y si trabajamos juntos?...',
  btn: 'Hablemos',
  email: 'chenchristian@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.link/ve24l1',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/christianchen8/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/christianchen8',
    },
  ],
};
