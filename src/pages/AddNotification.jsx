import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import AdminHeader from "../components/AdminHeader";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const AddNotification = ({ placeholder }) => {
  const initialState = {
    title: "",
    desc: "",
  };

  // var toolbarOptions = [
  //   ["bold", "italic", "underline", "strike"], // toggled buttons
  //   ["blockquote", "code-block"],

  //   [{ header: 1 }, { header: 2 }], // custom button values
  //   [{ list: "ordered" }, { list: "bullet" }],
  //   [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  //   [{ direction: "rtl" }], // text direction

  //   [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  //   [{ header: [1, 2, 3, 4, 5, 6, false] }],

  //   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //   [{ font: [] }],
  //   [{ align: [] }],

  //   ["clean"], // remove formatting button
  // ];

  // const module = {
  //   toolbar: toolbarOptions,
  // };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  // const [value, setValue] = useState("");
  const { title, desc } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!title || !desc) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    const userData = { title, desc };

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/add-notification`,
        userData,
        {
          withCredentials: true,
        }
      );

      setLoading(false);

      toast.success("Notification sent");
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
  };

  // console.log(value);

  return (
    <div>
      <AdminHeader />
      <form
        onSubmit={handleSubmit}
        className=" lg:w-[60%] bg-white rounded shadow-lg my-16 p-10 mx-auto"
      >
        <div className=" mb-14 ">
          <h2 className="text-xl lg:text-4xl font-bold text-[#08432d]">
            Add Notification
          </h2>
        </div>

        <div className="relative my-7">
          <input
            type="text"
            name="title"
            id="title"
            className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={title}
            onChange={handleInputChange}
            placeholder=""
          />
          <label
            htmlFor="name"
            className="absolute  text-gray-500 scale-75 -top-4 lg:text-lg   bg-white px-2  left-1"
          >
            Title
          </label>
        </div>

        <div className="relative mt-10">
          <textarea
            name="desc"
            id="desc"
            className="block px-2.5 py-3 lg:p-4 w-full h-52  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={desc}
            placeholder="Start typing.."
            onChange={handleInputChange}
          ></textarea>
          <label
            htmlFor="name"
            className="absolute  text-gray-500 scale-75 -top-4 lg:text-lg bg-white px-2  left-1"
          >
            Message
          </label>
        </div>

        {/* <ReactQuill
          className=" h-52 my-10"
          theme="snow"
          value={value}
          onChange={setValue}
        /> */}

        <button
          className=" w-full rounded text-center py-3.5 mt-10 bg-[#08432d] text-white "
          type="submit"
        >
          {loading ? "Loading" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default AddNotification;
