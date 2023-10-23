import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const NotificationCard = ({ title, desc, date, id }) => {
  return (
    <Link to={`/user/notification/${id}`}>
      <div className=" lg:w-[75%] lg:mx-auto bg-white mb-2 lg:mb-4">
        <div className="w-[90%] mx-auto">
          <div className=" py-4">
            <div className=" ">
              <p className=" text-sm lg:text-base  text-green-500 ">{title}</p>
              <p className=" text-xs my-2 lg:text-sm">{desc}</p>
              <p className=" text-xs lg:text-sm text-gray-700 mt-1a">
                {moment(date).format("MMM Do YY")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NotificationCard;
