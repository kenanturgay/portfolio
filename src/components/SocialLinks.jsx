import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { socialLinks } from '../constants';

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900"
      >
        <Github className="h-6 w-6" />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900"
      >
        <Twitter className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialLinks;