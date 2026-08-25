import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import CTASection from "../sections/CTASection";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects, categories } from "../data/projects";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <SEO 
        title="Our Work" 
        description="Explore our portfolio of premium websites, web applications, and digital solutions."
      />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6"
          >
            BUILT BY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-glow to-brand-blue">
              ELEVI8.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-16"
          >
            Real projects. Real businesses. Real digital experiences. From corporate websites to web applications and e-commerce platforms.
          </motion.p>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 border-b border-gray-200 pb-6"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-brand-blue text-navy shadow-[0_0_20px_rgba(37,99,235,0.4)]" 
                    : "bg-white/5 text-gray-600 hover:bg-white/10 hover:text-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 bg-white relative min-h-[50vh]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="col-span-1"
                  >
                    <ProjectCard 
                      project={project} 
                      onClick={(p) => setSelectedProject(p)} 
                    />
                  </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      <CTASection />

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </PageTransition>
  );
}
