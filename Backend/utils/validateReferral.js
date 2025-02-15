module.exports = (data) => {
  const errors = {};
  if (!data.name) errors.name = "Name is required";
  if (!data.email) errors.email = "Email is required";
  if (!data.phone) errors.phone = "Phone number is required";
  if (!data.referredBy) errors.referredBy = "Referrer is required";

  return { isValid: Object.keys(errors).length === 0, errors };
};
