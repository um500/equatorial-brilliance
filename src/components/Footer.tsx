import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  const services = [
    'Web Development',
    'Digital Marketing',
    'IT Support',
    'Cloud Solutions',
    'Cyber Security',
    'Software Development',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer style={{ background: 'hsl(192 30% 12%)' }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display font-bold text-2xl text-white italic">
                Equatorial IT
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Equatorial IT Services FZ-LLC is a premier technology solutions provider delivering innovative IT services across the UAE.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    background: 'hsl(192 25% 18%)',
                  }}
                >
                  <social.icon className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-white/60 text-sm hover:text-[hsl(25_85%_55%)] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/60 text-sm hover:text-[hsl(25_85%_55%)] transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(25 85% 55%)' }} />
                <span className="text-white/60 text-sm leading-relaxed">
                  FDRK4555, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(25 85% 55%)' }} />
                <a href="tel:+971501234567" className="text-white/60 text-sm hover:text-white transition-colors">
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(25 85% 55%)' }} />
                <a href="mailto:info@equatorialit.com" className="text-white/60 text-sm hover:text-white transition-colors">
                  info@equatorialit.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="border-t py-6"
        style={{ 
          borderColor: 'hsl(192 20% 20%)',
          background: 'hsl(192 30% 10%)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} Equatorial IT Services FZ-LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 text-sm hover:text-white/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-white/70 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
