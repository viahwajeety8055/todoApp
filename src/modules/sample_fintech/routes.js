const express = require("express");
const sampleModuleRoutes = express.Router();

const sampleModuleControllers = require("app_modules/sample_fintech/controllers");

// route_name: test
// route_path: /sample-module/test
// route_description:
//      route used to test sample module
sampleModuleRoutes.post("/test", sampleModuleControllers.test);

module.exports = sampleModuleRoutes;
