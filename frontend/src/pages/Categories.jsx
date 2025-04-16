import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeartbeat, FaBrain, FaMapMarkerAlt, FaBell, FaMobileAlt, FaChartLine } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaHeartbeat className="text-blue-600 text-4xl" />,
      title: "Health Monitoring",
      description: "Continuous tracking of vital signs including heart rate, oxygen levels, and sleep patterns for comprehensive health insights."
    },
    {
      icon: <FaBrain className="text-blue-600 text-4xl" />,
      title: "Cognitive Analysis",
      description: "AI-powered assessment of cognitive patterns to detect early signs of memory issues or cognitive decline."
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-4xl" />,
      title: "Precision Location",
      description: "Real-time GPS tracking with geofencing alerts to ensure patient safety and provide peace of mind for caregivers."
    },
    {
      icon: <FaBell className="text-blue-600 text-4xl" />,
      title: "Fall Detection",
      description: "Immediate alerts sent to caregivers when a fall is detected, with emergency contact notification capabilities."
    },
    {
      icon: <FaMobileAlt className="text-blue-600 text-4xl" />,
      title: "Caregiver App",
      description: "Companion app providing real-time updates, health reports, and personalized care recommendations."
    },
    {
      icon: <FaChartLine className="text-blue-600 text-4xl" />,
      title: "Trend Analysis",
      description: "Long-term health trend visualization to identify patterns and potential health concerns early."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              MemoTag Features
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive health monitoring and cognitive analysis designed to empower patients and support caregivers.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-blue-100"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to experience MemoTag?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of families and caregivers using MemoTag for peace of mind and better health outcomes.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;