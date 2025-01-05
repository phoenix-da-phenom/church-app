import React from "react";

export default function WatchLive() {
  return (
    <div className="container relative">
      <h2 className="container text-2xl mb-2">Stay in touch online now!</h2>
      <div className=" flex  items-center justify-between ">
        <div id="buttons" className=" flex mb-4 space-x-1 md:space-x-4 ">
          <button className="hover:bg-primary-main p-4  bg-accent-main rounded-lg flex items-center gap-2 w-48">
            <img
              src="./Image/play-button.png"
              alt="image"
              className="w-1/2 md:w-7"
            />
            Watch Videos
          </button>
          <button className="p-4 pl-6 bg-transparent hover:bg-accent-main rounded-lg flex items-center gap-1">
            <img
              src="./Image/play-button.png"
              alt="image"
              className="w--3 h-6  md:w-7"
            />
            Watch Live {"(Streaming)"}
          </button>
        </div>
        

        <div id="image" className="w-1/2 hidden md:block ">

        <div
          id="floatPlayIcon"
          className="absolute md:top-36 md:right-40 lg:right-72  md:w-16 md:h-16"
        >
          <img
            src="./Image/play-button.png"
            alt="image"
            className="w-12 h-12"
          />
        </div>




          <img
            src="./Image/archive/PHOTO-2022-11-20-12-38-28.jpg"
            alt="image"
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
