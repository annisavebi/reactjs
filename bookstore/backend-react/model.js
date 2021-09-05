const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        author: { type: String, required: true},
        title: { type: String, required: true},
        price: { type: Number, required: true},
        stock: { type: Number, required: true},
    },
    { collection: "bookCollections"}
);

module.exports = mongoose.model("BookSchema", BookSchema);