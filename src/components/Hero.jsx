import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import heroBg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[100dvh] mx-auto overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div
        className={`${styles.paddingX} relative z-10 pt-[100px] sm:pt-[120px] max-w-7xl mx-auto flex flex-row items-start gap-4 sm:gap-5`}
      >
        {/* Left line */}
        <div className="flex flex-col justify-center items-center mt-3 sm:mt-5">
          <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[rgb(138,0,251)]" />
          <div className="w-1 h-32 sm:h-80 violet-gradient" />
        </div>

        {/* Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-[28px] sm:text-[48px] leading-tight`}>
            Hi, I'm <span className="text-[rgb(138,0,251)]">Faddy</span>
          </h1>

          <p className={`${styles.heroSubText} mt-1 sm:mt-2 text-[14px] sm:text-[18px] leading-snug`}>
            I develop 3D visuals, user
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 sm:bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[24px] h-[44px] sm:w-[30px] sm:h-[54px] rounded-3xl border-4 border-white flex justify-center items-start p-1">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;