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
      <div className="mx-auto h-screen">
        <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
          Notifications
        </h1>

        {notifications?.length < 1 && (
          <p className=" text-gray-500">No Notification</p>
        )}

        <div>
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
