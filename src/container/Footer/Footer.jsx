import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import Button from "../../ui/Button";

const Footer = () => {
  return (
    <div
      className="flex-center flex-col bg-black 
   p-[6rem] md:flex-row"
    >
      <div>
        <SubHeading title="newsletter" type="normal">
          subscribe to our newsletter
        </SubHeading>
        <p className="text-xs text-lightGrey">And never miss latest Updates</p>
      </div>

      <div className="my-4 flex flex-col md:flex-row">
        <input
          type="text"
          id="newsletter"
          placeholder="Email Address"
          className="px-4 py-1 rounded-md bg-black border text-white border-lightGrey placeholder:text-xs placeholder:text-lightGrey"
        />
        <Button type="small">Subscribe</Button>
      </div>
    </div>
  );
};

export default Footer;
