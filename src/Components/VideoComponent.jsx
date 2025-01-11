import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
export default function VideoComponent() {
  return (
    <div id="videoComponentWrapper" className="video-component">
      <div
        id="videoContainer"
        className="bg-black w-100 md:w-[100%] h-[70vh]"
      ></div>

      <div id="videoInfo" className="py-4 ">
        <h1 className="font-bold text-lg text-accent-main">
          Christmas celebration 2014 -12 -25
        </h1>
        <div>
          <div className="bg-primary-main gap-4 mb-4 p-1 rounded-2xl w-100 text-accent-main flex justify-between items-center float-right shadow-lg border border-gray-200">
          <button className="flex gap-2 items-center hover:bg-foreground-main p-2 rounded-lg">
          <FaEye /> 
              100
            </button>
                        <button className="flex gap-2 items-center hover:bg-foreground-main p-2">
              <FaRegThumbsUp />
              1k
            </button>

            <button className="hover:bg-foreground-main p-2 border-l-gray-100 border-l-2 border-r-2 pl-2 pr-2">
              <FaRegThumbsDown />
            </button>


            <div id ="share">
          
          <button  className="flex gap-2 items-center hover:bg-foreground-main p-2 rounded-lg">

          <FaShare />
          Share
          </button>
        

          </div>
          </div>

         
        </div>
      </div>

      <div id="videoDescription" className="w-[100%]">
        <p className="text-justify pb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          quibusdam corporis obcaecati quod quisquam magnam corrupti illum dicta
          similique nemo perspiciatis, deleniti accusamus rem voluptatibus
          voluptatem reiciendis eos. Magni, quos! Voluptas assumenda
          repellendus, vel doloribus nostrum, iure pariatur aspernatur dicta
          laboriosam fugit beatae commodi rerum qui! Exercitationem eligendi
          voluptatem qui, nulla iusto alias tempora cumque amet dolores?
          Voluptates, repudiandae reprehenderit?
        </p>
      </div>
    </div>
  );
}

