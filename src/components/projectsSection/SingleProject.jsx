import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full flex-col-reverse items-center gap-4 md:gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-center`}
    >
      <div>
        <h2 className="text-2xl md:text-3xl text-orange text-center md:text-left">{name}</h2>
        <h2
          className={`text-lg md:text-xl font-thin text-white font-special text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={`text-base md:text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-center ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          }`}
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="max-h-[180px] md:max-h-[220px] max-w-[300px] md:max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 hidden md:block"></div>
        <img src={image} alt="Project Image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
