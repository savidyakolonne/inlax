import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import project1 from "../../../assets/project1.webp";
import project2 from "../../../assets/project2.webp";
import project3 from "../../../assets/project3.webp";
import project4 from "../../../assets/project4.webp";
import project5 from "../../../assets/project5.webp";
import project6 from "../../../assets/project6.webp";

const projectData = [
  {
    id: 1,
    title: "Savi K.",
    description: "A modern personal portfolio built with React and TailwindCSS.",
    category: "Web Development",
    image: project1,
    liveUrl: "https://savidya-portfolio.vercel.app",
  },
  {
    id: 2,
    title: "Nova Clothing",
    description: "E-commerce store. Content management system for an online store.",
    category: "Web Development",
    image: project2,
   
  },
  {
    id: 3,
    title: "EcoVolt",
    description: "A blog site for EcoVolt. HTML CSS JavaScript",
    category: "Web Development",
    image: project3,
    
  },
  {
    id: 4,
    title: "Krypto",
    description: "A website UI/UX design for Krypto using Figma",
    category: "UI UX Design",
    image: project4,
  
  },
  {
    id: 5,
    title: "SpyNet Finance",
    description: "A website UI/UX design for SpyNet finance company using Figma",
    category: "UI UX Design",
    image: project5,
    
  },
  {
    id: 6,
    title: "Nova Clothing",
    description: "A website UI/UX design for Nova Clothing store using Figma",
    category: "UI UX Design",
    image: project6,
    
  },
];

const categories = ["All", "Web Development", "Software Development", "CMS", "UI UX Design"];

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects | iNLAX";
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <div className="py-30 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Projects</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-700 text-sm mb-3">{project.description}</p>
              <span className="inline-block px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mb-4">
                {project.category}
              </span>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                <a  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Visit Site
                </a>
                <Link
                  to={`/projects/${project.id}`}  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded hover:bg-gray-200 transition"
                >
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
