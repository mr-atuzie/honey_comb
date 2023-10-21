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
            className=" w-[80%] mx-auto lg:w-[40%]  lg:h-[40%] rounded"
            src="https://img.freepik.com/premium-photo/businessman-protection-money-table-with-tree_34152-1752.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=sph"
            alt=""
          />

          {/* text container */}
          <div className=" w-[80%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <p className="   mt-4 text-sm lg:text-base my-4">{about}</p>

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
