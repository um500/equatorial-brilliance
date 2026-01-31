import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="transition-all duration-300"
        style={{ background: 'hsl(192 30% 20%)' }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} 
            className="flex items-center px-6 py-4 md:py-5"
            style={{ background: 'hsl(192 35% 18%)' }}
          >
            <span className="font-display font-bold text-lg md:text-xl text-white">
              Equatorial IT
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-5 xl:px-6 py-5 text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
                style={{ 
                  background: activeSection === link.href.replace('#', '') 
                    ? 'hsl(192 40% 28%)' 
                    : index % 2 === 0 ? 'hsl(192 30% 22%)' : 'hsl(192 30% 20%)'
                }}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:block px-6 xl:px-8 py-5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, hsl(25 85% 55%) 0%, hsl(20 80% 50%) 100%)' }}
          >
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-4 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
              style={{ background: 'hsl(192 30% 18%)' }}
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-4 py-3 rounded-md text-left transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-white font-medium'
                        : 'text-white/70 hover:text-white'
                    }`}
                    style={{ 
                      background: activeSection === link.href.replace('#', '') 
                        ? 'hsl(192 40% 28%)' 
                        : 'transparent'
                    }}
                  >
                    {link.name}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('#contact')} 
                  className="text-center mt-3 py-3 rounded-md text-white font-semibold"
                  style={{ background: 'linear-gradient(135deg, hsl(25 85% 55%) 0%, hsl(20 80% 50%) 100%)' }}
                >
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
