import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import Button from "../../ui/Button";

const FindUs = () => {
  return (
    <div
      id="contact"
      className="py-[5rem] px-[3rem] app-bg flex-center 
      h-full flex-col md:flex-row "
    >
      <div className="mb-[4rem] w-full flex justify-center items-start flex-col ">
        <SubHeading title="contact" type="normal">
          Find Us
        </SubHeading>
        <p className="text-xs text-lightGrey">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus
        </p>

        <div className="my-8 text-xs font-semibold text-lightGrey ">
          <h3 className="p-cormorant text-golden">Opening Hours</h3>
          <p>Mon-Fri: 10:00am - 02:00am</p>
          <p>Sat-Sun: 10:00am - 03:00am</p>
        </div>

        <Button type="small">Book Now</Button>
      </div>

      <div className="flex-center w-full">
        <img
          src={images.findus}
          alt="find us"
          className=" aspect-square sm:w-[80%]"
        />
      </div>
    </div>
  );
};
export default FindUs;
////