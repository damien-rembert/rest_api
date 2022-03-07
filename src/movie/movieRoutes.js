const { Router } = require("express");
const movieRouter = Router();

const { addMovie, listMovies } = require("./movieControllers");

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);


module.exports = movieRouter;