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
  Users,
  Award,
  Clock,
  Target,
  Eye,
  MapPin,
  Phone,
  Mail,
  Send,
  AlertCircle,
  Calendar,
  Linkedin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { submitContactForm, ContactFormData } from '@/utils/googleSheetApi';
import { z } from 'zod';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-medium mb-4"
            >
              IT Solutions Provider in UAE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6"
            >
              Transform Your Business with Technology
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              From web development to digital marketing, we deliver IT solutions that drive growth and efficiency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Get Free Consultation <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl"
          >
            {[
              { icon: Users, value: '500+', label: 'Clients' },
              { icon: Award, value: '1000+', label: 'Projects' },
              { icon: Clock, value: '10+', label: 'Years' },
              { icon: CheckCircle, value: '99%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-display font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-sm font-medium mb-3">About Us</p>
              <h2 className="section-title mb-4">Your Trusted IT Partner</h2>
              <p className="text-muted-foreground mb-6">
                Equatorial IT Services FZ-LLC is a registered company in Ras Al Khaimah, UAE, 
                specializing in comprehensive IT solutions for businesses of all sizes.
              </p>
              <p className="text-muted-foreground mb-8">
                Our team of certified professionals brings years of experience in web development, 
                digital marketing, SEO, branding, and IT support.
              </p>
              <div className="space-y-3">
                {['Experienced IT professionals', 'Customized solutions', '24/7 support', 'Transparent pricing'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-6 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Mission</h4>
                <p className="text-xs text-muted-foreground">Empowering businesses with innovative IT solutions</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Vision</h4>
                <p className="text-xs text-muted-foreground">To be the most trusted IT partner in UAE</p>
              </div>
              <div className="glass-card p-6 text-center col-span-2">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-xs text-muted-foreground">AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm font-medium mb-3">Our Services</p>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle mx-auto">Comprehensive IT solutions to help your business succeed.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="service-card"
              >
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm font-medium mb-3">Blog</p>
            <h2 className="section-title">Latest Insights</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-sm font-medium mb-3">Contact Us</p>
              <h2 className="section-title mb-4">Let's Talk</h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? Get in touch and let's discuss how we can help.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, text: 'AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE' },
                  { icon: Phone, text: '+971 00 000 0000' },
                  { icon: Mail, text: 'info@equatorialit.com' },
                  { icon: Clock, text: 'Sun - Thu: 9AM - 6PM' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6">
                <h4 className="font-semibold mb-3">Equatorial IT Services FZ-LLC</h4>
                <p className="text-sm text-muted-foreground">
                  FDRK4555, Compass Building, Al Shohada Road,<br />
                  AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
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
                    submitStatus === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-destructive/10 text-destructive'
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
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-xs">
                  EQ
                </div>
                <span className="font-display font-medium">Equatorial IT</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming businesses through innovative IT solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {['Web Development', 'Digital Marketing', 'SEO Services', 'IT Support'].map((s) => (
                  <li key={s}><a href="#services" className="hover:text-foreground transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.href}><a href={link.href} className="hover:text-foreground transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Connect</h4>
              <div className="flex gap-2">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Equatorial IT Services FZ-LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
