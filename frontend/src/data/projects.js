import sfsWebsiteShot from "../assets/projects/sfs-website.png";
import announcementShot from "../assets/projects/announcement.png";
import roadsignalShot from "../assets/projects/roadsignal.png";
import jsCalculatorShot from "../assets/projects/js-calculator.png";

export const CATEGORIES = ["Software", "Networking", "Cybersecurity"];

export const projects = [
  {
    id: "sfs-website",
    title: "113th Security Forces Squadron Site",
    category: "Software",
    description:
      "Drill-weekend information hub and newsletter site for the 113th Security Forces Squadron, with a login-gated staff tracker for PT test scheduling and training requirements.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    github: "https://github.com/brotherhood1511-boop/SFS-website",
    demo: "https://sfs-website-fawn.vercel.app/",
    screenshot: sfsWebsiteShot,
  },
  {
    id: "sfs-prototype",
    title: "SFS Prototype",
    category: "Software",
    description: "A full-stack Security Forces Squadron admin tracking app — still in progress, no database yet.",
    stack: ["React", "Node.js"],
    github: "https://github.com/brotherhood1511-boop/SFS-Prototype",
    demo: "https://sfs-prototype-6lfcxl7l7-km26.vercel.app/login",
  },
  {
    id: "wordly-plus",
    title: "Wordly+",
    category: "Software",
    description:
      "A single-page dictionary app pulling from a dictionary API. Search words for definitions, pronunciation, audio, example sentences, and synonyms, with search history, saved favorites, a random word generator, light/dark mode, and a responsive layout.",
    stack: ["JavaScript", "HTML", "CSS", "API"],
    github: "https://github.com/brotherhood1511-boop/spa-single-page",
  },
  {
    id: "batfamily-trivia",
    title: "Batfamily Trivia",
    category: "Software",
    description: "A command-line trivia game about the Batfamily.",
    stack: ["JavaScript"],
    github: "https://github.com/brotherhood1511-boop/batfamily-trivia-cli",
  },
  {
    id: "announcement",
    title: "Baby Announcement Trivia",
    category: "Software",
    description:
      "A trivia game used to announce a baby on the way, with different possible names as the question answers.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/brotherhood1511-boop/Announcement",
    demo: "https://brotherhood1511-boop.github.io/Announcement/",
    screenshot: announcementShot,
  },
  {
    id: "roadsignal",
    title: "RoadSignal",
    category: "Software",
    description: "A road map app — still in progress.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/brotherhood1511-boop/Roadsignal-app",
    demo: "https://brotherhood1511-boop.github.io/Roadsignal-app/",
    screenshot: roadsignalShot,
  },
  {
    id: "color-clock",
    title: "Color Clock",
    category: "Software",
    description: "A React project built for Flatiron School.",
    stack: ["React"],
    github: "https://github.com/brotherhood1511-boop/Color-Clock",
  },
  {
    id: "js-calculator",
    title: "JavaScript Calculator",
    category: "Software",
    description: "A working calculator built with JavaScript, styled with HTML and CSS.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/brotherhood1511-boop/Javascript-Calculator",
    demo: "https://brotherhood1511-boop.github.io/Javascript-Calculator/",
    screenshot: jsCalculatorShot,
  },
];
