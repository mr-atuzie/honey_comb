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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users-list" element={<UsersList />} />
          <Route path="transactions" element={<AdminTransactions />} />
          <Route path="add-notifications" element={<AddNotification />} />
        </Route>
        <Route path="approve-kyc/:token" element={<ApproveKyc />} />
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-kyc" element={<Kyc />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
