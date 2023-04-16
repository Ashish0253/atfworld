import React from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import project from "../assets/project.svg";
import { BiCheckDouble } from "react-icons/bi";

const Projects = () => {
  const parallax = React.useRef(null);

  // console.log(parallax);

  return (
    <div className="px-[15%] py-10" id="Work">
      <div className="grid grid-cols-6 ">
        <div className="text-primary col-span-3 mr-10 max-w-lg border-b-4 border-primary py-5 font-bold text-[40px] leading-10">
          PROJECTS
          <br /> WE DID SO FAR
        </div>
        <div className="col-span-3 pt-10 text-base">
          Transforming visions into reality through innovative engineering and
          unparalleled expertise.
        </div>
      </div>

      <div className="flex justify-end pt-10 text-primary ">
        <button className="border-4 border-primary px-4 py-2 font-extrabold">
          VIEW ALL PROJECTS
        </button>
      </div>

      <div className="border-t-2 border-gray-400 mt-10 pt-">
        <div className="text-primary font-semibold my-20 relative">
          <div className="flex gap-7 my-2">
            <p className="flex p">
              <BiCheckDouble size={20} className="text-black" /> PLANT
              ENGINEERING
            </p>
            <p className="flex">
              <BiCheckDouble size={20} className="text-black" /> PLANT OFFSHORE
            </p>
            <p className="flex">
              <BiCheckDouble size={20} className="text-black" /> PLANT ONSHORE
            </p>
          </div>
          <img src={project} alt="project" width={600} />
          <div className="absolute z-10 top-40 left-[32rem]">
            <div className="text-[40px] leading-10 text-bold">
              BK <span className="font-number">16</span> WELLHEAD <br />{" "}
              SATELLITE PLATFORM
            </div>
            <div className="grid justify-end pt-10">
              <a className="text-secondary font-bold ">VIEW PROJECT &gt;&gt;</a>
            </div>
          </div>
        </div>

        <div className="text-primary font-semibold grid justify-end my-24 relative">
          <div className="flex gap-7 my-2">
            <p className="flex">
              <BiCheckDouble size={20} className="text-black" /> BIM
            </p>
            <p className="flex">
              <BiCheckDouble size={20} className="text-black" /> ARCHITECTURE
            </p>
            <p className="flex">
              <BiCheckDouble size={20} className="text-black" /> STRUCTURE
            </p>
            <p className="flex">
              <BiCheckDouble size={20} className="text-black" /> MEP
            </p>
          </div>

          <img src={project} alt="project" width={600} />
          <div className="absolute z-10 top-40 left-[11rem]">
            <div className="text-[40px] leading-10 text-bold">
              BIM SAMPLE PROJECT
            </div>
            <div className="grid justify-start pt-10">
              <a className="text-secondary font-bold ">VIEW PROJECT &gt;&gt;</a>
            </div>
          </div>
        </div>

        <div className="text-primary font-semibold my-24 relative">
          <div className="flex gap-7 my-2">
            <p className="flex">
              <BiCheckDouble size={20} className="text-black" /> PLANT
              ENGINEERING
            </p>
            <p className="flex">
              <BiCheckDouble size={20} className="text-black" /> PLANT OFFSHORE
            </p>
            <p className="flex">
              <BiCheckDouble size={20} className="text-black" /> PLANT ONSHORE
            </p>
          </div>

          <img src={project} alt="project" width={600} />
          <div className="absolute z-10 top-40 left-[34rem]">
            <div className="text-[40px] leading-[45px] text-bold">
              RASTER TO CAD <br /> DIGITIZATION CAD <br /> CONVERSION
            </div>
            <div className="grid justify-end pt-10">
              <a className="text-secondary font-bold ">VIEW PROJECT &gt;&gt;</a>
            </div>
          </div>
        </div>
        {/* <Parallax pages={4} ref={parallax}></Parallax> */}
      </div>
    </div>
  );
};

export default Projects;
