import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function ProjectCard({ project, onClick }) {
  // Use screenshot API for live previews, fallback to generic styling if no image provided
  const screenshotUrl = project.url && project.url !== "null"
    ? `https://api.screenshotmachine.com/?key=0c7f07&dimension=1920x1080&format=jpg&cacheLimit=0&timeout=400&url=${encodeURIComponent(project.url)}`
    : null;
    
  const imageUrl = project.image || screenshotUrl;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 hover:border-brand-blue/50 transition-colors flex flex-col"
      onClick={() => onClick(project)}
      data-cursor="view"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        {project.url && project.url !== "null" ? (
          <div className="w-[150%] h-[150%] transform scale-[0.666] origin-top-left transition-transform duration-700 group-hover:scale-[0.7]">
            <iframe
              src={project.url}
              title={project.title}
              className="w-full h-full border-0 pointer-events-none"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              scrolling="no"
            />
          </div>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              // Fallback to stylized text if screenshot fails
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        
        {/* Fallback Graphic (shows if no image or image fails to load) */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-navy-dark to-brand-blue/20 ${imageUrl ? 'hidden' : 'flex'}`}
        >
          <div className="text-3xl font-bold text-navy/50 mb-2">{project.title}</div>
          <div className="text-sm font-medium text-brand-blue uppercase tracking-wider">{project.type}</div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent opacity-80" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-gray-200 text-xs font-medium text-navy shadow-lg">
            {project.category}
          </span>
          {project.status === "Live" && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold tracking-wider uppercase border border-green-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 pt-0 -mt-8 flex flex-col pointer-events-none">
        <div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-blue-glow transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {project.description}
          </p>
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="text-xs font-medium text-gray-500">
                #{tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs font-medium text-gray-600">+{project.technologies.length - 3}</span>
            )}
          </div>
        </div>
        
        {/* Action Button */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-sm font-medium text-gray-700">
            {project.client}
          </span>
          <span className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-navy transition-all group-hover:rotate-45 pointer-events-auto">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-brand-blue-glow/0 group-hover:bg-brand-blue-glow/5 transition-colors pointer-events-none" />
    </motion.div>
  );
}
