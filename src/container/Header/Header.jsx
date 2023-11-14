import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import Button from "../../ui/Button";

const Header = () => {
  return (
    <div
      id="home"
      className="section-padding inline-flex flex-col
     items-center justify-center gap-[4rem] bg-black sm:flex-row
      sm:gap-[6rem] lg:gap-[8rem]"
    >
      <div className="flex flex-col items-start justify-center ">
        <SubHeading title="Chase the new flavour" />
        <h1
          className="font-['Cormont_Upright'] text-[45px] 
           tracking-wider text-golden  "
        >
          The Key to Fine Dining
        </h1>
        <p className="p-opensans my-[2rem]">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>

        <Button>Explore Menu</Button>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={images.welcome}
          alt="Header img"
          className="aspect-square  w-[70%] shrink-0 sm:w-[80%]"
        />
      </div>
    </div>
  );
};

export default Header;
