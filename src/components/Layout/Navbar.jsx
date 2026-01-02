import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Start', to: 'hero' },
    { name: 'O mnie', to: 'about' },
    { name: 'Oferta', to: 'offer' },
    { name: 'Certyfikaty', to: 'certificates' },
    { name: 'Kontakt', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 font-serif text-2xl font-medium text-brand-dark cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <Brain className="text-brand-sage w-8 h-8" />
          <span>Magdalena Chlebowicz</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-brand-sage transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-sage transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-5 py-2 bg-brand-sage text-white rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md cursor-pointer"
          >
            Umów wizytę
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 gap-6"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-brand-sage cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
