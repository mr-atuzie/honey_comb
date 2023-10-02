import React from "react";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";

const UserTransactions = () => {
  return (
    <div className=" p-5 bg-white shadow-lg rounded">
      <div className=" mb-6">
        <p className=" font-medium  text-xl ">Transactions</p>
      </div>

      <div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className=" w-12 h-12 bg-green-100 text-green-600 flex justify-center items-center">
              <BsArrowBarUp size={25} />
            </div>
            <div>
              <p>Atuzie rex</p>
              <p className=" text-gray-700 text-sm">25-10-2023</p>
            </div>
          </div>

          <p className=" text-green-600 font-medium bg-green-50 p-2">Credit</p>

          <p className=" font-medium ">
            {" "}
            <span className=" text-green-600 font-medium">+</span> &#8358;60,000
          </p>
        </div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className=" w-12 h-12 bg-red-100 text-red-600 flex justify-center items-center">
              <BsArrowBarDown size={25} />
            </div>
            <div>
              <p>Atuzie rex</p>
              <p className=" text-gray-700 text-sm">25-10-2023</p>
            </div>
          </div>

          <p className=" text-red-600 font-medium bg-red-50 p-2">Withdraw</p>

          <p className=" font-medium ">
            {" "}
            <span className=" text-red-600 font-medium">-</span> &#8358;3,000
          </p>
        </div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className=" w-12 h-12 bg-red-100 text-red-600 flex justify-center items-center">
              <BsArrowBarDown size={25} />
            </div>
            <div>
              <p>Atuzie rex</p>
              <p className=" text-gray-700 text-sm">25-10-2023</p>
            </div>
          </div>

          <p className=" text-red-600 font-medium bg-red-50 p-2">Withdraw</p>

          <p className=" font-medium ">
            {" "}
            <span className=" text-red-600 font-medium">-</span> &#8358;3,000
          </p>
        </div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className=" w-12 h-12 bg-green-100 text-green-600 flex justify-center items-center">
              <BsArrowBarUp size={25} />
            </div>
            <div>
              <p>Atuzie rex</p>
              <p className=" text-gray-700 text-sm">25-10-2023</p>
            </div>
          </div>

          <p className=" text-green-600 font-medium bg-green-50 p-2">Credit</p>

          <p className=" font-medium ">
            {" "}
            <span className=" text-green-600 font-medium">+</span> &#8358;60,000
          </p>
        </div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className=" w-12 h-12 bg-green-100 text-green-600 flex justify-center items-center">
              <BsArrowBarUp size={25} />
            </div>
            <div>
              <p>Atuzie rex</p>
              <p className=" text-gray-700 text-sm">25-10-2023</p>
            </div>
          </div>

          <p className=" text-green-600 font-medium bg-green-50 p-2">Credit</p>

          <p className=" font-medium ">
            {" "}
            <span className=" text-green-600 font-medium">+</span> &#8358;60,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTransactions;
