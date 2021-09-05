const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_book", {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: true, 
    useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Failed connection..."));

db.once("open", () => {
    console.log("Success!");
});