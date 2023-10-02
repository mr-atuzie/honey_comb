import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className=" min-h-screen lg:flex">
      <div className="w-0 lg:w-[20%] bg-green-600  lg:p-5 ">
        <div></div>
      </div>
      <div className=" lg:w-[80%] bg-gray-100  py-5  px-10 pb-40">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
