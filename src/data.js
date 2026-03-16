import SudokuImage from "../src/assets/Sudoku.png";
import TicTacToeImage from "../src/assets/Tic-Tac-Toe.png";
import AttendanceImage from "../src/assets/Attendance.png";
// import InternalMediaImage from "../src/assets/InternalMediaDivisionSite.png";
import PhotographyContestImage from "../src/assets/PhotographyContestPage.jpg";
import StaticDisplayImage from "../src/assets/StaticDisplayPages.jpg";
import SanmargShortsImage from "../src/assets/SanmargShortsApp.jpeg";
import CoffeeShopImage from "../src/assets/CoffeeShopWebpage.png";
import WeatherAppImage from "../src/assets/WeatherApp.png";
import FoodDeliveryImage from "../src/assets/FoodDeliveryWebpage.png";

const social = {
  linkedin: "https://www.linkedin.com/in/sourav-dutta-41baa215a/",
  github: "https://github.com/SouravD26",
  Netlify: "https://app.netlify.com/teams/souravdutta655/projects",
  Vercel: "https://vercel.com/souravdutta655-7281s-projects",
  email: "souravdutta655@gmail.com",
  phone: "+918158931079",
  location: "Kolkata, West Bengal, India",
};

const projects = [
  {
    id: 1,
    title: "Attendance",
    category: "Frontend",
    desc: "HRMS Attendance Management System",
    link: "https://hrms.sanmarg.in",
    img: AttendanceImage,
  },
  // {
  //   id: 2,
  //   title: "Internal Media Division Site",
  //   category: "WordPress",
  //   desc: "WordPress-based internal site for event communications.",
  //   // img: InternalMediaImage,
  // },
  {
    id: 3,
    title: "Photography Contest Page",
    category: "Frontend",
    desc: "Responsive frontend using HTML, CSS, Bootstrap and JS",
    img: PhotographyContestImage,
  },
  {
    id: 4,
    title: "Static Display Pages",
    category: "Frontend",
    desc: "Static internal pages built with Bootstrap.",
    img: StaticDisplayImage,
  },
  {
    id: 5,
    title: "Sanmarg Shorts App",
    category: "Flutter",
    desc: "Shorts-style mobile news app built with Flutter.",
    link: "https://play.google.com/store/apps/details?id=appview.sanmarg.sanmarg_shot&hl=en_US",
    img: SanmargShortsImage,
  },
  {
    id: 6,
    title: "Coffee Shop Webpage",
    category: "React.js",
    desc: "Interactive coffee shop UI built in React.",
    link: "http://coffee-webpage-six.vercel.app/",
    img: CoffeeShopImage,
  },
  {
    id: 7,
    title: "Weather App",
    category: "React.js",
    desc: "Real-time weather application built with React.",
    link: "https://weather-app-sd26.netlify.app/",
    img: WeatherAppImage,
  },
  {
    id: 8,
    title: "Food Delivery Webpage",
    category: "Frontend",
    desc: "Menu-based UI focused on speed and responsiveness.",
    link: "https://food-corner-three.vercel.app/",
    img: FoodDeliveryImage,
  },
];

const education = [
  {
    school: "Elitte Institute of Engineering and Management",
    degree: "Mechanical Engineering (A+)",
    year: "2015 – 2018",
  },
  {
    school: "Rajballavpur High School (H.S.)",
    degree: "Higher Secondary | 66.6%",
    year: "2014",
  },
  {
    school: "Rajballavpur High School (H.S.)",
    degree: "Secondary | 60.2%",
    year: "2012",
  },
];

const experience = [
  {
    company: "Sangreem Media LLP",
    role: "Web Developer",
    period: "Sep 2024 – Present",
    bullets: [
      "Maintain and regularly update the company’s internal website.",
      "Implement interface changes based on department requests.",
      "Lead front-end development using HTML, CSS and Bootstrap.",
      "Ensure mobile responsiveness and cross-browser compatibility.",
      "Collaborate with backend developers to deploy dynamic features.",
    ],
  },
];

const certificates = [
  {
    name: "React Full-Stack Web Development Course",
    period: "March 2025 - October 2025 (8 months)",
    issuer: "EME Academy",
    skill: "React.js, Node.js, Express.js, MongoDB",
  },
];

const blogs = [
  {
    id: 1,
    title: " SUDOKU Game",
    date: "May 2025",
    excerpt: "HTML, CSS and JavaScript",
    img: SudokuImage,
    link: "https://tic-tac-toe-theta-cyan-51.vercel.app/",
  },
  {
    id: 2,
    title: "TIC TAC TOE Game",
    date: "Apr 2025",
    excerpt: "HTML, CSS and JavaScript",
    img: TicTacToeImage,
    link: "https://sudoku-alpha-two.vercel.app/",
  },
];

export { social, projects, education, experience, blogs, certificates };
