import React, { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminDashboardNav from "./AdminDashboardNav";
import { toast } from "react-toastify";
import axios from "axios";

const AdminLayout = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user`,
        {
          withCredentials: true,
        }
      );

      setUser(res.data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className=" min-h-screen flex">
      <div className=" hidden lg:block lg:w-[20%] bg-green-600 fixed left-0 h-screen   ">
        <AdminDashboardNav user={user} />
      </div>
      <div className=" w-full lg:w-[80%]  bg-gray-100  py-5  pb-40 lg:ml-[20%]">
        <div className=" lg:w-[95%] mx-auto">
          <AdminHeader user={user} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
