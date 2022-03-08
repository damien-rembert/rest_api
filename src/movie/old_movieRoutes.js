const { Router } = require("express");
const movieRouter = Router();

const { addMovie, listMovies, deleteMovie, updateMovie } = require("./movieControllers");

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.delete("/movie", deleteMovie);
movieRouter.put("/movie", updateMovie);


module.exports = movieRouter;