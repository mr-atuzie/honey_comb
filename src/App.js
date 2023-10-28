import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Kyc from "./pages/Kyc";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import UserLayout from "./components/UserLayout";
import UserDashboard from "./pages/UserDashboard";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import UsersList from "./pages/UsersList";
import AdminTransactions from "./pages/AdminTransactions";
import AddNotification from "./pages/AddNotification";
import Support from "./pages/Support";
import ApproveKyc from "./pages/ApproveKyc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Terms from "./pages/Terms";
import Packages from "./components/Packages";
import PackagesPage from "./pages/Packages";
import UserProfile from "./pages/UserProfile";
import Cm from "./pages/Cm";
import AdminStat from "./pages/AdminStat";
import Search from "./pages/Search";
import How from "./pages/How";
import Cont from "./pages/Cont";
import Referral from "./pages/Referral";
import Withdraw from "./pages/Withdraw";
import AdminWithdraw from "./pages/AdminWithdraw";
import Notification from "./pages/Notification";
import Private from "./components/Private";
import AdminRegister from "./pages/AdminRegister";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_LOGIN } from "./redux/features/authSlice";
import EmailSent from "./pages/EmailSent";
import VerifyEmail from "./pages/VerifyEmail";
import AdminLogin from "./pages/AdminLogin";
import Invest from "./pages/Invest";

function App() {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  useEffect(() => {
    const getLoginStatus = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/login-status`,
          {
            withCredentials: true,
          }
        );

        const loginStatus = res.data;

        dispatch(SET_LOGIN(loginStatus));
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
    getLoginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<How />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<Cont />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/verify-email/:id" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/terms-and-condition" element={<Terms />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<Private />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="statistics" element={<AdminStat />} />
            <Route path="users-list" element={<UsersList />} />
            <Route path="transactions" element={<AdminTransactions />} />
            <Route path="add-notifications" element={<AddNotification />} />
            <Route path="approve-kyc" element={<ApproveKyc />} />
            <Route path="user-profile/:id" element={<UserProfile />} />
            <Route path="content-management" element={<Cm />} />
            <Route path="search" element={<Search />} />
            <Route path="withdraw" element={<AdminWithdraw />} />
            <Route path="register" element={<AdminRegister />} />
          </Route>
        </Route>

        <Route element={<Private />}>
          <Route path="/user" element={<UserLayout />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="notification/:id" element={<Notification />} />
            <Route path="packages" element={<Packages />} />
            <Route path="profile" element={<Profile />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="support" element={<Support />} />
            <Route path="add-kyc" element={<Kyc />} />
            <Route path="referrals" element={<Referral />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="invest/:type" element={<Invest />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
