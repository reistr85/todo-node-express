const express = require("express");
const HomeController = require("../controllers/HomeController");

const routes = express.Router();

routes.get("/", HomeController.index);

module.exports = routes;