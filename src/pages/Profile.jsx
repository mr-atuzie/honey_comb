import React, { useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
// import { countries } from "../data";
// import { validateEmail } from "../services/authServices";
import { toast } from "react-toastify";
import axios from "axios";
import { banks } from "../data";
import Loader from "../components/Loader";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [formLoader, setFormLoader] = useState(false);
  const [uploading, setUpLoading] = useState(false);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const getUser = async () => {
    setLoading(true);
    try {
      const userRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user`,
        {
          withCredentials: true,
        }
      );

      setUser(userRes.data);
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

  useEffect(() => {
    getUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleUpload = async () => {
    setUpLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", productImage);

      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/upload-picture`,
        formData
      );
      const data = res.data;

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data?._id,
          name: `${data?.firstname} ${data?.lastname}`,
          email: data?.email,
          photo: data?.photo,
          abv: `${data?.firstname.charAt(0)}${data?.lastname.charAt(0)}`,
        })
      );

      setUpLoading(false);
      toast.success("Image uploaded");
      getUser();
      setImagePreview(null);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.response.statusText ||
        error.toString();

      setUpLoading(false);
      toast.error(message);
      setImagePreview(null);
    }
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoader(true);

    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/update-user`,
        userData
      );

      const data = res.data.user;

      setFormLoader(false);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data?._id,
          name: `${data?.firstname} ${data?.lastname}`,
          email: data?.email,
          photo: data?.photo,
          abv: `${data?.firstname.charAt(0)}${data?.lastname.charAt(0)}`,
        })
      );

      toast.success("User updated successfully");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setFormLoader(false);

      toast.error(message);
    }
  };

  console.log(productImage);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="my-9 lg:my-11">
        <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  ">
          Profile
        </h1>

        <div className=" flex gap-4 lg:gap-8 items-center my-4">
          <NavLink
            to={"/user/profile"}
            className={({ isActive }) =>
              isActive ? " text-green-600" : "text-gray-600"
            }
          >
            <p className="font-medium text-sm  ">Add Kyc</p>
          </NavLink>

          <NavLink
            to={"/user/add-kyc"}
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            <p className="font-medium text-sm  ">Upload valid ID Card</p>
          </NavLink>
        </div>
      </div>

      <div className=" bg-white md:w-[45%] shadow-lg mx-auto p-3 lg:p-5">
        {/* form */}
        <div className=" mt-4">
          <div className="md:w-[45%] mx-auto ">
            {/* image change */}
            <div className=" flex  justify-center items-center mt-6 ">
              {imagePreview != null ? (
                <div className="flex justify-center flex-col items-center">
                  <div className="w-28 h-28 lg:w-40 lg:h-40  rounded-full flex justify-center items-center object-cover ">
                    <img
                      src={imagePreview}
                      className="w-full h-full rounded-full object-cover self-center"
                      alt="house"
                    />
                  </div>
                  {uploading ? (
                    <button
                      disabled={uploading}
                      className=" bg-green-600 flex justify-center items-center mt-2  text-white py-2.5 w-40 ml-5 rounded-md disabled:bg-green-300"
                    >
                      Uploading
                    </button>
                  ) : (
                    <button
                      onClick={handleUpload}
                      className=" bg-green-600 flex justify-center items-center mt-2 text-white py-2.5 w-40 ml-5 rounded-md"
                    >
                      Upload Image
                    </button>
                  )}
                </div>
              ) : (
                <div className="relative w-28 h-28 lg:w-40 lg:h-40 flex justify-center items-center rounded-full ">
                  <label
                    htmlFor="image"
                    className=" z-40 bg-black/60 h-[50px] w-[50px] rounded-full absolute flex items-center justify-center"
                  >
                    <AiOutlineCamera className=" text-white" size={30} />
                  </label>

                  <img
                    className=" w-full h-full  rounded-full object-cover self-center"
                    src={
                      user?.photo
                        ? user?.photo
                        : "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
                    }
                    alt=""
                  />
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className=" hidden"
                    onChange={(e) => handleImageChange(e)}
                  />
                </div>
              )}
            </div>

            <div className=" my-3 justify-center items-center text-center ">
              <p className=" text-xs lg:text-sm  text-gray-500 ">
                Referral Code
              </p>
              <h2 className=" text-xs lg:text-sm font-medium  ">{user?._id}</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className=" my-14 ">
            <div className="relative my-7">
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
                defaultValue={user?.name}
              />
              <label
                htmlFor="firstname"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Firstame
              </label>
            </div>

            <div className="relative my-7">
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
                defaultValue={user?.name}
              />
              <label
                htmlFor="lastname"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Lastame
              </label>
            </div>

            <div className="relative my-7">
              <input
                type="text"
                name="address"
                id="address"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
              />
              <label
                htmlFor="address"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Address
              </label>
            </div>

            <div className="relative my-7 lg:my-11">
              <input
                type="date"
                name="DOB"
                id="DOB"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
              />
              <label
                htmlFor="DOB"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Date Of Birth
              </label>
            </div>

            <div className="relative my-7">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
              />
              <label
                htmlFor="phone"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Phone Number
              </label>
            </div>

            <div className="relative my-7">
              <input
                type="text"
                name="accountNumber"
                id="accountNumber"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
              />
              <label
                htmlFor="accountNumber"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Account Number
              </label>
            </div>

            <div className="relative my-7">
              <select
                name="bank"
                id="bank"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleInputChange}
              >
                <option>Select Bank</option>
                {banks.map((bank, index) => {
                  return (
                    <option key={index} value={bank.bankName}>
                      {bank.bankName}
                    </option>
                  );
                })}
              </select>
              <label
                htmlFor="bank"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Your Bank
              </label>
            </div>

            <button
              disabled={formLoader}
              type="submit"
              className=" bg-[#08432d] text-white rounded-lg text-sm w-full p-3 text-center font-medium disabled:bg-green-300"
            >
              {formLoader ? "Loading" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
