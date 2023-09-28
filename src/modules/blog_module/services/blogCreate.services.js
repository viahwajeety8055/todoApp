const models = require("../../../shared/models");
const sharedServices = require("../../../shared/services");
const blogModuleConstants = require("../constants");

module.exports = async ({ content, token }) => {
  const secretKey = "secret";

  const originalToken = token.split(" ");

  console.log(token);

  const decoded = sharedServices.authServices.validateJWT(
    originalToken[1],
    secretKey
  );

  if (decoded) {
    const userid = decoded.userid;

    // Finding user
    const userData = await models.user.read({
      userid: userid,
    });

    if (userData.length == 0) {
      sharedServices.error.throw(
        blogModuleConstants.create.errorMessages.BCRE0005
      );
    }

    // Checking whether user blog is exist in blog table or not based on userid if not throw exception
    const blogDataRead = await models.blog.read({
      userid,
    });

    if (blogDataRead.length != 0) {
      sharedServices.error.throw(
        blogModuleConstants.create.errorMessages.BCRE0001
      );
    }

    // Creating blog
    const blogData = await models.blog.create({
      content,
      userid,
    });

    console.log(blogData);

    return blogData;
  } else {
    sharedServices.error.throw(
      blogModuleConstants.create.errorMessages.BCRE0004
    );
  }
};
