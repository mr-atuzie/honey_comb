import React from "react";
import NotificationCard from "../components/NotificationCard";

const Notifications = () => {
  return (
    <div>
      <div className="mx-auto">
        <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
          Notifications
        </h1>

        <div>
          <div className="lg:w-[75%] lg:mx-auto font-medium my-4">
            <h2 className=" font-semibold lg:text-xl">Today</h2>
          </div>

          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />

          <div className="lg:w-[75%] lg:mx-auto  font-medium my-6 lg:my-14">
            <h2 className=" font-semibold lg:text-xl">Older notification</h2>
          </div>

          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
