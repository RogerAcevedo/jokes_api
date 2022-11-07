const JokeController = require("../controllers/joke.controller")
const Joke = require("../models/joke.model")

module.exports = app => {
    // CREATE
    app.post("/api/jokes", JokeController.createJoke)


// REALL ALL
app.get("/api/jokes" , JokeController.allJokes)

// READ ONE
// must specify the ID of object being called
app.get("/api/jokes/:joke_id", JokeController.oneJoke)


// UPDATE
// "app.put" WHEN UPDATING
app.put("/api/jokes/:joke_id", JokeController.updateJoke)


// DELETE
app.delete("/api/jokes/:joke_id" , JokeController.deleteJoke)

}


// POST TO CREATE
// GET FOR READ ALL AND ONE
// PUT & PATCH WHEN UPDATING
// DELETE when deleting