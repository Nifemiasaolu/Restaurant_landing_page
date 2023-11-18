import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title, children, type }) => {
  const base = `p-cormorant text-xs md:text-sm flex flex-col `;

  const style = {
    normal: base + ``,
    flex: base + `flex-center text-lightGrey`,
  };

  return (
    <div className={style[type]}>
      <p >{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon-img mb-4 mt-1" />
      <p className="text-lg text-golden">{children}</p>
    </div>
  );
};

export default SubHeading;
////