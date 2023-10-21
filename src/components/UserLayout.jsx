import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import Header from "./Header";

import { toast } from "react-toastify";
import axios from "axios";
import UserDashboardNav from "./UserDashboardNav";

const UserLayout = () => {
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
    <div className=" min-h-screen lg:flex">
      <div className=" hidden lg:block lg:w-[20%] bg-[#08432d]  fixed left-0 h-screen   ">
        <UserDashboardNav user={user} />
      </div>
      <div className=" w-full lg:w-[80%]  bg-gray-100  py-5  pb-40 lg:ml-[20%]">
        <div className=" w-[95%] mx-auto">
          <Header user={user} />
          <Outlet />
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default UserLayout;
