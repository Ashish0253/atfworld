import React, { useRef } from "react";
import Slider from "react-slick";
import RenderArrows from "../utils/RenderArrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { team } from "../data/index";

const Team = () => {
  const slider = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
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
      <div className="px-[15%] py-10">
        <div className="text-primary border-b-4 py-2 text-[40px] font-bold border-primary">
          OUR FANTASTIC TEAM
        </div>

        <div className="relative mt-10">
          <RenderArrows slider={slider} />

          <Slider ref={slider} {...settings} className="px-10 my-4">
            {team.map((item) => {
              return (
                <div key={item.name} className="grid justify-items-center ">
                  <img src={item.img} alt={item.title} />
                  <div className="flex justify-center text-xl font-bold">
                    {" "}
                    {item.name}
                  </div>
                  <div className="flex justify-center text-lg font-semibold">
                    {item.department}
                  </div>
                  <div className="flex justify-center ">{item.position}</div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Team;
