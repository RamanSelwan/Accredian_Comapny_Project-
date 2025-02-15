import React from "react";

import { MdAssignmentAdd } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { MdRateReview } from "react-icons/md";

const ReferEarnPage = () => {
  return (
    <div className="mt-12 bg-blue-100 p-6 rounded-lg shadow-lg w-full text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        How Do I <span className="text-blue-600">Refer?</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-gray-100 p-6 rounded-full shadow-md flex flex-col items-center justify-center w-60 h-60 text-center"
          >
            <div className="text-blue-600 text-3xl mb-2">{step.icon}</div>
            <p className="text-gray-700 text-xs text-center px-2">
              {step.text}
            </p>
          </div>
        ))}
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 mt-10 md:mt-20 rounded-md font-semibold w-50">
        Refer Now
      </button>
    </div>
  );
};

const steps = [
  {
    icon: <MdAssignmentAdd />,
    text: "Submit referrals easily via our website’s referral section.",
  },
  {
    icon: <LuNotebookPen />,
    text: "Earn rewards once your referral joins an Accredian program.",
  },
  {
    icon: <MdRateReview />,
    text: "Referrer receives a bonus 30 days after program enrollment.",
  },
];

export default ReferEarnPage;
