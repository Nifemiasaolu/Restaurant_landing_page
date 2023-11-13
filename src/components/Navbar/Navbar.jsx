import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import NavbarItem from "./NavbarItem";
import { menus } from "../../constants/data";
import AnchorTag from "../../ui/AnchorTag";

const Navbar = () => (
  <nav
    className="flex w-full items-center 
    justify-between bg-black px-8 py-4"
  >
    <div className="flex items-center justify-start">
      <img src={images.gericht} alt="app logo" className="w-[150px]" />
    </div>

    <ul className="flex-center flex-1">
      {menus.map((item) => (
        <NavbarItem item={item} key={item.id} />
      ))}
    </ul>

    <div className="p-opensans flex items-center justify-end ">
      <AnchorTag href="#login">Login / Register</AnchorTag>

      <div className="w-[1px] h-[30px] bg-lightGrey"/>

      <AnchorTag href="/">Book Table</AnchorTag>
    </div>
  </nav>
);

export default Navbar;

//////
