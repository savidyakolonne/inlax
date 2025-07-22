import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white text-center max-w-6xl mx-auto rounded-3xl shadow-xl"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
        Start a Project with <span className="text-blue-700">iNLAX</span>
      </h2>

      <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 px-2">
        Have an idea in mind? Let’s build something exceptional together. Explore our projects or get in touch to kickstart your vision.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          to="/projects"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-3 rounded-2xl text-base sm:text-lg font-medium transition duration-200 text-center"
        >
          See Projects
        </Link>

        <Link
          to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 sm:px-8 py-3 rounded-2xl text-base sm:text-lg font-medium transition duration-200 text-center"
        >
          Contact Us
        </Link>
      </div>
    </motion.section>
  );
};

export default Projects;
