const Joke = require("../models/joke.model")


// CREATE
module.exports.createJoke = (req, res) => {
    // req.body - displays ITS OUR FORM
    // .create is a mongoose command
    Joke.create(req.body)
        .then(newJoke => {
            res.json(newJoke)
        })
        .catch(errors => res.json(errors))
}


// READ ALL
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(errors => res.json(errors))
}

// READ ONE
module.exports.oneJoke = (req,res) => {
    Joke.oneJoke.findOne({_id: req.params.joke_id})
        .then(oneJoke => res.json(oneJoke))
        .catch(errors => res.json(errors))
}


// UPDATEs
module.exports.updateJoke = (req,res) => {
    // SECOND ARGUMENT IS req.body BECAUSE THATS THE NEWLY UPDATED OBJECT
    // 3rd argument - "new:true" we get updated object back
    // runValidators:true - MUST HAVE IN ORDER TO RUN VALIDATIONS
    Joke.findByIdAndUpdate({_id: req.params.joke_id}, req.body, {new:true, runValidators:true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(errors => res.json(errors))
}



// DELETE
module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id:req.params.joke_id})
    .then(confirmation => res.json(confirmation))
    .catch(errors => res.json(errors))
}