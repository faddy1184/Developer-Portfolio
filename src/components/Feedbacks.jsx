import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: index * 0.3,
      },
    }}
    viewport={{ once: true }}
    className="bg-slate-950 p-6 sm:p-10 rounded-3xl w-[260px] sm:w-[300px]"
  >
    {/* Quote */}
    <p className="text-white font-black text-[32px] sm:text-[48px]">"</p>

    <div>
      {/* Testimonial text */}
      <p className="text-white tracking-wider text-[14px] sm:text-[18px]">
        {testimonial}
      </p>

      <div className="mt-5 sm:mt-7 flex justify-between items-center">
        <div className="flex-1 flex flex-col">
          {/* Name */}
          <p className="text-white font-medium text-[14px] sm:text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>

          {/* Designation */}
          <p className="text-secondary text-[11px] sm:text-[12px]">
            {designation} of {company}
          </p>
        </div>

        {/* Image */}
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="-mt-20 bg-slate-800 rounded-[20px]">
      {/* Heading */}
      <div
        className={`bg-slate-700 rounded-2xl ${styles.padding} min-h-[220px] sm:min-h-[280px] flex flex-col justify-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Cards */}
      <div
        className={`-mt-16 sm:-mt-20 pb-10 sm:pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-5 sm:gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");