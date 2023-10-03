import React from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import Header from "./Header";

const UserLayout = () => {
  return (
    <div className=" min-h-screen lg:flex">
      <div className=" hidden lg:block lg:w-[20%] bg-green-600   ">
        <div>
          <div className=" w-full flex justify-center items-center py-5">
            <p className=" uppercase font-semibold text-yellow-400 mb-4">
              Honey comb fxd
            </p>
          </div>
        </div>
      </div>
      <div className=" lg:w-[80%] bg-gray-100  py-5   pb-40">
        <div className=" w-[95%] mx-auto">
          <Header />
          <Outlet />
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default UserLayout;
