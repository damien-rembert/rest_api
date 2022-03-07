const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        console.log("here is the request.body", req.body);
        res.status(200).send({movie: newMovie});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
}

exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ allMovie: movies })
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
}