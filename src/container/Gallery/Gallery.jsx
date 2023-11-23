import React, { useRef } from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import Button from "../../ui/Button";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  console.log(scrollRef);

  function scroll(direction) {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 301;
    } else {
      current.scrollLeft += 301;
    }
  }

  return (
    <div
      className="flex-center flex-col overflow-hidden bg-black
     py-8 md:flex-row md:pl-[4rem] md:pr-8"
    >
      <div
        className="flex min-w-[400px] flex-1 flex-col items-start 
        justify-center px-[4rem] py-[2rem] md:py-[8rem]"
      >
        <SubHeading title="instagram" type="normal">
          Photo Gallery
        </SubHeading>
        <p className="p-opensans text-lightGrey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae
          odit dolorum fuga dolores. Esse quo cupiditate iusto nulla fugit?
        </p>
        <Button type="small">View More</Button>
      </div>

      <div className="flex-center relative flex w-[70%] flex-1 flex-row">
        <div className="flex w-max flex-row overflow-hidden" ref={scrollRef}>
          {galleryImages.map((img, index) => (
            <div
              className="flex-center relative mr-2 h-[400px] min-w-[301px]"
              key={`gallery-image-${index + 1}`}
            >
              <img
                src={img}
                alt="gallery"
                className="h-[80%] w-[80%] object-cover
               opacity-100 transition duration-300 ease-linear hover:opacity-30"
              />
              <BsInstagram
                className="absolute cursor-pointer text-white
               opacity-[0.5] transition duration-500 ease-linear hover:opacity-[1]"
              />
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-[5%] flex w-full items-center 
        justify-center"
        >
          <BsArrowLeftShort
            className="cursor-pointer rounded-md bg-black text-[2rem] 
            text-golden hover:text-white"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="cursor-pointer rounded-md bg-black text-[2rem] 
            text-golden hover:text-white"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
///
