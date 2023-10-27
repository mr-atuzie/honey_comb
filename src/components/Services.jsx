import React from "react";
import { MdVerified } from "react-icons/md";

const Services = ({ value }) => {
  return (
    <div className=" bg-green-50">
      <div className=" lg:w-[80%] mx-auto py-10 lg:py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            What we do
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <div className=" w-full  items-center mt-14  lg:flex justify-around flex-row-reverse ">
          <img
            className=" w-[90%] mx-auto lg:w-[40%]  lg:h-[40%] rounded"
            src="https://img.freepik.com/free-vector/organic-flat-design-csr-concept-illustrated_23-2148916672.jpg?size=626&ext=jpg&uid=R105802964&ga=GA1.1.795360759.1692018039&semt=ais"
            alt=""
          />

          {/* text container */}
          <div className=" w-[90%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <div className=" mb-3">
              <p className=" text-sm lg:text-base leading-7 ">{value}</p>
            </div>
            <div>
              <div className=" mb-2  ">
                <div className="  text-green-600 lg:text-lg  font-semibold capitalize ">
                  Why choose us
                </div>
              </div>
              <div>
                <div className="flex gap-1 items-center">
                  <MdVerified className="text-yellow-500" />

                  <h3 className=" text-green-600  font-semibold text-sm lg:text-lg capitalize">
                    Proven Track Record
                  </h3>
                </div>
                <p className="  text-sm lg:text-base ">
                  Our history of success speaks for itself, with consistent
                  growth and satisfied investors.
                </p>
              </div>

              <div className=" my-3">
                <div className="flex gap-1 items-center">
                  <MdVerified className="text-yellow-500" />
                  <h3 className=" text-green-600  font-semibold text-sm  lg:text-lg capitalize">
                    Security First
                  </h3>
                </div>
                <p className="  text-sm lg:text-base ">
                  Your investments are protected with our secure measures and
                  risk management strategies.
                </p>
              </div>

              <div>
                <div className="flex gap-1 items-center">
                  <MdVerified className="text-yellow-500" />
                  <h3 className=" text-green-600  font-semibold text-sm lg:text-lg capitalize">
                    Expert Guidance
                  </h3>
                </div>
                <p className="  text-sm lg:text-base ">
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
