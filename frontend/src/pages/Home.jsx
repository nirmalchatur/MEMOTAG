import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const handleLoginClick = () => navigate("/login");
  const handleViewAllPodcasts = () => navigate("/all-podcasts");

  const isLoggedIn = () => localStorage.getItem("userToken");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gray-50 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/crisp-paper-ruffles.png')] opacity-5"></div>
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 opacity-20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-teal-50 to-emerald-100 opacity-20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-24 relative z-10 min-h-screen">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-32">
            {/* Hero Text */}
            <motion.div 
              className="w-full lg:w-1/2 space-y-10"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
                variants={itemVariants}
              >
                <span className="block">Elevate Your</span>
                <span className="inline-flex items-center mt-4">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800">
                    Audio
                    <motion.img
                      src="https://cdn-icons-png.flaticon.com/128/2113/2113324.png"
                      alt="headphone"
                      className="h-16 md:h-20 inline-block mx-4 -mt-2"
                      initial={{ rotate: -15 }}
                      animate={{ rotate: 15 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2.5
                      }}
                    />
                    Experience
                  </span>
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-600 leading-relaxed max-w-lg font-light"
                variants={itemVariants}
              >
                Immerse yourself in premium audio content. Curated podcasts from thought leaders, storytellers, and experts across all genres.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                variants={itemVariants}
              >
                {isLoggedIn() ? (
                  <motion.button
                    onClick={handleViewAllPodcasts}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] transform duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                    </svg>
                    Explore Premium Content
                  </motion.button>
                ) : (
                  <>
                    <motion.button
                      onClick={handleLoginClick}
                      className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] transform duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Join Now
                    </motion.button>
                    <motion.button
                      onClick={handleViewAllPodcasts}
                      className="px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-700 font-medium rounded-xl hover:bg-emerald-50 transition-all hover:scale-[1.02] transform duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Browse Podcasts
                    </motion.button>
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="w-full lg:w-1/2 relative"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-6 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl rotate-3 opacity-70"
                  animate={{
                    rotate: [3, 5, 3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Person listening to podcast" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <div className="flex items-center space-x-4">
                      <div className="h-14 w-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium text-lg">Currently Playing</p>
                        <p className="text-emerald-300 text-sm font-light">The Future of Audio Technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="mt-32 mb-32"
            variants={fadeIn}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10K+", label: "Premium Podcasts", icon: "🎙️" },
                { value: "500+", label: "World-Class Creators", icon: "🌟" },
                { value: "1M+", label: "Engaged Listeners", icon: "👂" },
                { value: "24/7", label: "Dedicated Support", icon: "🛎️" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <p className="text-4xl font-bold text-emerald-700 mb-2">{stat.value}</p>
                  <p className="text-gray-600 font-light">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Podcasts Section */}
          <motion.div 
            className="mt-32 mb-32"
            variants={fadeIn}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Featured Podcasts</h2>
              <button 
                onClick={handleViewAllPodcasts}
                className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center transition-colors"
              >
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Tech Trends Uncovered",
                  description: "Exploring the latest in technology and innovation",
                  category: "Technology",
                  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  title: "Mindful Moments",
                  description: "Guided meditations and mindfulness practices",
                  category: "Wellness",
                  image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  title: "Business Insights",
                  description: "Strategies from top entrepreneurs and executives",
                  category: "Business",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                }
              ].map((podcast, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden h-60">
                    <img 
                      src={podcast.image}
                      alt={podcast.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {podcast.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{podcast.title}</h3>
                    <p className="text-gray-600 mb-6 font-light">{podcast.description}</p>
                    <button 
                      className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center transition-colors group"
                      onClick={handleViewAllPodcasts}
                    >
                      Listen Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div 
            className="mt-32 mb-32 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl shadow-2xl overflow-hidden"
            variants={fadeIn}
          >
            <div className="p-12 md:p-16 lg:p-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">What Our Community Says</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    quote: "This platform has completely transformed my daily routine. The content quality is simply unmatched in the industry.",
                    author: "Sarah Johnson",
                    role: "Marketing Director",
                    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
                  },
                  {
                    quote: "I've discovered so many thought-provoking shows that have expanded my perspective in ways I never expected.",
                    author: "Michael Chen",
                    role: "Software Engineer",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
                  },
                  {
                    quote: "As a creator, I appreciate the elegant interface and deeply engaged audience. It's a pleasure to publish here.",
                    author: "David Wilson",
                    role: "Podcast Host",
                    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
                  }
                ].map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                    whileHover={{ scale: 1.03 }}
                  >
                    <svg className="w-10 h-10 text-emerald-300 mb-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="text-white/90 italic text-lg mb-8 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 border-2 border-emerald-300" />
                      <div>
                        <p className="font-bold text-white">{testimonial.author}</p>
                        <p className="text-sm text-emerald-200">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            className="mt-32 text-center"
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Ready to Elevate Your Listening Experience?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 font-light">
              Join our community of discerning listeners who demand the highest quality audio content.
            </p>
            {isLoggedIn() ? (
              <motion.button
                onClick={handleViewAllPodcasts}
                className="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-800 text-white font-medium rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                </svg>
                Explore Premium Content
              </motion.button>
            ) : (
              <motion.button
                onClick={handleLoginClick}
                className="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-800 text-white font-medium rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] transform duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign Up Now - It's Free
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Music Player */}
      <AnimatePresence>
        <motion.div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-2xl border border-gray-200 z-50 overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center p-3 pl-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
              </svg>
            </div>
            <div className="mr-8">
              <p className="font-medium text-gray-900">The Future of Audio</p>
              <p className="text-sm text-gray-500">Tech Insights</p>
            </div>
            <button className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;