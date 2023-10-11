import axios from "axios";
import { toast } from "react-toastify";

export const updateUser = async (formData) => {
  try {
    const res = await axios.patch(
      `${BACKEND_URL}/api/v1/user/update-user`,
      formData
    );

    if (res.statusText === "OK") {
      toast.success("successful");
    }

    return res.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    console.log(error);

    toast.error(message);
  }
};
