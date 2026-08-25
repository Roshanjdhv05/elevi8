import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2, Target, CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function ProjectModal({ project, isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const screenshotUrl = project.url && project.url !== "null"
    ? `https://api.screenshotmachine.com/?key=0c7f07&dimension=1920x1080&format=jpg&cacheLimit=0&timeout=400&url=${encodeURIComponent(project.url)}`
    : null;
    
  const imageUrl = project.image || screenshotUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-gray-200/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 top-4 bottom-4 md:inset-4 lg:inset-10 z-[101] flex flex-col bg-white rounded-2xl md:rounded-3xl border border-gray-200 overflow-hidden shadow-2xl max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-gray-100/50 backdrop-blur-md relative z-10">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-navy">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.type}</p>
              </div>
              <div className="flex items-center gap-4">
                {project.livePreview && project.url && (
                  <Button 
                    href={project.url} 
                    variant="primary" 
                    className="hidden md:flex py-2 text-sm"
                  >
                    Visit Live Website <ExternalLink size={16} className="ml-2" />
                  </Button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-600 hover:text-navy transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto overflow-x-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
                
                {/* Left Column: Image/Preview (Spans 7 cols) */}
                <div className="lg:col-span-7 bg-gray-200 relative">
                  <div className="sticky top-0 h-64 md:h-96 lg:h-[calc(100vh-12rem)] min-h-[400px]">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback Graphic */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-dark to-brand-blue/20 p-8 text-center ${imageUrl ? 'hidden' : 'flex'}`}>
                      <div className="w-full max-w-md aspect-video border-2 border-gray-200 rounded-xl bg-gray-100/50 flex items-center justify-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 flex items-center px-4 gap-2 border-b border-gray-200">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="text-brand-blue/30 font-bold text-4xl uppercase tracking-widest px-4">
                          {project.client}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Details (Spans 5 cols) */}
                <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 lg:pl-0 flex flex-col gap-10">
                  
                  {/* Overview */}
                  <section>
                    <h3 className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-4">Overview</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </section>
                  
                  {/* Meta Details */}
                  <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-white/5 border border-gray-200">
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Client</span>
                      <span className="font-semibold">{project.client}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Category</span>
                      <span className="font-semibold">{project.category}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Status</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase border border-green-500/30">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  {project.challenge && (
                    <section>
                      <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                        <Target size={20} className="text-brand-blue" />
                        The Challenge
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </section>
                  )}

                  {project.solution && (
                    <section>
                      <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                        <CheckCircle2 size={20} className="text-brand-blue" />
                        Our Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </section>
                  )}

                  {/* Technologies */}
                  <section>
                    <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                      <Code2 size={20} className="text-brand-blue" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-gray-200 border border-gray-200 text-sm font-medium text-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                  
                  {/* Mobile CTA */}
                  {project.livePreview && project.url && (
                    <div className="mt-4 md:hidden pb-8">
                      <Button href={project.url} className="w-full">
                        Visit Live Website <ExternalLink size={18} className="ml-2" />
                      </Button>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
