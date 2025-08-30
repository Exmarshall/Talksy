import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Marshall!");
});


app.listen(ENV.PORT, () => {
  console.log("Server is running on port:", ENV.PORT);
  connectDB()
});


//XqbqkdxQcEdlX90z