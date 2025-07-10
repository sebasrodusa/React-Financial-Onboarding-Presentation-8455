import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Slide from './Slide';
import Navigation from './Navigation';
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import presentationData from '../data/presentationData.json';

const PresentationApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    if (currentSlide < presentationData.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-800">Loading Presentation...</h2>
          <p className="text-gray-600 mt-2">Preparing your onboarding experience</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Header 
        title={presentationData.title}
        subtitle={presentationData.subtitle}
        logo={presentationData.logo}
        company={presentationData.company}
      />
      
      <ProgressBar 
        current={currentSlide + 1}
        total={presentationData.slides.length}
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Slide 
              slide={presentationData.slides[currentSlide]}
              slideNumber={currentSlide + 1}
              totalSlides={presentationData.slides.length}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={presentationData.slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoTo={goToSlide}
        slides={presentationData.slides}
      />

      <Footer footerData={presentationData.footer} />
    </div>
  );
};

export default PresentationApp;