import React from "react";
import { BsEyeSlash } from "react-icons/bs";

const UserCard = () => {
  return (
    <div className=" bg-white shadow-lg  px-4 py-6 lg:p-8 rounded h-fit mb-10">
      <div className=" mb-4 flex justify-between items-center">
        <div>
          <p className="  text-xs  uppercase">current Balance </p>
          <h2 className=" text-xl font-medium lg:text-4xl ">
            {" "}
            &#8358; 7,233,000
          </h2>
        </div>

        <div className="bg-green-50 text-green-600  p-1 h-fit rounded-full">
          <BsEyeSlash size={15} />
        </div>
      </div>

      <div className=" mt-8 flex gap-2 ">
        <button className=" text-white bg-green-600   py-2 lg:py-3 text-center font-medium rounded-lg text-xs lg:text-sm px-4 lg:px-8">
          Invest
        </button>
        <button className="text-white bg-green-600   py-2 lg:py-3 text-center font-medium rounded-lg  text-xs  lg:text-sm px-4 lg:px-8">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default UserCard;
