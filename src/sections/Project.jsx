import { Suspense, useEffect, useState } from "react";
import { project } from "../data/project";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import DemoComputer from "../components/DemoComputer";

const projectCount = project.length;

const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [scale, setScale] = useState(15);
  const [position, setPosition] = useState([0, -25, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(3);
        setPosition([0, -5, 0]);
      } else {
        setScale(15);
        setPosition([0, -25, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentProject = project[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="project" className="c-space py-15">
      <p className="text-3xl text-center">My Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 border">
          {/* <div className="absolute top-0 right-0 -z-0">
            <img
              src={currentProject.spotlight}
              alt="Spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div> */}
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="Logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5 min-h-[300px] sm:min-h-[200px]">
            <p className="text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText font-extralight">
              {currentProject.desc}
            </p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-10 h-10 rounded-xl"
                  />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-green-500 hover:scale-105"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/arrow-link.png" alt="Arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn cursor-pointer hover:scale-125"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/arrow-button.png"
                alt="Arrow"
                className="w-8 h-5 rotate-180"
              />
            </button>
            <button
              className="arrow-btn cursor-pointer hover:scale-125"
              onClick={() => handleNavigation("next")}
            >
              <img src="/arrow-button.png" alt="Arrow" className="w-7 h-5" />
            </button>
          </div>
        </div>
        <div className="border h-150 md:h-full shadow-2xl shadow-black-200">
          <Canvas gl={{ alpha: false }}>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense>
                <group
                  scale={scale}
                  position={position}
                  rotation={[0, -0.1, 0]}
                >
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              scroll={false}
              enableZoom={false}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;
