import React from "react";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import Button from "../../ui/Button";

const Gallery = () => {
  return (
    <div className="flex-center">
      <div>
        <SubHeading title="instagram" type="normal">
          Photo Gallery{" "}
        </SubHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae
          odit dolorum fuga dolores. Esse quo cupiditate iusto nulla fugit?
        </p>
        <Button type="small">View More</Button>
      </div>
    </div>
  );
};
export default Gallery;
///