var express = require('express');
var api = express.Router();
var login = require("./login")

// Handling post request
api.use("/login", login)
api.get("/", async (req, res, next) => {
    res.send("API alive");
})
module.exports = api;