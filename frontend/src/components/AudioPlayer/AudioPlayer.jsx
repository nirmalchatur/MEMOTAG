import React, { useEffect, useRef, useState } from "react";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPause, FaPlay } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../store/player";
import { motion, AnimatePresence } from "framer-motion";

const AudioPlayer = () => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);
  const dispatch = useDispatch();
  const playerDivState = useSelector((state) => state.player.isPlayerDiv);
  const songPath = useSelector((state) => state.player.songPath);
  const img = useSelector((state) => state.player.img);
  const title = useSelector((state) => state.player.title) || "Unknown Track";
  const artist = useSelector((state) => state.player.artist) || "Unknown Artist";

  const audioRef = useRef();

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const closeAudioPlayerDiv = (e) => {
    e.preventDefault();
    audioRef.current.pause();
    setIsSongPlaying(false);
    dispatch(playerActions.closeDiv());
    dispatch(playerActions.changeImage(""));
    dispatch(playerActions.changeSong(""));
  };

  const togglePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
    if (isSongPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };

  const seekBackward = () => {
    if (audioRef.current) {
      const newTime = Math.max(currentTime - 10, 0);
      audioRef.current.currentTime = newTime;
    }
  };

  const seekForward = () => {
    if (audioRef.current) {
      const newTime = Math.min(currentTime + 10, duration);
      audioRef.current.currentTime = newTime;
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const newTime = (e.target.value / 100) * duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    const currentAudio = audioRef.current;
    if (currentAudio) {
      currentAudio.addEventListener("timeupdate", handleTimeUpdate);
      currentAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
      currentAudio.addEventListener("ended", () => setIsSongPlaying(false));
    }

    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener("timeupdate", handleTimeUpdate);
        currentAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        currentAudio.removeEventListener("ended", () => setIsSongPlaying(false));
      }
    };
  }, []);

  useEffect(() => {
    if (songPath) {
      setIsSongPlaying(true);
      setTimeout(() => {
        if (audioRef.current) audioRef.current.play();
      }, 100);
    }
  }, [songPath]);

  return (
    <AnimatePresence>
      {playerDivState && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-xl z-50"
        >
          <div className="max-w-7xl mx-auto flex items-center gap-4 md:gap-8">
            {/* Track Info */}
            <div className="flex items-center gap-4 w-1/4 min-w-[200px]">
              <motion.img
                src={img}
                alt="Album cover"
                className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover shadow-md"
                whileHover={{ scale: 1.05 }}
              />
              <div className="hidden sm:block overflow-hidden">
                <p className="font-medium text-sm md:text-base truncate">{title}</p>
                <p className="text-gray-400 text-xs md:text-sm truncate">{artist}</p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex-1 flex flex-col items-center max-w-2xl">
              <div className="flex items-center gap-4 md:gap-6 text-xl">
                <motion.button
                  onClick={seekBackward}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Skip backward 10 seconds"
                >
                  <IoPlaySkipBack />
                </motion.button>

                <motion.button
                  onClick={togglePlayPause}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full flex items-center justify-center transition-colors"
                  aria-label={isSongPlaying ? "Pause" : "Play"}
                >
                  {isSongPlaying ? (
                    <FaPause className="text-lg" />
                  ) : (
                    <FaPlay className="text-lg ml-0.5" />
                  )}
                </motion.button>

                <motion.button
                  onClick={seekForward}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Skip forward 10 seconds"
                >
                  <IoPlaySkipForward />
                </motion.button>
              </div>

              <div className="w-full flex items-center gap-3 mt-3">
                <span className="text-xs text-gray-400 w-10 text-right">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={duration ? (currentTime / duration) * 100 : 0}
                  onChange={handleSeek}
                  className="flex-1 h-1.5 bg-gray-600 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white hover:cursor-pointer hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                />
                <span className="text-xs text-gray-400 w-10">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Volume and Close Controls */}
            <div className="hidden md:flex items-center gap-4 w-1/4 justify-end">
              <div className="flex items-center gap-2 w-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-gray-600 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white hover:cursor-pointer"
                />
              </div>

              <motion.button
                onClick={closeAudioPlayerDiv}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close player"
              >
                <ImCross className="text-sm" />
              </motion.button>
            </div>
          </div>

          <audio ref={audioRef} src={songPath} preload="metadata" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudioPlayer;