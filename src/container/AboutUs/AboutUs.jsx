import React from "react";

import { images } from "../../constants";
import Button from "../../ui/Button";

const AboutUs = () => (
  <div
    id="about"
    className=" section-padding app-bg flex-center relative h-screen"
  >
    <div>
      <img
        src={images.G}
        alt="G"
        className="flex-center z-0 w-[150px] sm:w-[251px]"
      />
    </div>

    <div className="flex-center absolute gap-4">
      <div className="flex flex-1 flex-col items-end justify-end text-right">
        <h3 className="p-cormorant text-golden">About Us</h3>
        <img src={images.spoon} alt="spoon img" className="spoon-img mb-4" />
        <p className="w-[10rem] text-xs text-lightGrey sm:w-[20rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et
        </p>
        <Button type="small">Read More</Button>
      </div>

      <div>
        <img
          src={images.knife}
          alt="knife"
          className="mx-2 h-[25rem] w-[3rem] sm:h-[25rem] sm:w-[3rem]"
        />
      </div>

      <div className="flex flex-1 flex-col items-start justify-end text-left">
        <h3 className="p-cormorant text-golden">Our History</h3>
        <img src={images.spoon} alt="spoon img" className="spoon-img mb-4" />
        <p className="w-[10rem] text-xs  text-lightGrey sm:w-[20rem]">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet
        </p>
        <Button type="small">Read More</Button>
      </div>
    </div>

    {/* <div className="flex-center absolute  gap-4">
      <div className="flex flex-1 items-end justify-end text-right flex-col">
        <PageContent title="About Us" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et{" "}
        </PageContent>
        <Button type="small">Read More</Button>
      </div>

      <div>
        <img
          src={images.knife}
          alt="knife"
          className="h-[25rem] mx-2 w-[3rem] sm:h-[30rem] sm:w-[4rem]"
        />
      </div>

      <div className="flex-1 flex items-start justify-end text-left flex-col">
        <PageContent title="Our History" >
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet
        </PageContent>
        <Button type="small">Read More</Button>
      </div>
    </div> */}
  </div>
);

export default AboutUs;
