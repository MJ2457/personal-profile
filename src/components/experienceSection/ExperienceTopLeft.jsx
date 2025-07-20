import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[300px] text-center">
      <p className="text-orange font-bold uppercase text-2xl md:text-3xl font-special">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-4xl md:text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="23" text="WebSites" />
      </div>
      <p className="text-center text-white text-sm md:text-base">
        With 3 years of experience building dynamic and user-friendly web applications.
      </p>
      <ExperienceInfo number="£100k" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
