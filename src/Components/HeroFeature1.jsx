import React, { useEffect } from "react";
import BlueFloor from "../Image/blue_floor.jpg";
import { GrPrevious } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function HeroFeature1() {
    const handlePrev = ()=>{
        alert("No previous messaages available")
    }
     useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          easing: 'ease-in-out', // Easing function
          once: true, // Whether animation should happen only once
        });
      }, []);
    
  return (
    <div  className="h-[80vh] relative inline p-5">
        <div id="prevIcon" className=" absolute top-1/2 left-[100px] border rounded-full p-1 text-sm cursor-pointer hover:bg-accent-main hidden lg:block" onClick={handlePrev}>
        <GrPrevious />

        </div>
      <div data-aos="fade-left" className="container flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-5 lg:w-[50%]">
          <h1 className=" text-outline font-bold text-blue-500 text-nowrap text-[50px] lg:text-8xl" >Day 8</h1>
         <h1 className="text-accent-main text-sm font-bold">Time : 4:00 - 6:30PM</h1>
          <h1 id="topicOfTheDay" className="font-bold text-xl">How to get quick access to God's presence?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            cumque doloribus inventore earum asperiores quod ea exercitationem?
            Veniam maxime quaerat, et fuga veritatis iusto, aperiam consequatur
            doloribus repudiandae aspernatur iure. Perferendis perspiciatis
            delectus omnis dicta eum, fuga porro quae beatae iure! Quibusdam
            quisquam quo praesentium, nostrum ut dignissimos blanditiis fuga
            vitae est quam pariatur assumenda tempora maxime ratione beatae.
            Molestiae!
          </p>
        </div>
        <div className="lg:w-5/12 h-56 lg:mb-24">
          <img src={BlueFloor} alt="" className="w-100 h-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
