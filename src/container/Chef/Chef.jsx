import React from "react";

// import './Chef.css';
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app-bg section-padding flex-center h-[full] flex-col gap-8 sm:flex-row">
    <div className="flex-center mb-8  aspect-square w-[100%] sm:mb-0">
      <img
        src={images.chef}
        alt="Chef img"
        className="w-[18rem] sm:w-[20rem]"
      />
    </div>

    <div className="w-[100%] ">
      <SubHeading title="Chef's Word" type="normal">
        What We Believe In
      </SubHeading>

      <div>
        <div className="flex items-start justify-start gap-2">
          <img src={images.quote} alt="quote" className="w-[1rem]" />
          <p className="p-opensans text-xs text-lightGrey ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
          <p className="p-opensans text-xs text-lightGrey ">
            Dicta illo beatae saepe veritatis iste quo quia aut eius rerum excepturi.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptatibus laudantium cupiditate quo ipsum fugiat.
          </p>

        <div className="my-4">
          <h2 className="font-['Cormorant_Upright'] text-lg text-golden lg:mb-0">
            Kevin Luo
          </h2>
          <p className="p-opensans text-[0.7rem] text-lightGrey font-semibold">
            Chef & Founder
          </p>
        </div>

        <div className="w-[100%] mt-8">
          <img src={images.sign} alt="Sign img" className="w-[10rem]" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
