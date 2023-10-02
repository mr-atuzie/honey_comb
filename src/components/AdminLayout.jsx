import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className=" min-h-screen flex">
      <div className="w-[20%] bg-green-600  p-5 ">
        <div></div>
      </div>
      <div className="w-[80%] bg-gray-100  py-5  px-10 pb-40">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
