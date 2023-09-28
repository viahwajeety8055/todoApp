const express = require("express");
const userModuleRoutes = express.Router();

const blogModuleControllers = require("./controllers");

// route_name: create
// route_path: /blog/create
// route_description:
//      route used to create blog
userModuleRoutes.post("/create", blogModuleControllers.create);

// route_name: update
// route_path: /user/update
// route_description:
//      route used to update blog
userModuleRoutes.put("/update", blogModuleControllers.update);

// route_name: delete
// route_path: /user/delete
// route_description:
//      route used to delete blog
userModuleRoutes.delete("/delete", blogModuleControllers.delete);

// route_name: read
// route_path: /user/read
// route_description:
//      route used to read blog
userModuleRoutes.get("/get", blogModuleControllers.read);

module.exports = userModuleRoutes;
