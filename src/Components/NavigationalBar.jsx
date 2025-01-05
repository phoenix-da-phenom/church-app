import React from "react";

export default function NavigationalBar() {
  return (
    <div className="flex flex-row justify-between items-center container pt-3" >
      <div className="flex-row   space-x-20">
        <div className="w-12 h-6 ">
          <img src="/image/logo.png" alt="" />
        </div>

        <h5 className="w-32 font-bold -mt-4 whitespace-nowrap text-sm md:text-lg"><span className="text-primary-main">Fullness</span> of <span className="text-accent-main font-extrabold md:text-2xl rounded-xl shadow-lg">Grace.Inc</span></h5>
      </div>

    
        <ul className="hidden lg:flex flex-row space-x-20">
          <li class="group hover:-translate-y-2 transition-transform duration-300">
            <a href="/" 
            className="text-lg font-semibold  hover:text-accent-main">Home</a>
          </li>
          <li class="group hover:-translate-y-2 transition-transform duration-300">
            <a href="/about"
             className="text-lg font-semibold  hover:text-accent-main"
            >About</a>
          </li>
          <li class="group hover:-translate-y-2 transition-transform duration-300">
            <a href=""
              className="text-lg font-semibold  hover:text-accent-main"
            >Gallery</a>
          </li>
        </ul>
    
    </div>
  );
}
