const express = require("express");
const connectDB = require("./config/db");
const referralRoutes = require("./routes/referralRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

// CORS Configuration
const corsOptions = {
  origin: "https://accrediancom.vercel.app",
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/referrals", referralRoutes);
app.use(errorHandler);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
