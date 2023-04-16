import React from "react";
import Idea from "../assets/idea.svg";
import Design from "../assets/design.svg";
import Build from "../assets/build.svg";
import building from "../assets/building.svg";
import timeline from "../assets/Timeline.svg";

const Welcome = () => {
  return (
    <div
      className="pl-[15%] grid grid-cols-5 gap-20 py-10 bg-[#f4f3ed]"
      id="About Us"
    >
      <div className="col-span-3 ">
        <div className="border-b-2 border-secondary">
          <div className="text-primary text-[60px]">
            <p className="-mb-4">WELCOME TO</p>
            <p className="font-bold">THE ATF WORLD</p>
          </div>

          <p className="ml-2 mt-5">
            Our team takes over everything, from an idea and concept development
            to realization. We believe in traditions and incorporate them within
            our innovations. All our projects incorporate a unique artistic
            image and functional solutions. Client is the soul of the project.
            Our main goal is to illustrate his/hers values and individuality
            through design.
          </p>
          <div className="text-primary flex justify-end py-10">
            <a href="#">Read more &gt;&gt;</a>
          </div>
        </div>
        <div className="py-10 ">
          <p className="text-2xl font-bold text-secondary">OUR PROCESS</p>

          <div className="flex  mt-10 mb-4 text-primary text-xl text-bold ">
            <div className="grid justify-items-center">
              <img src={Idea} alt="idea" className="w-[80px] m-3  " />
              Idea & Start
            </div>
            <img src={timeline} alt="timeline" width={173} />
            <div className="grid justify-items-center">
              <img src={Design} alt="design" className="w-[80px] m-3" />
              Design & Create
            </div>
            <img src={timeline} alt="timeline" width={173} />

            <div className="grid justify-items-center">
              <img src={Build} alt="build" className="w-[80px] m-3" />
              Build & Finish
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 ">
        <img src={building} alt="building" />
      </div>
    </div>
  );
};

export default Welcome;
