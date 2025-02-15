import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">accredian</h2>
            <p className="text-sm text-gray-400">credentials that matter</p>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded text-white text-sm">
            Schedule 1-on-1 Call Now
          </button>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program, index) => (
              <div key={index} className="flex justify-between py-1 text-white cursor-pointer">
                {program} <IoIosAdd className="text-white" />
              </div>
            ))}
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              Email us (For Data Science Queries): <span className="text-gray-300">admissions@accredian.com</span>
            </p>
            <p className="text-gray-400 text-sm">
              Email us (For Product Management Queries): <span className="text-gray-300">pmp@accredian.com</span>
            </p>
            <p className="text-gray-400 text-sm">
              Data Science Admission Helpline: <span className="text-gray-300">+91 9079653292 (9 AM - 7 PM)</span>
            </p>
            <p className="text-gray-400 text-sm">
              Product Management Helpline: <span className="text-gray-300">+91 9625811095</span>
            </p>
            <p className="text-gray-400 text-sm">
              Enrolled Student Helpline: <span className="text-gray-300">+91 7969322507</span>
            </p>
            <p className="text-gray-400 text-sm">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
            </p>
            <h4 className="text-white font-semibold mt-4">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <FaFacebookF className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
            </div>
          </div>

          {/* Accredian */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accredian</h3>
            {[
              "About",
              "Career",
              "Blog",
              "Admission Policy",
              "Referral Policy",
              "Privacy Policy",
              "Terms Of Service",
              "Master FAQs",
            ].map((item, index) => (
              <p key={index} className="text-gray-400 text-sm cursor-pointer hover:text-gray-300">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-gray-500 text-center text-sm mt-6 border-t border-gray-700 pt-4">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
