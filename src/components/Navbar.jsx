import React from "react";
import { navLinks } from "../data";
import logo from "../assets/logo.svg";
import flag from "../assets/flag.svg";
import { FiUser } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="bg-transparent absolute flex justify-between py-5 px-[10%] w-full">
        {/* logo  */}
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* Nav links */}
        <div className="flex text-white text-lg gap-x-12 py-12">
          {navLinks.map((item) => {
            return (
              <div key={item.title} className="">
                {item.title}
              </div>
            );
          })}
        </div>
        {/* User  */}
        <div className="flex py-10">
          <button className="bg-primary px-6 my-1 pt-[6px] flex text-white font-semibold rounded-lg">
            Our Business{" "}
            <BsChevronDown strokeWidth={1} className="my-[6px] ml-4" />
          </button>
          <FiUser size={30} className="w-20 my-1 text-white" />
          <img src={flag} alt="america" className="w-16" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
