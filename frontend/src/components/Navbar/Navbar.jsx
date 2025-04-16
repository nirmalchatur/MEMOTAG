import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "All Podcasts", path: "/all-podcasts" },
  ];

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img
              src="https://www.shutterstock.com/image-vector/podcast-icon-vector-isolated-on-600nw-2368666423.jpg"
              alt="Podcaster Logo"
              className="h-10 w-10"
            />
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"
            >
              Podcaster
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="relative px-1 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-emerald-400 hover:text-emerald-600 transition-all duration-300 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                to="/profile"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                <span>Profile</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileNav}
              className="p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <IoReorderThreeOutline className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-20"
          >
            <div className="px-6 py-4">
              <div className="flex flex-col space-y-6">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={closeMobileNav}
                    className="px-4 py-3 text-xl font-medium text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="border-t border-gray-200 pt-4">
                  {!isLoggedIn ? (
                    <>
                      <Link
                        to="/login"
                        onClick={closeMobileNav}
                        className="block px-4 py-3 mb-3 text-xl font-medium text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-300"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        onClick={closeMobileNav}
                        className="block px-4 py-3 text-xl font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                      >
                        Sign Up
                      </Link>
                    </>
                  ) : (
                    <Link
                      to="/profile"
                      onClick={closeMobileNav}
                      className="block px-4 py-3 text-xl font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                    >
                      Profile
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;