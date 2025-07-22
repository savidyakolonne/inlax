import React from 'react';
import logo from "../../assets/logo.webp";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-center md:text-left">
        
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="flex items-center space-x-3">
          <img src={logo} alt="iNLAX logo" className="h-12 w-auto" />
          
        </div>
        </Link>

        

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-600">
          <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-blue-500 hover:underline cursor-pointer">About Us</Link></li>
          <li><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-blue-500 hover:underline cursor-pointer">Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 text-gray-600">
          <a href="https://www.facebook.com/share/159VobPDWj8/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-blue-600">
            <FaFacebookF size={20} />
          </a>
          <a href="https://wa.me/94703959647" target="_blank" rel="noreferrer" aria-label="Whatsapp" className="hover:text-blue-400">
            <FaWhatsapp size={20} />
          </a>
          
          <a href="https://www.instagram.com/inlax__?igsh=eHh5N2R6aXZxZTBw" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/company/inlax/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
        <div className="pt-20 items-center text-center text-sm text-gray-600">
          © 2025 <a href="#" className="font-medium text-blue-500 hover:underline">iNLAX</a>. All rights reserved.
        </div>

      
    </footer>
  );
};

export default Footer;
