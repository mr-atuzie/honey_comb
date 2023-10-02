import React from "react";
import { FaUsers } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import { TbPigMoney } from "react-icons/tb";
import AdminLineChart from "../components/AdminLineChart";
import AdminBarChart from "../components/AdminBarChart";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";

const AdminDashboard = () => {
  return (
    <div>
      {/* header */}
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
      {/*  */}
      <h1 className=" text-4xl font-medium my-8">Admin Dashboard</h1>
      {/* cards */}
      <div className=" grid grid-cols-4 gap-5">
        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaUsers size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold"> 25000</h2>
            <p className=" capitalize  font-medium text-gray-900">Users</p>
          </div>
        </div>
        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-red-100 text-red-500 flex justify-center items-center rounded-md">
            <GiMoneyStack size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold"> &#8358; 17,560,000</h2>
            <p className=" capitalize  font-medium text-gray-900">
              Total Revenue
            </p>
          </div>
        </div>
        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-orange-100 text-orange-500 flex justify-center items-center rounded-md">
            <ImStatsBars size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold"> 85%</h2>
            <p className=" capitalize  font-medium text-gray-900">Statistics</p>
          </div>
        </div>
        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-purple-100 text-purple-500 flex justify-center items-center rounded-md">
            <TbPigMoney size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold"> &#8358; 7,233,000</h2>
            <p className=" capitalize  font-medium text-gray-900">
              customer Revenue
            </p>
          </div>
        </div>
      </div>

      <div className=" flex justify-between my-14">
        <div className=" w-[60%]  bg-white shadow-lg pb-3 rounded h-fit">
          <div className=" p-5 mb-4">
            <p className=" font-medium  ">Revenue Generated</p>
            <h2 className=" text-4xl font-semibold "> &#8358; 7,233,000</h2>
          </div>
          <AdminLineChart />
        </div>
        <div className=" w-[38%] ">
          <div className=" bg-white shadow-lg h-fit p-6 rounded">
            <div className="  mb-4">
              <p className=" font-medium text-xl ">Total Investments</p>
            </div>
            <div>
              <div className=" mb-6">
                <div className="mb-1  flex justify-between items-center ">
                  <h3> Basic</h3>
                  <p className=" text-lg text-red-600 font-medium">65%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div className="bg-red-600 w-[65%] h-2.5 rounded-full "></div>
                </div>
              </div>
              <div className=" mb-6">
                <div className="mb-1  flex justify-between items-center ">
                  <h3>Standard</h3>
                  <p className=" text-lg text-purple-600 font-medium">79%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div className="bg-purple-600 w-[79%] h-2.5 rounded-full "></div>
                </div>
              </div>
              <div className=" mb-6">
                <div className="mb-1  flex justify-between items-center ">
                  <h3>Average</h3>
                  <p className=" text-lg text-yellow-600 font-medium">51%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-yellow-600 w-[51%] h-2.5 rounded-full "></div>
                </div>
              </div>
              <div className=" mb-6">
                <div className="mb-1  flex justify-between items-center ">
                  <h3>Premium</h3>
                  <p className=" text-lg text-green-600 font-medium">93%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-green-600 w-[93%] h-2.5 rounded-full "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* transactions */}
        <div className=" p-5 bg-white shadow-lg rounded h-fit">
          <div className=" mb-6">
            <p className=" font-medium  text-xl ">Transactions</p>
          </div>

          <div>
            <div className=" flex justify-between items-center mb-4">
              <div className=" flex items-center gap-2">
                <div className=" w-12 h-12 bg-green-100 text-green-600 flex justify-center items-center">
                  <BsArrowBarUp size={25} />
                </div>
                <div>
                  <p>Atuzie rex</p>
                  <p className=" text-gray-700 text-sm">25-10-2023</p>
                </div>
              </div>

              <p className=" text-green-600 font-medium">Credit</p>

              <p className=" font-medium ">
                {" "}
                <span className=" text-green-600 font-medium">+</span>{" "}
                &#8358;60,000
              </p>
            </div>
            <div className=" flex justify-between items-center mb-4">
              <div className=" flex items-center gap-2">
                <div className=" w-12 h-12 bg-red-100 text-red-600 flex justify-center items-center">
                  <BsArrowBarDown size={25} />
                </div>
                <div>
                  <p>Atuzie rex</p>
                  <p className=" text-gray-700 text-sm">25-10-2023</p>
                </div>
              </div>

              <p className=" text-red-600 font-medium">Withdraw</p>

              <p className=" font-medium ">
                {" "}
                <span className=" text-red-600 font-medium">-</span>{" "}
                &#8358;3,000
              </p>
            </div>
            <div className=" flex justify-between items-center mb-4">
              <div className=" flex items-center gap-2">
                <div className=" w-12 h-12 bg-red-100 text-red-600 flex justify-center items-center">
                  <BsArrowBarDown size={25} />
                </div>
                <div>
                  <p>Atuzie rex</p>
                  <p className=" text-gray-700 text-sm">25-10-2023</p>
                </div>
              </div>

              <p className=" text-red-600 font-medium">Withdraw</p>

              <p className=" font-medium ">
                {" "}
                <span className=" text-red-600 font-medium">+</span>{" "}
                &#8358;2,000
              </p>
            </div>
            <div className=" flex justify-between items-center mb-4">
              <div className=" flex items-center gap-2">
                <div className=" w-12 h-12 bg-green-100 text-green-600 flex justify-center items-center">
                  <BsArrowBarUp size={25} />
                </div>
                <div>
                  <p>Atuzie rex</p>
                  <p className=" text-gray-700 text-sm">25-10-2023</p>
                </div>
              </div>

              <p className=" text-green-600 font-medium">Credit</p>

              <p className=" font-medium ">
                {" "}
                <span className=" text-green-600 font-medium">+</span>{" "}
                &#8358;10,000
              </p>
            </div>
            <div className=" flex justify-between items-center mb-4">
              <div className=" flex items-center gap-2">
                <div className=" w-12 h-12 bg-green-100 text-green-600 flex justify-center items-center">
                  <BsArrowBarUp size={25} />
                </div>
                <div>
                  <p>Atuzie rex</p>
                  <p className=" text-gray-700 text-sm">25-10-2023</p>
                </div>
              </div>

              <p className=" text-green-600 font-medium">Credit</p>

              <p className=" font-medium ">
                {" "}
                <span className=" text-green-600 font-medium">+</span>{" "}
                &#8358;10,000
              </p>
            </div>
          </div>
        </div>
        {/* users */}
        <div className=" p-5 bg-white shadow-lg rounded h-fit">
          <div className=" mb-6">
            <p className=" font-medium  text-xl ">Users</p>
          </div>
          {/* user list */}
          <div>
            <div className=" flex justify-between items-center border-b-2 border-green-100 pb-2 mb-2">
              <div className=" flex items-center gap-2">
                <img
                  className=" w-14 h-14 rounded-full object-cover"
                  src="https://images.squarespace-cdn.com/content/v1/55cba28de4b05c606034e167/1642440989307-TLPN44V33FNLQCWNJ4O5/Gabriel+Tanhara_Actors-Headshots-London.jpg"
                  alt=""
                />

                <div>
                  <h2 className=" capitalize  font-medium">Atuzie Rex</h2>
                  <p className=" text-sm text-gray-600"> rexatuzie@gmail.com</p>
                </div>
              </div>

              <p className=" font-medium ">&#8358;60,000</p>
            </div>
            <div className=" flex justify-between items-center border-b-2 border-green-100 pb-2 mb-2">
              <div className=" flex items-center gap-2">
                <img
                  className=" w-14 h-14 rounded-full object-cover"
                  src="https://christophertoddstudios.com/wp-content/uploads/2022/12/QuinnDworakowskiLAW-21-778x1024.jpg"
                  alt=""
                />

                <div>
                  <h2 className=" capitalize  font-medium">Micheal Jackson</h2>
                  <p className=" text-sm text-gray-600"> mike@gmail.com</p>
                </div>
              </div>

              <p className=" font-medium ">&#8358;30,000</p>
            </div>
            <div className=" flex justify-between items-center border-b-2 border-green-100 pb-2 mb-2">
              <div className=" flex items-center gap-2">
                <img
                  className=" w-14 h-14 rounded-full object-cover"
                  src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver"
                  alt=""
                />

                <div>
                  <h2 className=" capitalize  font-medium">Austin Martin</h2>
                  <p className=" text-sm text-gray-600"> ase@gmail.com</p>
                </div>
              </div>

              <p className=" font-medium ">&#8358;15,000</p>
            </div>
          </div>
          <div className=" flex justify-between items-center border-b-2 border-green-100 pb-2 mb-2">
            <div className=" flex items-center gap-2">
              <img
                className=" w-14 h-14 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt=""
              />

              <div>
                <h2 className=" capitalize  font-medium">Amarachi Stephen</h2>
                <p className=" text-sm text-gray-600"> ama69@gmail.com</p>
              </div>
            </div>

            <p className=" font-medium ">&#8358;160,000</p>
          </div>
          <div className=" flex justify-between items-center border-b-2 border-green-100 pb-2 mb-2">
            <div className=" flex items-center gap-2">
              <img
                className=" w-14 h-14 rounded-full object-cover"
                src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ="
                alt=""
              />

              <div>
                <h2 className=" capitalize  font-medium">David Ogola</h2>
                <p className=" text-sm text-gray-600"> Dave@gmail.com</p>
              </div>
            </div>

            <p className=" font-medium ">&#8358;760,000</p>
          </div>
        </div>
        <div className="  bg-white shadow-lg rounded h-fit">
          <div className=" p-5 mb-4">
            <p className=" font-medium text-gray-400  ">Profit Earned</p>
            <h2 className=" text-4xl font-semibold "> &#8358; 7,233,000</h2>
          </div>
          <AdminBarChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
