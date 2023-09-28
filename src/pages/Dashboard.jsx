import React from "react";
import DashboardNav from "../components/DashboardNav";
import Header from "../components/Header";
import { BsEyeSlash } from "react-icons/bs";
import { AiFillNotification } from "react-icons/ai";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  return (
    <div className=" relative bg-green-600 ">
      <DashboardNav />

      <Header />

      <div className="  pb-24 lg:pl-24  lg:pt-32  lg:ml-48">
        <div className=" hidden lg:flex justify-between px-16">
          <div className="  p-2 w-[60%]">
            {/* card */}
            <div className="  flex gap-10">
              <div className=" bg-white w-[400px]  p-7 rounded shadow-lg">
                <div className=" flex justify-between items-center">
                  <p className=" font-medium text-white uppercase">
                    investment
                  </p>

                  <div className="bg-green-800 text-white p-2 items-center flex justify-center rounded-full">
                    <BsEyeSlash size={20} />
                  </div>
                </div>
                <div className="  text-4xl my-4 font-semibold">
                  {" "}
                  &#8358; 55,000
                </div>

                <p className=" text-sm  font-medium">34 transactions</p>
              </div>
              <div className=" bg-white w-[400px]  p-7 rounded shadow-lg">
                <div className=" flex justify-between items-center">
                  <p className=" font-medium text-white  uppercase">Intrest</p>

                  <div className="bg-yellow-800 text-white p-2 items-center flex justify-center rounded-full">
                    <BsEyeSlash size={20} />
                  </div>
                </div>
                <div className="  text-4xl my-4 font-semibold">
                  {" "}
                  &#8358; 12,690
                </div>

                <p className=" text-sm  font-medium">+52%</p>
              </div>
            </div>

            <div className=" my-16 bg-white p-5  shadow-lg rounded-sm">
              <h2 className=" font-medium mb-5 text-xl ">Overview</h2>

              <LineChart
                width={850}
                height={350}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>

            {/* table */}
            <div className=" bg-white p-5 shadow-lg rounded-sm">
              <h2 className=" font-medium mb-5 text-xl ">Transactions</h2>

              <div className="relative overflow-x-auto mt-6">
                <table className="w-full  text-left  ">
                  <thead className=" uppercase bg-green-50 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
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
          <div className="  p-2 w-[35%]">
            {/* Notification */}
            <div className=" bg-white shadow-lg rounded-sm">
              <div className=" border-b-2 border-gray-100 px-5 py-3">
                <h2 className=" font-medium text-xl">Notifications</h2>
              </div>
              <div className=" flex gap-3 p-5">
                <div className=" border-2 border-gray-200 rounded-full p-2 text-green-300">
                  <AiFillNotification size={25} />
                </div>
                <div>
                  <p className=" font-medium text-lg">
                    {" "}
                    Purchase (0R45B6A) was successfull.
                  </p>
                  <p className=" text-sm text-gray-600">18-05-2023</p>
                </div>
              </div>
              <div className=" flex gap-3 p-5">
                <div className=" border-2 border-gray-200 rounded-full p-2 text-green-300">
                  <AiFillNotification size={25} />
                </div>
                <div>
                  <p className=" font-medium text-lg">
                    {" "}
                    Purchase (0R45B6A) was successfull.
                  </p>
                  <p className=" text-sm text-gray-600">18-05-2023</p>
                </div>
              </div>
              <div className=" flex gap-3 p-5">
                <div className=" border-2 border-gray-200 rounded-full p-2 text-green-300">
                  <AiFillNotification size={25} />
                </div>
                <div>
                  <p className=" font-medium text-lg">
                    {" "}
                    Purchase (0R45B6A) was successfull.
                  </p>
                  <p className=" text-sm text-gray-600">18-05-2023</p>
                </div>
              </div>
              <div className=" flex gap-3 p-5">
                <div className=" border-2 border-gray-200 rounded-full p-2 text-green-300">
                  <AiFillNotification size={25} />
                </div>
                <div>
                  <p className=" font-medium text-lg">
                    {" "}
                    Purchase (0R45B6A) was successfull.
                  </p>
                  <p className=" text-sm text-gray-600">18-05-2023</p>
                </div>
              </div>
              <div className=" flex gap-3 p-5">
                <div className=" border-2 border-gray-200 rounded-full p-2 text-green-300">
                  <AiFillNotification size={25} />
                </div>
                <div>
                  <p className=" font-medium text-lg">
                    {" "}
                    Purchase (0R45B6A) was successfull.
                  </p>
                  <p className=" text-sm text-gray-600">18-05-2023</p>
                </div>
              </div>
            </div>
            {/* graph */}
            <div className=" bg-white shadow-lg rounded-sm my-10 p-5">
              <BarChart width={450} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>

            {/* graph2 */}
            <div className=" bg-white shadow-lg rounded-sm">
              <PieChart width={730} height={250}>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                />
                <Pie
                  data={data02}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </div>
          </div>
        </div>
        <div className=" lg:hidden px-5">
          <div className=" flex ">
            <div className=" p-3 rounded-sm w-[400px] bg-green-600 shadow-xl">
              <div className="flex flex-col justify-center">
                <p className=" text-xs text-white  uppercase font-medium">
                  Account Balance
                </p>
                <div className=" text-white text-2xl flex items-center gap-1 font-light">
                  <span className=" text-sm">$</span>
                  <p>1685</p>
                </div>
              </div>

              <div className=" my-6 flex gap-4">
                <button className="flex text-sm justify-center gap-1 bg-gray-800 px-4  text-white capitalize items-center rounded-md py-2.5">
                  <BsArrowUpShort /> buy
                </button>

                <button className="text-sm flex justify-center gap-1 bg-gray-800 px-4  text-white capitalize items-center rounded-md py-2.5">
                  <BsArrowDownShort />
                  withdraw
                </button>
              </div>

              <div className=" flex items-center gap-3">
                <div className=" text-white flex flex-col justify-center items-center">
                  <p className=" text-xs capitalize font-medium">income</p>
                  <div className=" text-sm text-white text flex items-center gap-1 font-light">
                    <span className=" text-xs">$</span>
                    <p>2790</p>
                  </div>
                </div>

                <div className=" text-white flex flex-col justify-center items-center">
                  <p className=" text-xs capitalize font-medium">outcome</p>
                  <div className=" text-sm text-white text flex items-center gap-1 font-light">
                    <span className=" text-xs">$</span>
                    <p>790</p>
                  </div>
                </div>

                <div className=" text-white flex flex-col justify-center items-center">
                  <p className=" text-xs capitalize font-medium">intrest</p>
                  <div className="text-sm text-white text flex items-center gap-1 font-light">
                    <span className=" text-xs">$</span>
                    <p>3280</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
