import portfolio from "./../assets/img/portfolio-texture.png";
import portfoliov2 from "./../assets/img/portfoliov2-texture.png";
import packinglist from "./../assets/img/packinglist-texture.png";
import doubledegree from "./../assets/img/doubledegree-texture.png";
import touravel from "./../assets/img/touravel-texture.png";
import dfh from "./../assets/img/dfh-texture.png";
import hrdashboard from "./../assets/img/hrdashboard-texture.png";

export const project = [
  {
    title: "Portfolio Website V1",
    desc: "Personal website to showcase portfolio, consisting of an about section, CV, skills, portfolios, and contact information including social media links. It also highlights my transition from data to web development",
    href: "https://portfolio-ridho-six.vercel.app/",
    className: "animatedText1",
    texture: portfolio,
    logo: "/portfolio.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/spotlight.png",
    tags: [
      { path: "/html5.png", name: "HTML5" },
      { path: "/css.jpg", name: "CSS3" },
      { path: "/react.png", name: "React" },
    ],
  },
  {
    title: "Portfolio Website V2",
    desc: "This is my second portfolio website, built using React and Tailwind CSS to achieve a clean and modern design. The layout is intentionally made non-scrollable, focusing all the attention on a single, centered scene that represents my style and work. Everything you see is designed to fit perfectly on one screen, simple, direct, and immersive.",
    href: "https://new-pf-eight.vercel.app/",
    className: "animatedText1",
    texture: portfoliov2,
    logo: "/portfolio.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [
      { path: "/html5.png", name: "HTML5" },
      { path: "/tailwind.png", name: "TailwindCSS" },
      { path: "/react.png", name: "React" },
    ],
  },
  {
    title: "Dahlia Family House",
    desc: "Responsive landing page for a villa, built using React and Vite. The website includes key sections like information, image gallery, testimonials, and a contact link.",
    href: "https://dahliafamilyhouse.com/",
    className: "animatedText1",
    texture: dfh,
    logo: "/dfh.jpg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [
      { path: "/html5.png", name: "HTML5" },
      { path: "/css.jpg", name: "CSS3" },
      { path: "/react.png", name: "React" },
    ],
  },
  {
    title: "Packing List",
    desc: "A simple React app to manage a packing list. Users can add items, mark items as packed, delete items, and sort items.",
    href: "https://whimsical-kelpie-a68cc0.netlify.app/",
    className: "animatedText1",
    texture: packinglist,
    logo: "/packing-list.jpg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [
      { path: "/html5.png", name: "HTML5" },
      { path: "/css.jpg", name: "CSS3" },
      { path: "/react.png", name: "React" },
    ],
  },
  {
    title: "Double Degree",
    desc: "A website-based application developed for my thesis using only HTML5 and CSS3, designed for desktop use without responsive design, focusing on system functionality rather than UI/UX.",
    href: "https://drive.google.com/file/d/1R7pCPNUDA-VQv-j9ig8ELkLor4cKBYg2/view?usp=sharing",
    className: "animatedText1",
    texture: doubledegree,
    logo: "/doubledegreelogo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [
      { path: "/html5.png", name: "HTML5" },
      { path: "/css.jpg", name: "CSS3" },
    ],
  },
  {
    title: "Touravel",
    desc: "A website-based home landing page for a Travel Tour Website built using only HTML5 and CSS3, focusing on the user interface and clean layouts without frameworks or JavaScript, designed for desktop use only, with extensive HTML and CSS code written to strengthen front-end fundamentals and explore areas for scalability and future enhancements.",
    href: "https://drive.google.com/file/d/1adbpeRVyKvdnLQjqgiahV3Li7RRWwTOC/view?usp=sharing",
    className: "animatedText1",
    texture: touravel,
    logo: "/touravel.jpg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [
      { path: "/html5.png", name: "HTML5" },
      { path: "/css.jpg", name: "CSS3" },
    ],
  },
  {
    title: "HR Dashboard",
    desc: "An interactive HR dashboard built with Tableau to visualize employee data.",
    href: "https://drive.google.com/file/d/1IfpRgBkYGBTFenBEHfmiLuuctXtHHKAU/view",
    className: "animatedText1",
    texture: hrdashboard,
    logo: "/tableau.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [{ path: "/tableau.png", name: "Tableau" }],
  },
  {
    title: "Stock Market Pipeline",
    desc: "A data pipeline that extracts stock data from Yahoo Finance, stores it in MinIO, transforms it to CSV, and loads it into PostgreSQL for dashboarding with Metabase.",
    href: "https://github.com/Dhorq/stock-market-pipeline",
    className: "animatedText1",
    texture: "/airflow.png",
    logo: "/airflow.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [
      { path: "/python.png", name: "Python" },
      { path: "/airflow.png", name: "Apache Airflow" },
      { path: "/minio.png", name: "MinIO" },
      { path: "/postgresql.png", name: "PostgreSQL" },
      { path: "/metabase.png", name: "Metabase" },
    ],
  },
  {
    title: "APOD NASA ETL Pipeline",
    desc: "An ETL pipeline using Apache Airflow to extract, transform, and load NASA APOD data into PostgreSQL.",
    href: "https://github.com/Dhorq/APOD-NASA-ETL-Pipeline",
    className: "animatedText1",
    texture: "/airflow.png",
    logo: "/airflow.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [
      { path: "/python.png", name: "Python" },
      { path: "/airflow.png", name: "Apache Airflow" },
      { path: "/docker.png", name: "Docker" },
      { path: "/postgresql.png", name: "PostgreSQL" },
    ],
  },
];
