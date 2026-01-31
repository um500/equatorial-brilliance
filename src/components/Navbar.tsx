import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Hidden when scrolled */}
      <motion.div
        initial={{ opacity: 1, height: 'auto' }}
        animate={{ 
          opacity: isScrolled ? 0 : 1, 
          height: isScrolled ? 0 : 'auto',
          marginBottom: isScrolled ? 0 : 0
        }}
        transition={{ duration: 0.3 }}
        className="bg-foreground text-background text-xs sm:text-sm hidden md:block overflow-hidden"
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4 lg:gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="flex-shrink-0" />
              <span className="hidden lg:inline">AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE</span>
              <span className="lg:hidden">Ras Al Khaimah, UAE</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="flex-shrink-0" />
              +971 00 000 0000
            </span>
          </div>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-primary transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-background shadow-md py-3' : 'py-3 md:py-4 bg-background/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center">
            <span className="font-display font-bold text-lg md:text-xl text-foreground">
              Equatorial IT
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:block btn-primary text-sm py-2.5"
          >
            Get In Touch
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background shadow-lg mt-2 mx-4 rounded-lg overflow-hidden border border-border"
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-4 py-3 rounded-md text-left transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <button onClick={() => scrollToSection('#contact')} className="btn-primary text-center mt-2">
                  Get In Touch
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
