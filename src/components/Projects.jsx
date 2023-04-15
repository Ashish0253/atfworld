import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import project from "../assets/project.svg";
import { BiCheckDouble } from "react-icons/bi";

const Projects = () => {
  const parallax = React.useRef(null);

  console.log(parallax);

  return (
    <div className="px-[15%] py-10">
      <div className="grid grid-cols-6">
        <div className="text-primary col-span-3 mr-10 max-w-lg border-b-4 border-primary py-5 font-bold text-[40px]">
          PROJECTS WE DID SO FAR
        </div>
        <div className="col-span-3 pt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
      </div>

      <div className="flex justify-end pt-10 text-primary ">
        <button className="border-4 border-primary px-4 py-2 font-extrabold">
          VIEW ALL PROJECTS
        </button>
      </div>

      <div className="border-t-2 border-gray-400 mt-10 pt-">
        <div className="text-primary font-semibold my-20 ">
          <div className="flex gap-7">
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
        </div>

        <div className="text-primary font-semibold grid justify-end my-24">
          <div className="flex gap-7">
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
        </div>
        <div className="text-primary font-semibold my-24">
          <div className="flex gap-7">
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
        </div>
        {/* <Parallax pages={4} ref={parallax}></Parallax> */}
      </div>
    </div>
  );
};

export default Projects;
