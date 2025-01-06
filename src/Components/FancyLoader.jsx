import React, { useState, useEffect } from 'react';
import { useStateContext } from "../Context/ContextProvider";

const FancyLoader = () => {
  const { loadVideo, setLoadVideo } = useStateContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadVideo(false);
      alert("No video is available."); // Show the alert box after the spinner completes
    }, 5000); // Simulate a 5-second load

    return () => clearTimeout(timer);
  }, [loadVideo]);

  return (
    <div>
      {loadVideo ? (
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
    </div>
  );
};

export default FancyLoader;
