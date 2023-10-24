import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className=" w-full">
      <div className=" flex items-center  justify-between">
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
              {user?.name}
            </h2>
            <p className=" text-xs text-gray-700">{user?.email}</p>
          </div>
        </div>

        <Link
          className="border-2 border-yellow-400 bg-[#08432d] text-white p-2 h-fit rounded-full"
          to={"/user/notifications"}
        >
          <div>
            <IoIosNotifications size={25} className=" " />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
