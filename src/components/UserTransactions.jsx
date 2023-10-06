import React from "react";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";

const UserTransactions = () => {
  return (
    <div className=" p-5 bg-white shadow-lg rounded mb-10 lg:mb-0">
      <div className=" mb-6">
        <p className=" font-medium text-lg  lg:text-xl ">
          Transactions History
        </p>
      </div>

      <div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className=" w-10 h-10 lg:w-12 lg:h-12 bg-green-100 text-green-600 flex justify-center items-center">
              <BsArrowBarUp size={25} />
            </div>
            <div>
              <p className=" text-sm lg:text-base">Atuzie rex</p>
              <p className=" text-gray-700 text-xs lg:text-sm">25-10-2023</p>
            </div>
          </div>

          {/* <p className="text-sm lg:text-base text-green-600 font-medium bg-green-50 p-2">
            Credit
          </p> */}

          <p className=" text-green-600 font-medium text-sm lg:text-base">
            {" "}
            <span className=" m">+</span> &#8358;16,000
          </p>
        </div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className=" w-10 h-10 lg:w-12 lg:h-12 bg-red-100 text-red-600 flex justify-center items-center">
              <BsArrowBarDown size={25} />
            </div>
            <div>
              <p className=" text-sm lg:text-base">Atuzie rex</p>
              <p className=" text-gray-700 text-xs lg:text-sm">25-10-2023</p>
            </div>
          </div>

          {/* <p className="text-sm lg:text-base text-red-600 font-medium bg-red-50 p-2">
            Withdraw
          </p> */}

          <p className="  text-red-600 font-medium text-sm lg:text-base">
            {" "}
            <span className="">-</span> &#8358;1,000
          </p>
        </div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-100 text-red-600 flex justify-center items-center">
              <BsArrowBarDown size={25} />
            </div>
            <div>
              <p className=" text-sm lg:text-base">Atuzie rex</p>
              <p className=" text-gray-700 text-xs lg:text-sm">25-10-2023</p>
            </div>
          </div>

          {/* <p className="text-sm lg:text-base text-red-600 font-medium bg-red-50 p-2">
            Withdraw
          </p> */}

          <p className="  text-red-600 font-medium text-sm lg:text-base">
            {" "}
            <span className=" text-red-600 font-medium">-</span> &#8358;3,700
          </p>
        </div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className=" w-10 h-10 lg:w-12 lg:h-12 bg-green-100 text-green-600 flex justify-center items-center">
              <BsArrowBarUp size={25} />
            </div>
            <div>
              <p className=" text-sm lg:text-base">Atuzie rex</p>
              <p className=" text-gray-700 text-xs lg:text-sm">25-10-2023</p>
            </div>
          </div>

          {/* <p className="text-sm lg:text-base text-green-600 font-medium bg-green-50 p-2">
            Credit
          </p> */}

          <p className="text-green-600 font-medium text-sm lg:text-base">
            {" "}
            <span className=" text-green-600 font-medium">+</span>&#8358;6,000
          </p>
        </div>
        <div className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2">
          <div className=" flex items-center gap-2">
            <div className=" w-10 h-10 lg:w-12 lg:h-12 bg-green-100 text-green-600 flex justify-center items-center">
              <BsArrowBarUp size={25} />
            </div>
            <div>
              <p className=" text-sm lg:text-base">Atuzie rex</p>
              <p className=" text-gray-700 text-xs lg:text-sm">25-10-2023</p>
            </div>
          </div>

          {/* <p className="text-sm lg:text-base text-green-600 font-medium bg-green-50 p-2">
            Credit
          </p> */}

          <p className="text-green-600 font-medium text-sm lg:text-base">
            {" "}
            <span className=" text-green-600 font-medium">+</span> &#8358;1,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTransactions;
