import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";



import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";



import p1 from '../Image/next_up1.jpg';
import p2 from '../Image/PHOTO-2022-11-20-12-37-22.jpg';
import p3 from '../Image/archive/PHOTO-2022-11-20-12-38-28.jpg';

export default function Events() {
  return (
    <div className="container">
      <h1 className="mb-4 text-center text-accent-main capitalize font-semibold text-[22px]">
        Upcoming Events
      </h1>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="p-5">
            <div className="space-y-5">
              <div className="bg-primary-main rounded-2xl p-2">
                <h1 className="text-center font-extrabold shadow-inner">
                  1st 8th 15th 22nd 29 January 2025
                </h1>
              </div>
              <h4 className="text-center font-extrabold text-gray-500">
                <span className="text-red-600">JANUARY</span> Must Obey
              </h4>
            </div>

            <div id="description" className="p-4 rounded-md shadow-md mt-4 mb-8">
              <img
                src={p1}
                alt="Christmas Eve Service"
                className="float-left w-full md:w-1/2 lg:w-1/6 h-auto mr-4 mb-4 rounded-md object-cover"
              />
              <p className="text-gray-400 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                deleniti architecto consectetur maiores dolore molestias...
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Add additional slides similarly */}
        <SwiperSlide>
          <div className="p-5">
            <div className="space-y-5">
              <div className="bg-primary-main rounded-2xl p-2">
                <h1 className="text-center font-extrabold shadow-inner">3 April 2025</h1>
              </div>
              <h4 className="text-center font-extrabold text-gray-500">
                <span className="text-red-600">Easter</span> Service
              </h4>
            </div>
            <div id="description" className="p-4 rounded-md shadow-md mt-4 mb-8">
              <img
                src={p2}
                alt="Easter"
                className="float-left w-48 sm:w-64 md:w-72 lg:w-44 h-auto mr-4 mb-4 rounded-md object-cover"
              />
              <p className="text-gray-400 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-5">
            <div className="space-y-5">
              <div className="bg-primary-main rounded-2xl p-2">
                <h1 className="text-center font-extrabold shadow-inner">3 April 2025</h1>
              </div>
              <h4 className="text-center font-extrabold text-gray-500">
                <span className="text-red-600">Easter</span> Service
              </h4>
            </div>
            <div id="description" className="p-4 rounded-md shadow-md mt-4 mb-8">
              <img
                src={p2}
                alt="Easter"
                className="float-left w-48 sm:w-64 md:w-72 lg:w-44 h-auto mr-4 mb-4 rounded-md object-cover"
              />
              <p className="text-gray-400 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
