// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Hello, I'm Oliver",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
  
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
   "I have always been fascinated by technology and its inner workings. When I was 14 I disassembled and reassembled an HP tower numerous times in preparation to build my PC. This passion for construction and technology naturally evolved into an interest in software development. In 2022, I began my software development education at the Developers Institute. There, I learned the fundamentals including version control, effective communication, and web development using the PERN and MERN stacks. Following the closure of the Developers Institute, I continued with my second year of studies at Yoobee College, where I delved into cybersecurity, mobile development, and networking. Having earned diplomas at levels 5 and 6, I am ready to take the next steps in my developer career. I enjoy collaboration and thrive in team environments, I am passionate about front‑end web design and the ever‑evolving technology we use as developers to deliver gratifying user experiences.",
   };
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },  
 /* {
    name: "C++",
    faClass: "fab fa-cuttlefish",
},*/
  {
    name: "GitHub",
    faClass: "fab fa-github",
  },
/*  {
    name: "GPT Chat",
    faClass: "fas fa-comments",
},*/
  {
    name: "Jira",
    faClass: "fab fa-jira",
},
{
  name: "Docker",
  faClass: "fab fa-docker",
},{
  name: "Shopify",
  faClass: "fab fa-shopify",
},

 /* {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },*/

];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Project 1",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Project 2",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Project 3",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/kaustubhai",
  },
 
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in touch";
const contact = {
  pitch: [
    "Whatever it might be about, feel free to reach out!",
    "You can contact me directly via linkedIn or fill out the email form."
  ],
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,

  contact,
  social,
  section2title,
  section3Title,

  section5Title,
};