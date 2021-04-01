const express = require("express") // for routing
const mongoose = require("mongoose") // for database
const cors = require("cors")// to allow for CORS between front-end and backend running on different PORTS
require('dotenv').config()

const postRoutes = require('./routes/posts')

// to enable this new IMPORT syntax we need to set type : module in package.json

const port = process.env.PORT || process.env.port;
const app = express();

// no need to use body parser seperately 30 mb due to images
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

// allowing cross origin requests for all!
// we need to define app.cors() before setting the routes
app.use(cors());

// now we can route!

// setting up the posts route
app.use('/posts', postRoutes)

mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => { console.log(`Server running on port ${port}`) }))
  .catch((error) => { console.log(error.message) })

mongoose.set('useFindAndModify', false) // to avoid warnings

