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
  img: 'Daniels, Zach low.jpg',
  paragraphOne:
    "Zach Daniels is a driven and people-focused professional with a wide range of experience in team management, software development, sales, data analytics, and tech solutions. A student of BYU's Information Systems Program, colleagues and mentors know him as a motivating, kind, and creative individual, with a passion for helping people and organizations reach their potential.",
  paragraphTwo:
    'His experiences at Brigham Young University performing full-stack development and database mangement; at Podium, one of the fastest growing tech startups in Utah; in Washington DC, doing Door-to-door sales; and his religious mission in Rome, Italy have all contributed to a well-rounded perspective for creating innovative solutions to problems in both the world of software and of people.',
  paragraphThree:
    "Zach's skills and specialties include C# & .NET Core MVC development, Python, Django, React, JavaScript, Salesforce, VBA, API/FTP Development, and Sales. He is interested in tech solutions, web design, team management, and data analytics. And his hobbies include skiing, rock climbing, learning guitar, listening to audiobooks/podcasts/music, and exploring outdoors.",
  resume: 'https://drive.google.com/file/d/1awLqlqvpGPyop_RuF3oO9p2KkMTd9HyE/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'BlackCyberRecruiterPreview.png',
    title: 'Black Cyber Recruiter',
    info:
      'Brigham Young University - INTEX Final Group Project. A prototype web app for minorities in the black community to find and be recommended jobs based on skills instead of resumes/cover letters. Allowing companies searching for eligible members of the black community to easily find applicants who otherwise would have been too busy to apply.',
    info2: 'Tools used: Azure Machine Learning, Python, Django, Heroku',
    url: 'http://bcr-17.herokuapp.com',
    repo: 'https://github.com/jnoahjohnson/black-cyber-recruiter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'BCRAzurePreview.png',
    title: 'Black Cyber Recruiter - Machine Learning',
    info:
      'A published gallery of the code used to generate recommended jobs. This features data cleaning, language parsing, and matchbox recommendations.',
    info2: 'Tools used: Azure ML',
    url:
      'https://gallery.cortanaintelligence.com/Experiment/INTEX-Job-Seeker-Recommendations-Predictive-Exp',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CompetitionWebsitePreview.png',
    title: 'Python/Django Competetion Website',
    info:
      'Web app for creating and tracking competitions between friends and family. This demo site uses the latest techonology and security.',
    info2: 'Tools used: Python, Django, Heroku',
    url: '',
    repo: 'https://github.com/jnoahjohnson/CompetitionWebsite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Univar3.jpg',
    title: 'Univariate Data Visualization',
    info: 'Comparing car models with their acceleration',
    info2: 'Tools used: Python, Seaborn, Pandas',
    url: 'https://colab.research.google.com/drive/1UW-XSqSvGe6Dcw7dlNaoo-t-oRIFjL6Y?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's grab a virtual lunch!",
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
