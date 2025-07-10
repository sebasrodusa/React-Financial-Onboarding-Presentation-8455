import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Progress: {current} of {total}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(progress)}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;