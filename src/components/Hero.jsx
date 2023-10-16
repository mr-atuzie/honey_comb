import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      text: "Empowering lives through rewarding",
      sub: " investment journeys",
      img: "https://img.freepik.com/free-photo/stacks-coins-arranged-bar-graph_35913-2518.jpg?w=1060&t=st=1695731193~exp=1695731793~hmac=a67e2d5eda9397d9f84d1f856633848301d4eaa29472115b3db103e72eea2d08",
    },
    {
      text: "Unleash Potentials through and",
      sub: "geting double",
      img: "https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0822001_780x440_mobile.jpeg",
    },
    {
      text: "Unleash Potentials through and",
      sub: "geting double",
      img: "https://www.econlib.org/wp-content/uploads/2018/02/distribution-of-income.jpg",
    },
  ];

  return (
    <div className=" h-[95vh]   bg-[#08432d] w-full flex justify-center items-center ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" w-[80%] mx-auto flex gap-9 lg:gap-0 flex-col lg:justify-between lg:items-center lg:flex-row">
                <div className="lg:w-[55%]">
                  <h1 className=" text-white text-3xl lg:text-7xl font-extrabold my-4 ">
                    {slide.text}{" "}
                    <span className=" text-yellow-500">{slide.sub}</span>
                  </h1>

                  <Link to={"/register"}>
                    <button className="rounded bg-[#11a064] text-sm lg:text-base  text-white border-2 border-yellow-500 px-6 py-2.5  hover:bg-white hover:text-green-500 ">
                      Get started
                    </button>
                  </Link>
                </div>

                <img className=" lg:w-[35%] rounded" src={slide.img} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
