import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.get("/api/products", (req, res) => {
  res.send("Should return all products");
});

app.listen(port, async () => {
  await connectDB();
  console.log(`Server running on port ${port}`);
});
