import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center overflow-hidden relative "
    >
      <img
        src="../../images/martinPic1.png"
        alt="Portrait of Martin Yates"
        className="max-h-[250px] md:max-h-[325px] w-auto rounded-lg"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <div className="h-[400px] md:h-[500px] w-[200px] md:w-[250px] bg-orange absolute bottom-[-20px] md:bottom-[-30px] left-[-20px] md:left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-5"></div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
