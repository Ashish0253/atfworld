import React from "react";
import logo from "../assets/logo.svg";
import { footerLinks } from "../data";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-secondary px-[14%] grid grid-cols-4 py-14">
      {/* logo */}
      <div>
        <img src={logo} arc="logo" />
      </div>

      {/* footer Links  */}
      <div className="text-white font-semibold">
        {footerLinks.map((item) => (
          <div key={item.title} className="py-2">
            {item.title}
          </div>
        ))}
      </div>

      <div className="col-span-2 pl-4 text-white">
        <div className="text-3xl p-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="text-xl p-2 text-[#9FB4DF]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>

        <div className="border-2 flex border-primary p-2">
          <input
            className="bg-secondary w-[90%] outline-none"
            placeholder="EMAIL"
          />
          <div className="border-2 border-primary p-2">
            <BsArrowRight size={30} />
          </div>
        </div>
        <div className="my-2 text-[#9FB4DF] gap-2 flex">
          <input type="checkbox" size={30} />
          <label>I agree to receive marketing emails from ATF.</label>
        </div>

        <p className="text-[#9FB4DF]">
          You can unsubscribe from these communications at any time. For more
          information on how to unsubscribe, our privacy practices, and how we
          are committed to protecting and respecting your privacy, please review
          our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Footer;
