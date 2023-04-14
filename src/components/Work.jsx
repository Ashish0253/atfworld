import React, { useRef } from "react";
import { work } from "../data";

import Slider from "react-slick";
import RenderArrows from "../utils/RenderArrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = () => {
  const slider = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    initialSlide: 0,
    // nextArrow: <SampleArrow />,
    // prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-secondary px-[16%] py-10">
        <div className="grid grid-cols-6 gap-x-10 ">
          <div className="text-primary col-span-3 mr-10 max-w-lg  py-5 font-bold text-[40px]">
            <div className="py-4 border-b-4 border-primary">WHAT WE DO</div>
          </div>
          <div className="col-span-3 text-white pt-12 text-base]">
            ATF primarily provides worldwide engineering design services like
            Building Information Modeling (BIM), Computer Aided Design and
            Drafting (CAD/CADD); Reverse Engineering (RE) drawings consultation;
            Plant Engineering (PE) drawings consultation and Project Management
            (PM). We are also working to develop premium quality websites and
            hybrid mobile applications.
          </div>
        </div>
        <div className="relative my-10">
          <RenderArrows slider={slider} arrowColor={"white"} />

          <Slider ref={slider} {...settings} className="px-10 my-4">
            {work.map((item) => {
              return (
                <div key={item.title} className="grid justify-items-center ">
                  <img src={item.img} alt={item.title} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Work;
