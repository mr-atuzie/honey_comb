import React from "react";

const AdminHeader = () => {
  return (
    <div className=" flex justify-between items-center">
      <form className=" w-[38%]">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
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
        <img
          className=" w-14 h-14 rounded-full object-cover"
          src="https://images.squarespace-cdn.com/content/v1/55cba28de4b05c606034e167/1642440989307-TLPN44V33FNLQCWNJ4O5/Gabriel+Tanhara_Actors-Headshots-London.jpg"
          alt=""
        />

        <h2 className=" capitalize  font-medium">Atuzie Rex</h2>
      </div>
    </div>
  );
};

export default AdminHeader;
