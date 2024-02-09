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
  name: "Hi! I'm Oliver",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
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
  {
    name: "GitHub",
    faClass: "fab fa-github",
  },
  {
    name: "GPT Chat",
    svg: "M626.9464,278.4037a169.4492,169.4492,0,0,0-14.5642-139.187A171.3828,171.3828,0,0,0,427.7883,56.9841,169.45,169.45,0,0,0,299.9746.0034,171.3985,171.3985,0,0,0,136.4751,118.6719,169.5077,169.5077,0,0,0,23.1574,200.8775,171.41,171.41,0,0,0,44.2385,401.845,169.4564,169.4564,0,0,0,58.8021,541.0325a171.4,171.4,0,0,0,184.5945,82.2318A169.4474,169.4474,0,0,0,371.21,680.2454,171.4,171.4,0,0,0,534.7642,561.51a169.504,169.504,0,0,0,113.3175-82.2063,171.4116,171.4116,0,0,0-21.1353-200.9ZM371.2647,635.7758a127.1077,127.1077,0,0,1-81.6027-29.5024c1.0323-.5629,2.8435-1.556,4.0237-2.2788L429.13,525.7575a22.0226,22.0226,0,0,0,11.1306-19.27V315.5368l57.25,33.0567a2.0332,2.0332,0,0,1,1.1122,1.568V508.2972A127.64,127.64,0,0,1,371.2647,635.7758ZM97.3705,518.7985a127.0536,127.0536,0,0,1-15.2074-85.4256c1.0057.6037,2.7624,1.6768,4.0231,2.4012L221.63,514.01a22.04,22.04,0,0,0,22.2492,0L409.243,418.5281v66.1134a2.0529,2.0529,0,0,1-.818,1.7568l-136.92,79.0534a127.6145,127.6145,0,0,1-174.134-46.6532ZM61.7391,223.1114a127.0146,127.0146,0,0,1,66.3545-55.8944c0,1.1667-.067,3.2329-.067,4.6665V328.3561a22.0038,22.0038,0,0,0,11.1173,19.2578l165.3629,95.4695-57.2481,33.055a2.0549,2.0549,0,0,1-1.9319.1752l-136.933-79.1215A127.6139,127.6139,0,0,1,61.7391,223.1114ZM532.0959,332.5668,366.7308,237.0854l57.25-33.0431a2.0455,2.0455,0,0,1,1.93-.1735l136.934,79.0535a127.5047,127.5047,0,0,1-19.7,230.055V351.8247a21.9961,21.9961,0,0,0-11.0489-19.2579Zm56.9793-85.7589c-1.0051-.6174-2.7618-1.6769-4.0219-2.4L449.6072,166.1712a22.07,22.07,0,0,0-22.2475,0L261.9963,261.6543V195.5409a2.0529,2.0529,0,0,1,.818-1.7567l136.9205-78.988a127.4923,127.4923,0,0,1,189.34,132.0117ZM230.8716,364.6456,173.6082,331.589a2.0321,2.0321,0,0,1-1.1122-1.57V171.8835A127.4926,127.4926,0,0,1,381.5636,73.9884c-1.0322.5633-2.83,1.5558-4.0236,2.28L242.0957,154.5044a22.0025,22.0025,0,0,0-11.1306,19.2566Zm31.0975-67.0521L335.62,255.0559l73.6488,42.51v85.0481L335.62,425.1266l-73.6506-42.5122Z",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
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
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Project 4",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Project 5",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Project 6",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/kaustubhai",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
{
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://instagram.com",
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
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
