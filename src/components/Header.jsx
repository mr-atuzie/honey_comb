import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className=" flex justify-end items-end">
      <div className=" flex items-center  gap-8">
        <Link
          className=" hidden lg:block border-2 border-yellow-400 bg-[#08432d] text-white p-2 h-fit rounded-full"
          to={"/user/notifications"}
        >
          <div>
            <IoIosNotifications size={25} className=" " />
          </div>
        </Link>

        <div className=" flex items-center gap-2">
          <img
            className=" w-12 h-12 rounded-full object-cover "
            src={user?.photo}
            alt=""
          />

          <div className="">
            <h2 className=" text-sm lg:text-base capitalize  font-medium">
              {user?.name}
            </h2>
            <p className=" text-xs text-gray-700">{user?.email}</p>
          </div>
        </div>
      </div>

      <Link
        className="  lg:hidden border-2 border-yellow-400 bg-[#08432d] text-white p-2 h-fit rounded-full"
        to={"/user/notifications"}
      >
        <div>
          <IoIosNotifications size={25} className=" " />
        </div>
      </Link>
    </div>
  );
};

export default Header;
