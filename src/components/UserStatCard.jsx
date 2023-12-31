import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import { TbPigMoney } from "react-icons/tb";

const UserStatCard = ({ user, referrals, investments }) => {
  return (
    <div className=" gap-3 lg:gap-5  grid grid-cols-2 lg:grid-cols-2">
      <div className=" bg-white p-3 lg:px-5 py-4 lg:py-8 shadow-lg  flex flex-col lg:flex-row lg:items-center gap-3">
        <div className=" w-fit p-4 bg-red-100 text-red-500 flex justify-center items-center rounded-md">
          <GiMoneyStack size={30} />
        </div>

        <div className="">
          <h2 className="  lg:text-xl font-semibold ">
            {" "}
            &#8358; {new Intl.NumberFormat().format(user?.profit)}
          </h2>
          <p className="text-xs lg:text-sm  text-gray-500 ">Total Profit</p>
        </div>
      </div>

      <div className=" bg-white p-3 lg:px-5 py-4 lg:py-8 shadow-lg  flex flex-col lg:flex-row lg:items-center gap-3">
        <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
          <FaMoneyBillTrendUp size={30} />
        </div>

        <div className="  ">
          <h2 className=" lg:text-xl font-semibold ">{investments?.length}</h2>
          <p className=" text-xs lg:text-sm  text-gray-500 ">Investments</p>
        </div>
      </div>

      <div className=" bg-white p-3 lg:px-5 py-4 lg:py-8 shadow-lg  flex flex-col lg:flex-row lg:items-center gap-3">
        <div className=" w-fit p-4 bg-purple-100 text-purple-500 flex justify-center items-center rounded-md">
          <TbPigMoney size={30} />
        </div>

        <div className=" ">
          <h2 className=" lg:text-xl font-semibold ">
            {" "}
            &#8358; {new Intl.NumberFormat().format(user?.referralBonus)}
          </h2>
          <p className="text-xs lg:text-sm  text-gray-500 ">Referral Bonus</p>
        </div>
      </div>

      <div className=" bg-white p-3 lg:px-5 py-4 lg:py-8 shadow-lg  flex flex-col lg:flex-row lg:items-center gap-3">
        <div className=" w-fit p-4 bg-orange-100 text-orange-500 flex justify-center items-center rounded-md">
          <ImStatsBars size={30} />
        </div>

        <div className="">
          <h2 className="  lg:text-xl font-semibold ">{referrals}</h2>
          <p className="text-xs lg:text-sm  text-gray-500 ">Referrals</p>
        </div>
      </div>
    </div>
  );
};

export default UserStatCard;
