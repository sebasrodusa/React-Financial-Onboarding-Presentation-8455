import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Slide = ({ slide, slideNumber, totalSlides }) => {
  const renderContent = () => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-lg max-w-none"
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 mt-8">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-6">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-700 mb-4 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="ml-4">
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-blue-700">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-600">
              {children}
            </em>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
              {children}
            </blockquote>
          ),
        }}
      >
        {slide.content}
      </ReactMarkdown>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[600px]">
        <div className="flex items-center justify-between mb-8">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              {slideNumber}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{slide.title}</h2>
          </motion.div>
          
          <div className="text-sm text-gray-500">
            {slideNumber} of {totalSlides}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="slide-content"
        >
          {renderContent()}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slide;