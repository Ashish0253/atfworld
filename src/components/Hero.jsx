import React from "react";
import hero from "../assets/hero.jpg";
import { heroList } from "../data";
import { BsCheckLg } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className="">
        <img src={hero} alt="hero" />

        <div className="absolute bottom-52 right-32">
          <div>
            {heroList.map((item) => {
              return (
                <div
                  key={item.title}
                  className="text-white text-4xl flex font-bold p-4"
                >
                  <BsCheckLg strokeWidth={1} className="mx-4 my-1" />
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
