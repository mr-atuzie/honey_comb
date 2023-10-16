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
import Terms from "./pages/Terms";
import Packages from "./components/Packages";
import UserProfile from "./pages/UserProfile";
import Cm from "./pages/Cm";

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
        <Route path="/terms-and-condition" element={<Terms />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users-list" element={<UsersList />} />
          <Route path="transactions" element={<AdminTransactions />} />
          <Route path="add-notifications" element={<AddNotification />} />
          <Route path="approve-kyc" element={<ApproveKyc />} />
          <Route path="user-profile/:id" element={<UserProfile />} />
          <Route path="content-management" element={<Cm />} />
        </Route>

        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="packages" element={<Packages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="support" element={<Support />} />
          <Route path="add-kyc" element={<Kyc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
