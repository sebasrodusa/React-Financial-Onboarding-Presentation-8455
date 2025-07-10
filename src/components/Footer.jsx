import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiGlobe, FiMapPin, FiLinkedin, FiFacebook, FiTwitter } = FiIcons;

const Footer = ({ footerData }) => {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white mt-8"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{footerData.company}</h3>
            <p className="text-gray-300 mb-4">
              Empowering financial professionals to build successful careers 
              and help clients achieve their financial goals.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <SafeIcon icon={FiLinkedin} className="text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <SafeIcon icon={FiFacebook} className="text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <SafeIcon icon={FiTwitter} className="text-white" />
              </motion.a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-blue-400" />
                <span className="text-gray-300">{footerData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-blue-400" />
                <span className="text-gray-300">{footerData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiGlobe} className="text-blue-400" />
                <span className="text-gray-300">{footerData.website}</span>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="text-blue-400 mt-1" />
                <span className="text-gray-300">{footerData.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Agent Portal
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Training Resources
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Product Information
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Support Center
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Compliance Guidelines
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 {footerData.company}. All rights reserved. | 
            Licensed in all 50 states | FINRA Member
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;