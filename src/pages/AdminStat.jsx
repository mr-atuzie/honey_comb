import React from "react";
import AdminLineChart from "../components/AdminLineChart";

const AdminStat = () => {
  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Users
      </h1>

      <div>
        <div className=" flex justify-between my-14">
          <div className=" w-[60%]  bg-white shadow-lg pb-3 rounded h-fit">
            <div className=" p-5 mb-4">
              <p className=" font-medium  ">Revenue Generated</p>
              <h2 className=" text-4xl font-semibold "> &#8358; 7,233,000</h2>
            </div>
            <AdminLineChart />
          </div>
          <div className=" w-[38%] ">
            <div className=" bg-white shadow-lg h-fit p-6 rounded">
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
                    <h3>Revenue</h3>
                    <p className=" text-lg text-green-600 font-medium">93%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-orange-600 w-[83%] h-2.5 rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStat;
