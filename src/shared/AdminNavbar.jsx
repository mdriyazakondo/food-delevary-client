import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdInventory,
  MdPeople,
  MdLogout,
  MdMenu,
  MdClose,
  MdHome,
} from "react-icons/md";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
    { name: "Home", path: "/", icon: <MdHome /> },
    { name: "Products", path: "/dashboard/products", icon: <MdInventory /> },
    { name: "Users", path: "/dashboard/users", icon: <MdPeople /> },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gray-800 text-white transition-all duration-300 flex flex-col`}
    >
      {/* Logo + Toggle Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1
          className={`text-2xl font-bold transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          AdminPanel
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          {isOpen ? (
            <MdClose className="cursor-pointer" />
          ) : (
            <MdMenu className="cursor-pointer" />
          )}
        </button>
      </div>

      {/* Menu Links */}
      <nav className="flex flex-col gap-2 mt-4 px-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 py-2 px-3 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span
              className={`text-base font-medium transition-all duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto mb-4 px-3">
        <button className="flex items-center gap-3 py-2 px-3 w-full rounded-md text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200">
          <MdLogout className="text-xl" />
          <span
            className={`text-base font-medium ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
