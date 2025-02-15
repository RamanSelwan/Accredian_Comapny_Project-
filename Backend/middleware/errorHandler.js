module.exports = (err, req, res, next) => {
  console.error(`[Error]: ${err.message}`);

  // Determine status code (default to 500 if not set)
  const statusCode = err.statusCode || 500;

  // Send structured error response
  res.status(statusCode).json({
    success: false,
    error: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Show stack trace in development mode
  });
};
