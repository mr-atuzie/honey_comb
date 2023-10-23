import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
// import { ImStatsBars } from "react-icons/im";
import { TbPigMoney } from "react-icons/tb";

// import AdminBarChart from "../components/AdminBarChart";
// import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import Loader from "../components/Loader";
import AdminHeader from "../components/AdminHeader";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [totalInvestment, setTotalInvestment] = useState({});
  const [totalIntrest, setTotalIntrest] = useState({});
  const [pendingWithdraw, setPendingWithdraw] = useState([]);

  const [loading, setLoading] = useState(false);

  const getAdminDashboard = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/all-users`,
        {
          withCredentials: true,
        }
      );

      const transRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/all-transactions`,
        {
          withCredentials: true,
        }
      );

      const intrestRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/total-intrest`,
        {
          withCredentials: true,
        }
      );

      const investmentRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/total-investment`,
        {
          withCredentials: true,
        }
      );

      const withdrawRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/pending-withdraws`,
        {
          withCredentials: true,
        }
      );

      setTransactions(transRes.data.transactions);
      setUsers(res.data.users);
      setTotalInvestment(investmentRes.data.totalInvestments);
      setTotalIntrest(intrestRes.data.totalIntrest);
      setPendingWithdraw(withdrawRes.data.withdraws);
      setLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAdminDashboard();
  }, []);

  console.log(totalIntrest);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <AdminHeader />
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Admin Dashboard
      </h1>
      {/* cards */}
      <div className=" grid grid-cols-4 gap-5">
        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaUsers size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold"> {users.length}</h2>
            <p className=" capitalize  font-medium text-gray-900">Users</p>
          </div>
        </div>

        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-red-100 text-red-500 flex justify-center items-center rounded-md">
            <GiMoneyStack size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold">
              {" "}
              &#8358;{" "}
              {new Intl.NumberFormat().format(totalIntrest + totalInvestment)}
            </h2>
            <p className=" capitalize  font-medium text-gray-900">
              Total Revenue
            </p>
          </div>
        </div>

        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-purple-100 text-purple-500 flex justify-center items-center rounded-md">
            <TbPigMoney size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold">
              {" "}
              &#8358; {new Intl.NumberFormat().format(totalIntrest)}
            </h2>
            <p className=" capitalize  font-medium text-gray-900">
              Total Investment
            </p>
          </div>
        </div>

        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-purple-100 text-purple-500 flex justify-center items-center rounded-md">
            <TbPigMoney size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold">
              {new Intl.NumberFormat().format(pendingWithdraw?.length)}
            </h2>
            <p className=" capitalize  font-medium text-gray-900">
              Pending Withdrawls
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-16">
        <div className=" w-[55%] bg-white p-5 shadow-md sm:rounded-sm">
          <div className=" mb-6 ">
            <p className=" font-medium  text-xl ">Transactions</p>
            <p className=" text-xs text-gray-500 ">
              {transactions?.length} Transactions
            </p>
          </div>
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
              <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 0"
                      />
                      <label for="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions?.slice(0, 7).map((transaction) => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="pl-3">
                          <div className="text-base font-semibold">
                            {transaction?.name}
                          </div>
                          <div className="text-xs font-normal text-gray-500">
                            {transaction?.email}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        {" "}
                        {moment(transaction.createdAt).format("Do MMM YYYY")}
                      </td>
                      <td
                        className={`${
                          transaction?.type === "withdrawal"
                            ? "text-red-500"
                            : "text-gray-900"
                        }   px-6 py-4 font-medium capitalize`}
                      >
                        {transaction?.type}
                      </td>
                      <td
                        className={`${
                          transaction?.type === "withdrawal"
                            ? "text-red-500"
                            : "text-green-500"
                        }   px-6 py-4 font-medium`}
                      >
                        {transaction?.type === "withdrawal" ? " -" : "+"}{" "}
                        &#8358;{transaction?.amount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" w-[43%] bg-white p-5 shadow-md sm:rounded-sm">
          <div className=" mb-6 ">
            <p className=" font-medium  text-xl ">Users</p>
            {/* <p className=" text-xs text-gray-500 ">
              {transactions?.length} Transactions
            </p> */}
          </div>
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
              <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    S/N
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Investment
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.slice(0, 7).map((user, index) => {
                  return (
                    <tr
                      key={user._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="w-4 p-4">{index + 1}</td>

                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="pl-3">
                          <div className="text-base font-semibold">
                            {user?.firstname} {user?.lastname}
                          </div>
                          <div className="text-xs font-normal text-gray-500">
                            {user?.email}
                          </div>
                        </div>
                      </th>

                      <td className="px-6 py-4 font-medium">
                        {user.accountBalance}
                      </td>

                      {!user?.kycStatus && (
                        <td className="px-6 py-4">
                          <div className="flex items-center capitalize font-medium  text-gray-500">
                            <div className="h-2.5 w-2.5   rounded-full bg-gray-500 mr-2"></div>{" "}
                            {/* {user.kycStatus} */}Nil
                          </div>
                        </td>
                      )}

                      {user?.kycStatus === "pending" && (
                        <td className="px-6 py-4">
                          <div className="flex items-center capitalize font-medium  text-yellow-500">
                            <div className="h-2.5 w-2.5   rounded-full bg-yellow-500 mr-2"></div>{" "}
                            {/* {user.kycStatus} */}
                            pending
                          </div>
                        </td>
                      )}

                      {user?.kycStatus === "disapprove" && (
                        <td className="px-6 py-4">
                          <div className="flex items-center capitalize font-medium  text-red-500">
                            <div className="h-2.5 w-2.5   rounded-full bg-red-500 mr-2"></div>{" "}
                            {/* {user.kycStatus} */}
                            Rejected
                          </div>
                        </td>
                      )}

                      {user?.kycStatus === "approved" && (
                        <td className="px-6 py-4">
                          <div className="flex items-center capitalize font-medium  text-green-500">
                            <div className="h-2.5 w-2.5   rounded-full bg-green-500 mr-2"></div>{" "}
                            {/* {user.kycStatus} */}
                            Accepted
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-3 gap-5">
        transactions
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
        users
        <div className=" p-5 bg-white shadow-lg rounded h-fit">
          <div className=" mb-6">
            <p className=" font-medium  text-xl ">Users</p>
          </div>
          user list
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
      </div> */}
    </div>
  );
};

export default AdminDashboard;
