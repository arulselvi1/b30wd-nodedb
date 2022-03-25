import { client } from "./index.js";
import { ObjectId } from "mongodb";
export async function getMovieByID(id) {
  return await client
    .db("b30wd")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}

export async function getAllMovies() {
  return await client.db("b30wd").collection("movies").find({}).toArray();
}

export async function editMoviebyID(id, updateData) {
  return await client
    .db("b30wd")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: updateData });
}
export async function createMovies(data) {
  return await client.db("b30wd").collection("movies").insertMany(data);
}

export async function createUser(data) {
  return await client.db("b30wd").collection("users").insertOne(data);
}
export async function deleteMoviebyID(id) {
  return await client
    .db("b30wd")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}

export async function getUserByName(username) {
  return await client
    .db("b30wd")
    .collection("users")
    .findOne({ username: username });
}
