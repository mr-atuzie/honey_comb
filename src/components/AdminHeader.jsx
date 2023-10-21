import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between items-center">
      <form onClick={() => navigate("/admin/search")} className=" w-[38%]">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <BiSearchAlt2 size={25} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            placeholder="Search..."
            required
          />
        </div>
      </form>

      <div className=" flex items-center gap-2">
        <div className=" w-12 h-12 rounded-full object-cover bg-green-600 text-yellow-400 flex justify-center items-center uppercase font-semibold">
          {user?.abv}
        </div>

        <div className="">
          <h2 className=" text-sm lg:text-base capitalize  font-medium">
            {user?.name}
          </h2>
          <p className=" text-xs text-gray-700">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
