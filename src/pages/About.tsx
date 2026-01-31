import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Lightbulb, 
  Users, 
  Award, 
  Globe,
  CheckCircle
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly exploring new technologies and methodologies to provide cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients to understand their unique needs and deliver tailored solutions.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'Transparent communication and honest practices in all our business relationships.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="section-title mb-6">
              Your Partner in <span className="gradient-text">Digital Success</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Equatorial IT Services is a leading IT solutions provider based in Ras Al Khaimah, UAE. 
              We empower businesses with innovative technology solutions that drive growth and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Who We <span className="gradient-text">Are</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Equatorial IT Services FZ-LLC is a registered company in the UAE, specializing in 
                comprehensive IT solutions for businesses of all sizes. From startups to enterprises, 
                we provide the technology backbone that powers success.
              </p>
              <p className="text-muted-foreground mb-8">
                Our team of certified professionals brings years of experience in web development, 
                digital marketing, SEO, branding, video production, IT support, and security solutions. 
                We pride ourselves on delivering quality work that makes a real difference.
              </p>

              <div className="glass-card p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Our Location
                </h4>
                <p className="text-sm text-muted-foreground">
                  FDRK4555, Compass Building, Al Shohada Road,<br />
                  AL Hamra Industrial Zone-FZ,<br />
                  Ras Al Khaimah, United Arab Emirates
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative, reliable, and cost-effective IT solutions 
                that enhance productivity, drive growth, and create lasting value. We are committed 
                to being the technology partner that businesses can trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most trusted IT services company in the UAE and beyond, known for 
                excellence, innovation, and customer satisfaction. We envision a future where 
                every business has access to world-class technology solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Foundation
            </span>
            <h2 className="section-title">Core <span className="gradient-text">Values</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary group-hover:gradient-primary flex items-center justify-center mx-auto mb-4 transition-all">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Partner with <span className="gradient-text">Equatorial IT?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We go beyond just providing services – we become your strategic technology partner, 
                invested in your success and committed to delivering results that matter.
              </p>

              <div className="space-y-4">
                {[
                  'Tailored solutions that fit your unique business needs',
                  'Transparent pricing with no hidden fees',
                  'Certified and experienced team of professionals',
                  'Quick turnaround time without compromising quality',
                  'Ongoing support and maintenance services',
                  'Proven track record with satisfied clients',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-display font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help transform your business with our comprehensive 
                IT solutions. Schedule a free consultation today.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 w-full justify-center">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
