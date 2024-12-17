import React, { useEffect, useState } from "react";
import axios from "axios";
import PodcastCard from "../components/PodcastCard/PodcastCard";

const AllPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const res = await axios.get("/api/v1/get-podcasts");
        setPodcasts(res.data?.data || []); // Safely access data
      } catch (error) {
        console.error("Error fetching podcasts:", error);
        setPodcasts([]); // Fallback to empty array on error
      }
    };
    fetchPodcasts();
  }, []);

  return (
    <div>
      <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {podcasts.length > 0 ? (
          podcasts.map((items) => (
            <div key={items._id}>
              <PodcastCard
                title={items.title}
                description={items.description}
                frontImage={items.frontImage}
                audioFile={items.audioFile}
                category={items.category}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No podcasts available.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPodcasts;
