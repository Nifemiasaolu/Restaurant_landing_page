import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
// import {MdOutlineRestaurantMenu}
import {images} from "../../constants";
import NavbarItem from "./NavbarItem";
import { menus } from "../../constants/data";
import AnchorTag from "../../ui/AnchorTag";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  function handleClick() {
    setToggleMenu((toggle) => !toggle);
  }

  function closeModal(){
    setToggleMenu(false);
  }

  return (
    <nav
      className="flex w-full items-center 
      justify-between bg-black px-8 py-4"
    >
      <div className="flex items-center justify-start">
        <img src={images.gericht} alt="app logo" className="w-[100px] sm-[200px]" />
      </div>

      <ul className="flex-center hidden flex-1 sm:flex">
        {menus.map((item) => (
          <NavbarItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="p-opensans hidden items-center justify-end sm:flex">
        <AnchorTag href="#login">Login / Register</AnchorTag>

        <div className="h-[30px] w-[1px] bg-lightGrey" />

        <AnchorTag href="/">Book Table</AnchorTag>
      </div>

      {/* Menu Toggle */}
      <div className="flex sm:hidden">
        <GiHamburgerMenu
          className="text-white cursor-pointer"
          onClick={handleClick}
        />

        {toggleMenu && (
          <div
            className="flex-center slide-bottom fixed 
          left-0 top-0 z-[5] h-screen w-full flex-col 
          bg-black transition duration-300 ease-in-out"
          >
            <MdOutlineRestaurantMenu
              className="absolute right-5 top-5 cursor-pointer 
              text-[27px] text-golden "
              onClick={handleClick}
            />

            <ul className="">
              {menus.map((item) => (
                <NavbarItem item={item} key={item.id} onClick={closeModal}/>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
///
