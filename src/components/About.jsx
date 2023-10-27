import React from "react";
// import { aboutUs } from "../cms";

const About = ({ about }) => {
  return (
    <div className="">
      <div className=" lg:w-[80%] mx-auto py-10 lg:py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            Who we are
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <div className=" w-full  items-center mt-14  lg:flex justify-around ">
          <img
            className=" w-[90%] mx-auto lg:w-[40%]  lg:h-[40%] rounded"
            src="https://img.freepik.com/free-vector/investing-concept-illustration_114360-6492.jpg?size=626&ext=jpg&uid=R105802964&ga=GA1.1.795360759.1692018039&semt=ais"
            alt=""
          />

          {/* text container */}
          <div className=" w-[90%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <p className="   mt-4 text-sm leading-7 lg:text-base my-4">
              {about}
            </p>

            {/* <button className=" text-green-700 font-medium text-sm">
              Read More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
