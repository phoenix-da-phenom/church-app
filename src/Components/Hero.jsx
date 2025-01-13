import React from "react";
import HeroText from "./HeroText";
import NavigationalBar from "./NavigationalBar";
import HeroFeature1 from "./HeroFeature1";

export default function Hero() {
  return (
    <div className="mt-5">
     <div className="h-[200px] w-full bg-[url('./Image/archive/PHOTO-2022-11-20-12-38-28.jpg')] -z-10 p-8">
    </div>
    <NavigationalBar />
    <HeroText />
    <HeroFeature1/>



    </div>
   
    
  );
}
