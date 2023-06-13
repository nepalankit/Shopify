import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("api is running.");
});

app.use("/api/products", productRoutes); //linking endpoint to productroute
// Error handling middleware
app.use(notFound);

// Custom error handling middleware
app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port 8000`)
);
