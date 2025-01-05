import React from "react";

export default function WatchLive() {
  return (
    <div className="container">
      <h2 className="container text-2xl mb-2">Stay in touch online now!</h2>
      <div className=" flex  items-center justify-between "  >
        <div id="buttons" className=" flex mb-4 space-x-1 md:space-x-4 "> 
           <button className="hover:bg-primary-main p-4  bg-accent-main rounded-lg flex items-center gap-2 w-48">
            <img src='./Image/play-button.png' alt='image' className="w-1/2 h-6 md:w-10" />
            Watch Videos
            </button>
          <button className="p-4 pl-6 bg-transparent hover:bg-accent-main rounded-lg flex items-center gap-1">
          <img src='./Image/play-button.png' alt='image' className="w-1/2 h-6  md:w-10" />
            Watch Live {"(Streaming)"}
            </button>
        </div>
        <div id="image"className="w-1/2 ">

          <img src='./Image/archive/PHOTO-2022-11-20-12-38-28.jpg' alt='image' className="rounded-lg hidden md:block" />
        </div>
      </div>
    </div>
  );
}
