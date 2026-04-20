import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import "../index.css";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full">
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: index * 0.2,
        },
      }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      {/* ✅ Responsive card size */}
      <div
        className="bg-violet-950 rounded-[20px] 
                   py-4 px-3 sm:py-5 sm:px-4 
                   h-[200px] sm:h-[280px] 
                   flex flex-col justify-center items-center text-center"
      >
        {/* ✅ Responsive icon */}
        <img
          src={icon}
          alt={title}
          className="w-14 h-14 sm:w-24 sm:h-24 object-contain"
        />

        {/* ✅ Responsive text */}
        <h3 className="text-white text-[14px] sm:text-[24px] font-bold mt-2">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[13px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Cards */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-10">
  {services.map((service, index) => (
    <div
      key={service.title}
      className="w-[85%] xs:w-[75%] sm:w-[45%] md:w-[22.5%] lg:w-[18%] xl:w-[16%] 2xl:w-[14%]"
    >
      <ServiceCard index={index} {...service} />
    </div>
  ))}
</div>
    </>
  );
};

export default SectionWrapper(About, "about");