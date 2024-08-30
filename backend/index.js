// const express = require('express');
import express from 'express';
import dotenv from "dotenv";

import { connectDB } from './db/connectDB.js';

import authRoutes from "./routes/auth.route.js"

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world 1234");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("server is running on port 3000")
});




// BmF3BjNHdkO4OBl0
// hnagle0

