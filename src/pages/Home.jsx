import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "./../sections/Footer";
import Project from "./../sections/Project";

const Home = () => {
  return (
    <>
      <ThemeToggle />
      <StarBackground />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
