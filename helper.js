import { client } from "./index.js";

export async function getMovieByID(id) {
  return await client.db("b30wd").collection("movies").findOne({ id: id });
}

export async function getAllMovies() {
  return await client.db("b30wd").collection("movies").find({}).toArray();
}

export async function editMoviebyID(id, updateData) {
  return await client
    .db("b30wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateData });
}
export async function createMovies(data) {
  return await client.db("b30wd").collection("movies").insertMany(data);
}

export async function deleteMoviebyID(id) {
  return await client.db("b30wd").collection("movies").deleteOne({ id: id });
}
