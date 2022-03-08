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

exports.updateMovie = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const update = req.body;
        const options = { new: true };

        console.log("here is the request: ", req);
        
        // const movie = await Movie.findOneAndUpdate(filter, update, options);
        const updateMovie = await Movie.findOneAndUpdate(filter, update, options);
        res.status(200).send({title: updateMovie});
    } catch (error) {
        console.log(error, `issue with update`);
        res.status(500).send({ err: error.message });
    }
  };

exports.deleteMovie = async (req, res) => {
    try {
        const movies = await Movie.findByIdAndRemove(req.params.id);
        console.log("here is the request: ", req);
        res.status(200).send({ohyeah: true});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }

}
