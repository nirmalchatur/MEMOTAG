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
    { name: "Features", path: "/categories" },
    { name: "For Caregivers", path: "/all-podcasts" },
    { name: "About", path: "/all-podcasts" },
    { name: "Contact", path: "/all-podcasts" }
  ];

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-3"
          >
            <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 17L9.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 17L14.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 7L14.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7L9.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            >
              MemoTag
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="relative px-1 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <Link
                to="/profile"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
                <span>Dashboard</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileNav}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
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
              <div className="flex flex-col space-y-4">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={closeMobileNav}
                    className="px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="border-t border-gray-200 pt-4 mt-2">
                  {!isLoggedIn ? (
                    <>
                      <Link
                        to="/login"
                        onClick={closeMobileNav}
                        className="block px-4 py-3 mb-3 text-lg font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        onClick={closeMobileNav}
                        className="block px-4 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Get Started
                      </Link>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      onClick={closeMobileNav}
                      className="block px-4 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                      Dashboard
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