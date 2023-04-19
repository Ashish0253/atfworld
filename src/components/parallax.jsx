import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import project from "../assets/project.svg";
import { BiCheckDouble } from "react-icons/bi";

const ParallaxTrial = () => {
  return (
    <div className="p">
      <Parallax pages={2.2} style={{}} className="h-[1000px]  relative z-10">
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="block gap-7 my-2 fixed">
            <div className="flex justify-around text-primary">
              <p className="flex p">
                <BiCheckDouble size={20} className="text-black" /> PLANT
                ENGINEERING
              </p>
              <p className="flex">
                <BiCheckDouble size={20} className="text-black" /> PLANT
                OFFSHORE
              </p>
              <p className="flex">
                <BiCheckDouble size={20} className="text-black" /> PLANT ONSHORE
              </p>
            </div>
            <img
              src={project}
              alt="project"
              width={650}
              height={600}
              className=" parallaxEffect "
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <div className=" z-[50] top-60 left-[34rem] fixed">
            <div className="text-[40px] text-primary leading-10 text-bold">
              BK <span className="font-number">16</span> WELLHEAD <br />{" "}
              SATELLITE PLATFORM
            </div>
            <div className="grid justify-end pt-10">
              <a className="text-secondary font-bold ">VIEW PROJECT &gt;&gt;</a>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.3}>
          <div className="block gap-7 my-2 fixed right-[25rem]">
            <div className="flex justify-around text-primary">
              <p className="flex p">
                <BiCheckDouble size={20} className="text-black" /> PLANT
                ENGINEERING
              </p>
              <p className="flex">
                <BiCheckDouble size={20} className="text-black" /> PLANT
                OFFSHORE
              </p>
              <p className="flex">
                <BiCheckDouble size={20} className="text-black" /> PLANT ONSHORE
              </p>
            </div>
            <img
              src={project}
              alt="project"
              width={650}
              height={600}
              className=" parallaxEffect "
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={1} className="grid justify-end">
          <div className=" z-[50] top-60 left-[10rem] fixed">
            <div className="text-[40px] text-primary leading-10 text-bold">
              BIM SAMPLE PROJECT
            </div>
            <div className="grid justify-start pt-10">
              <a className="text-secondary font-bold ">VIEW PROJECT &gt;&gt;</a>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.3}>
          <div className="block gap-7 my-2 justify-end t fixed">
            <div className="flex justify-around text-primary">
              <p className="flex p">
                <BiCheckDouble size={20} className="text-black" /> PLANT
                ENGINEERING
              </p>
              <p className="flex">
                <BiCheckDouble size={20} className="text-black" /> PLANT
                OFFSHORE
              </p>
              <p className="flex">
                <BiCheckDouble size={20} className="text-black" /> PLANT ONSHORE
              </p>
            </div>
            <img
              src={project}
              alt="project"
              width={650}
              height={600}
              className=" parallaxEffect "
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={1}>
          <div className=" z-[50] top-60 left-[30rem] fixed">
            <div className="text-[40px] text-primary leading-10 text-bold">
              RASTER TO CAD <br /> DIGITIZATION CAD <br /> CONVERSION
            </div>
            <div className="grid justify-end pt-10">
              <a className="text-secondary font-bold ">VIEW PROJECT &gt;&gt;</a>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxTrial;
