// IMPORT DEPENDENCIES
const express = require("express")
const cors = require('cors')

// INSTANTIEATE EXPRESS SERVER
const app = express()
const PORT = 8000


// SETUP MIDDLEWARE

// REQUIRE THAT WE START OUR MONGOOSE CONFIG(SETUP MIDDLEWARE)
require("./config/mongoose.config")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



// CONNECT ROUTES
const jokeRoutes = require("./routes/joke.route")
jokeRoutes(app)

// START EXPRESS SERVER
app.listen(PORT, () => console.log(`EXPRESS RUNNING ON PORT ${PORT}`))