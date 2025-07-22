// 3. CMSdev Component
import React, { useEffect } from 'react';
import { FaWordpress } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cmsdevImg from "../../assets/cmsdevelopments.webp";

const techs = [
  { icon: <FaWordpress size={40} className="text-cyan-400" />, name: "WordPress" },
];

const CMSdev = () => {
  useEffect(() => {
    document.title = "CMS Development Projects | iNLAX";
  }, []);

  return (
    <div className="relative bg-white text-gray-900 py-16 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Img & Desc */}
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={cmsdevImg}
          alt="CMS Development"
          className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8">Crafting Content-Driven Experiences</h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg px-2 sm:px-0">
          We create sleek, high-performing websites using powerful CMS platforms like WordPress, Webflow, and Sanity. Whether you're launching a blog, business site, or portfolio, we make sure your content is easy to update, your site loads fast, and your design stays on-brand.

From custom themes to plugin integrations and SEO optimization, we handle the full setup and deployment. No tech headaches—just smooth, secure, and scalable websites that you can manage without touching a single line of code.
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
      <div className="text-center mt-12 px-2 ">
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

export default CMSdev;
