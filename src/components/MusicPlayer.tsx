
import React, { useState, useRef } from "react";
import { Music, Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { playlist } from "../data/memories";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  
  // In a real app, you would have actual audio playing functionality
  // For this demo, we'll just toggle states
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };
  
  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  const currentSong = playlist[currentSongIndex];
  
  return (
    <div
      className={`fixed bottom-0 right-0 z-40 bg-white rounded-tl-lg shadow-lg transition-all duration-300 border-t border-l border-romance-pink/20 ${
        isMinimized ? "w-16 h-16" : "w-72 h-auto"
      }`}
    >
      {/* Minimized View */}
      {isMinimized ? (
        <button
          onClick={toggleMinimize}
          className="w-full h-full flex items-center justify-center text-romance-pink hover:bg-romance-pink/10 rounded-tl-lg transition-colors"
        >
          <Music size={24} />
        </button>
      ) : (
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-sm">Our Playlist</h4>
            <button onClick={toggleMinimize} className="text-gray-500 hover:text-gray-700">
              <Music size={18} />
            </button>
          </div>
          
          {/* Song Info */}
          <div className="mb-4 text-center">
            <p className="font-medium truncate">{currentSong.title}</p>
            <p className="text-sm text-gray-500 truncate">{currentSong.artist}</p>
          </div>
          
          {/* Progress bar (simplified) */}
          <div className="h-1 w-full bg-gray-200 rounded-full mb-4">
            <div
              className="h-1 bg-romance-pink rounded-full"
              style={{ width: isPlaying ? "45%" : "0%" }}
            ></div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevSong}
              className="p-1 text-gray-600 hover:text-romance-pink"
            >
              <SkipBack size={18} />
            </button>
            
            <button
              onClick={togglePlay}
              className="p-3 bg-romance-pink text-white rounded-full hover:bg-romance-pink/80"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            
            <button
              onClick={nextSong}
              className="p-1 text-gray-600 hover:text-romance-pink"
            >
              <SkipForward size={18} />
            </button>
            
            <button
              onClick={toggleMute}
              className="p-1 text-gray-600 hover:text-romance-pink"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
