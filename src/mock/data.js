import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zach Daniels | Developer', // e.g: 'Name | Developer'
    lang: 'en', // e.g: en, es, fr, jp
    description: 'Learn more about Zach Daniels', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
    name: 'Zach Daniels',
    subtitle: 'Information Systems undergraduate at Brigham Young University',
    cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Univar3.jpg',
      title: 'Univariate Data Visualization',
      info: 'Comparing car models with their acceleration',
    info2: '',
    url: 'https://colab.research.google.com/drive/1UW-XSqSvGe6Dcw7dlNaoo-t-oRIFjL6Y?usp=sharing',
      repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let\'s talk!',
    btn: 'Contact me',
    email: 'zdaniels.ent@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
        url: 'https://www.instagram.com/zachjackdaniels/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/zdaniels',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zachary-daniels/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/zachjackdaniels',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
