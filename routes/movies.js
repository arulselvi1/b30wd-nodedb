import express from "express";

import {
  getAllMovies,
  getMovieByID,
  deleteMoviebyID,
  editMoviebyID,
  createMovies,
} from "../helper.js";
// import { auth } from "../middleware/auth.js";
const router = express.Router();
// app.get("/movies", function (req, res) {
//   //db.movies.find({}) // to find all the movies
//   res.send(movies);
// });
//db.movies.find({}) // to find all the movies
router.get("/", async function (request, response) {
  // db.movies.find({}); // find will give cursor - pagination ->convert to array(toArray method)
  const allmovies = await getAllMovies();
  response.send(allmovies);
});

router.get("/:id", async function (request, response) {
  //console.log(req.params);
  //to get one value from array we can use filter or find method.
  const { id } = request.params;
  const movieID = await getMovieByID(id);
  //const movieID = movies.find((mv) => mv.id === id);
  console.log(movieID);
  movieID
    ? response.send(movieID)
    : response.status(404).send({ message: "No such movie found" });
});

//To delete a movie
router.delete("/:id", async function (request, response) {
  //db.movies.deleteOne({id:"102"})
  const { id } = request.params;
  const deletemovie = await deleteMoviebyID(id);
  //const movieID = movies.find((mv) => mv.id === id);
  response.send(deletemovie);
});

//Update a movie data
router.put("/:id", async function (request, response) {
  console.log(request.params);
  // db.movies.updateOne({id: "102"}, {$set: upadateData})
  const { id } = request.params;
  const updateData = request.body;
  const result = await editMoviebyID(id, updateData);
  response.send(result);
});

//to create multiple movies we use post
router.post("/", async function (request, response) {
  // db.movies.insertMany(data);
  const data = request.body; // send the data's through body
  console.log(data);
  const result = await createMovies(data);
  response.send(result);
}); // auth is used to protect the data

export const moviesRouter = router;
