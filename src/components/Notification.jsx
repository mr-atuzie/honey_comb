import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/notifications`,
        {
          withCredentials: true,
        }
      );

      setNotifications(res.data.notifications);
    } catch (error) {
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
    getNotifications();
  }, []);
  return (
    <div className=" bg-white shadow-lg rounded-sm">
      <div className=" border-b-2 border-gray-100 px-5 py-3">
        <h2 className=" font-medium text-lg  lg:text-xl ">Notifications</h2>
      </div>

      {notifications?.map((not) => {
        return (
          <div key={not._id} className="  px-5 py-3 border-b-2 border-gray-100">
            <div className="">
              <h3 className=" text-sm lg:text-base text-green-500  font-medium">
                {not.title}
              </h3>
            </div>

            <p className=" text-xs my-1 lg:text-sm">{not.desc}</p>
            <p className=" text-xs text-gray-500 ">
              {" "}
              {moment(not.createdAt).format("MMM Do YY, h:mm")}
            </p>
          </div>
        );
      })}

      <div className="text-sm border-t-2 border-gray-100 px-5 py-3">
        <h2 className="  text-green-600">View all notifications</h2>
      </div>
    </div>
  );
};

export default Notification;
