import { SubHeading } from "../../components";
import { BsInstagram, BsTwitter, BsFacebook, BsArrowUp } from "react-icons/bs";

function Footer() {
  const note = `"The best way to find yourself, is to lose yourself in the service of others"`;

  return (
    <div className="app-bg section-padding relative">
      <div className="flex w-full  flex-col gap-8 md:flex-row">
        <div className=" flex w-full flex-col items-center text-xs text-lightGrey">
          <p className="p-cormorant pb-4 text-sm text-golden lg:pb-2 ">
            Contact Us
          </p>

          <div className="flex-center leading-0 flex flex-col gap-1">
            <address className="p-opensans normal-case text-lightGrey ">
              9/10, 53rd Str, New York NY, USA
            </address>

            <span className="p-opensans text-[10px] normal-case text-lightGrey md:text-xs">
              +1 272-358-1352
            </span>
            <span className="p-opensans text-[10px] normal-case text-lightGrey md:text-xs">
              +1 763-540-3528
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col ">
          <SubHeading format="footer" title="gericht" type="footer">
            {note}
          </SubHeading>

          <div className="flex-center flex cursor-pointer gap-3 text-lightGrey">
            <BsInstagram className="hover:text-golden" />
            <BsTwitter className="hover:text-golden" />
            <BsFacebook className="hover:text-golden" />
          </div>
        </div>

        <div className="flex w-full flex-col items-center text-xs text-lightGrey">
          <p className="p-cormorant pb-4  text-sm text-golden">Working Hours</p>

          <div className="flex-center flex flex-col gap-2">
            <p className="font-['Open_Sans']  text-xs normal-case text-lightGrey">
              Monday - Friday: 08:00 am - 12:00 am
            </p>
            <p className="font-['Open_Sans'] text-xs normal-case text-lightGrey">
              Saturday - Sunday: 07:00 am - 11:00 am
            </p>
          </div>
        </div>
      </div>

      <div className="flex-center mt-20 flex text-xs text-lightGrey">
        <p>2021 Gericht, All Rights reserved. </p>
      </div>

      {/* <div
        className="flex-center fixed right-10 aspect-square w-[2rem] rounded-md
      border border-solid bg-black text-lightGrey hover:text-golden"
      >
        <a href="home">
          <BsArrowUp className="aspect-square w-[full]" />
        </a>
      </div> */}
    </div>
  );
}

export default Footer;
