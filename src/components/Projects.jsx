import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: "Modern E-Commerce Platform",
      description: "React, TypeScript and Node.js based high-performance e-commerce solution with real-time inventory tracking and advanced search features.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/example/ecommerce"
    },
    {
      title: "Project Management App",
      description: "Modern project management tool offering real-time updates and task tracking to facilitate team collaboration.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com/project-management",
      githubUrl: "https://github.com/example/project-management"
    }
  ];

  return (
    <section className="py-20 bg-white/50 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center dark:text-white">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;