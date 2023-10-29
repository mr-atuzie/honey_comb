import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/features/authSlice";

const Hero = () => {
  const slides = [
    {
      text: "Empowering lives through rewarding",
      sub: "investments",
      img: "https://img.freepik.com/premium-vector/money-tree-concept_118813-7216.jpg?size=626&ext=jpg&uid=R105802964&ga=GA1.1.795360759.1692018039&semt=ais",
    },
    {
      text: "Unleash Potentials through and",
      sub: "geting double",
      img: "https://img.freepik.com/free-vector/investing-concept-illustration_114360-6492.jpg?size=626&ext=jpg&uid=R105802964&ga=GA1.1.795360759.1692018039&semt=ais",
    },
    {
      text: "Rewarding Investments",
      sub: "You Can Trust",
      img: "https://img.freepik.com/free-vector/finance-app-concept-illustration_114360-8295.jpg?size=626&ext=jpg&uid=R105802964&ga=GA1.1.795360759.1692018039&semt=ais",
    },
  ];

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className=" min-h-[65vh] lg:h-[75vh] -mt-2   bg-[#08432d] w-full flex justify-center items-center ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" w-[90%] mx-auto flex gap-5 lg:gap-0 flex-col lg:justify-between lg:items-center lg:flex-row">
                <div className="lg:w-[50%]">
                  <h1 className=" capitalize text-white text-2xl lg:text-7xl font-extrabold my-2 lg:my-4 ">
                    {slide.text}{" "}
                    <span className=" text-yellow-500">{slide.sub}</span>
                  </h1>

                  {!isLoggedIn && (
                    <Link to={"/login"}>
                      <button className=" rounded bg-green-600 text-white px-4 text-xs lg:text-base lg:px-6 py-2 capitalize hover:bg-green-700 hover:text-white  ">
                        Get Started
                      </button>
                    </Link>
                  )}

                  {isLoggedIn && (
                    <Link to={"/user/dashboard"}>
                      <button className=" rounded bg-green-600 text-white px-4 text-xs lg:text-base lg:px-6 py-2 capitalize hover:bg-green-700 hover:text-white  ">
                        Dashboard
                      </button>
                    </Link>
                  )}
                </div>

                <img
                  className=" h-[250px] lg:h-full  lg:w-[35%]  object-cover "
                  src={slide.img}
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
