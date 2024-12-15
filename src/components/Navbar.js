import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-sm" : "bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="MS Builders Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="text-white hover:text-yellow-500 transition-colors">
              About Us
            </Link>
            <Link to="/company-profile" className="text-white hover:text-yellow-500 transition-colors">
              Profile
            </Link>
            <Link to="/services-and-equipment" className="text-white hover:text-yellow-500 transition-colors">
              Services
            </Link>
            <Link to="/clients" className="text-white hover:text-yellow-500 transition-colors">
              Clients
            </Link>
            <Link to="/certificates-and-awards" className="text-white hover:text-yellow-500 transition-colors">
              Awards
            </Link>
            <Link to="/gallery" className="text-white hover:text-yellow-500 transition-colors">
              Gallery
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-yellow-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="block px-3 py-2 text-white hover:text-yellow-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/company-profile"
                className="block px-3 py-2 text-white hover:text-yellow-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/services-and-equipment"
                className="block px-3 py-2 text-white hover:text-yellow-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/clients"
                className="block px-3 py-2 text-white hover:text-yellow-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Clients
              </Link>
              <Link
                to="/certificates-and-awards"
                className="block px-3 py-2 text-white hover:text-yellow-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Awards
              </Link>
              <Link
                to="/gallery"
                className="block px-3 py-2 text-white hover:text-yellow-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
