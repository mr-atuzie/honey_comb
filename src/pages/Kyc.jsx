import axios from "axios";
import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";
import { toast } from "react-toastify";

const Kyc = () => {
  const [productImage, setProductImage] = useState("");
  const [idType, setIdType] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const docs = [
    "NIN",
    "Drivers licence",
    "Nepa Bill",
    "Voters card",
    "ID Card",
  ];

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productImage || !idType) {
      toast.error("All fields are required");
    } else {
      setLoading(true);

      try {
        const formData = new FormData();
        formData.append("image", productImage);
        formData.append("idType", idType);

        console.log(...formData);
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/add-kyc`,
          formData
        );

        // if (res.statusText === "OK") {
        // }
        toast.success("Document uploaded succesfully");

        // const data = await uploadPic(formData);
        // console.log(data);

        // console.log(res.data);

        setLoading(false);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(error);
        setLoading(false);
        toast.error(message);
      }
    }
  };

  return (
    <div className=" w-full  h-screen ">
      <div className=" my-10 lg:my-16">
        <h2 className="text-xl lg:text-4xl font-bold text-green-600 ">
          Add Document
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" bg-white p-5 lg:w-[50%] mx-auto"
      >
        <div className="relative mb-7">
          <select
            name="type"
            id="type"
            className=" bg-gray-100  w-full  mt-1 lg:mt-3  rounded-lg  border border-gray-300 text-gray-700  p-3 "
            onChange={(e) => setIdType(e.target.value)}
          >
            <option>Select Document</option>
            {docs.map((doc, index) => {
              return (
                <option key={index} value={doc}>
                  {doc}
                </option>
              );
            })}
          </select>
          <label
            htmlFor="type"
            className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
          ></label>
        </div>

        {imagePreview != null ? (
          <div className="  h-[300px] mb-5 rounded-sm lg:mt-12">
            <img
              src={imagePreview}
              className=" w-full h-full object-cover"
              alt="id"
            />
          </div>
        ) : (
          <div className=" border-2 bg-gray-100 rounded-sm  lg:mt-12 flex justify-center items-center  border-dashed h-52 mb-5">
            <label
              htmlFor="image"
              className=" cursor-pointer flex justify-center items-center flex-col"
            >
              <BsUpload className=" text-gray-400 text-center" size={30} />
              <p className=" text-gray-500 text-xs lg:text-sm mt-2 text-center">
                Click to upload file
              </p>
            </label>

            <input
              type="file"
              name="image"
              id="image"
              className=" hidden"
              onChange={(e) => handleImageChange(e)}
            />
          </div>
        )}

        <p className=" text-xs lg:text-sm text-gray-500">
          Accepted file type: jpg , png and svg
        </p>
        <button
          disabled={loading}
          className=" w-full text-center py-3.5 my-10  bg-[#08432d] rounded-lg text-white disabled:bg-green-300 "
          type="submit"
        >
          {loading ? "Loading" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Kyc;
