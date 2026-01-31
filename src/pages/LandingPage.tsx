import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  TrendingUp, 
  Search, 
  Palette, 
  Video, 
  Server, 
  Shield,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Send,
  AlertCircle,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { submitContactForm, ContactFormData } from '@/utils/googleSheetApi';
import { z } from 'zod';
import heroImage from '@/assets/images/hero-image.jpg';
import aboutImage from '@/assets/images/about-image.jpg';

// Navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

// Services data
const services = [
  {
    icon: Globe,
    title: 'Web & App Development',
    description: 'Business websites, e-commerce, landing pages, and mobile applications.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Meta Ads, Google Ads, lead generation funnels, and CRM integration.',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'On-page SEO, local SEO, keyword research, and monthly reports.',
  },
  {
    icon: Palette,
    title: 'Branding & Creative',
    description: 'Logo design, brand identity, social media creatives, and ad content.',
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Promotional videos, reels, AI avatar videos, and event promos.',
  },
  {
    icon: Server,
    title: 'IT Support',
    description: 'Website maintenance, hosting, CRM setup, and cloud services.',
  },
  {
    icon: Shield,
    title: 'CCTV & Security',
    description: 'Advanced surveillance solutions and smart security systems.',
  },
];

// Blog posts
const blogPosts = [
  {
    title: 'Why Every Business Needs a Professional Website',
    excerpt: 'In today\'s digital age, a professional website is crucial for business success.',
    date: 'Jan 15, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
  },
  {
    title: 'Digital Marketing Strategies That Work',
    excerpt: 'Discover proven strategies to grow your business online.',
    date: 'Jan 10, 2024',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop',
  },
  {
    title: 'The Importance of SEO for Local Businesses',
    excerpt: 'Learn how to optimize your online presence for local searches.',
    date: 'Jan 5, 2024',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop',
  },
];

// Form validation
const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(100),
  number: z.string().trim().min(8, 'Valid phone required').max(20),
  email: z.string().trim().email('Valid email required').max(255),
  address: z.string().trim().max(500).optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().trim().min(10, 'Message too short').max(1000),
});

const serviceOptions = [
  'Web & App Development',
  'Digital Marketing',
  'SEO Services',
  'Branding & Creative',
  'Video Production',
  'IT Support',
  'CCTV & Security',
  'Other',
];

const LandingPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', number: '', email: '', address: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const response = await submitContactForm(formData);
    setIsSubmitting(false);
    setSubmitStatus(response.success ? 'success' : 'error');
    setStatusMessage(response.message);

    if (response.success) {
      setFormData({ name: '', number: '', email: '', address: '', service: '', message: '' });
    }
    setTimeout(() => { setSubmitStatus('idle'); setStatusMessage(''); }, 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Width with Image */}
      <section id="home" className="relative min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="IT Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium mb-4"
            >
              IT Solutions Provider in UAE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-foreground"
            >
              Complete IT Services & Support Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              From web development to digital marketing, we deliver comprehensive IT solutions that drive growth for businesses across the UAE.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Get In Touch <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <p className="text-primary font-medium mb-3">About Us</p>
              <h2 className="section-title mb-6">Your Trusted IT Partner in the UAE</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Equatorial IT Services FZ-LLC is a complete IT service and support provider based in Ras Al Khaimah, UAE. We offer comprehensive solutions from web development to digital marketing, helping businesses succeed in the digital landscape.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of certified professionals brings years of experience and expertise, delivering reliable, quality IT solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Expert Team', icon: CheckCircle },
                  { label: 'Quality Service', icon: CheckCircle },
                  { label: '24/7 Support', icon: CheckCircle },
                  { label: 'Fair Pricing', icon: CheckCircle },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Contact Us <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img 
                src={aboutImage} 
                alt="About Equatorial IT" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary font-medium mb-3">Our Services</p>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle mx-auto mt-4">
              Comprehensive IT solutions to help your business grow and succeed in the digital world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary font-medium mb-3">Blog</p>
            <h2 className="section-title">Latest Insights</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary font-medium mb-3">Contact Us</p>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mx-auto mt-4">
              Have a project in mind? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 mb-8">
                {[
                  { icon: MapPin, label: 'Address', text: 'FDRK4555, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE' },
                  { icon: Phone, label: 'Phone', text: '+971 00 000 0000' },
                  { icon: Mail, label: 'Email', text: 'info@equatorialit.com' },
                  { icon: Clock, label: 'Working Hours', text: 'Sunday - Thursday: 9AM - 6PM' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-background rounded-lg p-8 shadow-sm border border-border space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      className={`input-field ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className={`input-field ${errors.number ? 'border-destructive' : ''}`}
                    />
                    {errors.number && <p className="text-destructive text-xs mt-1">{errors.number}</p>}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className={`input-field ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="input-field"
                />
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`input-field ${errors.service ? 'border-destructive' : ''}`}
                  >
                    <option value="">Select Service *</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    rows={4}
                    className={`input-field resize-none ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <><div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
                {submitStatus !== 'idle' && (
                  <div className={`p-3 rounded-md flex items-center gap-2 text-sm ${
                    submitStatus === 'success' ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'
                  }`}>
                    {submitStatus === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    {statusMessage}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center font-display font-bold text-primary-foreground">
                  EQ
                </div>
                <span className="font-display font-semibold text-lg">Equatorial IT</span>
              </div>
              <p className="text-sm text-background/70 leading-relaxed">
                Complete IT service and support provider offering comprehensive solutions for businesses in the UAE.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-background/70">
                {['Web Development', 'Digital Marketing', 'SEO Services', 'IT Support'].map((s) => (
                  <li key={s}><a href="#services" className="hover:text-background transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-background/70">
                {navLinks.map((link) => (
                  <li key={link.href}><a href={link.href} className="hover:text-background transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-md bg-background/10 flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 text-center text-sm text-background/60">
            © {new Date().getFullYear()} Equatorial IT Services FZ-LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
