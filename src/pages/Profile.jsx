import React, { useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
// import { countries } from "../data";
import { validateEmail } from "../services/authServices";
import { toast } from "react-toastify";
import axios from "axios";
import { banks } from "../data";
import Loader from "../components/Loader";

const Profile = () => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
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
    if (productImage) {
      setUpLoading(true);
      const formData = new FormData();
      formData.append("image", productImage);
      try {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/upload-picture`,
          formData
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
    } else {
      toast.error("Please select an image");
    }
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email } = userData;

    if (email) {
      if (!validateEmail(email)) {
        setLoading(false);
        return toast.error("Please enter a valid email");
      }
    }

    // if (password) {
    //   if (password.length < 6) {
    //     setLoading(false);
    //     return toast.error("Password must be up to 6 characters");
    //   }
    // }

    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/update-user`,
        userData
      );

      const data = res.data.user;

      console.log(data);
      setLoading(false);

      // console.log(`${data?.firstname[0]}${data?.lastname[0]}`);

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
      setLoading(false);
      console.log(error);

      toast.error(message);
    }

    // try {
    //   const data = await updateUser(formData);

    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       name: data?.name,
    //       email: data?.email,
    //       photo: data?.photo,
    //     })
    //   );

    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    // }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Profile
      </h1>

      <div className=" bg-white w-[90%] md:w-[45%] mx-auto p-5">
        {/* form */}
        <div className=" mt-4">
          <div className="w-[90%] md:w-[45%] mx-auto ">
            {/* image change */}
            <div className=" flex  justify-center items-center mt-6 ">
              {imagePreview != null ? (
                <div>
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
                      className=" bg-green-600 text-white py-2.5 w-40 ml-5 rounded-md disabled:bg-green-300"
                    >
                      Uploading
                    </button>
                  ) : (
                    <button
                      onClick={handleUpload}
                      className=" bg-green-600 text-white py-2.5 w-40 ml-5 rounded-md"
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
          </div>

          <form onSubmit={handleSubmit} className=" my-14 ">
            <div className="relative my-7">
              <input
                type="text"
                name="name"
                id="name"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
                defaultValue={user?.name}
              />
              <label
                htmlFor="name"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Your Name
              </label>
            </div>

            <div className="relative my-7 lg:my-11">
              <input
                type="email"
                name="email"
                id="email"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
                defaultValue={user?.email}
              />
              <label
                htmlFor="email"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Email
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
              disabled={loading}
              type="submit"
              className=" bg-green-600 text-white rounded-lg text-sm w-full p-3 text-center font-medium disabled:opacity-95"
            >
              {loading ? "Loading" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
