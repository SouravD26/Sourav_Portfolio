import SudokuImage from "./assets/Sudoku.png";
import TicTacToeImage from "./assets/Tic-Tac-Toe.png";
import AttendanceImage from "./assets/Attendance.png";
import PhotographyContestImage from "./assets/PhotographyContestPage.jpg";
import StaticDisplayImage from "./assets/StaticDisplayPages.jpg";
import SanmargShortsImage from "./assets/SanmargShortsApp.jpeg";
import CoffeeShopImage from "./assets/CoffeeShopWebpage.png";
import WeatherAppImage from "./assets/WeatherApp.png";
import FoodDeliveryImage from "./assets/FoodDeliveryWebpage.png";
import JOKEGENERATORImage from "./assets/Joke-Generator.png";
import ArshiImage from "./assets/Arshi.png";
import RasuImage from "./assets/Rasu.png";
import SushmaImage from "./assets/Sushma.png";
import PinkGreyImage from "./assets/PinkGrey.png";
import MinesweeperImage from "./assets/Minesweeper.png";
import BluecoreeImage from "./assets/Bluecoree.png";

const social = {
  linkedin: "https://www.linkedin.com/in/sourav-dutta-41baa215a/",
  github: "https://github.com/SouravD26",
  Netlify: "https://app.netlify.com/teams/souravdutta655/projects",
  Vercel: "https://vercel.com/souravdutta655-7281s-projects",
  portfolio: "https://sourav-portfolio-nine.vercel.app",
  email: "souravdutta655@gmail.com",
  phone: "+91-8158931079",
  location: "Kolkata, West Bengal, India",
};

const roles = [
  "Front-End Developer",
  "React.js Developer",
  "Full-Stack Builder",
  "UI/UX Implementer",
];

const summary =
  "Front-End Developer with 2 years of experience building responsive, high-performance user interfaces using React.js, JavaScript (ES6+), HTML5 and CSS3 — with working proficiency across the full stack, including Node.js, MySQL, Git, GitHub and WordPress. Improved Lighthouse performance scores from 72 to 94 and cut page load time by 35% through code splitting and lazy loading. Skilled in REST API integration, cross-browser compatibility and responsive UI/UX implementation.";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 94, suffix: "", label: "Lighthouse Score" },
  { value: 10, suffix: "K+", label: "Daily App Users" },
  { value: 15, suffix: "+", label: "Feature Releases" },
];

const skills = [
  {
    group: "Front-End",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  { group: "Back-End & APIs", items: ["Node.js", "Express.js", "RESTful APIs"] },
  { group: "Databases", items: ["MySQL", "MongoDB"] },
  { group: "Tools & Platforms", items: ["Git", "GitHub", "WordPress", "cPanel"] },
  { group: "Mobile", items: ["Flutter"] },
  {
    group: "Core Competencies",
    items: [
      "Performance Optimization",
      "Cross-Browser Compatibility",
      "UI/UX Implementation",
      "API Integration",
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "Attendance Management",
    category: "Frontend",
    desc: "In-house employee attendance app — HTML5, CSS3, JS & Bootstrap with MySQL integration, hosted on cPanel.",
    link: "https://hrms.sanmarg.in",
    img: AttendanceImage,
  },
  {
    id: 2,
    title: "Sanmarg Shorts App",
    category: "Flutter",
    desc: "Mobile-first shorts news app serving 10,000+ daily active users with sub-200ms API responses.",
    link: "https://play.google.com/store/apps/details?id=appview.sanmarg.sanmarg_shot&hl=en_US",
    img: SanmargShortsImage,
  },
  {
    id: 3,
    title: "Coffee Shop E-Commerce",
    category: "Full-Stack",
    desc: "MERN e-commerce app with auth, catalog, cart & orders. Express REST APIs, MongoDB queries under 100ms.",
    link: "http://coffee-webpage-six.vercel.app/",
    img: CoffeeShopImage,
  },
  {
    id: 4,
    title: "Real-Time Weather App",
    category: "React.js",
    desc: "SPA with OpenWeatherMap API and geolocation; debounced calls cut network requests by 60%.",
    link: "https://weather-app-sd26.netlify.app/",
    img: WeatherAppImage,
  },
  {
    id: 5,
    title: "Photography Contest Page",
    category: "Frontend",
    desc: "Responsive contest/scholarship submission page for Sanmarg, built with HTML5, CSS3 and Bootstrap.",
    img: PhotographyContestImage,
  },
  {
    id: 6,
    title: "Joke Generator",
    category: "React.js",
    desc: "A playful joke generator app built with React.",
    link: "https://joke-generatorsd.netlify.app/",
    img: JOKEGENERATORImage,
  },
  {
    id: 7,
    title: "Food Delivery Webpage",
    category: "Frontend",
    desc: "Menu-based UI focused on speed and responsiveness.",
    link: "https://food-corner-three.vercel.app/",
    img: FoodDeliveryImage,
  },
  {
    id: 8,
    title: "Static Display Pages",
    category: "Frontend",
    desc: "Custom responsive internal pages with cross-browser testing.",
    img: StaticDisplayImage,
  },
  {
    id: 9,
    title: "Arshi Family Saloon",
    category: "Client Website",
    desc: "Premium salon website for a Narendrapur, Kolkata business — elegant hero, services, gallery and booking CTA.",
    link: "https://arshi-opal.vercel.app",
    img: ArshiImage,
  },
  {
    id: 10,
    title: "Sushma Beauty & Hair Saloon",
    category: "Client Website",
    desc: "Animated beauty-salon site with particle background, orbit graphics and service highlights.",
    link: "https://sushma-teal.vercel.app",
    img: SushmaImage,
  },
  {
    id: 11,
    title: "Rasu Salon",
    category: "Client Website",
    desc: "Modern, bold salon landing page with glassmorphism navigation and online booking.",
    link: "https://rasu-two.vercel.app",
    img: RasuImage,
  },
  {
    id: 12,
    title: "Pink & Grey Unisex Salon",
    category: "Client Website",
    desc: "Unisex salon website for Narendrapur with an animated brand intro and services showcase.",
    link: "https://pink-grey.vercel.app",
    img: PinkGreyImage,
  },
  {
    id: 13,
    title: "Bluecoree",
    category: "Client Website",
    desc: "IT services & development studio site — infrastructure, CCTV, networking, cloud and web/app development services.",
    link: "https://www.bluecoree.com/",
    img: BluecoreeImage,
  },
];

const education = [
  {
    school: "Elitte Institute of Engineering and Management",
    degree: "Diploma in Mechanical Engineering — Grade A+",
    year: "2015 – 2018",
  },
  {
    school: "Rajballavpur High School",
    degree: "Higher Secondary — 66.6%",
    year: "2014",
  },
  {
    school: "Rajballavpur High School",
    degree: "Secondary — 60.2%",
    year: "2012",
  },
];

const experience = [
  {
    company: "Sangreem Media LLP (Sanmarg Pvt. Ltd.)",
    location: "Kolkata, West Bengal",
    role: "Web Developer",
    period: "Sep 2024 – Present",
    bullets: [
      "Built the front-end for an in-house Employee Attendance Management app (HTML5, CSS3, JavaScript, Bootstrap), collaborating with a backend developer on MySQL integration, hosted on cPanel.",
      "Built the mobile-first Shorts News app UI in Flutter, delivering real-time content to 10,000+ daily active users with sub-200ms API responses.",
      "Rebuilt front-end templates while migrating Tehelka.com's WordPress site to a local server, improving editor workflow efficiency by 25% and reviewing code across 15+ feature releases.",
      "Customized WordPress page layouts for Aparajita Sanmarg, ensuring mobile responsiveness and design consistency.",
      "Developed a responsive Photography Contest/Scholarship page for Sanmarg with cross-browser compatibility.",
      "Developed custom responsive webpages for an in-house application, with cross-browser testing and debugging.",
    ],
  },
];

const certificates = [
  {
    name: "React Full Stack Developer Course",
    period: "Mar 2025 – Sept 2025 (8 months)",
    issuer: "EME Academy",
    skill: "React.js, Node.js (Express.js), MongoDB",
  },
  {
    name: "HTML, CSS & JavaScript Certification",
    period: "Jan 2024 – Jun 2024",
    issuer: "Great Learning",
    skill: "HTML, CSS, JavaScript",
  },
];

const blogs = [
  {
    id: 1,
    title: "Sudoku Game",
    date: "May 2025",
    excerpt: "HTML, CSS and JavaScript",
    img: SudokuImage,
    link: "https://sudoku-alpha-two.vercel.app/",
  },
  {
    id: 2,
    title: "Tic Tac Toe Game",
    date: "Apr 2025",
    excerpt: "HTML, CSS and JavaScript",
    img: TicTacToeImage,
    link: "https://tic-tac-toe-theta-cyan-51.vercel.app/",
  },
  {
    id: 3,
    title: "Minesweeper Game",
    date: "2025",
    excerpt: "HTML, CSS and JavaScript — Easy, Medium and Hard modes",
    img: MinesweeperImage,
    link: "https://minesweeper-azure-rho.vercel.app",
  },
];

export {
  social,
  roles,
  summary,
  stats,
  skills,
  projects,
  education,
  experience,
  blogs,
  certificates,
};
