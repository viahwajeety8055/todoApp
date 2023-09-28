const express = require("express");
const userModuleRoutes = express.Router();

const userModuleControllers = require("./controllers");

// route_name: register
// route_path: /user/register
// route_description:
//      route used to register user
userModuleRoutes.post("/register", userModuleControllers.register);

// route_name: login
// route_path: /user/login
// route_description:
//      route used to login user
userModuleRoutes.post("/login", userModuleControllers.login);

module.exports = userModuleRoutes;
