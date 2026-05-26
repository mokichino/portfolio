import React from "react";
import * as Icons from 'lucide-react';

  const ProjectCard = ({project}) => {
  if (!project) return null;

  const initials = project.title ? project.title.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase() : '';

    return (
        <div className="group bg-linear-to-br from-white to-rose-50 border border-rose-200 rounded-2xl overflow-hidden hover:shadow-soft-lg transition-all duration-300 hover:translate-y-1 flex flex-col h-full">
      <div className="h-28 bg-linear-to-br from-rose-100 to-lavender-100">
        {project.image ? (
          <img src={new URL(`../assets/${project.image}`, import.meta.url).href} alt={project.title} className="w-full h-full object-cover object-center" />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-5xl font-bold text-rose-200 font-poppins">{initials}</div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-mauve-700 font-poppins">{project.title}</h3>
          <p className="text-mauve-600 text-sm mb-4 leading-relaxed font-poppins">{project.description}</p>
          {project.tech && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs bg-linear-to-r from-rose-200 to-pink-200 text-mauve-700 px-3 py-1 rounded-full border border-rose-300 font-poppins font-medium">{t}</span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center space-x-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-sm text-mauve-600 hover:text-rose-500 transition-colors font-poppins">
              {Icons.Github ? <Icons.Github className="w-4 h-4" /> : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.17-3.37-1.17-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.55 1.04 1.55 1.04.9 1.54 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85.004 1.71.115 2.51.338 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.59.69.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
              )}
              <span>Source</span>
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-sm text-mauve-600 hover:text-rose-500 transition-colors font-poppins">
              {Icons.ExternalLink ? <Icons.ExternalLink className="w-4 h-4" /> : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0-7L10 14" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3V3" />
                </svg>
              )}
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;