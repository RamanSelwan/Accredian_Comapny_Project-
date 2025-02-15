import React, { useState } from "react";
import HeroImg from "../assests/Anniversary (7) 1.png";
import Note1 from "../assests/rightNote.png";
import Note2 from "../assests/leftNote.png";
import Note3 from "../assests/aboveMobile.png";
import Note4 from "../assests/bleowMobile.png";
import Note5 from "../assests/BehindtheGirl.png";
import ReferralForm from "./ReferralForm";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-4 sm:px-8">
      {/* Navigation Tabs */}
      <div className="w-4/5 lg:w-3/5 h-12 flex justify-around items-center bg-blue-100 py-3 shadow-sm mt-6 sm:mt-8 rounded-full drop-shadow-lg">
        <div className="flex gap-4 sm:gap-8 text-gray-600 font-medium text-base sm:text-lg">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Refer
          </span>
          <span>Benefits</span>
          <span>FAQs</span>
          <span>Support</span>
        </div>
      </div>

      {/* Hero Section - Main Content */}
      <div className="w-full md:w-4/5 h-auto md:h-[500px] bg-white shadow-[-2px_5px_15px_11px_rgba(0,_0,_0,_0.1)] rounded-xl mt-8 sm:mt-12 flex flex-col md:flex-row items-center justify-between p-6 sm:p-12  relative">
        {/* Decorative Floating Elements */}
        <img
          src={Note1}
          alt=""
          className="absolute top-0 left-0 w-10 sm:w-16"
        />
        <img
          src={Note2}
          alt=""
          className="absolute top-0 right-0 w-10 sm:w-16"
        />

        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-black leading-tight">
            Let’s Learn & Earn
          </h1>

          <p className="text-black font-light text-lg sm:text-2xl">
            Get a chance to win
            <br /> up to{" "}
            <span className="text-blue-600 font-bold text-3xl sm:text-4xl">
              Rs. 15,000
            </span>
          </p>

          <button
            onClick={openForm}
            className="mt-4 sm:mt-6 bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Refer Now
          </button>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-full h-full md:w-1/2 flex justify-center relative z-0 mt-6 md:mt-0">
          {/* Main Image */}
          <img
            src={HeroImg}
            alt="Mobile Screenshot"
            className="object-cover w-[90%] sm:w-[100%] h-[300px] sm:h-[400px] relative z-10 scale-100 sm:scale-110"
          />

          {/* Floating Images */}
          <img
            src={Note3}
            alt=""
            className="absolute bottom-0 left-0 z-20 w-14 sm:w-24"
          />
          <img
            src={Note4}
            alt=""
            className="absolute -top-10 left-0 -z-10 w-16 sm:w-28"
          />
          <img
            src={Note5}
            alt=""
            className="absolute top-6 sm:top-10 -right-4 sm:-right-5 w-14 sm:w-24"
          />
        </div>
      </div>

      {/* Pop-up Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-red-600"
            >
              ×
            </button>
            <ReferralForm onClose={closeForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
