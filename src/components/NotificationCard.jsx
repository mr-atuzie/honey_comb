import React from "react";

const NotificationCard = () => {
  return (
    <div className=" lg:w-[75%] lg:mx-auto bg-white mb-2 lg:mb-4">
      <div className="w-[90%] mx-auto">
        <div className=" py-4">
          <div className=" ">
            <p className=" text-sm lg:text-base  text-green-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              tempora odit dolor.
            </p>
            <p className=" text-xs my-1 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id
              accusamus accusantium alias. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sint id accusamus accusantium alias.
            </p>
            <p className=" text-xs lg:text-sm text-gray-700 mt-1a">
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
