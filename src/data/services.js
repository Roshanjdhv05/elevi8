// ============================================================
// Elevi8 — Services Data
// ============================================================
import {
  Globe,
  Code2,
  Palette,
  ShoppingCart,
  Briefcase,
  Megaphone,
  MapPin,
  CreditCard,
} from "lucide-react";

export const services = [
  {
    id: "website-development",
    number: "01",
    icon: Globe,
    title: "Website Development",
    shortDescription:
      "Modern, responsive and conversion-focused websites that establish a powerful digital presence.",
    description:
      "We build professional, fast-loading, and visually stunning websites that help businesses make a powerful first impression online. From corporate sites to landing pages, every website is built with performance, SEO, and user experience in mind.",
    benefits: [
      "Mobile-first, fully responsive design",
      "SEO-optimised structure and markup",
      "Fast-loading, performance-tuned pages",
      "Content management system integration",
      "Custom, brand-consistent visual design",
      "Analytics and tracking setup",
    ],
    process: [
      "Discovery & requirements gathering",
      "Wireframing & design mockups",
      "Development & content integration",
      "Testing, QA & optimisation",
      "Launch & post-launch support",
    ],
    technologies: ["React", "HTML", "CSS", "JavaScript", "WordPress", "CMS"],
    color: "#2563EB",
    featured: true,
  },
  {
    id: "web-application-development",
    number: "02",
    icon: Code2,
    title: "Web Application Development",
    shortDescription:
      "Powerful web applications designed around real business requirements and user workflows.",
    description:
      "We build scalable, feature-rich web applications that solve real business problems. From booking systems and marketplaces to dashboards and internal tools, we design and develop applications that are intuitive, robust, and built to grow.",
    benefits: [
      "Custom business logic and workflows",
      "Scalable, modern architecture",
      "Real-time features and data management",
      "Role-based access and user management",
      "API integrations and third-party connections",
      "Performance-optimised user interfaces",
    ],
    process: [
      "Business requirements analysis",
      "System architecture design",
      "UI/UX prototyping",
      "Iterative development with testing",
      "Deployment and ongoing maintenance",
    ],
    technologies: ["React", "Node.js", "JavaScript", "TypeScript", "REST APIs", "Cloud Deployment"],
    color: "#7C3AED",
    featured: true,
  },
  {
    id: "ui-ux-design",
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    shortDescription:
      "Clean, intuitive interfaces and digital experiences focused on user engagement and conversion.",
    description:
      "Great design goes beyond aesthetics — it shapes how users interact with your product. We design user interfaces that are both visually compelling and deeply functional, creating experiences that users love and that drive business results.",
    benefits: [
      "User-centred design thinking",
      "Wireframing and interactive prototyping",
      "Consistent design systems and component libraries",
      "Accessibility and WCAG compliance",
      "Conversion rate-optimised layouts",
      "Mobile and cross-device design",
    ],
    process: [
      "User research and persona development",
      "Information architecture planning",
      "Wireframing and user flow mapping",
      "High-fidelity design and prototyping",
      "Design handoff and implementation support",
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "Framer", "Accessibility"],
    color: "#EC4899",
    featured: true,
  },
  {
    id: "ecommerce-development",
    number: "04",
    icon: ShoppingCart,
    title: "E-Commerce Development",
    shortDescription:
      "High-performing online stores designed to maximise conversions and deliver a seamless buying experience.",
    description:
      "We build e-commerce platforms that convert. From product catalogues to checkout flows, every element is designed to maximise sales while delivering a seamless and trustworthy shopping experience for your customers.",
    benefits: [
      "Optimised product listing and search",
      "Streamlined, high-conversion checkout",
      "Inventory and order management",
      "Payment gateway integration",
      "Mobile-first shopping experience",
      "Security and trust signals",
    ],
    process: [
      "Platform selection and architecture",
      "Product catalogue and category setup",
      "Payment and shipping integration",
      "Testing and security review",
      "Launch and performance monitoring",
    ],
    technologies: ["React", "E-Commerce Platforms", "Payment APIs", "JavaScript"],
    color: "#F59E0B",
    featured: true,
  },
  {
    id: "business-digital-solutions",
    number: "05",
    icon: Briefcase,
    title: "Business Digital Solutions",
    shortDescription:
      "Custom digital solutions built around your specific business workflows and operational requirements.",
    description:
      "Every business is unique. We build custom digital tools and solutions — from internal dashboards to business process automation — that improve efficiency, reduce manual work, and help your team perform better.",
    benefits: [
      "Custom workflows and automation",
      "Business process digitisation",
      "Data management and reporting",
      "Multi-user role and access management",
      "Integration with existing business tools",
      "Scalable architecture for future growth",
    ],
    process: [
      "Workflow and process analysis",
      "Solution architecture and planning",
      "Custom development and integration",
      "User training and documentation",
      "Ongoing support and iteration",
    ],
    technologies: ["React", "Node.js", "APIs", "Cloud", "Databases"],
    color: "#0EA5E9",
    featured: false,
  },
  {
    id: "branding-creative",
    number: "06",
    icon: Megaphone,
    title: "Branding & Creative",
    shortDescription:
      "Digital and physical branding that creates a consistent, professional identity across every touchpoint.",
    description:
      "Your brand is more than a logo — it's the complete impression your business leaves on every customer. We create comprehensive brand identities including logos, colour systems, typography, digital assets, and physical collateral.",
    benefits: [
      "Custom logo design and brand mark",
      "Complete visual identity system",
      "Brand guidelines and style guide",
      "Digital and print asset creation",
      "Social media branding templates",
      "Consistent cross-channel identity",
    ],
    process: [
      "Brand discovery and strategy",
      "Concept development and exploration",
      "Design refinement and approval",
      "Asset creation and export",
      "Brand guidelines documentation",
    ],
    technologies: ["Brand Design", "Visual Identity", "Print Design", "Digital Assets"],
    color: "#8B5CF6",
    featured: false,
  },
  {
    id: "google-business-setup",
    number: "07",
    icon: MapPin,
    title: "Google Business Setup",
    shortDescription:
      "Professional Google Business Profile setup and optimisation to improve your local search presence.",
    description:
      "Most businesses miss out on local customers because their Google presence is incomplete or not optimised. We set up, verify, and optimise your Google Business Profile to help you appear prominently in local search results and Google Maps.",
    benefits: [
      "Complete profile setup and verification",
      "Business category and keyword optimisation",
      "Photo and media management",
      "Google Posts and update management",
      "Q&A and review response strategy",
      "Local SEO improvement",
    ],
    process: [
      "Profile audit and setup",
      "Information and category optimisation",
      "Photo and media upload",
      "Posts and updates configuration",
      "Ongoing monitoring and updates",
    ],
    technologies: ["Google Business", "Local SEO", "Google Maps", "Review Management"],
    color: "#4285F4",
    featured: false,
  },
  {
    id: "digital-visiting-cards",
    number: "08",
    icon: CreditCard,
    title: "Digital Visiting Cards",
    shortDescription:
      "Professional digital profiles and interactive visiting cards for a memorable modern first impression.",
    description:
      "Replace paper business cards with a professional, shareable digital visiting card. We create interactive, mobile-friendly digital profiles that include all your contact details, social links, portfolio, and a QR code for instant sharing.",
    benefits: [
      "Mobile-first, shareable digital profile",
      "Clickable contact links and social profiles",
      "QR code for instant sharing",
      "Always up-to-date — no reprinting needed",
      "Analytics on card views and clicks",
      "Professional, brand-consistent design",
    ],
    process: [
      "Content and brand information gathering",
      "Design and layout creation",
      "Development and link configuration",
      "QR code generation and testing",
      "Delivery and sharing instructions",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "QR Code"],
    color: "#10B981",
    featured: false,
  },
];

export default services;
