import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card-hover bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>Kod</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;