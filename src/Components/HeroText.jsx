import React from "react";

export default function HeroText() {
  return (
    <div className="my-20 md:text-center container">
      <div className="text-accent-main flex flex-row gap-3 md:justify-center items-center" >
        <div className="w-8" >
          <hr className="border-accent-main border-1 md:w-full md:float-start" />
        </div>
        <div>
          <h6 className="uppercase font-bold font-chronicle text-xs">
            Thou Says the Lord
          </h6>
        </div>
      </div>
      <h1 className="text-[22px] md:text-[34px] md:text-center font-bold ">
        Be prepared for the Mountains and beyond!
      </h1>
    </div>
  );
}
