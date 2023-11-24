import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import Button from "../../ui/Button";

const Footer = () => {
  return (
    <div className="flex-center flex-col bg-black section-padding ">
      <div className="flex-center flex-col ">
        <SubHeading title="newsletter" type="subscribe">
          subscribe to our newsletter
        </SubHeading>
        <p className="text-xs text-lightGrey">And never miss latest Updates</p>
      </div>

      <div className="my-4 flex flex-col  md:flex-row md:gap-4">
        <div>
          <input
            type="text"
            id="newsletter"
            placeholder="Email Address"
            className="rounded-md border border-lightGrey bg-black
             px-4 py-1 text-lightGrey placeholder:text-xs placeholder:text-lightGrey"
          />
        </div>
        <Button type="footer">Subscribe</Button>
      </div>
    </div>
  );
};

export default Footer;
