const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("./db.js");

const app = express();
const port = 4000;
const accessRoute = require("./routes.js")

app.use(cors()); 
app.use(morgan("tiny")); 
app.use(express.json()); 
app.use("./book", accessRoute); 

app.listen(port, () => {
    console.log("Running in port: " + port);
});