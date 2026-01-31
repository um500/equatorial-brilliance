import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Clock
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    icon: Globe,
    title: 'Web & App Development',
    description: 'Custom websites, e-commerce platforms, and mobile applications tailored to your business needs.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic campaigns on Meta, Google, and more to drive qualified leads and conversions.',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Boost your online visibility with comprehensive SEO strategies and local optimization.',
  },
  {
    icon: Palette,
    title: 'Branding & Creative',
    description: 'Logo design, brand identity, and creative assets that make your business stand out.',
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Professional promotional videos, reels, and AI-powered content creation.',
  },
  {
    icon: Server,
    title: 'IT Support',
    description: 'Reliable IT infrastructure management, cloud services, and business automation.',
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '1000+', label: 'Projects Delivered' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: CheckCircle, value: '99%', label: 'Client Satisfaction' },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
                🚀 Trusted IT Partner in UAE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              Transform Your Business with{' '}
              <span className="gradient-text">Digital Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              We deliver cutting-edge IT solutions, from web development to digital marketing, 
              helping businesses thrive in the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-outline inline-flex items-center justify-center gap-2">
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
            <p className="section-subtitle">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-outline inline-flex items-center gap-2">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="section-title mb-6">
                Your Trusted <span className="gradient-text">IT Partner</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                At Equatorial IT Services, we combine technical expertise with creative innovation 
                to deliver solutions that drive real business results. Our team of experts is 
                dedicated to your success.
              </p>

              <div className="space-y-4">
                {[
                  'Experienced team of IT professionals',
                  'Customized solutions for every business',
                  '24/7 dedicated support',
                  'Transparent pricing with no hidden costs',
                  'Proven track record of success',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="btn-primary inline-flex items-center gap-2 mt-8">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold">Secure</h4>
                    <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold">Fast</h4>
                    <p className="text-sm text-muted-foreground">Quick turnaround time</p>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold">Reliable</h4>
                    <p className="text-sm text-muted-foreground">Dedicated support team</p>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold">Certified</h4>
                    <p className="text-sm text-muted-foreground">Industry certified experts</p>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-xl gradient-primary opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="section-title mb-4">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our comprehensive IT solutions.
              Get a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Contact Us Now
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+971000000000" className="btn-outline inline-flex items-center justify-center gap-2">
                Call +971 00 000 0000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
