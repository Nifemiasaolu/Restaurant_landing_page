import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title, children, type, format }) => {
  const base = `p-cormorant text-xs md:text-sm flex flex-col `;

  const style = {
    normal: base + `mb-6`,
    flex: base + `flex-center text-lightGrey text-center`,
    subscribe:
      base +
      `flex-center text-lightGrey text-center 
    leading-7 sm:leading-3 mb-3 `,
    footer: base + `text-lightGrey flex-center text-center`,
  };

  if (format === "footer")
    return (
      <div className={style[type]}>
        <div>
          <h1 className=" mb-4 text-[30px] uppercase text-golden">{title}</h1>
        </div>
        <p className="p-opensans mb-2 text-xs normal-case leading-5 text-lightGrey">
          {children}
        </p>
        <img src={images.spoon} alt="spoon" className="spoon-img mb-4 mt-1" />
      </div>
    );

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
