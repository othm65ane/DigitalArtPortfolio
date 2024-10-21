import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white ">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="/"><h1 className=" text-2xl font-bold">Moscov<span className="text-[#7E60BF]">Artist</span></h1></Link>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 text-neutral-500 font-light">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer hover:text-[#7E60BF] duration-300"
            >
              Home
            </Link>
          </nav>
        
        </div>
       
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20  text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer hover:text-[#7E60BF]"
            onClick={closeMenu}
          >
            Home
          </Link>
          {/* <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link> */}
          <Link
            to="classes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Gallery
          </Link>
         
         
          <Link
            to="event"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer "
            onClick={closeMenu}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;