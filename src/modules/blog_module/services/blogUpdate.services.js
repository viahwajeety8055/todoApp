const { decode } = require("jsonwebtoken");
const models = require("../../../shared/models");
const sharedServices = require("../../../shared/services");
const blogModuleConstants = require("../constants");

module.exports = async ({ content, token }) => {
  const secretKey = "secret";

  console.log(token);

  const originalToken = token.split(" ");

  const decoded = sharedServices.authServices.validateJWT(
    originalToken[1],
    secretKey
  );

  if (decoded) {
    const userid = decoded.userid;

    const userData = await models.user.read({
      userid: userid,
    });

    if (userData.length == 0) {
      sharedServices.error.throw(
        blogModuleConstants.update.errorMessages.BUPE0004
      );
    }

    // Checking whether user blog is exist in blog table or not based on userid if not throw exception
    const blogDataRead = await models.blog.read({
      userid,
    });

    if (blogDataRead.length == 0) {
      sharedServices.error.throw(
        blogModuleConstants.update.errorMessages.BUPE0004
      );
    }

    const blogDataUpdate = await models.blog.update({ content }, { userid });

    return blogDataUpdate;
  } else {
    sharedServices.error.throw(
      blogModuleConstants.update.errorMessages.BUPE0005
    );
  }
};
