const express = require("express") // for routing
const mongoose = require("mongoose") // for database
const cors = require("cors")// to allow for CORS between front-end and backend running on different PORTS
require('dotenv').config()

// to enable this new IMPORT syntax we need to set type : module in package.json

const port = process.env.PORT || process.env.port;
const app = express();

// now we can route!

// no need to use body parser seperately 30 mb due to images
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

// allowing cross origin requests for all!
app.use(cors());

mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => { console.log(`Server running on port ${port}`) }))
  .catch((error) => { console.log(error.message) })

mongoose.set('useFindAndModify', false) // to avoid warnings

