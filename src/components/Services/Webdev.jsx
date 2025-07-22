// 1. Webdev Component
import React, { useEffect } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import webdevImg from "../../assets/webdevelopment.webp";

const techs = [
  { icon: <FaReact size={40} className="text-cyan-400" />, name: "React" },
  { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs size={40} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaNode size={40} className="text-green-600" />, name: "Node.js" },
  { icon: <FaJava size={40} className="text-red-600" />, name: "Java" },
];

const Webdev = () => {
  useEffect(() => {
    document.title = "Web Development Projects | iNLAX";
  }, []);

  return (
    <div className="relative bg-white text-gray-900 py-16 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Img & Desc */}
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={webdevImg}
          alt="Web Development"
          className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8">Next Level to your Business</h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg px-2 sm:px-0">
          From interactive UIs to powerful backends, we’re building full-stack experiences with modern tools and clean aesthetics. Our websites are designed to be fast, responsive, and user-friendly—optimized for both performance and style. Whether it’s a portfolio, eCommerce platform, or dynamic web app, we turn ideas into scalable digital products. Powered by tech like React, Node.js, and JavaScript, we deliver websites that connect brands with users and leave a lasting impact.
        </p>
      </div>

      {/* Tech Stack Horizontal Bar */}
      <div className="flex justify-center items-center flex-wrap gap-8 mt-12 px-2 sm:px-0">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            {tech.icon}
            <span className="text-sm mt-2 text-gray-700">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12 px-2">
        <Link to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto"
          >
            View All Projects
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Webdev;
