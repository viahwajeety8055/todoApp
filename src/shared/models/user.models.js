const sharedServices = require("shared/services");
const sharedConstants = require("shared/constants");

const userModels = {};

// @model-name: create
// @model-desc: create a new sample
userModels.create = async ({ name, email, password }) => {
  const result = await new sharedServices.mysqlServices()
    .insert(
      sharedConstants.dbTableNames.user,
      sharedServices.mysqlHelperServices.parseInsertValues({
        name: name,
        email: email,
        password: password,
      })
    )
    .build();

  return result;
};

// @model-name: read
// @model-desc: read sample based on filter
userModels.read = async (whereParams) => {
  const where = [];

  if (whereParams.email) {
    where.push(`email='${whereParams.email}'`);
  }

  if (whereParams.userId) {
    where.push(`userid='${whereParams.userid}'`);
  }

  let result = new sharedServices.mysqlServices()
    .select(
      `
            userid AS userid,
            email AS email,
            password As password
            `
    )
    .from(sharedConstants.dbTableNames.user);

  if (where.length) {
    result = result.where(where.join(" AND "));
  }

  result = await result.build();

  return result;
};

// @model-name: update
// @model-desc: update sample based on update and where params
userModels.update = async (updateParams, whereParams) => {
  const where = [];

  if (whereParams.name) {
    where.push(`name='${whereParams.name}'`);
  }
  if (whereParams.email) {
    where.push(`name='${whereParams.email}'`);
  }

  const result = await new sharedServices.mysqlServices()
    .update(
      sharedConstants.dbTableNames.healthcheckReport,
      sharedServices.mysqlHelperServices.parseUpdateValues({
        name: updateParams.name,
        email: updateParams.email,
      })
    )
    .where(where.join(" AND "))
    .build();

  return result;
};

// @model-name: delete
// @model-desc: delete sample based on where params
userModels.delete = async (whereParams) => {
  const where = [];

  if (whereParams.name) {
    where.push(`healthcheck_report_ref_id='${whereParams.name}'`);
  }

  const result = await new sharedServices.mysqlServices()
    .delete(sharedConstants.dbTableNames.sampleDb)
    .where(where.join(" AND "))
    .build();

  return result;
};

module.exports = userModels;
