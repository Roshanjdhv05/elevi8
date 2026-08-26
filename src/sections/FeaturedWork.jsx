import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Button from "../components/Button";
import { featuredProjects } from "../data/projects";

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 bg-gray-200 relative border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-8">
          <SectionHeading 
            title="FEATURED WORK" 
            subtitle="Portfolio" 
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="pb-16"
          >
            <Button to="/work" variant="primary">
              Explore All Projects
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard 
                project={project} 
                onClick={(p) => setSelectedProject(p)} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
