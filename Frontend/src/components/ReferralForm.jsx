import React, { useState } from "react";

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referredBy: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.referredBy
    ) {
      setError("All fields except 'Message' are required.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/referrals/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess("Referral submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          referredBy: "",
          message: "",
        });
      } else {
        setError("Something went wrong! Try again.");
      }
    } catch (error) {
      setError("Server error! Please try later.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Refer a Friend
      </h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {success && (
        <p className="text-green-500 text-sm text-center">{success}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="referredBy"
          placeholder="Referred By (Referrer's Name or ID)"
          value={formData.referredBy}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Additional Message (Optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Referral
        </button>
      </form>
    </div>
  );
};

export default ReferralForm;
