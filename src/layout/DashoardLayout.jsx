import React from "react";

import { Outlet } from "react-router-dom";
import AdminNavbar from "../shared/AdminNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminNavbar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">Hello, Admin 👋</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="Admin"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </div>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
