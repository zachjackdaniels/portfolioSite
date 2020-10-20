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
  subtitle: 'Information Systems Undergrad at BYU',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Zach Daniels is a driven and people-focused professional with a wide range of experience in sales, team management, data analytics, and tech solutions. As a student of BYU's Information Systems Program, colleagues and mentors know him as a motivating, kind, and creative individual, with a passion for helping people and organizations reach their potential.",
  paragraphTwo:
    'His experiences at Podium, one of the fastest growing tech startups in Utah; in Washington DC, doing Door-to-door sales; and his religious mission in Rome, Italy have all contributed to a well-rounded perspective for creating innovative solutions to problems in both the world of software and of people.',
  paragraphThree:
    "Zach's skills and specialties include C# & ASP.NET Core MVC web app creation, JavaScript, Salesforce, VBA, API/FTP Development, and Sales. He is interested in tech solutions, web design, team management, and data analytics. And his hobbies include rock climbing, learning guitar, listening to audiobooks/podcasts/music, and exploring the outdoors.",
  resume: 'https://drive.google.com/file/d/1awLqlqvpGPyop_RuF3oO9p2KkMTd9HyE/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Univar3.jpg',
    title: 'Univariate Data Visualization',
    info: 'Comparing car models with their acceleration',
    info2: 'Tools used: Python, Seaborn, Pandas',
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
  cta: "Let's talk!",
  btn: 'Contact me',
  email: 'zdaniels.ent@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
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
