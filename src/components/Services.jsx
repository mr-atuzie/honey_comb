import React from "react";
import { MdVerified } from "react-icons/md";

const Services = () => {
  return (
    <div className=" bg-green-50">
      <div className=" lg:w-[80%] mx-auto py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            What we do
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
          <div className=" w-[80%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <div>
              <div className="flex gap-3 items-center">
                <MdVerified className="text-yellow-500" />
                <h3 className=" text-green-600  font-semibold  lg:text-xl capitalize">
                  Bringing financial{" "}
                  <span className=" text-yellow-500"> Freedom</span>
                </h3>
              </div>
              <p className="text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                commodi a fugiat. Eaque amet temporibus sit, quis provident
                possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              </p>
            </div>

            <div className=" my-6">
              <div className="flex gap-3 items-center">
                <MdVerified className="text-yellow-500" />
                <h3 className=" text-green-600  font-semibold text-xl capitalize">
                  Buy
                  <span className=" text-yellow-500"> invest</span> and grow
                </h3>
              </div>
              <p className="   text-sm lg:text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                commodi a fugiat. Eaque amet temporibus sit, quis provident
                possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              </p>
            </div>

            <div>
              <div className="flex gap-3 items-center">
                <MdVerified className="text-yellow-500" />
                <h3 className=" text-green-600  font-semibold text-xl capitalize">
                  Getting New <span className=" text-yellow-500"> money</span>{" "}
                  at <span className=" text-yellow-500"> ease</span>
                </h3>
              </div>
              <p className="  text-sm lg:text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                commodi a fugiat. Eaque amet temporibus sit, quis provident
                possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              </p>
            </div>

            <div className=" my-6">
              <div className="flex gap-3 items-center">
                <MdVerified className="text-yellow-500" />
                <h3 className=" text-green-600  font-semibold text-xl capitalize">
                  <span className=" text-yellow-500">Advance</span> your chance
                  with minimum risk
                </h3>
              </div>
              <p className="   text-sm lg:text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                commodi a fugiat. Eaque amet temporibus sit, quis provident
                possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
