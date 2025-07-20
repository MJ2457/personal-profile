import React from "react";

const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-4xl md:text-5xl lg:text-6xl text-cyan">{number}</p>
      <p className="font-bold text-lg md:text-xl text-lightGrey uppercase -mt-2 md:-mt-4">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
