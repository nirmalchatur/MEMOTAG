import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaPlay, FaHeart, FaShareAlt, FaClock, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const DescriptionPage = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await axios.get(
          `${window.location.origin}/api/v1/get-podcast/${id}`,
          { withCredentials: true }
        );
        setPodcast(res.data.data);
      } catch (error) {
        console.error("Error fetching podcast:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPodcast();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!podcast) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Podcast not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Podcast Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:w-2/5 relative overflow-hidden"
          >
            <img
              src={`${window.location.origin}/${podcast.frontImage}`}
              alt={podcast.title}
              className="w-full h-full object-cover md:rounded-l-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r"></div>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110">
              <FaPlay size={24} />
            </button>
          </motion.div>

          {/* Podcast Details */}
          <div className="md:w-3/5 p-8 md:p-12">
            <div className="flex justify-between items-start">
              <div>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold text-gray-900 mb-2"
                >
                  {podcast.title}
                </motion.h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="flex items-center text-gray-600">
                    <FaUser className="mr-2" />
                    {podcast.creator || "Unknown Author"}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    {podcast.duration || "45 min"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-full ${isFavorite ? "text-red-500 bg-red-50" : "text-gray-400 bg-gray-100"} hover:bg-red-50 hover:text-red-500 transition-colors`}
              >
                <FaHeart size={20} />
              </button>
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              {podcast.description}
            </motion.p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {podcast.category?.categoryName || "Uncategorized"}
              </span>
              {podcast.tags?.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                <FaPlay className="mr-2" /> Listen Now
              </button>
              <button className="flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
                <FaShareAlt className="mr-2" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">More Episodes</h2>
        {/* Episode list would go here */}
      </div>
    </motion.div>
  );
};

export default DescriptionPage;