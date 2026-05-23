import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ title, des, src, projLink, gitLink, tools }) => {
  return (
    <div className="w-full glass-card p-4 xl:p-6 rounded-2xl flex flex-col group relative overflow-hidden transition-all duration-500 h-full">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/10 group-hover:to-indigo-500/10 transition-all duration-500 -z-10"></div>

      <div className="w-full h-[200px] xl:h-[250px] overflow-hidden rounded-xl bg-slate-900 border border-white/5 relative z-10">
        <img
          className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
          src={src}
          alt={title}
        />
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div className="w-full mt-6 flex flex-col gap-4 flex-grow relative z-10">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg xl:text-xl font-bold text-white group-hover:text-cyan-500 transition-colors leading-snug">
            {title}
          </h3>
          <div className="flex gap-3 shrink-0 flex-wrap justify-end">
            {gitLink && (
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-600 border border-white/5 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <BsGithub className="text-lg" />
              </a>
            )}
            {projLink && (
              <a
                href={projLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-600 border border-white/5 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaGlobe className="text-lg" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm tracking-wide leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
          {des}
        </p>

        {tools && tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold px-2.5 py-1 rounded-md tracking-wide"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
