import React, { Suspense, useState } from "react";
import { myProjects } from "../Component/contants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Democomputer from "../Component/Democomputer";

const Projects = () => {
  const projectcount = myProjects.length;
  const [index, setindex] = useState(0);
  const currentProject = myProjects[index];

  return (
    <section className="c-space my-20">
      <p className="head-text">My Works</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="Spotlight"
              className="w-full h-96 object-cover rounder-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={myProjects[0].logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedtext">
              {currentProject.title}
            </p>
            <p className="animatedtext">{currentProject.desc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center cursor-pointer gap-2 text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check the project repo</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => {
                setindex((e) => (e === 0 ? projectcount - 1 : e - 1));
              }}
            >
              <img
                src="/assets/left-arrow.png"
                alt="leftarrrow"
                className="w-4 h-4"
              />
            </button>

            <button
              className="arrow-btn"
              onClick={() => {
                setindex((e) => (e === projectcount - 1 ? 0 : e + 1));
              }}
            >
              <img
                src="/assets/right-arrow.png"
                alt="rightarrrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={10} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={null}>
                <group scale={5} position={[-80, -80, 45]} rotation={[0, 0, 0]}>
                  <Democomputer texture={currentProject.texture}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
