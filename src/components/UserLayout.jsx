import React from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";

const UserLayout = () => {
  return (
    <div className=" min-h-screen lg:flex">
      <div className=" lg:w-[20%] bg-green-600  lg:p-5 ">
        <div></div>
      </div>
      <div className=" lg:w-[80%] bg-gray-100  py-5   pb-40">
        <div className=" w-[95%] mx-auto">
          <Outlet />
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default UserLayout;
