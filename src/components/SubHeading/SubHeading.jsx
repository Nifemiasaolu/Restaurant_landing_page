import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title, children }) => {

  return (
    <div className="mb-4">
      <p className="p-cormorant">{title}</p>
      <img src={ images.spoon} alt="spoon" className="spoon-img" />
      <p className="text-white text-xs md:text-sm">{children}</p>
    </div>
  );
};

export default SubHeading;
