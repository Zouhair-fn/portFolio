import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#B0E0E6]">Bonjour, je m'appelle</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#C8A2C8]">
          Fanan Zouhair.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#FFE4E1]">
        Je suis un développeur Full Stack
        </h2>
        <p className="text-[#B0E0E6] py-4 max-w-[700px]">
          Je suis un développeur Fullstack passionné par la création
          d'applications web et mobiles élégantes et performantes. Avec des
          compétences en JavaScript, HTML, CSS, Node.js, Express.js, React,
          Next.js et React Native, je suis capable de concevoir et de construire
          des solutions logicielles complètes.
        </p>
        <div>
          <button className="text-[#C1F0DC] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#C8A2C8] hover:border-[#C8A2C8] rounded-md">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
