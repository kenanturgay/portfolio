import React from 'react';

const GitHubCounter = ({ 
  username = 'kenanturgay',
  label = 'GitHub Profile views',
  color = '58A6FF',
  style = 'for-the-badge',
  className = ''
}) => {
  const badgeUrl = `https://komarev.com/ghpvc/?username=${username}&label=${encodeURIComponent(label)}&color=${color}&style=${style}`;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <a 
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform hover:scale-105"
      >
        <img
          src={badgeUrl}
          alt={`${label} counter`}
          className="rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
        />
      </a>
    </div>
  );
};

export default GitHubCounter;
