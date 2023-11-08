import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Header = ({ user }) => {
  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/notifications`,
        {
          withCredentials: true,
        }
      );

      setNotifications(res.data.notifications);
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
    getNotifications();
  }, []);

  return (
    <div className=" w-full">
      <div className=" flex items-center  justify-between">
        <Link to={"/user/profile"}>
          <div className=" flex items-center gap-2">
            <img
              className=" w-12 h-12 rounded-full object-cover "
              src={
                user?.photo
                  ? user?.photo
                  : "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
              }
              alt=""
            />

            <div className="">
              <h2 className=" text-sm lg:text-base capitalize  font-medium">
                {user?.firstname} {user?.lastname}
              </h2>
              <p className=" text-xs text-gray-700">{user?.email}</p>
            </div>
          </div>
        </Link>
        <Link
          className="border-2 relative border-yellow-400 bg-[#08432d] text-white p-2 h-fit rounded-full"
          to={"/user/notifications"}
        >
          <div>
            <IoIosNotifications size={25} className=" " />
          </div>

          <div className=" bg-red-700 absolute top-2 left-2 text-white text-xs  p-2 flex items-center justify-center  w-3 h-3 rounded-full">
            {notifications?.length}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
