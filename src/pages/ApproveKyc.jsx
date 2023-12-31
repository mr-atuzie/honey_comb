import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import AdminHeader from "../components/AdminHeader";

const ApproveKyc = () => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDocs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/pending-kyc`,
        {
          withCredentials: true,
        }
      );

      setDocs(res.data.users);
      setLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      toast.error(message);
    }
  };

  useEffect(() => {
    getDocs();
  }, []);

  const approvekyc = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/approve-kyc/${id}`,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      toast.success("Kyc has been accepteced");
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

  const disapprovekyc = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/disapprove-kyc/${id}`,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      toast.success("Kyc has been rejected");
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <AdminHeader />
      <div className=" my-9 lg:my-11">
        <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl ">
          Approve Documents
        </h1>
        {docs?.length < 1 && (
          <p className=" text-gray-500 my-3">No pending Kyc</p>
        )}
      </div>

      <div className=" grid  grid-cols-4 gap-8">
        {docs.map((doc) => {
          return (
            <div className=" bg-gray-50 shadow-lg  rounded" key={doc._id}>
              <img
                className=" rounded-t w-full border-b-2 border-gray-200  h-[200px] "
                src={doc.document.image}
                alt="kyc"
              />

              <div className=" p-3">
                <div className=" flex items-center gap-3">
                  <p className=" text-sm font-medium uppercase">Name:</p>
                  <p className=" capitalize font-medium text-gray-600">
                    {doc.firstname} {doc.lastname}
                  </p>
                </div>

                <div className=" flex items-center gap-3">
                  <p className=" text-sm font-medium uppercase">type:</p>
                  <p className=" font-medium text-gray-600">
                    {doc.document.idType}
                  </p>
                </div>
                <div className=" mt-4 flex gap-2 ">
                  <button
                    className=" text-white bg-green-600   py-2 lg:py-3 text-center font-medium rounded text-xs lg:text-sm px-4 lg:px-8"
                    onClick={() => approvekyc(doc._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="text-white bg-red-600   py-2 lg:py-3 text-center font-medium rounded  text-xs  lg:text-sm px-4 lg:px-8"
                    onClick={() => disapprovekyc(doc._id)}
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApproveKyc;
