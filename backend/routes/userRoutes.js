const express = require("express");
const { getUsers, addUser } = require("../controllers/user-controller");

const routes = express.Router();

routes.get("/", getUsers);
routes.post("/", addUser);

module.exports = routes
