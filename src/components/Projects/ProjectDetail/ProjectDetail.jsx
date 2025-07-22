import React, { useEffect } from "react";  // <-- added useEffect import
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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
    
    youtubeUrl: "https://www.youtube.com/embed/uv-Iuvr64i8",
    technologies: ["React", "TailwindCSS", "JavaScript"],
  },
   {
      id: 2,
      title: "Nova Clothing",
      description: "E-commerce store. Content management system for an online store.",
      category: "Web Development",
      image: project2,
      youtubeUrl: "https://www.youtube.com/embed/QjlHIsejBKE" ,
    technologies: ["React", "TailwindCSS", "JavaScript"],
     
    },

    {
        id: 3,
        title: "EcoVolt",
        description: "A blog site for EcoVolt. HTML CSS JavaScript",
        category: "Web Development",
        image: project3,
        youtubeUrl: "https://www.youtube.com/embed/xy-ejDuXsOc" ,
    technologies: ["React", "TailwindCSS", "JavaScript"],
        
      },

      {
          id: 4,
          title: "Krypto",
          description: "A website UI/UX design for Krypto using Figma",
          category: "UI UX Design",
          image: project4,
          youtubeUrl: "https://www.youtube.com/embed/z4wYvHX0OsQ"
 ,
    technologies: ["Figma"],
        
        },

        {
            id: 5,
            title: "SpyNet Finance",
            description: "A website UI/UX design for SpyNet finance company using Figma",
            category: "UI UX Design",
            image: project5,
           youtubeUrl: "https://www.youtube.com/embed/ZeUrdmtVqAM"
 ,
    technologies: ["Figma"],
            
          },

      {
          id: 6,
          title: "Nova Clothing",
          description: "A website UI/UX design for Nova Clothing store using Figma",
          category: "UI UX Design",
          image: project6,
          youtubeUrl: "https://www.youtube.com/embed/O7_Asru8yxc" ,
    technologies: ["Figma"],
        },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | iNLAX`;
    } else {
      document.title = `Project Not Found | iNLAX`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="py-20 px-4 text-center text-black  min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Project not found !</h2>
        <Link
          to="/projects"
          className="mt-4 inline-block text-blue-500 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-30 px-4 sm:px-8 text-gray-700  min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-[1280px] aspect-video object-cover rounded-md mb-6 mx-auto"
        />

        <p className="text-gray-700 mb-6">{project.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies?.map((tech, idx) => (
            <span
              key={idx}
              className="bg-blue-300 text-black px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* YouTube Video Player */}
        {project.youtubeUrl && (
          <div className="mb-8 max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-semibold mb-3">Project Video</h2>
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={project.youtubeUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-md"
              />
            </div>
          </div>
        )}

        <div className="flex gap-4 mb-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Live Preview
          </a>
        </div>

        <Link
          to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-blue-400 hover:underline"
        >
          <FaArrowLeft />
          Back to All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
