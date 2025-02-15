const Referral = require("../models/referralModel");
const sendEmail = require("../config/emailService");
const validateReferral = require("../utils/validateReferral");

exports.createReferral = async (req, res) => {
  try {
    const { isValid, errors } = validateReferral(req.body);
    if (!isValid) return res.status(400).json({ errors });

    // Check if the email already exists
    const existingReferral = await Referral.findOne({ email: req.body.email });
    if (existingReferral) {
      return res.status(400).json({ message: "Referral already sent for this email." });
    }

    const newReferral = await Referral.create(req.body);

    // Send email notification
    await sendEmail(
      newReferral.email,
      "Referral Received",
      `Thank you for your referral, ${newReferral.name}!`
    );

    res.status(201).json({
      message: "Referral submitted successfully",
      referral: newReferral,
    });
  } catch (error) {
    console.error("Error creating referral:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
