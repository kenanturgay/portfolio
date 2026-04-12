import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks } from "../constants";

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 mt-8 pb-8 w-full">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-red-900 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
      >
        <Github className="h-6 w-6" />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-red-900 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-red-900 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
      >
        <Twitter className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
