import React from "react";
import { FaUsers } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import { TbPigMoney } from "react-icons/tb";

const UserStatCard = () => {
  return (
    <div className=" gap-4 lg:gap-9  grid grid-cols-2">
      <div className="  bg-white shadow-lg rounded  h-fit">
        <div className=" p-5 ">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaUsers size={30} />
          </div>

          <div className=" mt-8">
            <h2 className=" text-lg lg:text-xl font-semibold ">
              {" "}
              &#8358; 7,233,000
            </h2>
            <p className="text-xs lg:text-sm  text-gray-500 ">
              Revenue Generated
            </p>
          </div>
        </div>
      </div>
      <div className="  bg-white shadow-lg rounded  h-fit">
        <div className=" p-5 ">
          <div className=" w-fit p-4 bg-red-100 text-red-500 flex justify-center items-center rounded-md">
            <GiMoneyStack size={30} />
          </div>

          <div className=" mt-8">
            <h2 className=" text-lg lg:text-xl font-semibold ">
              &#8358; 276,000
            </h2>
            <p className="text-xs lg:text-sm  text-gray-500 ">Annual Profit</p>
          </div>
        </div>
      </div>
      <div className="  bg-white shadow-lg rounded  h-fit">
        <div className=" p-5 ">
          <div className=" w-fit p-4 bg-purple-100 text-purple-500 flex justify-center items-center rounded-md">
            <TbPigMoney size={30} />
          </div>

          <div className=" mt-8">
            <h2 className=" text-lg lg:text-xl font-semibold ">
              {" "}
              &#8358; 23,000
            </h2>
            <p className="text-xs lg:text-sm  text-gray-500 ">Monthly Profit</p>
          </div>
        </div>
      </div>
      <div className="  bg-white shadow-lg rounded  h-fit">
        <div className=" p-5 ">
          <div className=" w-fit p-4 bg-orange-100 text-orange-500 flex justify-center items-center rounded-md">
            <ImStatsBars size={30} />
          </div>

          <div className=" mt-8">
            <h2 className=" text-lg lg:text-xl font-semibold ">70%</h2>
            <p className="text-xs lg:text-sm  text-gray-500 ">
              Revenue statistics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatCard;
