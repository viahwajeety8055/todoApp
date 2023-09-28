const blogCreateConstants = require("./blogCreate.constants");
const blogUpdateConstants = require("./blogUpdate.constants");
const blogDeleteConstants = require("./blogDelete.constants");
const blogReadConstants = require("./blogRead.constants");

const blogModuleConstants = {
  create: blogCreateConstants,
  update: blogUpdateConstants,
  delete: blogDeleteConstants,
  read: blogReadConstants,
};

module.exports = blogModuleConstants;
