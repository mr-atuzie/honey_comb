import React from "react";
import DashboardNav from "../components/DashboardNav";
import Header from "../components/Header";
import { BsEyeSlash } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className=" relative bg-green-100">
      <DashboardNav />

      <Header />

      <div className="  pb-24 lg:pl-24  pt-32 h-screen  lg:ml-48">
        <div className=" hidden lg:flex justify-between px-16">
          <div className="  p-2 w-[60%]">
            {/* card */}
            <div className="  flex gap-10">
              <div className=" bg-green-600 w-[380px]  p-7 rounded shadow-lg">
                <div className=" flex justify-between items-center">
                  <p className=" font-medium text-white uppercase">
                    investment
                  </p>

                  <div className="bg-green-800 text-white p-2 items-center flex justify-center rounded-full">
                    <BsEyeSlash size={20} />
                  </div>
                </div>
                <div className=" text-white text-4xl my-4 font-semibold">
                  {" "}
                  &#8358; 55,000
                </div>

                <p className=" text-sm text-white font-medium">
                  34 transactions
                </p>
              </div>
              <div className=" bg-yellow-400 w-[380px]  p-7 rounded shadow-lg">
                <div className=" flex justify-between items-center">
                  <p className=" font-medium text-white  uppercase">Intrest</p>

                  <div className="bg-yellow-800 text-white p-2 items-center flex justify-center rounded-full">
                    <BsEyeSlash size={20} />
                  </div>
                </div>
                <div className=" text-white text-4xl my-4 font-semibold">
                  {" "}
                  &#8358; 12,690
                </div>

                <p className=" text-sm text-white font-medium">+52%</p>
              </div>
            </div>

            <div className=" my-16 bg-white p-3  h-60s">
              <h2 className=" font-medium mb-5 text-lg">Overview</h2>
            </div>

            {/* table */}
            <div className=" bg-white p-3">
              <h2 className=" font-medium mb-5 text-lg">
                Transactions History
              </h2>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className=" bg-red-50 p-2 w-[35%]"></div>
        </div>
        <div>
          <h2>Rex</h2>
        </div>
      </div>
      {/* <div className=" w-[20%] bg-green-700 h-screen p-10">
        <h2 className=" uppercase font-semibold text-yellow-500 mb-4">
          Honey comb fxd
        </h2>

        <ul className=" my-20 text-white">
          <li className=" my-8 font-medium text-white">Dashboard</li>
          <li className=" my-8 font-medium text-white">Wallet</li>
          <li className=" my-8 font-medium text-white">Notification</li>
          <li className=" my-8 font-medium text-white">Investments</li>
        </ul>
      </div>
      <div className=" w-[72%] p-10  h-screen">
        <div className=" flex items-center gap-2">
          <img
            className=" w-16 h-16 rounded-full object-cover"
            src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
            alt="profile-pic"
          />
          <h2 className="font-medium">Amarachi Nwabuko</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
