'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            MyApp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center relative">
            {/* About Us with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-black transition">
                About Us <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-8 left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                  >
                    <Link
                      href="/about/team"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/about/mission"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Our Mission
                    </Link>
                    <Link
                      href="/about/contact"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Auth Links */}
            <Link href="/login" className="text-gray-600 hover:text-black">
              Login
            </Link>
            <Link href="/signup">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-4 pb-4 pt-2 space-y-2 overflow-hidden"
          >
            {/* Mobile About Us dropdown */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left text-gray-600 hover:text-black"
                onClick={() => setAboutMobileOpen(!aboutMobileOpen)}
              >
                <span>About Us</span>
                {aboutMobileOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              <AnimatePresence>
                {aboutMobileOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 mt-2 space-y-1"
                  >
                    <Link
                      href="/about/team"
                      className="block text-gray-600 hover:text-black"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/about/mission"
                      className="block text-gray-600 hover:text-black"
                    >
                      Our Mission
                    </Link>
                    <Link
                      href="/about/contact"
                      className="block text-gray-600 hover:text-black"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/login" className="block text-gray-600 hover:text-black">
              Login
            </Link>
            <Link href="/signup">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Sign Up
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
