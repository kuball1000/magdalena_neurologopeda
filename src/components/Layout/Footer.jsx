import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-8">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
           <h3 className="text-2xl font-serif font-bold mb-1">Magdalena Chlebowicz</h3>
           <p className="text-brand-sage text-sm uppercase tracking-wider">Neurologopeda</p>
        </div>
        
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Magdalena Chlebowicz. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
