const express = require("express");
const appModules = express.Router();

const sampleModules = require("app_modules/sample_fintech/routes");

// module_name: sample
// module_route: /sample
// module_description:
//      handles routes related to sample module
appModules.use("/provider", sampleModules)

module.exports = appModules;
