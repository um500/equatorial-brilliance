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
        style={{ background: 'hsl(192 30% 18%)' }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo - Left */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} 
            className="flex items-center py-4 md:py-5"
          >
            <span className="font-display font-bold text-xl md:text-2xl text-white italic">
              Equatorial IT
            </span>
          </a>

          {/* Desktop Nav Links + CTA - Right aligned */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-5 xl:px-6 py-5 text-sm md:text-base font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                style={{ 
                  background: activeSection === link.href.replace('#', '') 
                    ? 'hsl(180 40% 35%)' 
                    : 'transparent'
                }}
              >
                {link.name}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 px-6 xl:px-8 py-3 text-sm md:text-base font-bold text-white transition-all duration-300 hover:brightness-110 rounded-sm"
              style={{ background: 'linear-gradient(135deg, hsl(25 85% 55%) 0%, hsl(20 80% 50%) 100%)' }}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
              style={{ background: 'hsl(192 30% 16%)' }}
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-4 py-3 rounded-md text-left text-base transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-white font-medium'
                        : 'text-white/70 hover:text-white'
                    }`}
                    style={{ 
                      background: activeSection === link.href.replace('#', '') 
                        ? 'hsl(180 40% 35%)' 
                        : 'transparent'
                    }}
                  >
                    {link.name}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('#contact')} 
                  className="text-center mt-3 py-3 rounded-md text-white font-bold text-base"
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
