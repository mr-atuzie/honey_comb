import React from "react";
import { AiFillNotification } from "react-icons/ai";

const Notification = () => {
  const notifications = [1, 2, 3, 4, 5];
  return (
    <div className=" bg-white shadow-lg rounded-sm">
      <div className=" border-b-2 border-gray-100 px-5 py-3">
        <h2 className=" font-medium text-xl">Notifications</h2>
      </div>

      {notifications.map((not) => {
        return (
          <div
            key={not}
            className=" flex gap-6 px-5 py-3 border-2 border-gray-100"
          >
            <div className=" border-2 border-yellow-500 bg-green-500 text-green-50 p-2 h-fit rounded-full">
              <AiFillNotification size={25} />
            </div>
            <div>
              <h3 className="  font-medium">
                {" "}
                Hot new deal, Enter (0R45B6A) to get 25% discount on all
                transactions.
              </h3>
              <p className=" text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id
                accusamus accusantium alias.
              </p>
              <p className=" text-xs text-gray-600 mt-3">2 hours ago</p>
            </div>
          </div>
        );
      })}

      <div className=" border-t-2 border-gray-100 px-5 py-3">
        <h2 className="  text-green-600">View all notifications</h2>
      </div>
    </div>
  );
};

export default Notification;
