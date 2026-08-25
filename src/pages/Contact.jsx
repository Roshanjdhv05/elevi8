import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import siteConfig from "../config/site.config";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`New Inquiry from ${data.name} - ${data.service}`);
    const body = encodeURIComponent(`Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Company: ${data.company || 'N/A'}
Service: ${data.service}
Budget: ${data.budget || 'N/A'}

Message:
${data.message}`);

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=elevi8official@gmail.com&su=${subject}&body=${body}`, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const inputClasses = "w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-navy placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors";

  return (
    <PageTransition>
      <SEO 
        title="Contact" 
        description="Get in touch with Elevi8 to start your next digital project."
      />
      
      <section className="pt-40 pb-32 bg-white relative min-h-screen">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                  LET'S BUILD <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-glow to-brand-blue">
                    SOMETHING GREAT.
                  </span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-12">
                  Whether you need a completely new website, a complex web application, or a digital rebrand, we're here to help your business succeed online.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-gray-200 flex items-center justify-center flex-shrink-0 text-brand-blue-glow">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</h4>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-xl font-medium text-navy hover:text-brand-blue-glow transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-gray-200 flex items-center justify-center flex-shrink-0 text-brand-blue-glow">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</h4>
                      <a href={`tel:${siteConfig.contact.phone.split(',')[0].trim().replace(/\s+/g, '')}`} className="text-xl font-medium text-navy hover:text-brand-blue-glow transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-gray-200 flex items-center justify-center flex-shrink-0 text-brand-blue-glow">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                      <span className="text-lg font-medium text-navy block mb-1">
                        {siteConfig.contact.location}
                      </span>
                      <span className="text-sm text-gray-600 block">
                        {siteConfig.contact.businessHours}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {Object.entries(siteConfig.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/5 border border-gray-200 flex items-center justify-center hover:bg-brand-blue hover:text-navy transition-colors text-gray-600 capitalize"
                        aria-label={platform}
                      >
                        <span className="text-sm font-medium">{platform[0].toUpperCase()}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-100/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[80px] rounded-full pointer-events-none" />
                
                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        {...register("name", { required: "Name is required" })} 
                        type="text" 
                        placeholder="Your Name *" 
                        className={`${inputClasses} ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.name && <span className="text-xs text-red-400 mt-2 block">{errors.name.message}</span>}
                    </div>
                    <div>
                      <input 
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })} 
                        type="email" 
                        placeholder="Email Address *" 
                        className={`${inputClasses} ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.email && <span className="text-xs text-red-400 mt-2 block">{errors.email.message}</span>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        {...register("phone")} 
                        type="tel" 
                        placeholder="Phone Number (Optional)" 
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <input 
                        {...register("company")} 
                        type="text" 
                        placeholder="Company Name (Optional)" 
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <select 
                        {...register("service", { required: "Please select a service" })}
                        className={`${inputClasses} appearance-none ${errors.service ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : ''}`}
                      >
                        <option value="" disabled selected>Service Required *</option>
                        <option value="Website">Website Development</option>
                        <option value="Web App">Web Application</option>
                        <option value="E-Commerce">E-Commerce</option>
                        <option value="UI/UX">UI/UX Design</option>
                        <option value="Branding">Branding</option>
                        <option value="Google Business">Google Business Setup</option>
                        <option value="Digital Card">Digital Visiting Card</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.service && <span className="text-xs text-red-400 mt-2 block">{errors.service.message}</span>}
                    </div>
                    <div>
                      <select 
                        {...register("budget")}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="" disabled selected>Budget Range (Optional)</option>
                        <option value="< 50k">Less than ₹50,000</option>
                        <option value="50k - 1L">₹50,000 - ₹1,00,000</option>
                        <option value="1L - 2.5L">₹1,00,000 - ₹2,50,000</option>
                        <option value="2.5L+">₹2,50,000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <textarea 
                      {...register("message", { required: "Message is required" })}
                      placeholder="Tell us about your project *" 
                      rows={5}
                      className={`${inputClasses} resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {errors.message && <span className="text-xs text-red-400 mt-2 block">{errors.message.message}</span>}
                  </div>
                  
                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      * Required fields
                    </p>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue-light text-navy font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed glow-blue-hover"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Success Overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 bg-gray-100/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                    >
                      <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                        className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6"
                      >
                        <CheckCircle size={40} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                      <p className="text-gray-600 max-w-sm">
                        Thank you for reaching out. Our team will get back to you within 24 business hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
