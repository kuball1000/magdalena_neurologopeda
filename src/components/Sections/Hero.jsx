import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import img1 from '../../assets/feathers.jpg';
import img2 from '../../assets/bubbles.jpg';
import img3 from '../../assets/books.jpg';
import img4 from '../../assets/dino.jpg';

const Hero = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, [currentIndex, images.length]); // Add currentIndex to reset timer on manual change

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-brand-beige via-[#e8f0eb] to-brand-beige transition-colors duration-2000">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-[-10%] w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 border border-brand-sage text-brand-sage rounded-full text-sm font-medium tracking-wide mb-4">
            PEDAGOG &bull; LOGOPEDA &bull; NEUROLOGOPEDA
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-brand-dark">
            Wspieram rozwój mowy <br />
            <span className="text-brand-sage italic relative">
              dzieci i dorosłych
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-sage opacity-30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7951 3.5262 55.2343 3.03362 82.2573 2.10662C102.668 1.4064 122.951 1.76166 143.345 2.50292C151.724 2.80689 160.093 3.16781 168.455 3.63385C178.618 4.20078 191.823 6.13846 198.004 5.99996" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Indywidualne podejście, profesjonalna diagnoza i skuteczna terapia w przyjaznej atmosferze. Pomagam pokonać bariery komunikacyjne w każdym wieku.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-brand-sage text-white rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Umów konsultację
            </Link>
            <Link
              to="offer"
              smooth={true}
              duration={500}
              className="px-8 py-3 border-2 border-brand-dark text-brand-dark rounded-full font-medium hover:bg-brand-dark hover:text-white transition-all cursor-pointer"
            >
              Zobacz ofertę
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
           <div className="absolute inset-0 bg-brand-sage rounded-[2rem] rotate-3 transform translate-x-4 translate-y-4"></div>
           <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-white group">
             
             {/* Carousel Images */}
             <div className="w-full h-full relative">
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={currentIndex}
                        src={images[currentIndex]} 
                        alt={`Magdalena Chlebowicz - zdjęcie ${currentIndex + 1}`} 
                        className="w-full h-full object-cover object-center absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
             </div>

             {/* Navigation Dots */}
             <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                ))}
             </div>

             {/* Arrows */}
             <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100"
             >
                <ChevronLeft size={24} />
             </button>
             <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100"
             >
                <ChevronRight size={24} />
             </button>

           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
