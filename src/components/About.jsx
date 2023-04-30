import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f]  text-[#B0E0E6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
              Bonjour, je suis Zouhair, ravi de vous rencontrer. N'hésitez pas à jeter un coup d'œil autour de vous.
              </p>
            </div>
            <div>
                <p>Depuis que j'ai commencé à m'intéresser à l'informatique, j'ai découvert ma passion pour la programmation. J'aime la façon dont elle me permet de donner vie à mes idées et de créer des choses incroyables à partir de zéro. J'apprécie particulièrement le sentiment de satisfaction que je ressens lorsque je surmonte un défi de programmation et que mon code fonctionne comme je l'avais prévu. Je trouve que la programmation est une activité incroyablement stimulante et captivante.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
