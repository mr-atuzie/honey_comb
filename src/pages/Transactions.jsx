import React from "react";

const Transactions = () => {
  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Transactions History
      </h1>

      <div className="lg:w-[75%] bg-white lg:mx-auto p-5">
        <div className=" flex justify-between border-b-2 border-gray-100 py-2">
          <p className=" font-semibold">Name</p>
          <p className=" font-semibold">Date</p>
          <p className=" font-semibold">Amount</p>
          <p className=" font-semibold">Status</p>
        </div>
        <div className=" flex justify-between items-center border-b-2 border-gray-100 py-2">
          <p className="text-gray-800  text-sm lg:text-base  text-center font-medium">
            Atuzie Rex
          </p>
          <p className=" text-gray-500 text-sm text-center">Today, 08:25AM</p>
          <p className="  text-sm lg:text-base text-green-600 text-center">
            + &#8358;7,233,000
          </p>
          <p className=" w-[100px]  text-xs lg:text-sm font-semibold bg-green-50 text-green-600 p-2 text-center rounded-md">
            Sucessfull
          </p>
        </div>
        <div className=" flex justify-between items-center border-b-2 border-gray-100 py-2">
          <p className="text-gray-800  text-sm lg:text-base  text-center font-medium">
            Atuzie Rex
          </p>
          <p className=" text-gray-500 text-sm text-center">Tuesday, 12:25AM</p>
          <p className="  text-sm lg:text-base text-green-600 text-center">
            + &#8358;7,233,000
          </p>
          <p className=" w-[100px]  text-xs lg:text-sm font-semibold bg-green-50 text-green-600 p-2 text-center rounded-md">
            Sucessfull
          </p>
        </div>
        <div className=" flex justify-between items-center border-b-2 border-gray-100 py-2">
          <p className="text-gray-800  text-sm lg:text-base  text-center font-medium">
            Atuzie Rex
          </p>
          <p className=" text-gray-500 text-sm text-center">Today, 08:25AM</p>
          <p className="  text-sm lg:text-base text-red-600 text-center">
            - &#8358;7,233,000
          </p>
          <p className=" w-[100px] text-xs lg:text-sm font-semibold bg-red-50 text-red-600 p-2 text-center rounded-md">
            failed
          </p>
        </div>
        <div className=" flex justify-between items-center border-b-2 border-gray-100 py-2">
          <p className="text-gray-800  text-sm lg:text-base  text-center font-medium">
            Atuzie Rex
          </p>
          <p className=" text-gray-500 text-sm text-center">
            Wednesday ,08:25AM
          </p>
          <p className="  text-sm lg:text-base text-green-600 text-center">
            + &#8358;7,233,000
          </p>
          <p className=" w-[100px]  text-xs lg:text-sm font-semibold bg-green-50 text-green-600 p-2 text-center rounded-md">
            Sucessfull
          </p>
        </div>
        <div className=" flex justify-between items-center border-b-2 border-gray-100 py-2">
          <p className="text-gray-800  text-sm lg:text-base  text-center font-medium">
            Atuzie Rex
          </p>
          <p className=" text-gray-500 text-sm text-center">Today, 08:25AM</p>
          <p className="  text-sm lg:text-base text-red-600 text-center">
            - &#8358;7,233,000
          </p>
          <p className=" w-[100px] text-xs lg:text-sm font-semibold bg-red-50 text-red-600 p-2 text-center rounded-md">
            failed
          </p>
        </div>
        <div className=" flex justify-between items-center border-b-2 border-gray-100 py-2">
          <p className="text-gray-800  text-sm lg:text-base  text-center font-medium">
            Atuzie Rex
          </p>
          <p className=" text-gray-500 text-sm text-center">Today, 08:25AM</p>
          <p className="  text-sm lg:text-base text-green-600 text-center">
            + &#8358;7,233,000
          </p>
          <p className=" w-[100px]  text-xs lg:text-sm font-semibold bg-green-50 text-green-600 p-2 text-center rounded-md">
            Sucessfull
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
