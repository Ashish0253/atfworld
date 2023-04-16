import React from "react";
import { skills } from "../data";
// import Countup from "./Countup";
// import ProgressBar from "react-animated-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const Skills = () => {
  return (
    <>
      <div className="bg-secondary px-[16%] py-10">
        <div className="grid grid-cols-6 gap-x-10 ">
          <div className="text-primary col-span-3 mr-10 max-w-lg  py-5 font-bold text-[40px]">
            <div className="py-4 border-b-4 border-primary">OUR SKILLS</div>
          </div>
          <div className="col-span-3 text-white pt-12 text-base]">
            Over 150 customers have already received benefits of our skilled and
            well managed team. We are having qualified Architect, HVAC/R
            Designer, BIM Expert, Plant Designer and Software developer in our
            team. They are aware of different country standards and design rules
            to help.
          </div>
        </div>
        <div className=" flex justify-around my-10">
          {skills.map((item) => {
            return (
              <div key={item.title} className="grid justify-items-center ">
                <div className="text-primary font-bold font-number p-4 flex">
                  {/* <Countup number={item.number} /> % */}
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? item.number : 0;

                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          strokeWidth={15}
                          // backgroundPadding={1}
                          styles={buildStyles({
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "butt",

                            //colors
                            pathColor: `#dc7227`,
                            textColor: "#dc7227",
                            trailColor: "#d6d6d6",
                            backgroundColor: "#3e98c7",
                          })}
                        />
                      );
                    }}
                  </VisibilitySensor>
                </div>
                <div className="text-white font-semibold text-2xl">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
