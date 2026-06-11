"use client";
import CanvasLoader from "@/components/CanvasLoader";
import DemoComputer from "@/components/DemoComputer";
import { myProjects } from "@/constants";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProjects = myProjects[selectedProjectIndex];
  const handleNavigation = (direction: string) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section className="my-20 sm:px-10 px-5" id="projects">
      <p className="sm:text-4xl text-3xl font-semibold text-gray_gradient">
        My Projects
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-slate-800">
          <div className="absolute top-0 right-0">
            <Image
              src={currentProjects.spotlight}
              alt="spotlight"
              height={100}
              width={100}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProjects.logoStyle}
          >
            <Image
              src={currentProjects.logo}
              alt="Logo"
              height={100}
              width={100}
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProjects.title}
            </p>
            <p className="">{currentProjects.desc}</p>
            <p className="">{currentProjects.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProjects.tags.map((tag, index) => (
                <div
                  className="w-10 h-10 rounded-md p-2 bg-neutral-700 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
                  key={index}
                >
                  <Image
                    src={tag.path}
                    alt={tag.name}
                    height={100}
                    width={100}
                  />
                </div>
              ))}
            </div>
            <Link
              href={currentProjects.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center cursor-pointer gap-2 text-white"
            >
              <p>Check Live Site</p>
              <Image
                src={"/assets/arrow-up.png"}
                alt="arrow"
                height={10}
                width={10}
              />
            </Link>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("previous")}
            >
              <Image
                src={"/assets/left-arrow.png"}
                alt="left arrow"
                height={20}
                width={20}
              />
            </button>
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("next")}
            >
              <Image
                src={"/assets/right-arrow.png"}
                alt="right arrow"
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
        <div className="border border-neutral-700 bg-black rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture = {currentProjects.texture}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
