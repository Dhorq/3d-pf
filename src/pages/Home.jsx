import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Header from "./../sections/Header";
import Project from "./../sections/Project";
import Footer from "./../sections/Footer";
import NavBar from "../sections/NavBar";
import About from "../sections/About";
import LoadingScreen from "../sections/LoadingScreen";
import Contact from "../sections/Contact";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col gap-5 mx-10 my-5">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`transition-opacity duration-700 sm:mx-20 sm:my-5 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <StarBackground isDarkMode={isDarkMode} />
        <NavBar />
        <Header />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
