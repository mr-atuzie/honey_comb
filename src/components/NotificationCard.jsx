import React from "react";

const NotificationCard = () => {
  return (
    <div className=" lg:w-[75%] lg:mx-auto bg-blue-50 mb-2 lg:mb-4">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className=" flex items-center  py-4">
          <img
            className=" w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
            src="https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
            alt=""
          />

          <div className=" ml-2">
            <p className=" text-sm lg:text-base  text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              tempora odit dolor.
            </p>
            <p className=" text-xs lg:text-sm text-gray-700 mt-1">
              Febuary 23,2029
              {/* {moment(createdAt.toDate()).format("MMM Do YY")} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
