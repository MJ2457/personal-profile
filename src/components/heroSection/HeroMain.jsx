import React from "react";
import HeroPic from "./HeroPic";
import HeroText from "./HeroText";

const HeroMain = () => {
  return (
    <div className="pt-20 md:pt-40 pb-8 md:pb-16">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-8">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
