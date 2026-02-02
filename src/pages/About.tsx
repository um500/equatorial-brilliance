import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Cpu, Heart, Shield, Clock, Headphones } from 'lucide-react';

// Import images
import aboutImage from '@/assets/images/about-image.jpg';

// ============================================
// ABOUT PAGE - EQUATORIAL IT SERVICES FZ-LLC
// ============================================

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Team members data
  const teamMembers = [
    { name: 'Ahmed Al-Rashid', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Sarah Mitchell', role: 'CTO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' },
    { name: 'David Chen', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
    { name: 'Fatima Hassan', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' },
  ];

  // Why choose us features
  const features = [
    { icon: Users, title: 'Experienced IT Professionals', description: 'Our team consists of seasoned experts with years of industry experience.' },
    { icon: Cpu, title: 'Modern Technology Stack', description: 'We use cutting-edge technologies to deliver innovative solutions.' },
    { icon: Heart, title: 'Client-Centric Approach', description: 'Your success is our priority. We tailor solutions to your unique needs.' },
    { icon: Shield, title: 'Transparent Workflow', description: 'Clear communication and honest processes at every project stage.' },
    { icon: Clock, title: 'On-Time Delivery', description: 'We respect deadlines and deliver quality results on schedule.' },
    { icon: Headphones, title: 'Reliable Support', description: '24/7 dedicated support to ensure your systems run smoothly.' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'hsl(192 25% 18%)' }}>
      
      {/* ==================== */}
      {/* HERO SECTION */}
      {/* ==================== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(192_30%_15%)] via-[hsl(192_25%_18%)] to-[hsl(192_20%_22%)]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-grid" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10" style={{ background: 'hsl(25 85% 55%)' }} />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-10" style={{ background: 'hsl(175 50% 45%)' }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              About <span className="text-gradient">Equatorial IT</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
            >
              Driving Innovation Through Technology — Empowering businesses across the UAE with world-class IT solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ==================== */}
      {/* COMPANY OVERVIEW */}
      {/* ==================== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Who We <span className="text-gradient">Are</span>
              </h2>
              <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  <strong className="text-white">Equatorial IT Services FZ-LLC</strong> is a premier technology solutions provider headquartered in Ras Al Khaimah, United Arab Emirates. We specialize in delivering innovative IT services that help businesses thrive in the digital age.
                </p>
                <p>
                  Founded with a vision to bridge the gap between complex technology and business needs, we have grown into a trusted partner for organizations across diverse industries. Our team of dedicated professionals brings together expertise in web development, digital marketing, IT support, and custom software solutions.
                </p>
                <p>
                  At Equatorial IT, we believe that technology should empower businesses, not complicate them. That's why we focus on creating solutions that are not only technically excellent but also aligned with your business objectives.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutImage} 
                  alt="Equatorial IT Team" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(192_25%_10%/0.6)] to-transparent" />
              </div>
              {/* Floating stats card */}
              <div 
                className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl"
                style={{ background: 'hsl(192 30% 22%)' }}
              >
                <div className="text-3xl font-bold text-gradient">10+</div>
                <div className="text-white/60 text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* MISSION & VISION */}
      {/* ==================== */}
      <section className="py-16 md:py-24" style={{ background: 'hsl(192 28% 16%)' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              className="group p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:border-[hsl(25_85%_55%)]"
              style={{ 
                background: 'linear-gradient(135deg, hsl(192 30% 22%) 0%, hsl(192 25% 20%) 100%)',
                borderColor: 'hsl(192 20% 30%)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, hsl(25 85% 55%) 0%, hsl(20 80% 50%) 100%)' }}
              >
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 text-base leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering exceptional value through quality services, cutting-edge expertise, and unwavering dedication to client success.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={fadeInUp}
              className="group p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:border-[hsl(175_50%_45%)]"
              style={{ 
                background: 'linear-gradient(135deg, hsl(192 30% 22%) 0%, hsl(192 25% 20%) 100%)',
                borderColor: 'hsl(192 20% 30%)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, hsl(175 50% 45%) 0%, hsl(180 45% 40%) 100%)' }}
              >
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 text-base leading-relaxed">
                To be the leading IT services provider in the UAE and beyond, recognized for our innovation, reliability, and transformative impact on businesses. We envision a future where every organization harnesses technology to achieve its fullest potential.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== */}
      {/* WHY CHOOSE US */}
      {/* ==================== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Why Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver results that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-6 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:border-[hsl(25_85%_55%)]"
                style={{ 
                  background: 'hsl(192 30% 22%)',
                  borderColor: 'hsl(192 20% 30%)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{ background: 'hsl(192 25% 28%)' }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: 'hsl(25 85% 55%)' }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== */}
      {/* OUR TEAM */}
      {/* ==================== */}
      <section className="py-16 md:py-24" style={{ background: 'hsl(192 28% 16%)' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A dedicated team of professionals committed to your success.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group text-center"
              >
                <div 
                  className="relative rounded-2xl overflow-hidden mb-4 transition-all duration-300 group-hover:shadow-xl"
                  style={{ background: 'hsl(192 30% 22%)' }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(192_25%_10%/0.8)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm" style={{ color: 'hsl(25 85% 55%)' }}>{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== */}
      {/* CTA SECTION */}
      {/* ==================== */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, hsl(25 85% 55%) 0%, hsl(20 80% 45%) 100%)' }}
        />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Ready to transform your business with innovative technology solutions? Get in touch with our team today.
            </p>
            <Link 
              to="/#contact"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ 
                background: 'hsl(192 30% 18%)',
                color: 'white'
              }}
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
