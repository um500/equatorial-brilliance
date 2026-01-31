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
  Twitter,
  Users,
  Award,
  Zap,
  HeadphonesIcon,
  Target,
  BarChart3
} from 'lucide-react';
import { submitContactForm, ContactFormData } from '@/utils/googleSheetApi';
import { z } from 'zod';
import heroImage from '@/assets/images/hero-image.jpg';
import aboutImage from '@/assets/images/about-image.jpg';
import serviceWebImg from '@/assets/images/service-web.jpg';
import serviceMarketingImg from '@/assets/images/service-marketing.jpg';
import serviceSupportImg from '@/assets/images/service-support.jpg';

// Navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

// Featured Services with images
const featuredServices = [
  {
    title: 'Web & App Development',
    description: 'Custom websites, e-commerce platforms, mobile apps, and web applications built with the latest technologies to drive your business forward.',
    image: serviceWebImg,
    features: ['Business Websites', 'E-commerce Solutions', 'Mobile Apps', 'Custom Web Apps'],
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that increase visibility, generate leads, and maximize ROI across all platforms.',
    image: serviceMarketingImg,
    features: ['Meta & Google Ads', 'Lead Generation', 'Email Marketing', 'Social Media'],
  },
  {
    title: 'IT Support & Cloud',
    description: 'Reliable IT infrastructure management, cloud services, and 24/7 support to keep your business running smoothly.',
    image: serviceSupportImg,
    features: ['24/7 Support', 'Cloud Services', 'Server Management', 'Data Backup'],
  },
];

// All Services
const services = [
  { 
    icon: Globe, 
    title: 'Web Development', 
    description: 'Build stunning, responsive websites and powerful web applications that drive results. From landing pages to complex portals, we create digital experiences that convert visitors into customers.'
  },
  { 
    icon: TrendingUp, 
    title: 'Digital Marketing', 
    description: 'Grow your business with targeted advertising campaigns on Google, Facebook, and Instagram. We create high-converting funnels that generate quality leads and maximize your ROI.'
  },
  { 
    icon: Search, 
    title: 'SEO Services', 
    description: 'Dominate search rankings with our comprehensive SEO strategies. We optimize your website for on-page, off-page, and technical SEO to drive organic traffic and increase visibility.'
  },
  { 
    icon: Palette, 
    title: 'Branding & Design', 
    description: 'Create a memorable brand identity that stands out. From logo design to complete brand guidelines, we craft visual identities that resonate with your target audience.'
  },
  { 
    icon: Video, 
    title: 'Video Production', 
    description: 'Engage your audience with professional video content. We produce promotional videos, social media reels, explainer videos, and AI-powered content that tells your story.'
  },
  { 
    icon: Server, 
    title: 'IT Support & Cloud', 
    description: 'Keep your business running smoothly with 24/7 IT support and cloud solutions. We handle server management, data backup, and infrastructure to ensure maximum uptime.'
  },
  { 
    icon: Shield, 
    title: 'CCTV & Security', 
    description: 'Protect your premises with advanced surveillance systems. We install and maintain CCTV cameras, access control, and smart security solutions for complete peace of mind.'
  },
];

// Stats
const stats = [
  { value: '500+', label: 'Projects Completed', icon: Award },
  { value: '99%', label: 'Client Satisfaction', icon: Users },
  { value: '24/7', label: 'Support Available', icon: HeadphonesIcon },
  { value: '10+', label: 'Years Experience', icon: Clock },
];

// Why Choose Us
const whyChooseUs = [
  { icon: Target, title: 'Tailored Solutions', description: 'Custom strategies designed specifically for your business needs and goals.' },
  { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround without compromising on quality or attention to detail.' },
  { icon: HeadphonesIcon, title: '24/7 Support', description: 'Round-the-clock assistance to ensure your business never faces downtime.' },
  { icon: BarChart3, title: 'Proven Results', description: 'Track record of delivering measurable growth and ROI for our clients.' },
];

// Social Links
const socialLinks = [
  { icon: Facebook, link: "https://facebook.com" },
  { icon: Instagram, link: "https://instagram.com" },
  { icon: Linkedin, link: "https://linkedin.com" },
  { icon: Twitter, link: "https://twitter.com" },
];

// Blog posts
const blogPosts = [
  {
    title: 'Why Every Business Needs a Professional Website in 2026',
    excerpt: 'In today\'s digital age, a professional website is crucial for business success and credibility.',
    date: 'Jan 31, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
  },
  {
    title: 'Digital Marketing Strategies That Actually Work',
    excerpt: 'Discover proven strategies to grow your business and maximize your marketing ROI.',
    date: 'Jan 27, 2026',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop',
  },
  {
    title: 'The Importance of SEO for Local Businesses',
    excerpt: 'Learn how to optimize your online presence and attract more local customers.',
    date: 'Jan 23, 2026',
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
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'linear-gradient(135deg, hsl(220 20% 95%) 0%, hsl(35 30% 95%) 50%, hsl(220 15% 96%) 100%)' }}>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32" style={{ background: 'linear-gradient(135deg, hsl(220 30% 15%) 0%, hsl(220 25% 22%) 40%, hsl(35 40% 25%) 100%)' }}>
        <div className="absolute inset-0 opacity-30">
          <img src={heroImage} alt="IT Services" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-primary/20 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm border border-primary/30"
            >
              🚀 Your Trusted IT Partner in UAE
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 md:mb-6 text-white"
            >
              Complete IT Services & Digital Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed"
            >
              From web development to digital marketing, we deliver comprehensive IT solutions that help businesses grow, innovate, and succeed in the digital landscape.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 text-sm md:text-base">
                Get Free Consultation <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-outline text-center text-sm md:text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-primary-foreground"
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 opacity-80" />
                <div className="text-2xl md:text-4xl font-display font-bold mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
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
              <h2 className="section-title mb-6">Your Success Is Our Success</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Equatorial IT Services FZ-LLC is a complete IT service and support provider based in Ras Al Khaimah, UAE. We offer end-to-end solutions from web development to digital marketing, helping businesses succeed in the digital landscape.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of certified professionals brings years of experience and expertise, delivering reliable, quality IT solutions tailored to your unique business needs. We believe in building long-term partnerships that drive growth and innovation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Expert Team', 'Quality Service', '24/7 Support', 'Fair Pricing'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Get In Touch <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img src={aboutImage} alt="About Equatorial IT" className="w-full rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary font-medium mb-3">What We Do</p>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle mx-auto mt-4">
              Comprehensive solutions designed to accelerate your business growth.
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <img src={service.image} alt={service.title} className="w-full rounded-lg shadow-lg" />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="btn-outline inline-flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section id="services" className="section bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="text-primary font-medium mb-2 md:mb-3 text-sm md:text-base">Our Services</p>
            <h2 className="section-title">Complete IT Solutions</h2>
            <p className="section-subtitle mx-auto mt-3 md:mt-4 text-sm md:text-base">
              We offer a wide range of professional IT services tailored to meet your business needs. 
              From development to marketing, we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl p-4 md:p-6 shadow-md border border-white/50 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                style={{ background: 'linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(35 30% 98%) 50%, hsl(220 20% 98%) 100%)' }}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-all duration-300" style={{ background: 'linear-gradient(135deg, hsl(38 95% 50%) 0%, hsl(30 90% 45%) 100%)' }}>
                  <service.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-sm md:text-base">
              Get a Free Quote <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-14"
          >
            <p className="text-primary font-medium mb-2 md:mb-3 text-sm md:text-base">Why Choose Us</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 md:mb-4">What Makes Us Different</h2>
            <p className="text-background/70 max-w-2xl mx-auto text-sm md:text-base">
              We combine expertise, innovation, and dedication to deliver exceptional results for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-background/70">{item.description}</p>
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
            className="text-center mb-8 md:mb-14"
          >
            <p className="text-primary font-medium mb-2 md:mb-3 text-sm md:text-base">Blog</p>
            <h2 className="section-title">Latest Insights & News</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
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

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-3 md:mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/80 mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
              Let's discuss how our IT solutions can help you achieve your goals. Get a free consultation today.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 md:px-8 md:py-4 rounded-md font-medium hover:bg-background/90 transition-colors text-sm md:text-base">
              Get Free Consultation <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-14"
          >
            <p className="text-primary font-medium mb-2 md:mb-3 text-sm md:text-base">Contact Us</p>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mx-auto mt-3 md:mt-4 text-sm md:text-base">
              Have a project in mind? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 md:space-y-6 mb-8">
                {[
                  { icon: MapPin, label: 'Address', text: 'FDRK4555, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE' },
                  { icon: Phone, label: 'Phone', text: '+971 00 000 0000' },
                  { icon: Mail, label: 'Email', text: 'info@equatorialit.com' },
                  { icon: Clock, label: 'Working Hours', text: 'Sunday - Thursday: 9AM - 6PM' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-0.5 md:mb-1 text-sm md:text-base">{item.label}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{item.text}</p>
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
              <form onSubmit={handleSubmit} className="bg-secondary/30 rounded-lg p-5 md:p-8 space-y-4 md:space-y-5">
                <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" className={`input-field ${errors.name ? 'border-destructive' : ''}`} />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="tel" name="number" value={formData.number} onChange={handleChange} placeholder="Phone Number *" className={`input-field ${errors.number ? 'border-destructive' : ''}`} />
                    {errors.number && <p className="text-destructive text-xs mt-1">{errors.number}</p>}
                  </div>
                </div>
                <div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" className={`input-field ${errors.email ? 'border-destructive' : ''}`} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="input-field" />
                <div>
                  <select name="service" value={formData.service} onChange={handleChange} className={`input-field ${errors.service ? 'border-destructive' : ''}`}>
                    <option value="">Select Service *</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                </div>
                <div>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message *" rows={4} className={`input-field resize-none ${errors.message ? 'border-destructive' : ''}`} />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50">
                  {isSubmitting ? <><div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
                </button>
                {submitStatus !== 'idle' && (
                  <div className={`p-3 rounded-md flex items-center gap-2 text-sm ${submitStatus === 'success' ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
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
      <footer className="py-10 md:py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-3 md:mb-4">
                <span className="font-display font-bold text-lg md:text-xl">Equatorial IT</span>
              </div>
              <p className="text-xs md:text-sm text-background/70 leading-relaxed mb-3 md:mb-4">
                Complete IT service and support provider offering comprehensive solutions for businesses in the UAE.
              </p>
              <div className="flex gap-2 md:gap-3">
                {socialLinks.map(({ icon: Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-md bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    <Icon size={14} className="md:hidden" />
                    <Icon size={16} className="hidden md:block" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Services</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-background/70">
                {['Web Development', 'Digital Marketing', 'SEO Services', 'IT Support', 'CCTV & Security'].map((s) => (
                  <li key={s}><a href="#services" className="hover:text-background transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-background/70">
                {navLinks.map((link) => (
                  <li key={link.href}><a href={link.href} className="hover:text-background transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact Info</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-background/70">
                <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0" /> AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE</li>
                <li className="flex items-center gap-2"><Phone size={14} /> +971 00 000 0000</li>
                <li className="flex items-center gap-2"><Mail size={14} /> info@equatorialit.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-6 md:pt-8 text-center text-xs md:text-sm text-background/60">
            © {new Date().getFullYear()} Equatorial IT Services FZ-LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
