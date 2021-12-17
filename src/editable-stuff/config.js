// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shivanand",
  middleName: "",
  lastName: "Biradar",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sbiradar869",
    },
    
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/5hivaay/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shivanandbiradar007/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/5hivaay/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/shiva.png"),
  imageSize: 375,
  message:
    `I'm Shivanand Biradar, currently working as Cloud Support Engineer II - Containers at Amazon Web Services with experience in supporting mission-critical deployments and implementing DevOps methodologies in the cloud. What excites me at AWS is the knowledge I get resolving issues for 100's of customers. I also enjoy opportunity to solve complex problems for the customers everyday. I started out as a support engineer resolving service tickets and started picking up interest in Scripting and automation tools such as Ansible and Terraform to increase productivity and provide better service.
    I've written multiple scripts in PowerShell and Python for client to help with user provisioning, log collection and application deployment. Outside of my professional work, I love hiking, meditation, soccer and watching Movies`,
  resume: require("../editable-stuff/resume.pdf"),
  certifications: "https://www.youracclaim.com/users/shivanandBiradar/badges"
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sbiradar869", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/shiva.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/shiva.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Docker", value: 90 },
    { name: "Kubernetes", value: 75 },
    { name: "Cloud Computing-Azure, GCP, AWS", value: 85 },
    { name: "Windows OS", value: 80 },
    { name: "JavaScript", value: 30 },
    { name: "Linux", value: 70 },
    { name: "HTML/CSS", value: 40 },
    { name: "Ansible", value: 60 },
    { name: "Python", value: 50 },
    { name: "SQL", value: 55 },
    { name: "Terraform", value: 85 },
    { name: "Azure Pipeline", value: 65 },
    { name: "Jenkins", value: 55 },
    { name: "Prometheus", value: 45 },
    { name: "version Control - Git, Github", value: 80 },
    { name: "Networking", value: 80 },
    { name: "Web Server", value: 80},
    { name: "Database- PostgreSQL, MS-SQL", value: 80},
  ],
  softSkills: [
    { name: "Team-Player", value: 80 },
    { name: "Collaborator", value: 90 },
    { name: "Positive-attitude", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem-Solver", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Leadership", value: 70 },
    { name: "Creative", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time DevOps Engineer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at" ,
  email: "shivanand869@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
