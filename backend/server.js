import express from "express";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

await connectDB();

app.get("/", (req, res) => {
  res.send("Should return all products");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
