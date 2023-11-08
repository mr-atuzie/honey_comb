import moment from "moment";
import React from "react";

const UserReferral = ({ referrals }) => {
  return (
    <div className=" p-5 bg-white shadow-lg rounded mb-10 lg:mb-0">
      <div className=" mb-6 ">
        <p className=" font-medium  lg:text-xl ">Referrals</p>
        <p className=" text-xs text-gray-500 ">{referrals?.length} Referrals</p>
      </div>

      <div>
        {referrals?.length >= 1 &&
          referrals.map((referral) => {
            return (
              <div
                key={referral._id}
                className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2"
              >
                <div>
                  <p className=" text-xs lg:text-base">{referral.name}</p>
                  <p className=" text-gray-700 text-xs lg:text-sm">
                    {moment(referral.createdAt).format("MMM Do YYYY")}
                  </p>
                </div>

                <p className=" text-gray-600 font-medium text-sm lg:text-base">
                  <span className=" m">+</span> &#8358;
                  {new Intl.NumberFormat().format(referral?.amount)}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserReferral;
