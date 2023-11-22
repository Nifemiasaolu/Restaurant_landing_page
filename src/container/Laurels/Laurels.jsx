import React from "react";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import AwardItem from "./AwardItem";

const Laurels = () => {
  return (
    <div
      id="awards"
      className="app-bg section-padding flex flex-col sm:flex-row "
    >
      <div className="app-wrapper-info">
        <SubHeading title="Awards & recognition" type="normal">
          Our Laurels
        </SubHeading>

        <ul className="mb-[3rem] mt-[1rem] w-[100%] flex flex-wrap items-start justify-start gap-8 sm:flex-col">
          {data.awards.map((award) => (
            <AwardItem award={award} key={award.title} />
          ))}
        </ul>
      </div>

      <div className="app-wrapper-img ml-[0]  w-full">
        <img
          src={images.laurels}
          alt="laurels"
          className="aspect-square"
        />
      </div>
    </div>
  );
};

export default Laurels;
