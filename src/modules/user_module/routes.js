const express = require("express");
const userModuleRoutes = express.Router();

const userModuleControllers = require("./controllers");

// route_name: sample
// route_path: /sample/sample
// route_description:
//      route used to test sample module
userModuleRoutes.post("/login", userModuleControllers.login);
userModuleRoutes.post("/register", userModuleControllers.register);

module.exports = sampleModuleRoutes;
