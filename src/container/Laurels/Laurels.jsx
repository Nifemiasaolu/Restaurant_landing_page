import React from "react";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import AwardItem from "./AwardItem";

const Laurels = () => {
  return (
    <div id="awards" className="app-bg app-wrapper flex flex-col section-padding ">
      <div className="app-wrapper-info">
        <SubHeading title="Awards & recognition" type="normal">
          Our Laurels
        </SubHeading>

        <ul className="mt-[1rem] flex flex-wrap items-center justify-start">
          {data.awards.map((award) => (
            <AwardItem award={award} key={award.title} />
          ))}
        </ul>
      </div>
      <div className="app-wrapper-img w-full">
        <img
          src={images.laurels}
          alt="laurels"
          className="aspect-square w-1/2"
        />
      </div>
    </div>
  );
};

export default Laurels;
