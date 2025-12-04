import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(cookieParser());

await connectDB();

app.get("/", (req, res) => {
  res.send("Should return all products");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
