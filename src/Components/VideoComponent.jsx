import React from "react";

export default function VideoComponent() {
  return (
    <div id="videoComponentWrapper" className="video-component">
      <div
        id="videoContainer"
        className="bg-black w-100 h-[70vh]"
        
      ></div>

      <div id="videoInfo" className="py-4">
        <h1 className="font-bold text-lg text-accent-main">
          Christmas celebration 2014 -12 -25
        </h1>
      </div>

      <div id="videoDescription" className="flex flex-col gap-4">
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
