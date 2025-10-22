import React from "react";

const ProjectCard = ({ project }) => (
  <div
    onClick={() => window.open(project.url, "_blank")}
    className="flex-none w-64 md:w-80 h-full relative group bg-white/20 rounded-xl opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer overflow-hidden"
  >
    <div className="tech-icon absolute inset-0 rounded-xl transition-all duration-300"></div>
    <div className="relative h-full w-full p-2">
      <div className="tech-icon-text transition-colors duration-300">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-[150px] object-cover rounded"
        />
      </div>
      <div className="opacity-0 group-hover:opacity-100 absolute bottom-3 left-3 text-sm font-semibold whitespace-nowrap transition-all duration-300 text-white bg-green-500 px-3 py-1.5 rounded-lg shadow-lg transform group-hover:scale-105">
        {project.name}
      </div>
    </div>
  </div>
);

export default ProjectCard;
