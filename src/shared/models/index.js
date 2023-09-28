const sampleModels = require("./sample.models");
const userModels = require("./user.models");
const todoModels = require("./blog.models");
const blogModels = require("./blog.models");

const sharedModels = {
  sample: sampleModels,
  user: userModels,
  todo: todoModels,
  blog: blogModels,
};

module.exports = sharedModels;
