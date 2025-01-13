import React from "react";

export default function HeroText() {
  return (
    <div className="my-20 md:text-center container">
      <div className="text-accent-main flex flex-row gap-3 md:justify-center items-center" >
        <div className="w-8" >
          <hr className="border-accent-main border-1 md:w-full md:float-start" />
        </div>
        <div>
          <h6 className="uppercase font-bold font-chronicle text-sm">
            14 days fasting and prayer.
          </h6>
        </div>
      </div>
      <h1 className="text-[22px] md:text-[34px] md:text-center font-bold ">
        Prayers for open Heavens
      </h1>
      <h1 className="text-lg font-bold text-accent-main mt-4">Day 1 - Day 14</h1>



      
    </div>
  );
}
