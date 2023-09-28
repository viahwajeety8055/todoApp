const sharedServices = require("shared/services");
const sharedConstants = require("shared/constants");

const blogModels = {};

// @model-name: create
// @model-desc: create a new blog
blogModels.create = async ({ content, userid }) => {
  const result = await new sharedServices.mysqlServices()
    .insert(
      sharedConstants.dbTableNames.blog,
      sharedServices.mysqlHelperServices.parseInsertValues({
        userid,
        content,
      })
    )
    .build();

  return result;
};

// @model-name: read
// @model-desc: read blog based on filter
blogModels.read = async (whereParams) => {
  const where = [];

  console.log(whereParams);

  if (whereParams.userid) {
    where.push(`userid='${whereParams.userid}'`);
  }

  let result = new sharedServices.mysqlServices()
    .select(
      `
            blogid AS blogid,
            userid AS userid,
            content AS content
            `
    )
    .from(sharedConstants.dbTableNames.blog);

  if (where.length) {
    result = result.where(where.join(" AND "));
  }

  result = await result.build();

  return result;
};

// @model-name: update
// @model-desc: update sample based on update and where params
blogModels.update = async (updateParams, whereParams) => {
  const where = [];

  console.log(whereParams, updateParams);

  if (whereParams.userid) {
    where.push(`userid=${whereParams.userid}`);
  }

  const result = await new sharedServices.mysqlServices()
    .update(
      sharedConstants.dbTableNames.blog,
      sharedServices.mysqlHelperServices.parseUpdateValues({
        content: updateParams.content,
      })
    )
    .where(where.join(" AND "))
    .build();

  return result;
};

// @model-name: delete
// @model-desc: delete blog based on where params
blogModels.delete = async (whereParams) => {
  const where = [];

  if (whereParams.userid) {
    where.push(`userid='${whereParams.userid}'`);
  }

  const result = await new sharedServices.mysqlServices()
    .delete(sharedConstants.dbTableNames.blog)
    .where(where.join(" AND "))
    .build();

  return result;
};

module.exports = blogModels;
