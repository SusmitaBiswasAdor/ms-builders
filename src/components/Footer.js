import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">MS Builders</h3>
            <p className="text-gray-300">
              Building excellence through innovation and dedication since 2010.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition">Gallery</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="text-gray-300">
              <p>Email: msbuilders777@gmail.com</p>
              <p>Phone: +8801735731119 </p>
              <p>Address: Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p> {new Date().getFullYear()} MS Builders. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;