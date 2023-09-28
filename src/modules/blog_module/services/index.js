const blogCreateService = require("./blogCreate.services");
const blogUpdateService = require("./blogUpdate.services");
const blogDeleteService = require("./blogDelete.services");
const blogReadService = require("./blogRead.services");

const blogModuleServices = {
  create: blogCreateService,
  update: blogUpdateService,
  delete: blogDeleteService,
  read: blogReadService,
};

module.exports = blogModuleServices;
