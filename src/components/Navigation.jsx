import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronLeft, FiChevronRight, FiMenu, FiX, FiPlay } = FiIcons;

const Navigation = ({ currentSlide, totalSlides, onNext, onPrev, onGoTo, slides }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      {/* Slide Menu Overlay */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Slide Navigation</h3>
                  <button
                    onClick={toggleMenu}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <SafeIcon icon={FiX} className="text-gray-600" />
                  </button>
                </div>
                
                <div className="space-y-2 max-h-[70vh] overflow-y-auto">
                  {slides.map((slide, index) => (
                    <motion.button
                      key={slide.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onGoTo(index);
                        toggleMenu();
                      }}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        index === currentSlide
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === currentSlide ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="font-medium">{slide.title}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-t border-gray-200 px-6 py-4"
      >
        <div className="container mx-auto flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPrev}
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentSlide === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg'
            }`}
          >
            <SafeIcon icon={FiChevronLeft} />
            <span>Previous</span>
          </motion.button>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">
              {currentSlide + 1} / {totalSlides}
            </span>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
            >
              <SafeIcon icon={FiMenu} />
              <span>Menu</span>
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentSlide === totalSlides - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg'
            }`}
          >
            <span>Next</span>
            <SafeIcon icon={FiChevronRight} />
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;