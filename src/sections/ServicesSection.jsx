import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <section className="py-32 relative bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading 
            title="WHAT WE DO" 
            subtitle="Our Services" 
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="pb-16"
          >
            <Button to="/services" variant="outline">
              View All Services
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <Link key={service.id} to={`/services#${service.id}`} className="block">
              <ServiceCard service={service} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
