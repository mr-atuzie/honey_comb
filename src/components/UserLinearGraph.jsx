import React from "react";

const UserLinearGraph = () => {
  return (
    <div>
      <div className=" bg-white shadow-lg  p-6 rounded">
        <div className="  mb-4">
          <p className=" font-medium text-xl ">Total Investments</p>
        </div>
        <div>
          <div className=" mb-6">
            <div className="mb-1  flex justify-between items-center ">
              <h3> Basic</h3>
              <p className=" text-lg text-red-600 font-medium">65%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
              <div className="bg-red-600 w-[65%] h-2.5 rounded-full "></div>
            </div>
          </div>
          <div className=" mb-6">
            <div className="mb-1  flex justify-between items-center ">
              <h3>Standard</h3>
              <p className=" text-lg text-purple-600 font-medium">79%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
              <div className="bg-purple-600 w-[79%] h-2.5 rounded-full "></div>
            </div>
          </div>
          <div className=" mb-6">
            <div className="mb-1  flex justify-between items-center ">
              <h3>Average</h3>
              <p className=" text-lg text-yellow-600 font-medium">51%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-yellow-600 w-[51%] h-2.5 rounded-full "></div>
            </div>
          </div>
          <div className=" mb-6">
            <div className="mb-1  flex justify-between items-center ">
              <h3>Premium</h3>
              <p className=" text-lg text-green-600 font-medium">93%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-green-600 w-[93%] h-2.5 rounded-full "></div>
            </div>
          </div>
          <div className=" mb-6">
            <div className="mb-1  flex justify-between items-center ">
              <h3>Investment</h3>
              <p className=" text-lg text-orange-600 font-medium">78%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-orange-600 w-[78%] h-2.5 rounded-full "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLinearGraph;
