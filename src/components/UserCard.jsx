import React from "react";
import { BsEyeSlash } from "react-icons/bs";

const UserCard = () => {
  return (
    <div className=" bg-white shadow-lg  px-4 py-6 lg:p-8 rounded h-fit mb-10">
      <div className=" mb-4 flex justify-between items-center">
        <div>
          <p className=" text-xs  font-medium lg:text-sm text-green-600  ">
            Current Balance
          </p>
          <h2 className=" text-xl lg:text-4xl font-bold  text-yellow-500">
            {" "}
            &#8358; 7,233,000
          </h2>
        </div>

        <div className="bg-green-600 text-white  p-2 h-fit rounded-full">
          <BsEyeSlash size={20} />
        </div>
      </div>

      <div className=" mt-6 lg:mt-8 flex gap-4 ">
        <button className=" text-white bg-green-600  border-2 border-yellow-500 py-2 lg:py-3 text-center font-medium rounded-md text-sm px-6 lg:px-8">
          Send
        </button>
        <button className="text-white bg-green-600  border-2 border-yellow-500  py-2 lg:py-3 text-center font-medium rounded-md text-sm px-6 lg:px-8">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default UserCard;
