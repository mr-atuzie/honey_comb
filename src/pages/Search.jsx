import axios from "axios";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!value) {
      return toast.error("All fields are required");
    }

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get?searchTerm=${value}`,
        {
          withCredentials: true,
        }
      );

      setUsers(res.data.users);
      setNotFound(res.data.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className=" w-[38%]">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <button
            type="submit"
            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400"
          >
            <BiSearchAlt2 size={25} />
          </button>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            placeholder="Search..."
            required
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </form>

      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Searching for: {value}
      </h1>

      {notFound != null && notFound < 1 && (
        <p className=" text-gray-500">No user found</p>
      )}
      {users?.length >= 1 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                  Investment
                </th>
                <th scope="col" className="px-6 py-3">
                  Intrest
                </th>

                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {user?.firstname} {user?.lastname}
                        </div>
                        <div className="font-normal text-gray-500">
                          {user?.email}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      {" "}
                      &#8358; {user?.accountBalance}{" "}
                    </td>
                    <td className="px-6 py-4"> &#8358; {user?.intrest} </td>

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

                    <Link to={`/admin/user-profile/${user._id}`}>
                      <td className="px-6 py-4 text-blue-500">view user</td>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Search;
