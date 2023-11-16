import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import PageContent from "../../ui/PageContent";
import Button from "../../ui/Button";

const AboutUs = () => (
  <div className=" section-padding app-bg flex-center relative h-screen flex-shrink">
    <div>
      <img
        src={images.G}
        alt="G"
        className="flex-center z-0 w-[150px] sm:w-[251px]"
      />
    </div>

    <div className="flex-center absolute  w-[40rem] gap-4">
      <div className="flex w-[25rem] flex-col items-end justify-end">
        <PageContent title="About Us" styleType="end">
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
          className="h-[20rem] w-[3rem] sm:h-[25rem] sm:w-[4rem]"
        />
      </div>

      <div className="w-[25rem]">
        <PageContent title="Our History">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet
        </PageContent>
        <Button type="small">Read More</Button>
      </div>
    </div>
  </div>
);

export default AboutUs;
