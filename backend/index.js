const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const cors = require("cors");
const { ProductRouter } = require("./routes/Productroutes");
const { AdminRouter } = require("./routes/admin.routes");
const { UserRouter } = require("./routes/user.routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allows frontend to talk to backend

// Routes
app.use("/products", ProductRouter);
app.use("/admin", AdminRouter);
app.use("/user", UserRouter);

// Force Port 8080 if not specified in .env
const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
    console.log(`Server is running on port ${PORT}`);
  } catch (err) {
    console.log("Failed to connect to Database");
    console.log(err);
  }
});