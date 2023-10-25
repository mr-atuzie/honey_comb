import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Notification = () => {
  const { id } = useParams();
  const [notification, setNotification] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNotifications = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/notification/${id}`,
          {
            withCredentials: true,
          }
        );

        setNotification(res.data);
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
    getNotifications();
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" h-screen ">
      <div className=" bg-white  md:w-[45%] shadow-lg mx-auto my-16  p-3 lg:p-5">
        <h1 className=" font-semibold text-sm lg:text-base text-green-600 capitalize mb-2">
          {notification?.title}
        </h1>
        <p className=" text-xs lg:text-sm text-gray-600">
          {notification?.desc}
        </p>
      </div>
    </div>
  );
};

export default Notification;
