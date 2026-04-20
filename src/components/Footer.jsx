import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="footer"
    >
      <div className="text-center py-2 sm:py-3 text-white">
        
        {/* Main text (responsive size) */}
        <p className="text-[11px] sm:text-[14px] text-gray-300">
          faddysportfolio.com | All rights reserved
        </p>

        {/* GitHub link (smaller on mobile) */}
        <div className="mt-2 sm:mt-4">
          <a
            href="https://github.com/faddy1184"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-[14px] text-gray-400 hover:text-white transition"
          >
            Visit My GitHub
          </a>
        </div>

      </div>
    </motion.div>
  );
};

export default Footer;