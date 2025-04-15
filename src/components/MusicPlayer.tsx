
import React, { useState, useRef, useEffect } from "react";
import { Music, Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { playlist } from "../data/playlist";
import { useIsMobile } from "../hooks/use-mobile";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Changed default to true for autoplay
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    
    // Set up autoplay when component mounts
    const initializeAudio = async () => {
      if (audioRef.current) {
        const currentSong = playlist[currentSongIndex];
        if (currentSong.audioFile) {
          audioRef.current.src = `/music/${currentSong.audioFile}`;
          try {
            // Try to autoplay
            await audioRef.current.play();
          } catch (error) {
            // Autoplay was prevented by browser policy
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          }
        }
      }
    };
    
    initializeAudio();
    
    // Clean up function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);
  
  useEffect(() => {
    if (!audioRef.current) return;
    
    // Load the current song
    const currentSong = playlist[currentSongIndex];
    if (currentSong.audioFile) {
      audioRef.current.src = `/music/${currentSong.audioFile}`;
      
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    }
    
    // Set up event listeners for the audio element
    const audio = audioRef.current;
    
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    
    const handleEnded = () => {
      nextSong();
    };
    
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);
    
    // Update mute status
    audio.muted = isMuted;
    
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex, isPlaying, isMuted]);
  
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    if (isPlaying && audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };
  
  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    if (isPlaying && audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };
  
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  const currentSong = playlist[currentSongIndex];
  
  return (
    <div
      className={`fixed ${isMobile ? 'bottom-16 left-0 right-0 z-50' : 'bottom-0 right-0 z-40'} bg-white rounded-tl-lg shadow-lg transition-all duration-300 border-t border-l border-romance-pink/20 ${
        isMinimized ? (isMobile ? "h-12 w-full rounded-none" : "w-16 h-16") : (isMobile ? "w-full h-auto rounded-none" : "w-72 h-auto")
      }`}
    >
      {/* Minimized View */}
      {isMinimized ? (
        <button
          onClick={toggleMinimize}
          className={`w-full h-full flex items-center justify-center text-romance-pink hover:bg-romance-pink/10 ${isMobile ? '' : 'rounded-tl-lg'}`}
        >
          <Music size={isMobile ? 20 : 24} />
          {isMobile && <span className="ml-2 text-xs">{currentSong.title}</span>}
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
          
          {/* Progress bar */}
          <div className="h-1 w-full bg-gray-200 rounded-full mb-4">
            <div
              className="h-1 bg-romance-pink rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
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
