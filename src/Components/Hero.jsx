import React from "react";
import HeroText from "./HeroText";
import NavigationalBar from "./NavigationalBar";

export default function Hero() {
  return (
    <div className="mt-5">
     <div className="h-[200px] w-full bg-[url('./Image/archive/PHOTO-2022-11-20-12-38-28.jpg')] opacity-70 -z-10 p-8">
    </div>
    <NavigationalBar />
    <HeroText />
    </div>
   
    
  );
}
