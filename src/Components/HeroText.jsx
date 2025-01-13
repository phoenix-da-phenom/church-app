import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function HeroText() {
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in ms
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once
      });
    }, []);
  
  return (
    <div className="my-20 md:text-center container">
      <div className="text-accent-main flex flex-row gap-3 md:justify-center items-center" >
        <div className="w-8" >
          <hr className="border-accent-main border-1 md:w-full md:float-start" />
        </div>
        <div>
          <h6 data-aos="fade-down"  className="uppercase font-bold font-chronicle text-sm">
            14 days fasting and prayer.
          </h6>
        </div>
      </div>
      <h1 className="text-[22px] md:text-[34px] md:text-center font-bold ">
        Prayers for open Heavens
      </h1>
      <h1 data-aos="fade-up" className="text-lg font-bold text-accent-main mt-4">Day 1 - Day 14</h1>



      
    </div>
  );
}
