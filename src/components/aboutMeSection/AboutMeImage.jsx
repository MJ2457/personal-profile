import React from "react";

const AboutMeImage = () => {
  return (
    <div className="h-[300px] md:h-[400px] lg:h-[500px] w-[200px] md:w-[250px] lg:w-[300px] relative">
      <div className="h-[300px] md:h-[400px] lg:h-[500px] w-[200px] md:w-[250px] lg:w-[300px] rounded-[50px] md:rounded-[75px] lg:rounded-[100px] absolute overflow-hidden">
        <img
          src="../../images/about-me.jpg"
          alt="about me image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[300px] md:h-[400px] lg:h-[500px] w-[170px] md:w-[200px] lg:w-[250px] bg-orange absolute bottom-[-20px] md:bottom-[-25px] lg:bottom-[-30px] left-[-20px] md:left-[-25px] lg:left-[-30px] rounded-bl-[60px] md:rounded-bl-[90px] lg:rounded-bl-[120px] rounded-tr-[60px] md:rounded-tr-[90px] lg:rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
