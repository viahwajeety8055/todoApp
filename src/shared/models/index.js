const sampleModels = require("./sample.models");
const authModels = require("./user.models");
const todoModels = require("./todo.models");

const sharedModels = {
  sample: sampleModels,
  user: userModels,
  todo: todoModels,
};

module.exports = sharedModels;
