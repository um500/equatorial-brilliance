import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  TrendingUp, 
  Search, 
  Palette, 
  Video, 
  Server, 
  Shield,
  ArrowRight,
  Smartphone,
  ShoppingCart,
  Mail,
  BarChart3,
  Camera,
  Cloud,
  Wrench,
  MessageCircle
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const servicesData = [
  {
    icon: Globe,
    title: 'Web & App Development',
    description: 'Custom digital solutions built with modern technologies to power your business online presence.',
    features: [
      'Business Website (Corporate / Portfolio)',
      'Landing Pages (Lead Generation)',
      'E-commerce Website (Shopify / WooCommerce / Custom)',
      'Custom Web Applications',
      'Mobile Apps (Android / iOS – React Native / Flutter)',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Lead Generation',
    description: 'Strategic marketing campaigns that drive qualified leads and maximize your ROI.',
    features: [
      'Meta Ads (Facebook / Instagram)',
      'Google Ads (Search, Display, YouTube)',
      'Lead Generation Funnels',
      'Landing Page + CRM Integration',
      'Email Marketing & WhatsApp Automation',
    ],
  },
  {
    icon: Search,
    title: 'SEO & Online Visibility',
    description: 'Comprehensive SEO strategies to boost your rankings and increase organic traffic.',
    features: [
      'Website SEO (On-page + Technical)',
      'Local SEO (Google My Business)',
      'Keyword Research',
      'Monthly SEO Reports',
    ],
  },
  {
    icon: Palette,
    title: 'Branding & Creative Services',
    description: 'Creative design services that establish a strong brand identity for your business.',
    features: [
      'Logo Design',
      'Brand Identity',
      'Social Media Creatives',
      'Brochures, Flyers, Company Profile',
      'Ad Creatives (Static + Video)',
    ],
  },
  {
    icon: Video,
    title: 'Video Production & AI Content',
    description: 'Professional video content that engages your audience and tells your brand story.',
    features: [
      'Promotional Videos',
      'Reels / Shorts',
      'AI Avatar Videos',
      'Real Estate Walkthrough Videos',
      'Event Promo Videos',
    ],
  },
  {
    icon: Server,
    title: 'IT Support & Business Automation',
    description: 'Reliable IT infrastructure and automation solutions to streamline your operations.',
    features: [
      'Website Maintenance',
      'Hosting & Domain Management',
      'CRM Setup (Zoho, HubSpot)',
      'WhatsApp & Email Automation',
      'Cloud Services (Google Workspace, Microsoft 365)',
    ],
  },
  {
    icon: Shield,
    title: 'CCTV & Smart Security Solutions',
    description: 'Advanced surveillance and security systems to protect your business assets.',
    features: [
      'Advanced CCTV & Surveillance Solutions',
      'Professional Installation & Monitoring',
      'Smart Security Systems',
    ],
  },
];

const additionalServices = [
  { icon: Smartphone, name: 'Mobile Development' },
  { icon: ShoppingCart, name: 'E-commerce Solutions' },
  { icon: Mail, name: 'Email Marketing' },
  { icon: BarChart3, name: 'Analytics & Reporting' },
  { icon: Camera, name: 'Photography' },
  { icon: Cloud, name: 'Cloud Services' },
  { icon: Wrench, name: 'Maintenance' },
  { icon: MessageCircle, name: 'Support' },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="section-title mb-6">
              Comprehensive <span className="gradient-text">IT Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From web development to digital marketing, we offer a complete range of IT services 
              designed to help your business succeed in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Services Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card px-5 py-3 flex items-center gap-2 hover:border-primary/50 transition-colors cursor-pointer"
              >
                <service.icon className="w-4 h-4 text-primary" />
                <span className="text-sm">{service.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              How We Work
            </span>
            <h2 className="section-title">Our <span className="gradient-text">Process</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Strategy', desc: 'Planning the best approach' },
              { step: '03', title: 'Execution', desc: 'Bringing ideas to life' },
              { step: '04', title: 'Delivery', desc: 'Launch and ongoing support' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="text-6xl font-display font-bold gradient-text opacity-20 mb-2">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 gradient-primary opacity-5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't see exactly what you need? We specialize in creating tailored solutions 
                for unique business requirements. Let's discuss your project.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Custom Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
