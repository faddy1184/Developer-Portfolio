import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen mx-auto overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/herobg.png')", // ✅ from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div
        className={`${styles.paddingX} relative z-20 pt-[100px] sm:pt-[120px] max-w-7xl mx-auto flex flex-row items-start gap-4 sm:gap-5`}
      >
        {/* Left line */}
        <div className="flex flex-col justify-center items-center mt-3 sm:mt-5">
          <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[rgb(138,0,251)]" />
          <div className="w-1 h-32 sm:h-80 violet-gradient" />
        </div>

        {/* Text */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[rgb(138,0,251)]">Faddy</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2`}>
            I develop 3D visuals, user
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* ✅ 3D Canvas ONLY for desktop */}
      {!isMobile && (
        <div className="absolute inset-0 z-10">
          <ComputersCanvas />
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-5 sm:bottom-10 w-full flex justify-center items-center z-20">
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