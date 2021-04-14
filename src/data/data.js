import { nanoid } from 'nanoid';
import downloadResume from './Resume_SuryaDutta.pdf' 

// HEAD DATA
export const headData = {
  title: 'Surya Dutta', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Surya',
  subtitle: 'Tech Lead, Data Nerd, Problem Solver',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello! Thanks for coming to my site.',
  paragraphTwo: 'I\'m a Lead Data Engineer at McMaster-Carr. I specialize in digital analytics and processing complex data streams. ',
  paragraphThree: 'Outside of work, I enjoy working on data science projects for social good. I\'m optimistic about how technology can democratize information and access, but realize that\'s not always the case. From civic tech to healthcare, I\'m always looking for new opportunities to make a positive impact!',
  resume: downloadResume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cogtrack.png',
    title: 'Cognition Tracker',
    info: 'This application enable caregivers and clinicians of dementia patients to easily, reliably, and inexpensively monitor their patient’s cognitive ability, and use this knowledge to inform the patient’s treatment and intervene earlier.',
    info2: '',
    url: 'https://cognitiontracker.com',
  },
  {
    id: nanoid(),
    img: 'bert.png',
    title: 'Mitigating Gender and Racial Bias in BERT',
    info: 'BERT is one of the world\'s most widely used text embedding model, yet encoded in those embeddings are significant racial and gender biases.',
    info2: 'This work measures this bias and presents a methodology using Adversarial Debiasing to mitigate this bias significantly.',
    url: '',
    repo: 'https://github.com/suryadutta/Adversarial-Debiasing-BERT', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'surya@suryadutta.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/suryadutta/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/suryadutta',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
