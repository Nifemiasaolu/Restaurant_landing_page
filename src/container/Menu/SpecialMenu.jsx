import React from "react";

import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import WineItem from "./WineItem";

const SpecialMenu = () => {
  const today = `Today's Special`;

  return (
    <div
      id="menu"
      className="section-padding flex-center h-screen flex-col bg-black"
    >
      {/* <div className="flex-center flex-col">
        <p className="text-xs capitalize text-lightGrey">
          Menu that fits you paatte
        </p>
        <img src={images.spoon} alt="Spoon" className="spoon-img mb-3 mt-1" />
        <h3 className="p-cormorant text-golden">{today}</h3>
      </div> */}

      <SubHeading title="Menu that fits you palatte" type="flex">
        {today}
      </SubHeading>

      <div>
        <div>
          <h4 className="text-white">Wine & Beer</h4>
          <ul>
            {data.wines.map((wine, index) => (
              <WineItem key={wine.item} wine={wine} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

//////
export default SpecialMenu;


