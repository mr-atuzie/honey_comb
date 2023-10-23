import React, { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../components/Loader";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNotifications = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/notifications`,
        {
          withCredentials: true,
        }
      );

      setNotifications(res.data.notifications);
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
    getNotifications();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="mx-auto">
        <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
          Notifications
        </h1>

        <div>
          {/* <div className="lg:w-[75%] lg:mx-auto font-medium my-4">
            <h2 className=" font-semibold lg:text-xl">Today</h2>
          </div> */}
          {notifications?.map((not) => {
            return (
              <NotificationCard
                key={not._id}
                id={not._id}
                title={not.title}
                desc={not.desc}
                date={not.createdAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
