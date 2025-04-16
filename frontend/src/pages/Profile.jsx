import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ErrorPage from "./ErrorPage";
import Header from "../components/Profile/Header";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoading, setIsLoading] = useState(true);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate loading memories data
      setMemories([
        { id: 1, title: "Beach Vacation", date: "2023-07-15", tags: ["travel", "family"] },
        { id: 2, title: "Graduation Day", date: "2023-05-20", tags: ["achievement", "school"] },
        { id: 3, title: "Birthday Party", date: "2023-03-10", tags: ["celebration", "friends"] }
      ]);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoggedIn) {
    return <ErrorPage />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="space-y-8 animate-pulse">
            {/* Header Loading Placeholder */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-8 bg-gray-200 rounded w-48"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
            
            {/* Content Loading Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-gray-200 rounded-2xl h-64"></div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-200 rounded-2xl h-96"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Header />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Profile Stats Section */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Your Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Memories</p>
                      <p className="text-2xl font-bold">{memories.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tags Created</p>
                      <p className="text-2xl font-bold">
                        {[...new Set(memories.flatMap(memory => memory.tags))].length}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Memory Streak</p>
                      <p className="text-2xl font-bold">15 days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Memories Section - Implemented directly */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Your Memories</h2>
                    <div className="space-y-4">
                      {memories.map(memory => (
                        <motion.div
                          key={memory.id}
                          whileHover={{ scale: 1.02 }}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-lg">{memory.title}</h3>
                            <span className="text-sm text-gray-500">{memory.date}</span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {memory.tags.map(tag => (
                              <span 
                                key={tag}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Profile;