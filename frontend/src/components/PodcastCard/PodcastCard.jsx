import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { playerActions } from "../../store/player";

const PodcastCard = ({ items }) => {
  const dispatch = useDispatch(); // Fixed the typo
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Redux state for auth

  // Handle play button click
  const handlePlay = (e) => {
    if (isLoggedIn) {
      e.preventDefault();
      dispatch(playerActions.setDiv());
      dispatch(
        playerActions.changeImage(`/api/${items?.frontImage}`) // Use relative path
      );
      dispatch(
        playerActions.changeSong(`/api/${items?.audioFile}`) // Use relative path
      );
    }
  };

  return (
    <div>
      {/* Main Card Link */}
      <Link
        to={`/description/${items?._id}`}
        className="border p-4 rounded flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        {/* Podcast Image */}
        <div>
          <img
            src={`/api/${items?.frontImage}`} // Use relative path
            alt="Podcast Cover"
            className="rounded size-[42vh] object-cover"
          />
        </div>

        {/* Podcast Title */}
        <div className="mt-2 text-xl font-bold">
          {items?.title?.slice(0, 20)}
        </div>

        {/* Podcast Description */}
        <div className="mt-2 leading-5 text-slate-500">
          {items?.description?.slice(0, 50)}
        </div>

        {/* Podcast Category */}
        <div className="mt-2 bg-orange-100 text-orange-700 border border-orange-700 rounded-full px-4 py-2 text-center">
          {items?.category?.categoryName}
        </div>

        {/* Play Button or Signup */}
        <div className="mt-2">
          {isLoggedIn ? (
            <button
              onClick={handlePlay}
              className="bg-green-900 text-white px-4 py-2 rounded mt-2 flex items-center justify-center hover:bg-green-800 transition-all duration-300"
            >
              Play Now
            </button>
          ) : (
            <Link
              to="/signup"
              className="bg-green-900 text-white px-4 py-2 rounded mt-2 flex items-center justify-center hover:bg-green-800 transition-all duration-300"
            >
              Sign Up
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default PodcastCard;
