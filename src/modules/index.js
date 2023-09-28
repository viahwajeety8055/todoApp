const express = require("express");
const appModules = express.Router();

const userModules = require("app_modules/user_module/routes");
const userRoutes = require("./user_module/routes");
const blogRoutes = require("./blog_module/routes");

// module_name: user
// module_route: /user
// module_description:
//      handles routes related to user module
appModules.use("/user", userRoutes);
appModules.use("/blog", blogRoutes);

module.exports = appModules;
