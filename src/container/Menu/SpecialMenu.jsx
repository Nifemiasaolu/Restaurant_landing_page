import React from "react";

import "./SpecialMenu.css";
import { images } from "../../constants";

const SpecialMenu = () => {
  const today = `Today's Special`;

  return (
    <div className="section-padding flex-center h-screen bg-black">
      <div className="flex-center flex-col">
        <p className="text-xs capitalize text-lightGrey">
          Menu that fits you paatte
        </p>
        <img src={images.spoon} alt="Spoon" className="spoon-img mb-3 mt-1" />
        <h3 className="p-cormorant text-golden">{today}</h3>
      </div>

      <div>
        <h4>Wine & Beer</h4>
      </div>
    </div>
  );
};

export default SpecialMenu;
