import React from "react";
import searchIcon from "../Image/search.png";
import BurgerIcon from "../Image/menu.png";
import CloseIcon from "../Image/close.png";
export default function StreamNavBar() {
     const [currentClass, setCurrentClass] = React.useState("hidden");
    const ShowMenu = () => {
        console.log("clicked");
        setCurrentClass(" ");
      };
      const HideMenu = () => {
        setCurrentClass("hidden");
      };
    
  return (
    <div>
      <nav className="container mt-7 flex justify-between items-center">
        {/* Logo Section */}
        <div id="navIcon">
          <img src="./Image/logo.png" alt="Logo" className="w-16 h-16" />
        </div>

        {/* Search Bar Section */}
        <div className="relative w-[50%]">
          <input
            type="text"
            placeholder="Search"
            className="flex flex-col items-center font-bold text-accent-main w-full h-10 rounded-full p-3 pr-12" // Add `pr-12` for padding-right
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute right-4 top-1/3 transform -translate-y-1/2 w-6 h-6"
          />
        </div>

        {/* Navigation Links Section */}
        <div id="navLink" className="font-extrabold ">
          <ul className="hidden lg:flex space-x-10 ">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Gallery</a>
              <ul class="absolute left-0 md:left-4 -mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
            <li>
              <a
                href="#videos"
                class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600"
              >
               <a href="/stream">Videos</a>
              </a>
            </li>
            <li>
              <a
                href="#photos"
                class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600"
              >
                Photos
              </a>
            </li>
          </ul>

            </li>
          </ul>
        </div>

        <div
          id="mobileNav"
          className={`${currentClass}  w-[100%] h-[100%] bg-black text-white fixed top-0 left-0 z-50 place-items-center pt-32`}
        >
          <div id="closeIcon">
            <img
              src={CloseIcon}
              alt=""
              className="w-10 h-10 absolute right-10 top-10 cursor-pointer"
              onClick={HideMenu}
            />
          </div>

          <ul className="flex flex-col gap-4 space-y-4 text-center">
            <li className="group hover:-translate-y-2 transition-transform duration-300">
              <a
                href="/"
                className="text-lg font-semibold  hover:text-accent-main"
              >
                Home
              </a>
            </li>
            <li className="group hover:-translate-y-2 transition-transform duration-300">
              <a
                href="/about"
                className="text-lg font-semibold  hover:text-accent-main"
              >
                About
              </a>
            </li>
            <li className="group hover:-translate-y-2 transition-transform duration-300">
              <a className="text-lg font-semibold  hover:text-accent-main">
                Gallery
              </a>
              <ul class="absolute left-0 md:left-4 -mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
                <li>
                  <a
                    href="/stream"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#photos"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                  >
                    Photos
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          id="burgerHnd"
          className="w-6 flex cursor-pointer lg:hidden mr-10 mt-3"
          onClick={ShowMenu}
        >
          <img src={BurgerIcon} className="w-6 h-6" alt="" />
          Menu
        </div>
      </nav>
    </div>
  );
}
