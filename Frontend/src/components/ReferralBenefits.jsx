import React, { useState, useMemo } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { RxSwitch } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi"; // Menu icon for mobile
import { IoClose } from "react-icons/io5"; // Close icon

const ReferralBenefits = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const categories = useMemo(
    () => [
      "Product Management",
      "Business Management",
      "Fintech",
      "Data Science",
      "Digital Transformation",
      "Marketing & Analytics",
    ],
    []
  );

  const programs = useMemo(
    () => [
      {
        name: "Professional Certificate Program in Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
      },
      {
        name: "PG Certificate Program in Strategic Product Management",
        referrerBonus: "9,000",
        refereeBonus: "11,000",
      },
      {
        name: "Executive Program in Data Driven Product Management",
        referrerBonus: "10,000",
        refereeBonus: "10,000",
      },
      {
        name: "Executive Program in Product Management and Digital Transformation",
        referrerBonus: "10,000",
        refereeBonus: "10,000",
      },
      {
        name: "Advanced Certification in Business Analytics",
        referrerBonus: "8,500",
        refereeBonus: "9,500",
      },
      {
        name: "Post Graduate Program in Digital Marketing",
        referrerBonus: "7,500",
        refereeBonus: "8,500",
      },
      {
        name: "Certificate Program in Fintech & Blockchain",
        referrerBonus: "9,500",
        refereeBonus: "10,500",
      },
    ],
    []
  );

  return (
    <div className="p-6 bg-gray-100 rounded-lg max-w-full flex justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 text-center">
          What Are The <span className="text-blue-600">Referral Benefits?</span>
        </h2>

        {/* Enrolled Toggle */}
        <div className="w-full flex justify-end items-center gap-2 pb-4">
          <span>Enrolled</span>
          <RxSwitch className="w-5 h-5 " />
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Mobile Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            <HiMenuAlt2 className="mr-2" /> Categories
          </button>

          {/* Sidebar (Mobile & Desktop) */}
          <CategoryList
            categories={categories}
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />

          {/* Programs Table */}
          <ProgramTable programs={programs} />
        </div>

        {/* Show More Button */}
        <div className="flex w-full justify-end">
          <button className="flex items-center border border-gray-500 px-4 py-2 mt-4 ml-auto rounded-md">
            <span className="text-end text-gray-400">Show More</span>
            <IoIosArrowDown className="ml-2" />
          </button>
        </div>

        {/* Refer Now Button */}
        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg font-semibold"
          aria-label="Refer Now"
        >
          Refer Now
        </button>
      </div>
    </div>
  );
};

// Category Sidebar Component
const CategoryList = ({ categories, isOpen, toggleSidebar }) => (
  <>
    {/* Sidebar for mobile (Slide-in effect) */}
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 md:w-1/4`}
    >
      {/* Close Button for Mobile Sidebar */}
      <div className="flex justify-between items-center p-4 md:hidden">
        <h3 className="text-lg font-semibold">Categories</h3>
        <button onClick={toggleSidebar}>
          <IoClose className="text-gray-700 w-6 h-6" />
        </button>
      </div>

      {/* Category List */}
      <div className="bg-white p-6 md:p-9 shadow-md rounded-lg min-h-full flex flex-col">
        <ul>
          <li className="p-3 bg-blue-100 text-blue-900 font-semibold rounded-md text-left w-full">
            <div className="flex items-center justify-between px-2">
              All Programs
              <FaChevronRight className="text-blue-600" />
            </div>
          </li>

          {categories.map((category, index) => (
            <li
              key={index}
              className="p-3 cursor-pointer rounded-md text-left text-sm"
            >
              <div className="flex items-center justify-between px-2">
                {category}
                <FaChevronRight className="text-blue-600" />
              </div>
              {index !== categories.length - 1 && (
                <div className="border-t border-gray-300 mt-2"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Overlay when sidebar is open */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
        onClick={toggleSidebar}
      ></div>
    )}
  </>
);

// Responsive Table Component
const ProgramTable = ({ programs }) => (
  <div className="bg-white p-6 shadow-md rounded-lg w-full md:w-3/4">
    {/* Table for larger screens */}
    <div className="hidden md:block">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-3 border text-left">Programs</th>
            <th className="p-3 border text-center">Referrer Bonus</th>
            <th className="p-3 border text-center">Referee Bonus</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <tr key={index} className="border hover:bg-gray-50 transition">
              <td className="p-3 border text-left">{program.name}</td>
              <td className="p-3 border text-center">
                ₹ {program.referrerBonus}
              </td>
              <td className="p-3 border text-center">
                ₹ {program.refereeBonus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Card Layout for Smaller Screens */}
    <div className="md:hidden flex flex-col gap-4">
      {programs.map((program, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h3 className="font-semibold text-lg">{program.name}</h3>
          <p className="mt-2">
            <span className="font-medium">Referrer Bonus:</span> ₹{" "}
            {program.referrerBonus}
          </p>
          <p>
            <span className="font-medium">Referee Bonus:</span> ₹{" "}
            {program.refereeBonus}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ReferralBenefits;
