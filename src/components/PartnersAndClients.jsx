import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";

const PartnersAndClients = () => {
  return (
    <>
      <div className="px-[14%] py-14">
        {/* heading  */}
        <div className="border-b-2 border-primary text-primary text-[40px]">
          <p className="">OUR PARTNERS</p>
          <p className="font-bold">AND CLIENTS</p>
        </div>
        {/* paragraph */}
        <div className="justify-items-end p-8 pl-[25%]">
          Our team takes over everything, from an idea and concept development
          to realization. We believe in traditions and incorporate them within
          our innovations. All our projects incorporate a unique artistic image
          and functional solutions. Client is the soul of the project. Our main
          goal is to illustrate his/hers values and individuality through
          design.
        </div>
        {/* company logos */}
        <div className="flex justify-between pl-[25%]">
          <img src={logo1} alt="logo1" className="w-[22%]" />
          <img src={logo2} alt="logo2" className="w-[22%]" />
          <img src={logo3} alt="logo3" className="w-[22%]" />
          <img src={logo4} alt="logo4" className="w-[22%]" />
        </div>
      </div>
    </>
  );
};

export default PartnersAndClients;
