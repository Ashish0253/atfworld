import React from "react";
import frame from "../assets/Testimonial Frame.svg";
import { testimonials } from "../data";

import Slider from "react-slick";
import RenderArrows from "../utils/RenderArrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const slider = React.useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
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
    <div className="bg-primary py-10 px-[15%] bg-frame bg-no-repeat bg-center h-[700px]">
      <div className="relative">{/* <img src={frame} alt="frame" /> */}</div>
      <div className="relative ">
        <Slider
          ref={slider}
          {...settings}
          className="px-10 my-4 top-60 left-32"
        >
          {testimonials.map((item) => {
            return (
              <div key={item.name} className="flex justify-items-center ">
                <div className=" flex text-white text-lg font-semibold">
                  <p className="max-w-md">{item.content}</p>

                  <div className="pt-10 ml-10 mt-14 grid justify-items-enter">
                    <p className="text-2xl text-white font-bold">{item.name}</p>
                    <p className="text-white text-base text-center">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
