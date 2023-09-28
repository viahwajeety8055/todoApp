const blogCreateValidators = require("./blogCreate.validators");
const blogUpdateValidators = require("./blogUpdate.validators");
const blogDeleteValidators = require("./blogDelete.validators");

const blogModuleValidators = {
  create: blogCreateValidators,
  update: blogUpdateValidators,
  delete: blogDeleteValidators,
};

module.exports = blogModuleValidators;
