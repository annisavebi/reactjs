const access = require("express").Router();
const BookSchema = require("./model.js");

access.route("/").get((req, res) => {
    BookSchema.find()
        .then((books) => res.status(200).json(books))
        .catch((error) => res.status(400).json(error.message));
});

access.route("/delete/:id").delete((req, res) => {
    BookSchema.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Deleted!"))
    .catch((error) => res.status(400).json(error.message));
});

access.route("/update/:id").put((req, res) => {
    BookSchema.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedBook) => res.status(200).json(updatedBook))
    .catch((error) => res.status(400).json(error.message));
});

access.route("/add").put((req, res) => {
    BookSchema.create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((error) => res.status(400).json(error.message));
});

module.exports = access;