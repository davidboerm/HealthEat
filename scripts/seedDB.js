const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/dashboard"
  );
  
const userSeed = [
    {
        name: "Toby",
        email: "no@no.com",
        password: "password123"
    },
    {
        name: "Donna",
        email: "maybe@no.com",
        password: "word123"
    },
    {
        name: "Sam",
        email: "yes@no.com",
        password: "password456"
    },
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log("success!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });