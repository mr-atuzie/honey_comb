import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Pay = ({ handleInvest, amount }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.email,
      phone_number: "070********",
      name: user.name,
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Invest Now",
    callback: (response) => {
      console.log(response);
      if (response.status === "completed") {
        handleInvest();
        toast.success("Transaction successfull");
        navigate("/user/investments");
      } else {
        toast.error("Transaction failed");
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("closed by user");
    },
  };

  return (
    <FlutterWaveButton
      className="text-white text-sm lg:text-lg bg-[#08432d]  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4"
      {...fwConfig}
    />
  );
};

export default Pay;
