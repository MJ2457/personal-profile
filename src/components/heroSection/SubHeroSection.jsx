import React from "react";

const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase text-base md:text-2xl lg:text-3xl xl:text-4xl py-4 md:py-8 items-center gap-2 md:gap-4 bg-brown">
      <p className="hidden md:block">Fast Learner</p>
      <p className="hidden md:block">Team Work</p>
      <p>Details Master</p>
    </div>
  );
};

export default SubHeroSection;
