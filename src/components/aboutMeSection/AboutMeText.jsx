import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-cyan mb-6 md:mb-10">About Me</h2>
      <p className="text-white">
        I&apos;m Martin, a web developer instructor with a passion for teaching and coding. I
        specialize in React and front-end development, helping students build real world projects
        and master modern web technologies. I also run a YouTube channel, CodeNest, where I create
        tutorials and courses to guide aspiring developers in their journey toward successful
        careers in tech. Outside of coding, I enjoy continuous learning and sharing knowledge to
        inspire others to achieve their goals.
      </p>
      <button
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-6 md:mt-10 hover:bg-orange transition-all duration-500 cursor-pointer self-center md:self-start text-white hover:text-cyan
      "
      >
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
