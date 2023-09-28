const models = require("../../../shared/models");
const sharedServices = require("../../../shared/services");
const blogModuleConstants = require("../constants");

module.exports = async () => {
  console.log("Welcome");

  const blogDataRead = await models.blog.read({});

  return blogDataRead;
};
