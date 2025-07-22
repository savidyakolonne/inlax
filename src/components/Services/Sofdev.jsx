// 2. Sofdev Component
import React, { useEffect } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import sofdevImg from "../../assets/softwaredevelopment.webp";

const techs = [
  { icon: <FaReact size={40} className="text-cyan-400" />, name: "React" },
  { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs size={40} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaNode size={40} className="text-green-600" />, name: "Node.js" },
  { icon: <FaJava size={40} className="text-red-600" />, name: "Java" },
];

const Sofdev = () => {
  useEffect(() => {
    document.title = "Software Development Projects | iNLAX";
  }, []);

  return (
    <div className="relative bg-white text-gray-900 py-16 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Img & Desc */}
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={sofdevImg}
          alt="Software Development"
          className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8">Building the Software, One Line at a Time</h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg px-2 sm:px-0">
         We create powerful, scalable software that’s built to solve real-world problems. Whether it’s business automation, cross-platform apps, or internal systems, our custom software solutions are engineered for speed, stability, and long-term growth. With agile development, clean architecture, and modern tech stacks, we transform your requirements into functional, high-performance applications that make life easier for users and teams alike. Your vision fuels our code—we just make it smarter, cleaner, and future-ready.
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

export default Sofdev;
