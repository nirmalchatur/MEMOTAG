import React from "react";
import { motion } from "framer-motion";
import { 
  FaUserMd, 
  FaHeart, 
  FaLightbulb, 
  FaHandsHelping,
  FaShieldAlt,
  FaChartLine,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserNurse
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <FaUserMd className="text-blue-600 text-4xl" />,
      title: "Patient-Centered",
      description: "We design all our solutions with the patient's dignity, independence, and quality of life as top priorities."
    },
    {
      icon: <FaHeart className="text-blue-600 text-4xl" />,
      title: "Compassionate Care",
      description: "Our technology enhances human connection, never replaces it. We support caregivers in providing better care."
    },
    {
      icon: <FaLightbulb className="text-blue-600 text-4xl" />,
      title: "Innovation",
      description: "We continuously push boundaries in health tech to deliver meaningful solutions for cognitive health challenges."
    }
  ];

  const caregiverFeatures = [
    {
      icon: <FaUserNurse className="text-blue-600 text-3xl" />,
      title: "Care Team Coordination",
      description: "Easily share updates and coordinate care with family members and professional caregivers."
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      title: "Safety Monitoring",
      description: "Receive instant alerts for falls, wandering, or other safety concerns."
    },
    {
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      title: "Health Trends",
      description: "Track long-term health patterns and receive predictive insights about potential issues."
    },
    {
      icon: <FaHandsHelping className="text-blue-600 text-3xl" />,
      title: "Personalized Recommendations",
      description: "Get AI-powered suggestions for care strategies based on the patient's unique patterns."
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
              About MemoTag
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            Revolutionizing patient monitoring and cognitive health management through innovative wearable technology and AI-powered analytics.
          </motion.p>
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20 bg-white p-8 rounded-xl shadow-md border border-blue-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 2022 by a team of neurologists, geriatric specialists, and technology experts, MemoTag was born from personal experiences with aging family members.
              </p>
              <p className="text-gray-600 mb-4">
                We recognized the growing need for comprehensive solutions that address both physical safety and cognitive health monitoring, especially for individuals with memory challenges.
              </p>
              <p className="text-gray-600">
                Our clinical advisory board includes leading experts in neurology, geriatrics, and cognitive disorders from top medical institutions.
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                MemoTag is FDA-cleared as a medical monitoring device and HIPAA-compliant to ensure the highest standards of patient privacy and data security.
              </p>
              <p className="text-gray-600 mb-4">
                We partner with leading healthcare systems, senior living communities, and home care agencies to deliver better outcomes.
              </p>
              <p className="text-gray-600">
                Today, MemoTag is trusted by thousands of families and healthcare providers across the country, helping to improve quality of life and health outcomes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* For Caregivers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 shadow-lg">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">For Caregivers</h2>
              <p className="text-blue-100 text-xl">
                MemoTag is designed to support both professional and family caregivers with powerful tools for monitoring and care coordination.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caregiverFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-700 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link
                to="/caregivers"
                className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                Learn More About Caregiver Tools
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-blue-100 text-center"
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-20 bg-white p-8 rounded-xl shadow-md border border-blue-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaPhone className="text-blue-600 text-2xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600 mt-2">(800) 555-0199</p>
                <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am-5pm EST</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaEnvelope className="text-blue-600 text-2xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900">Email</h3>
                <p className="text-gray-600 mt-2">support@memotag.com</p>
                <p className="text-gray-600">partners@memotag.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900">Headquarters</h3>
                <p className="text-gray-600 mt-2">123 Health Tech Way</p>
                <p className="text-gray-600">Boston, MA 02134</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Visit Full Contact Page
            </Link>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A diverse team of healthcare professionals, technologists, and caregivers united by a common purpose.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: "Dr. Sarah Chen", title: "Chief Medical Officer", specialty: "Neurologist" },
              { name: "Michael Rodriguez", title: "CEO", specialty: "Health Tech Entrepreneur" },
              { name: "Dr. James Wilson", title: "Head of Research", specialty: "Geriatric Specialist" },
              { name: "Lisa Park", title: "CTO", specialty: "AI & Wearables Expert" }
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-blue-100"
              >
                <div className="h-24 w-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold">
                  {member.name.split(' ')[0].charAt(0)}{member.name.split(' ')[1].charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.title}</p>
                <p className="text-gray-500 text-sm mt-2">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;