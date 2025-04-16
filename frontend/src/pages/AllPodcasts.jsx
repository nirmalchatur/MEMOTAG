import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PodcastCard from "../components/PodcastCard/PodcastCard";

const AllPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/v1/get-podcasts");
        setPodcasts(res.data?.data || []);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
        setError("Failed to load podcasts. Please try again later.");
        setPodcasts([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPodcasts();
  }, []);

  // Custom loading component
  const LoadingCard = () => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="bg-gray-200 h-48 w-full animate-pulse"></div>
      <div className="p-4">
        <div className="bg-gray-200 h-6 w-3/4 mb-3 animate-pulse rounded"></div>
        <div className="bg-gray-200 h-4 w-full mb-2 animate-pulse rounded"></div>
        <div className="bg-gray-200 h-4 w-2/3 animate-pulse rounded"></div>
        <div className="bg-gray-200 h-4 w-1/2 mt-3 animate-pulse rounded"></div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Explore Podcasts</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing content from creators around the world
          </p>
        </motion.div>

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-lg"
          >
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-red-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <LoadingCard />
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && podcasts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-sm p-12 text-center"
          >
            <div className="max-w-md mx-auto">
              <svg
                className="h-16 w-16 text-gray-400 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No podcasts found
              </h3>
              <p className="text-gray-500 mb-6">
                There are currently no podcasts available. Check back later!
              </p>
            </div>
          </motion.div>
        )}

        {/* Podcasts Grid */}
        {!isLoading && podcasts.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {podcasts.map((podcast) => (
              <motion.div
                key={podcast._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <PodcastCard items={podcast} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AllPodcasts;