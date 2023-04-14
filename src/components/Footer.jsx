import React from "react";
import logo from "../assets/logo.svg";
import { footerLinks } from "../data";

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

      <div className="col-span-2"></div>
    </div>
  );
};

export default Footer;
