import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import siteConfig from "../config/site.config";
import { footerLinks } from "../data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 pt-20 pb-10 border-t border-gray-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo1.png" alt="Elevi8 Logo" className="h-16 md:h-20 w-auto object-contain scale-125 origin-left" />
            </Link>
            <p className="text-gray-600 mb-8 max-w-sm">
              {siteConfig.tagline}
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/elevi.8?igsi=Z3F1Znd0MmdtaGdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors text-gray-600"
                aria-label="Instagram"
              >
                {/* Instagram SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-600 hover:text-navy transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-600 hover:text-navy transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-3 text-gray-600 hover:text-navy transition-colors group">
                  <Mail size={18} className="mt-1 group-hover:text-brand-blue-glow transition-colors" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.split(',')[0].trim().replace(/\s+/g, '')}`} className="flex items-start gap-3 text-gray-600 hover:text-navy transition-colors group">
                  <Phone size={18} className="mt-1 group-hover:text-brand-blue-glow transition-colors" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href={siteConfig.digitalCard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-blue-glow hover:text-brand-blue-light font-medium"
              >
                Digital Visiting Card <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} to={link.href} className="hover:text-navy transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
