import React from "react";
import { MdVerified } from "react-icons/md";

const Services = () => {
  return (
    <div className=" bg-green-50">
      <div className=" lg:w-[80%] mx-auto py-10 lg:py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            What choose us
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <div className=" w-full  items-center mt-14  lg:flex justify-around flex-row-reverse ">
          <img
            className=" w-[80%] mx-auto lg:w-[40%]  lg:h-[40%] rounded"
            src="https://img.freepik.com/free-photo/desk-scene-with-laptop_23-2147626521.jpg?w=996&t=st=1695735525~exp=1695736125~hmac=d8510eeab281f2654b7ffd9387d8405a7c3e48cfbac0f54fb5e8d452f6928ca6"
            alt=""
          />

          {/* text container */}
          <div className=" w-[90%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <div className=" mb-3">
              <div className=" mb-2  ">
                <div className="  text-green-600 text-lg  font-semibold capitalize ">
                  What we do
                </div>
                <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
              </div>
              <p className=" ">
                Whether you're a seasoned investor or just starting, we give you
                the potential to make the best returns on a range of financial
                markets. We trade your money across diverse markets in foreign
                exchange (forex trading), cryptocurrency, and agricultural
                investments for the best possible returns. Our wide range of
                investment packages was developed to suit your needs and budget.
              </p>
            </div>
            <div>
              <div>
                <div className="flex gap-3 items-center">
                  <MdVerified className="text-yellow-500" />
                  {/* <h3 className=" text-green-600  font-semibold lg:text-xl capitalize">
                  Getting New <span className=" text-yellow-500"> money</span>{" "}
                  at <span className=" text-yellow-500"> ease</span>
                </h3> */}
                  <h3 className=" text-green-600  font-semibold lg:text-lg capitalize">
                    Proven Track Record
                  </h3>
                </div>
                <p className="  text-xs lg:text-base ">
                  Our history of success speaks for itself, with consistent
                  growth and satisfied investors.
                </p>
              </div>

              <div className=" my-3">
                <div className="flex gap-3 items-center">
                  <MdVerified className="text-yellow-500" />
                  <h3 className=" text-green-600  font-semibold  lg:text-lg capitalize">
                    Security First
                  </h3>
                </div>
                <p className="text-xs lg:text-base">
                  Your investments are protected with our secure measures and
                  risk management strategies.
                </p>
              </div>

              <div>
                <div className="flex gap-3 items-center">
                  <MdVerified className="text-yellow-500" />
                  <h3 className=" text-green-600  font-semibold lg:text-lg capitalize">
                    Expert Guidance
                  </h3>
                </div>
                <p className="   text-xs lg:text-base ">
                  Our experienced team is here to provide you with personalized
                  advice and market insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
