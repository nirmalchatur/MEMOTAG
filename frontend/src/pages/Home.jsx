import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import Login from "./Login";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "Login to listen" button click
  const handleLoginClick = () => {
    navigate("/login"); // Redirect to the login page
  };

  // Function to handle navigation to all podcasts
  const handleViewAllPodcasts = () => {
    navigate("/all-podcasts"); // Redirect to the all-podcasts page
  };

  // Scroll to the top of the page smoothly and navigate to all podcasts
  const handleScrollTopAndViewPodcasts = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    setTimeout(() => {
      navigate("/all-podcasts"); // Navigate after scroll completes
    }, 500); // Adjust the timeout to ensure the scroll completes
  };

  // Example function to check if the user is logged in
  const isLoggedIn = () => {
    // Replace this logic with actual authentication check
    return localStorage.getItem("userToken"); // Example: Check if a token exists
  };

  return (
    <div className="bg-green-100 px-12 h-screen lg:h-[89vh] flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center lg:items-start lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
            Create & listen the <br />{" "}
            <span className="flex items-center justify-center lg:justify-start mt-4 lg:mt-0">
              p
              <img
                src="https://cdn-icons-png.flaticon.com/128/2113/2113324.png"
                alt="headphone"
                className="h-12 md:h-16 lg:h-20 mx-2"
              />
              dcast
            </span>
          </h1>
        </div>
        <div className="hidden lg:block w-1/6 text-center">
          {/* Replaced Scroll Down Button with Animated GIF */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/5728/5728494.png"
            alt="scroll-down"
            className="w-32 md:w-48 lg:w-64 cursor-pointer"
            onClick={handleScrollTopAndViewPodcasts}
          />
        </div>
      </div>

      <div className="mt-12 w-full flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-xl font-semibold text-center lg:text-left">
            Listen to the most popular podcasts on just one platform -{" "}
            <b className="text-green-900">PODCASTER</b>
          </p>
          {isLoggedIn() ? (
            <p className="mt-6 text-xl font-semibold">Hello</p> // Display "Hello" if logged in
          ) : (
            <button
              className="mt-6 px-8 py-4 bg-green-900 text-white font-semibold rounded-full transition-all hover:bg-green-800"
              onClick={handleLoginClick}
            >
              Login to Listen
            </button>
          )}
        </div>
        <div className="mt-6 lg:mt-0 text-center lg:text-right">
          <p className="text-zinc-600 font-bold">
            Our platform features podcasts across genres for everyone.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-4 right-4 bg-green-900 text-white rounded-full p-4 shadow-lg hover:bg-green-800 transition-all"
        onClick={handleScrollTopAndViewPodcasts} // Navigate to all podcasts after smooth scroll
      >
        &#8679;
      </button>
    </div>
  );
};

export default Home;
