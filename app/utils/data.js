import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineGoogle,
} from "react-icons/ai";

export const buttonData = [
  {
    id: 1,
    fromColor: "from-[#D16BA5]",
    viaColor: "via-[#86A8E7]",
    toColor: "to-[#5FFBF1]",
    icon: <AiOutlineMail size={25} />,
    text: "Email",
    url: "mailto:mohammedsafvan.me@gmail.com",
  },
  {
    id: 2,
    fromColor: "from-[#3f5efb]",
    viaColor: "via-[#9f52b2]",
    toColor: "to-[#fc466b]",
    text: "LinkedIn",
    icon: <AiOutlineLinkedin size={25} />,
    url: "https://www.linkedin.com/in/mohammed-safvan-7022b21a3/",
  },
  {
    id: 3,
    fromColor: "from-[#833ab4]",
    viaColor: "via-[#fd1d1d]",
    toColor: "to-[#fcb045]",
    icon: <AiOutlineGoogle size={25} />,
    url: "https://g.dev/mohammedsafvan",
    text: "Google Dev",
  },
  {
    id: 4,
    fromColor: "from-[#eeaeca]",
    viaColor: "via-[#54409d]",
    toColor: "to-[#94bbe9]",
    text: "Github",
    icon: <AiOutlineGithub size={25} />,
    url: "https://github.com/mohammedsafvan/",
  },
];

export const techStacks = [
  {
    name: "Flutter",
    url: "https://flutter.dev/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg",
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
  },
  {
    name: "CSS",
    url: "https://www.w3.org/TR/CSS/#css",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
  },
  {
    name: "NextJs",
    url: "https://nextjs.org/docs",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-dark.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
  },
  {
    name: "Express",
    url: "https://expressjs.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-dark.svg",
  },
  {
    name: "MySQL",
    url: "https://www.mysql.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
  },
  {
    name: "FireBase",
    url: "https://firebase.google.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
  },
];

export const projects = [
  {
    name: "Todo Firebase",
    // preview: "google.com",
    techStack: ["Flutter", "Firebase"],
    image:
      "https://raw.githubusercontent.com/mohammedsafvan/portfolio-safvan/e81e65b15f8c2c2030054b7d1720799dc637e81f/public/todo_firebase.png",
    description:
      "A todo Android app with firebase cloud firestore and authentication(Phone No, Google, Email) with persistant storage",
    url: "https://github.com/mohammedsafvan/todo_firebase",
  },
  {
    name: "Note Taking app",
    techStack: ["React", "Markdown"],
    image:
      "https://raw.githubusercontent.com/mohammedsafvan/note-taking-app/main/note-app.png",
    description: "A minimalistic note taking app based on markdown. ",
    url: "https://github.com/mohammedsafvan/note-taking-app",
  },
  {
    name: "Blood donation app",
    techStack: ["Flutter", "Firebase"],
    description:
      "An application which enables a community to register their details for blood donation, and also search for donors with specified area",
    image: '/blood-donation.png',
  },
];
