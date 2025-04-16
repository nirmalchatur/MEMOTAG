import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiLogOut, FiUser } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSettings4Line } from "react-icons/ri";

const Header = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${window.location.origin}/api/v1/user-details`, {
          withCredentials: true,
        });
        setUserData(res.data.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${window.location.origin}/api/v1/logout`, {}, {
        withCredentials: true,
      });
      dispatch(authActions.logout());
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-green-800 to-green-700 py-8 px-4 lg:px-12 animate-pulse">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="space-y-3">
            <div className="h-6 w-32 bg-green-700 rounded"></div>
            <div className="h-10 w-64 bg-green-700 rounded"></div>
            <div className="h-5 w-48 bg-green-700 rounded"></div>
          </div>
          <div className="h-10 w-24 bg-green-700 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {userData && (
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-800 to-green-700 py-6 px-4 lg:px-12 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            {/* User Profile Section */}
            <div className="flex items-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl">
                  {userData.avatar ? (
                    <img 
                      src={userData.avatar} 
                      alt="Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <FiUser />
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-green-800"></div>
              </motion.div>

              <div className="text-white">
                <p className="text-sm font-medium text-green-200 flex items-center gap-1">
                  <FiUser className="text-xs" /> Profile
                </p>
                <h1 className="text-2xl md:text-3xl font-bold mt-1">
                  {userData.username}
                </h1>
                <p className="text-green-100 text-sm mt-1">{userData.email}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-green-100 hover:text-white transition-colors"
                aria-label="Notifications"
              >
                <IoMdNotificationsOutline className="text-xl" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-green-100 hover:text-white transition-colors"
                aria-label="Settings"
              >
                <RiSettings4Line className="text-xl" />
              </motion.button>

              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white bg-opacity-90 hover:bg-opacity-100 px-4 py-2 rounded-lg text-green-800 font-medium shadow-md transition-all"
                aria-label="Log out"
              >
                <FiLogOut />
                <span>Log Out</span>
              </motion.button>
            </div>
          </div>
        </motion.header>
      )}
    </>
  );
};

export default Header;