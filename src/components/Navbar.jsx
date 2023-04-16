import React from "react";
import { navLinks } from "../data";
import logo from "../assets/logo.svg";
import flag from "../assets/flag.gif";
import { FiUser } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
// import { CgChevronDoubleRightR } from "react-icons/cg";
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useScrollPosition from "../hooks/useScrollPostion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  const scrollPos = useScrollPosition(setIsSticky);
  // console.log(scrollPos);
  // console.log(isSticky);

  return (
    <>
      <div
        className={` top-0 z-10 flex justify-between py-1 px-[10%] w-full ${
          isSticky ? "fixed bg-black bg-opacity-50" : "absolute bg-transparent"
        } `}
        id=""
      >
        {/* logo  */}
        <div className={`${isSticky ? "w-[90px] h-[70px] pt-1" : "pt-4"}`}>
          <img src={logo} alt="logo" />
        </div>
        {/* Nav links */}
        <div
          className={`flex text-white text-lg gap-x-12 ${
            isSticky ? "py-6" : "py-12"
          }`}
        >
          {navLinks.map((item) => {
            return (
              <a
                href={`#${item.title}`}
                key={item.title}
                className="hover:scale-110 ease-out duration-300"
              >
                {item.title}
              </a>
            );
          })}
        </div>
        {/* User  */}
        <div className={`flex ${isSticky ? "py-4" : "py-12"}`}>
          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`bg-primary px-6 my-1 pt-[6px] flex text-white font-semibold rounded-lg hover:scale-105 ease-out duration-300 ${
                isOpen ? "scale-110" : ""
              } `}
            >
              Our Business{" "}
              <BsChevronDown strokeWidth={1} className="my-[6px] ml-4" />
            </button>
            {isOpen && (
              <div className="bg-[#f4f3ed] text-black border-2 border-transparent rounded-lg mt-1 dropdown_menu w-full">
                <button className="bg- px-6 my-1 justify-between border-b-[1px] border-primary py-1 flex w-full ">
                  AFF
                  <BsChevronDoubleRight
                    strokeWidth={1}
                    className="my-[6px] ml-4"
                  />
                  {/* <AiOutlineDoubleRight
                    strokeWidth={1}
                    className="my-[6px] ml-4"
                  /> */}
                </button>
                <button className="bg-inherit px-6 pt-[] w-full my-1 py-1 flex  font- ">
                  {" "}
                  Beyond{" "}
                  {/* <BsChevronDown strokeWidth={1} className="my-[6px] ml-4" /> */}
                </button>
              </div>
            )}
          </div>
          <a href="#">
            <FiUser
              size={30}
              className="w-20 my-1 text-white hover:scale-110 hover:text-primary"
            />
          </a>
          <img src={flag} alt="america" className="w-16 h-10" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
