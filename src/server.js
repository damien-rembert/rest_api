require("./db/connection");

const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5001;


// app will use its .json() method to parse everything it receives as it will be json
app.use(express.json());

app.use(movieRouter);
app.use(userRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})