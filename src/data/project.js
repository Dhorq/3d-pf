import portfoliov2 from "./../assets/img/portfolio-v2.png";
import packinglist from "./../assets/img/packing-list.jpg";

export const project = [
  {
    title: "Portfolio Website V1",
    desc: "Personal website to showcase portfolio, consisting of an about section, CV, skills, portfolios, and contact information including social media links. It also highlights my transition from data to web development",
    href: "www.google.com",
    className: "animatedText1",
    texture: "/portfolio-texture.png",
    logo: "/portfolio.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/spotlight.png",
    tags: [
      { path: "/css.jpg", name: "CSS" },
      { path: "/react.png", name: "React" },
    ],
  },
  {
    title: "Portfolio Website V2",
    desc: "This is my second portfolio website, built using React and Tailwind CSS to achieve a clean and modern design. The layout is intentionally made non-scrollable, focusing all the attention on a single, centered scene that represents my style and work. Everything you see is designed to fit perfectly on one screen — simple, direct, and immersive.",
    href: "www.google.com",
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
      { path: "/tailwind.png", name: "TailwindCSS" },
      { path: "/react.png", name: "React" },
    ],
  },
  {
    title: "Double Degree",
    desc: "A website-based application developed for my thesis using only HTML5 and CSS3, designed for desktop use without responsive design, focusing on system functionality rather than UI/UX.",
    href: "www.google.com",
    className: "animatedText1",
    texture: "/doubledegree.png",
    logo: "/portfolio.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [{ path: "/css.jpg", name: "CSS" }],
  },
  {
    title: "Packing List",
    desc: "A simple React app to manage a packing list. Users can add items, mark items as packed, delete items, and sort items.",
    href: "https://whimsical-kelpie-a68cc0.netlify.app/",
    className: "animatedText1",
    texture: "/doubledegree.png",
    logo: packinglist,
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "",
    tags: [
      { path: "/css.jpg", name: "CSS" },
      { path: "/react.png", name: "React" },
    ],
  },
];
