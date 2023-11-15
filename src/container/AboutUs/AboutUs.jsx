import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import PageContent from "../../ui/PageContent";
import Button from "../../ui/Button"


const AboutUs = () => (
  <div className="section-padding app-bg flex-center relative">
    <div>
      <img
        src={images.G}
        alt="G"
        className="flex-center w-[200px] sm:w-[391px] z-0"
      />
    </div>

    <div className="flex-center absolute inset-0 w-[50rem] gap-4">
      <div className="w-[25rem]">
        <PageContent title="About Us" button="Read More">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et{" "}
        </PageContent>
        <Button type="primary">Read More</Button>
      </div>

      <div>
        <img
          src={images.knife}
          alt="knife"
          className="h-[20rem] w-[5rem] sm:w-[5rem] sm:h-[25rem]"
        />
      </div>

      <div className="w-[25rem]">
        <PageContent title="Our History" button="Read More">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet
        </PageContent>
        <Button type="primary">Read More</Button>
      </div>
    </div>
  </div>
);

export default AboutUs;
