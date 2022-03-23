//const express = require("express"); // "type":"common"
import express from "express"; // "type": "module",
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

import { moviesRouter } from "./routes/movies.js";

dotenv.config();

console.log(process.env.MONGO_URL);
const app = express();
const PORT = process.env.PORT;

app.use(cors()); // to give data to all users
//Middle ware -> Intercept -> converting body to json
app.use(express.json());

// const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}
export const client = await createConnection();

app.get("/", function (req, res) {
  res.send("Hello World 🌍🌏🌎 Welcome");
});

app.use("/movies", moviesRouter);

app.listen(PORT, () => console.log(`Server Started in Port ${PORT}`));
