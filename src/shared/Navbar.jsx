import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHamburger, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-orange-600">
          <FaHamburger className="text-3xl" />
          <span>Foodie</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "hover:text-orange-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-orange-600" />
          <FaUserCircle className="text-2xl cursor-pointer hover:text-orange-600" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-orange-600"
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `transition duration-200 ${
                      isActive
                        ? "text-orange-600 font-semibold"
                        : "hover:text-orange-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <div className="flex gap-5 pt-3">
              <FaShoppingCart className="text-2xl cursor-pointer hover:text-orange-600" />
              <FaUserCircle className="text-2xl cursor-pointer hover:text-orange-600" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
