import React from "react";
import UserLineGraph from "../components/UserLineGraph";
import UserTransactions from "../components/UserTransactions";
import UserLinearGraph from "../components/UserLinearGraph";
import UserStatCard from "../components/UserStatCard";
import UserBarChart from "../components/UserBarChart";
import Notification from "../components/Notification";
import UserAreaChart from "../components/UserAreaChart";
import UserCard from "../components/UserCard";

const UserDashboard = () => {
  return (
    <div>
      {/* header */}

      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        {" "}
        Dashboard
      </h1>

      <div className=" hidden lg:block">
        <div className="  flex flex-col lg:flex-row lg:justify-between mb-10">
          <div className=" lg:w-[46%]">
            {/* card */}
            <UserCard />

            {/* areachart */}
            <div className="hidden lg:block bg-white shadow-lg pb-3 rounded h-fit">
              <UserBarChart />
            </div>
          </div>
          <div className=" lg:w-[50%]">
            {/* Notification */}
            <Notification />
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row lg:justify-between">
          <div className=" lg:w-[30%]  ">
            <UserStatCard />
          </div>

          <div className=" my-10 lg:my-0 lg:w-[32%] ">
            <UserLinearGraph />
          </div>

          <div className=" lg:w-[35%] ">
            <UserTransactions />
          </div>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row lg:justify-between my-10">
          {/* line graph */}
          <div className=" lg:w-[60%] bg-white shadow-lg pb-3 rounded">
            <UserLineGraph />
          </div>
          {/* barchat */}
          <div className=" lg:w-[35%] bg-white shadow-lg pb-3 rounded">
            <UserAreaChart />
          </div>

          {/* notification */}
        </div>
      </div>

      <div className="lg:hidden">
        <UserCard />

        <div className=" lg:w-[30%]  ">
          <UserStatCard />
        </div>

        <div className=" my-10 lg:my-0 lg:w-[32%] ">
          <UserLinearGraph />
        </div>

        <div className=" lg:w-[35%] ">
          <UserTransactions />
        </div>

        <div className=" lg:w-[50%]">
          {/* Notification */}
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
