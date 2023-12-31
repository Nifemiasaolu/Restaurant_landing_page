import React from "react";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import WineItem from "./WineItem";
import CocktailItem from "./CocktailItem";
import Button from "../../ui/Button";

const SpecialMenu = () => {
  const today = `Today's Special`;

  return (
    <div
      id="menu"
      className="section-padding flex-center h-[full] flex-col bg-black"
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

      <div className="my-4 flex w-[100%] flex-col items-center justify-center gap-4 md:flex-row">
        <div className="w-[100%]">
          <h4 className="mb-4 flex-1 text-center font-['Cormorant_Upright'] text-xl  text-white">
            Wine & Beer
          </h4>
          <ul className="">
            {data.wines.map((wine, index) => (
              <WineItem key={wine.title} wine={wine} />
            ))}
          </ul>
        </div>

        <div className="flex-center mx-4 my-4 aspect-square sm:w-[50%]  md:w-[100%] ">
          <img
            src={images.menu}
            alt="menu img"
            // className=" w-[100%] h-[20%]"
          />
        </div>

        <div className=" mt-4 w-[100%]">
          <h4 className="mb-4 flex-1 text-center text-xl text-white  font-['Cormorant_Upright']">
            Cocktails
          </h4>
          <ul>
            {data.cocktails.map((cocktail, index) => (
              <CocktailItem key={cocktail.title} cocktail={cocktail} />
            ))}
          </ul>
        </div>
      </div>

      <Button type="small"> View More</Button>
    </div>
  );
};

//////
export default SpecialMenu;
