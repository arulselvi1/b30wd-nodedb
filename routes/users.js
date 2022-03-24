import express from "express";
import bcrypt from "bcrypt";
import { createUser, getUserByName } from "../helper.js";
const router = express.Router();

async function genPassword(password) {
  const salt = await bcrypt.genSalt(10); //no of rounds
  const hashPassword = await bcrypt.hash(password, salt);
  console.log({ salt, hashPassword });
  return hashPassword;
}

router.post("/signup", async function (request, response) {
  //db.users.insertOne(data)
  const { username, password } = request.body;
  // send the data's through body
  const hashPassword = await genPassword(password);
  const newUser = {
    username: username,
    password: hashPassword,
  };

  const result = await createUser(newUser);
  response.send(result);
});

router.post("/login", async function (request, response) {
  const { username, password } = request.body;
  //db.user.findOne({username : "tamil"})
  const userFromDB = await getUserByName(username);
  console.log(userFromDB);
  if (!userFromDB) {
    response.status(401).send({ message: "Invalid credentials" });
  } else {
    const storedPassword = await userFromDB.password; // hashed password
    const isPasswordMatch = await bcrypt.compare(password, storedPassword);

    console.log("isPasswordMatch :", isPasswordMatch);
    if (isPasswordMatch) {
      response.send({ message: " Successfull login" });
    } else {
      response.status(401).send({ message: "Invalid credentials" });
    }

    // response.send(userFromDB);
  }
});

export const usersRouter = router;
