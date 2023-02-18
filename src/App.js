import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LogForm from "./ComponentPages/LogForm";

// User Components
import UserAttendance from "./ComponentPages/UserPage/UserAttendance";
import UserProfile from "./ComponentPages/UserPage/UserProfile";


// Admin Components
import AdminDash from "./ComponentPages/AdminPage/AdminDash";
import AdminManage from "./ComponentPages/AdminPage/AdminManage";
import AdminReport from "./ComponentPages/AdminPage/AdminReport";
import AdminAccounts from "./ComponentPages/AdminPage/AdminAccounts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogForm />} />

          <Route path="/admin_dashboard" element={<AdminDash />} />
          <Route path="/admin_user-accounts" element={<AdminAccounts />} />
          <Route path="/admin_manage" element={<AdminManage />} />
          <Route path="/admin_report" element={<AdminReport />} />

          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/user_attendance" element={<UserAttendance />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
