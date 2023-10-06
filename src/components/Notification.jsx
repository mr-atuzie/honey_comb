import React from "react";

const Notification = () => {
  const notifications = [1, 2, 3, 4, 5];
  return (
    <div className=" bg-white shadow-lg rounded-sm">
      <div className=" border-b-2 border-gray-100 px-5 py-3">
        <h2 className=" font-medium text-lg  lg:text-xl ">Notifications</h2>
      </div>

      {notifications.map((not) => {
        return (
          <div key={not} className="  px-5 py-3 border-b-2 border-gray-100">
            <div className="">
              <h3 className=" text-sm lg:text-base text-green-500  font-medium">
                {" "}
                Hot new deal, Enter (0R45B6A) to get 25% discount on all
                transactions.
              </h3>
            </div>

            <p className=" text-xs my-1 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id
              accusamus accusantium alias.
            </p>
            <p className=" text-xs text-gray-500 ">2 hours ago</p>
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
