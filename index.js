//const express = require("express"); // "type":"common"
import express from "express"; // "type": "module",
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

import { moviesRouter } from "./routes/movies.js";
import { usersRouter } from "./routes/users.js";
dotenv.config();

console.log(process.env.MONGO_URL);
const app = express();
const PORT = process.env.PORT;

app.use(cors()); // to give data to all users
//Middle ware -> Intercept -> converting body to json // third- party middelware
app.use(express.json()); //inbuilt middleware

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
app.use("/users", usersRouter);

//Mobiles App

app.get("/mobiles", async function (req, res) {
  const mobiles = await client
    .db("b30wd")
    .collection("mobiles")
    .find({})
    .toArray();
  res.send(mobiles);
});

app.post("/mobiles", async function (req, res) {
  const data = req.body;
  const result = await client
    .db("b30wd")
    .collection("mobiles")
    .insertMany(data);
  res.send(result);
});

app.listen(PORT, () => console.log(`Server Started in Port ${PORT}`));

// genPassword("password@123");
