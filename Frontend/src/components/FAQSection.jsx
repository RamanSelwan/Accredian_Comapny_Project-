import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FAQSection = () => {
  const faqs = [
    {
      question:
        "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      answer:
        "No, the program is designed to be inclusive of all levels of experience...",
    },
    {
      question: "What is the minimum system configuration required?",
      answer: "Minimum 4GB RAM, i3 Processor or equivalent, stable internet.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mt-10 px-4 md:px-0">
      <h2 className="text-2xl font-semibold text-center">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="flex flex-col md:flex-row w-full md:w-3/4 mt-6">
        {/* Sidebar */}
        <FAQCategories />

        {/* FAQ List */}
        <div className="mt-6 md:mt-0 md:ml-6 w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>

      {/* Get in Touch Banner */}
      <GetInTouchBanner />
    </div>
  );
};

const FAQCategories = () => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-auto">
      {["Eligibility", "How To Use?", "Terms & Conditions"].map(
        (category, index) => (
          <button
            key={index}
            className="p-3 text-center font-semibold border border-black rounded-lg shadow-xl hover:text-blue-400"
          >
            {category}
          </button>
        )
      )}
    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 pb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between py-2 font-medium"
      >
        <span className={`${isOpen ? "text-blue-600" : "text-gray-900"}`}>
          {faq.question}
        </span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen && <p className="text-gray-700 text-sm">{faq.answer}</p>}
    </div>
  );
};

const GetInTouchBanner = () => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center w-full md:w-3/4 mt-8">
      <div className="mb-4 md:mb-0">
        <h3 className="text-lg font-semibold">
          Want to delve deeper into the program?
        </h3>
        <p className="text-sm">
          Share your details to receive expert insights from our program team!
        </p>
      </div>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
        Get in touch →
      </button>
    </div>
  );
};

export default FAQSection;
