import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PodcastCard from "../components/PodcastCard/PodcastCard";

const CategoriesPage = () => {
  const { cat } = useParams();
  const [podcasts, setPodcasts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const res = await axios.get(`/api/v1/category/${cat}`, {
          withCredentials: true,
        });
        setPodcasts(res.data?.data || []); // Safely handle undefined data
      } catch (error) {
        console.error("Error fetching podcasts by category:", error);
        setPodcasts([]); // Fallback to empty array on error
      }
    };
    fetchPodcasts();
  }, [cat]); // Added 'cat' as a dependency

  return (
    <div className="px-4 py-4 lg:px-12">
      {/* Category Title */}
      <h1 className="text-2xl font-semibold capitalize text-gray-800">{cat}</h1>

      {/* Podcasts Grid */}
      <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {podcasts.length > 0 ? (
          podcasts.map((items) => (
            <div key={items._id}>
              <PodcastCard items={items} />
            </div>
          ))
        ) : (
          // No Podcasts Available Message
          <div className="col-span-full text-3xl font-bold text-zinc-700 flex items-center justify-center h-64">
            No Podcasts Right Now
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
