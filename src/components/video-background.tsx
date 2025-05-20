import { useEffect, useState, useRef } from "react";

interface VideoBackgroundProps {
  videos: string[];
  interval?: number; // Time in ms between video transitions
  blurAmount?: string; // CSS blur value (e.g., "4px")
  children: React.ReactNode; // Overlay content
}

export function VideoBackground({
  videos,
  interval = 8000, // Default to 8 seconds per video
  blurAmount = "2px",
  children,
}: VideoBackgroundProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  const currentVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  
  // Log when component mounts with video paths
  useEffect(() => {
    console.log("VideoBackground mounted with videos:", videos);
    
    // Clean up function
    return () => {
      console.log("VideoBackground unmounting");
    };
  }, []);
  
  // Set up the video rotation
  useEffect(() => {
    if (videoError || videos.length === 0) {
      console.log("Skipping video rotation due to error or empty videos array");
      return;
    }
    
    const rotateVideo = () => {
      // Start transition
      setIsTransitioning(true);
      console.log(`Transitioning from video ${currentVideoIndex} to ${nextVideoIndex}`);
      
      // After fade transition completes, update indices and reset
      const transitionTimeout = setTimeout(() => {
        setCurrentVideoIndex(nextVideoIndex);
        setNextVideoIndex((nextVideoIndex + 1) % videos.length);
        setIsTransitioning(false);
        
        // Ensure the next video is ready to play when it becomes current
        if (nextVideoRef.current) {
          nextVideoRef.current.currentTime = 0;
        }
      }, 1000); // Match this to the CSS transition duration
      
      return () => clearTimeout(transitionTimeout);
    };
    
    // Set interval for video rotation
    const intervalId = setInterval(rotateVideo, interval);
    console.log(`Set up video rotation interval: ${interval}ms`);
    
    // Clean up
    return () => {
      console.log("Clearing video rotation interval");
      clearInterval(intervalId);
    };
  }, [currentVideoIndex, nextVideoIndex, interval, videos.length, videoError]);
  
  // Auto-play videos as soon as they're loaded
  useEffect(() => {
    if (videos.length === 0) {
      console.error("No videos provided to VideoBackground");
      setVideoError(true);
      return;
    }
    
    console.log(`Attempting to play video at index ${currentVideoIndex}: ${videos[currentVideoIndex]}`);
    
    // Ensure current video starts playing immediately
    if (currentVideoRef.current) {
      const playPromise = currentVideoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log(`Successfully playing video at index ${currentVideoIndex}`);
          })
          .catch(error => {
            console.error(`Error playing video at index ${currentVideoIndex}:`, error);
            setVideoError(true);
          });
      }
    }
    
    // Preload the next video
    if (nextVideoRef.current) {
      console.log(`Preloading next video at index ${nextVideoIndex}`);
      nextVideoRef.current.load();
    }
  }, [currentVideoIndex, videos]);

  // If videos can't be played, show a fallback
  if (videoError) {
    console.log("Using fallback due to video error");
    return (
      <div className="relative w-full h-full bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Current video */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <video
          ref={currentVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videos[currentVideoIndex]}
          muted
          loop
          playsInline
          autoPlay
          crossOrigin="anonymous"
          style={{ filter: `blur(${blurAmount})` }}
          onError={(e) => {
            console.error(`Error with current video:`, e);
            setVideoError(true);
          }}
        />
      </div>
      
      {/* Next video (initially hidden) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={nextVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videos[nextVideoIndex]}
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          preload="auto"
          style={{ filter: `blur(${blurAmount})` }}
          onError={(e) => {
            console.error(`Error with next video:`, e);
            setVideoError(true);
          }}
        />
      </div>
      
      {/* Darkening overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
} 