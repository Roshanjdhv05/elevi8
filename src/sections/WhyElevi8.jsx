import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Lightbulb, Layout, Code, Smartphone, Zap, MessagesSquare, Scaling, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Lightbulb, title: "Business-Focused Thinking", desc: "We don't just write code; we build solutions that solve actual business problems." },
  { icon: Layout, title: "Modern Design", desc: "Premium, conversion-optimised designs that help you stand out from the competition." },
  { icon: Code, title: "Clean Development", desc: "Scalable, maintainable, and robust code architectures built for the future." },
  { icon: Smartphone, title: "Responsive Experiences", desc: "Flawless performance across all devices — from 4K monitors to small mobile screens." },
  { icon: Zap, title: "Performance-Focused", desc: "Lightning-fast load times optimized for user experience and search engine rankings." },
  { icon: MessagesSquare, title: "Transparent Communication", desc: "Clear updates, direct access to the team, and no technical jargon." },
  { icon: Scaling, title: "Scalable Solutions", desc: "We build platforms that can grow and adapt as your business expands." },
  { icon: ShieldCheck, title: "End-to-End Support", desc: "From initial discovery to post-launch maintenance, we're your technical partners." }
];

export default function WhyElevi8() {
  return (
    <section className="py-32 bg-white relative border-b border-gray-200">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading 
          title="WHY ELEVI8?" 
          subtitle="The Advantage" 
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-100/40 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 hover:border-brand-blue/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-navy text-brand-blue transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
