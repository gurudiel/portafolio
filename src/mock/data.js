import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Omar O. Narpier | Ingeniero de Software', // e.g: 'Name | Developer'
  lang: 'es, en', // e.g: en, es, fr, jp
  description: 'Bienvenido a mi portafolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Omar O. Narpier',
  subtitle: 'Ingeniero de Software',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1vhPqHMOOKuBy0sb8MIQuUXKpHkDnwgX2/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.JPG',
    title: 'E-commerce site',
    info:
      'Sitio web de comercio electrónico tipo Amazon basado en las últimas tecnologias web entre ellas: React JS, Stripe y Firebase.',
    info2: '',
    url: 'https://hello-e12be.web.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.JPG',
    title: 'Media entertainment app',
    info:
      'Sitio web de series y peliculas tipo Netflix utilizando frameworks modernas de Javascript e implementando sistema de pago multiple en la nube.',
    info2: '',
    url: 'https://netflix-dom.web.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.JPG',
    title: 'Personal blog',
    info:
      'Sitio web personal de científico dominicano utilizando HTML, CSS y Javascript de front-end y con el framework de Microsoft ASP.Net, IIS, Plesk y Windows Server de back-end.',
    info2: '',
    url: 'http://www.omarpaino-perdomo.com/index.html',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'onarpiern@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gurudiel/elcarro.do',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
