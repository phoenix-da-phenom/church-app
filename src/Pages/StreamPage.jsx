import React, { useEffect } from "react";
import StreamNavBar from "../Components/StreamNavBar";
import VideoComponent from "../Components/VideoComponent";
import VideoPlaylist from "../Components/VideoPlaylist";

export default function StreamPage() {
  // useEffect(() => {
  //   alert("No video at the moment. Try again later");
  // }, []);

  return (
    <div>
      <StreamNavBar />
      <div
        id="parent"
        className="container flex  lg:flex-row lg:gap-10  flex-col gap-8 pt-5 items-start   " // Ensure alignment
       
      >
        <div id="leftSide" className="w-100 rounded-lg md:w-100 lg:w-1/2"> {/* Fix width */}
          <VideoComponent />
        </div>

        <div
          id="rightSide"
          className="p-8 w-[100%] md:w-[100%] lg:w-[40%] rounded-lg border shadow-2xl bg-transparent"
        >
          <VideoPlaylist />
        </div>
      </div>
    </div>
  );
}
