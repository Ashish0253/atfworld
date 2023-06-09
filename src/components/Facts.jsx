import React, { useRef } from "react";
import { facts } from "../data";
import stadium from "../assets/stadium.svg";
import Countup from "./Countup";
// import useIsVisible from "../hooks/useIsVisible";

const Facts = () => {
  const ref = useRef(null);
  // documn;

  // document.addEventListener("DOMContentLoaded", function () {
  //   const isVisible = useIsVisible(ref);
  // });

  // console.log(ref);

  return (
    <>
      <div className="bg-secondary px-[16%] pt-10">
        <div className="grid grid-cols-6 gap-x-10 ">
          <div className="text-primary col-span-3 mr-10 max-w-lg   font-bold text-[40px] leading-10">
            <div className="border-b-4 py-5 border-primary">
              SOME INTERESTING FACTS
            </div>
          </div>
          <div className="col-span-3 text-white pt-10 pl-">
            ATF has already greatly impacted on 150+ customer’s projects all
            over the world and continuing. We have highly skilled man-powers and
            modern applications in our organization which always add value to
            our quality of work. We are always in touch with our customers to
            help.
          </div>
        </div>
        <div className=" flex justify-around my-10">
          {facts.map((item) => {
            return (
              <div key={item.title} className="grid justify-items-center ">
                <div className="text-primary font-bold text-[64px]">
                  {/* {item.number} */}
                  {true && <Countup number={item.number} />}
                </div>
                <div className="text-white font-base text-2xl">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
        <div className="-mx-[10%]">
          <img src={stadium} alt="stadium" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Facts;
