import React from "react";
import Logo from '../Image/logo.png'
import BurgerIcon from '../Image/menu.png'
import CloseIcon from '../Image/close.png'

export default function NavigationalBar() {
  const [currentClass, setCurrentClass] = React.useState("hidden");
  const ShowMenu=()=>{
    console.log("clicked")
   setCurrentClass(" ")
  }
  const HideMenu=()=>{
    setCurrentClass("hidden")

  }


  return (
    <div className="flex flex-row justify-between items-center container pt-3 pr-16" >
      <div className="flex-row   space-x-20">
        <div className="w-12 h-6 ">
          <img src={Logo} alt="" />
        </div>

        <h5 className="w-32 font-bold -mt-4 whitespace-nowrap text-sm md:text-lg"><span className="text-primary-main">Fullness</span> of <span className="text-accent-main font-extrabold md:text-2xl rounded-xl shadow-lg">Grace.Inc</span></h5>
      </div>

    
        <ul className="hidden lg:flex flex-row space-x-20">
          <li className="group hover:-translate-y-2 transition-transform duration-300">
            <a href="/" 
            className="text-lg font-semibold  hover:text-accent-main">Home</a>
          </li>
          <li className="group hover:-translate-y-2 transition-transform duration-300">
            <a href="/about"
             className="text-lg font-semibold  hover:text-accent-main"
            >About</a>
          </li>
          <li className="group hover:-translate-y-2 transition-transform duration-300">
            <a href=""
              className="text-lg font-semibold  hover:text-accent-main"
            >Gallery</a>
          </li>
        </ul>

        <div id="mobileNav" className={`${currentClass}  w-[100%] h-[100%] bg-black text-white fixed top-0 left-0 z-50 place-items-center pt-32`}>

        <div id="closeIcon">
          <img src={CloseIcon} alt="" className="w-10 h-10 absolute right-10 top-10 cursor-pointer" onClick={HideMenu}/>
        </div>

        <ul className="flex flex-col gap-4 space-y-4 text-center">
          <li className="group hover:-translate-y-2 transition-transform duration-300">
            <a href="/" 
            className="text-lg font-semibold  hover:text-accent-main">Home</a>
          </li>
          <li className="group hover:-translate-y-2 transition-transform duration-300">
            <a href="/about"
             className="text-lg font-semibold  hover:text-accent-main"
            >About</a>
          </li>
          <li className="group hover:-translate-y-2 transition-transform duration-300">
            <a href=""
              className="text-lg font-semibold  hover:text-accent-main"
            >Gallery</a>
          </li>
        </ul>
        </div>

        <div id="burgerHnd" className="w-6 flex cursor-pointer lg:hidden" onClick={ShowMenu}>
              <img src={BurgerIcon}/>
              Menu

        </div>
    
    </div>
  );
}
