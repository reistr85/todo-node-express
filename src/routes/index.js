const express = require("express");
const HomeController = require("../controllers/HomeController");

const routes = express.Router();

const homeController = new HomeController();

routes.get("/", homeController.index);

module.exports = routes;