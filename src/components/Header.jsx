import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiTrendingUp } = FiIcons;

const Header = ({ title, subtitle, logo, company }) => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg border-b-4 border-blue-500"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiStar} className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{company}</h1>
                <div className="flex items-center space-x-1 text-blue-600">
                  <SafeIcon icon={FiTrendingUp} className="text-sm" />
                  <span className="text-sm font-medium">Financial Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 text-sm">{subtitle}</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;