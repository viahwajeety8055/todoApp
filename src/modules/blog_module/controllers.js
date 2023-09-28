const blogValidators = require("./validators");
const blogServices = require("./services");
const blogConstants = require("./constants");

const blogModuleControllers = {};

// controller_name: create
// controller_description:
//      controller used to create blog module
blogModuleControllers.create = async (req, res, next) => {
  try {
    // validate request/raise an exception
    const validatedRequest = blogValidators.create(req);

    // handle logic within service function
    const data = await blogServices.create({
      content: validatedRequest.content,
      token: validatedRequest.token,
    });

    // return response
    next({
      result: data,
      ...blogConstants.create.messages.BCRS0001,
    });
  } catch (error) {
    next(JSON.parse(error.message));
  }
};

// controller_name: update
// controller_description:
//      controller used to update blog module
blogModuleControllers.update = async (req, res, next) => {
  try {
    // validate request/raise an exception
    const validatedRequest = blogValidators.update(req);

    // handle logic within service function
    const data = await blogServices.update({
      content: validatedRequest.content,
      token: validatedRequest.token,
    });

    // return final response
    next({
      result: data,
      ...blogConstants.update.messages.BUPS0001,
    });
  } catch (error) {
    next(JSON.parse(error.message));
  }
};

// controller_name: delete
// controller_description:
//      controller used to delete blog module
blogModuleControllers.delete = async (req, res, next) => {
  try {
    // validate request/raise an exception
    const validatedRequest = blogValidators.delete(req);

    // handle logic within service function
    const data = await blogServices.delete({
      token: validatedRequest.token,
    });

    // return final response
    next({
      result: data,
      ...blogConstants.delete.messages.BDLS0001,
    });
  } catch (error) {
    next(JSON.parse(error.message));
  }
};

// controller_name: read
// controller_description:
//      controller used to read blog module
blogModuleControllers.read = async (req, res, next) => {
  try {
    // handle logic within service function
    const data = await blogServices.read();

    // return final response
    next({
      result: data,
      ...blogConstants.read.messages.BRDS0001,
    });
  } catch (error) {
    next(JSON.parse(error.message));
  }
};

module.exports = blogModuleControllers;
