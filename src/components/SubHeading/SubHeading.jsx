import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title, children, type }) => {
  const base = `p-cormorant text-xs md:text-sm flex flex-col `;

  const style = {
    normal: base + `mb-6`,
    flex: base + `flex-center text-lightGrey text-center`,
    subscribe: base + `flex-center text-lightGrey text-center 
    leading-7 sm:leading-3 mb-3 `
  };

  return (
    <div className={style[type]}>
      <p>{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon-img mb-4 mt-1" />
      <h1 className=" text-[20px] text-golden">{children}</h1>
    </div>
  );
};

export default SubHeading;
////
