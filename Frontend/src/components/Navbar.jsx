import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5"; 
import { FiMenu } from "react-icons/fi"; 
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-blue-100 text-black text-sm flex justify-center items-center py-2">
        <p className="text-center px-4">
          Navigate your ideal career path with tailored expert advice &nbsp;
          <Link to="/contact" className="text-blue-600 font-semibold">
            Contact Expert
          </Link>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Left Side - Logo & Dropdown */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              accredian
            </Link>
            <p className="hidden sm:block text-xs text-gray-500">
              credentials that matter
            </p>

            {/* Courses Dropdown */}
            <div className="relative group hidden md:block z-10">
              <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                Courses <IoIosArrowDown className="ml-2" />
              </button>
            </div>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Right Side - Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/refer" className="text-gray-700 hover:text-black">
              Refer & Earn
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-black">
              Resources
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black">
              About Us
            </Link>
            <Link to="/login" className="bg-gray-200 px-4 py-1 rounded">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Try for free
            </Link>
          </div>
        </div>

        {/* Mobile Menu - Slide In from Right */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-10 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-gray-700">
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center py-4 gap-6">
            <Link
              to="/refer"
              className="text-gray-700 hover:text-black"
              onClick={toggleMenu}
            >
              Refer & Earn
            </Link>
            <Link
              to="/resources"
              className="text-gray-700 hover:text-black"
              onClick={toggleMenu}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-black"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/login"
              className="bg-gray-200 px-4 py-1 rounded"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-1 rounded"
              onClick={toggleMenu}
            >
              Try for free
            </Link>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
