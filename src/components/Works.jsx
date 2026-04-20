import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: index * 0.3,
        },
      }}
      viewport={{ once: true }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-slate-950 p-4 sm:p-5 rounded-2xl w-[300px] sm:w-[360px]"
      >
        {/* Image */}
        <div className="relative w-full h-[180px] sm:h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="mt-4 sm:mt-5">
          <h3 className="text-white font-bold text-[18px] sm:text-[24px]">
            {name}
          </h3>

          <p className="mt-2 text-secondary text-[12px] sm:text-[14px]">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[11px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center bg-primary">
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to code
          repositories and live demos. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="mt-10 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");