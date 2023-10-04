import React from "react";

import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminDashboardNav from "./AdminDashboardNav";

const AdminLayout = () => {
  return (
    <div className=" min-h-screen flex">
      <div className=" hidden lg:block lg:w-[20%] bg-green-600   ">
        <AdminDashboardNav />
      </div>
      <div className=" w-[80%]  bg-gray-100  py-5  pb-40">
        <div className=" w-[95%] mx-auto">
          <AdminHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
