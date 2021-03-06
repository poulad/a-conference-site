const { Sequelize } = require("sequelize");
const { initConferenceModel } = require("./conference");

let sequelizeInstance;

function init(connectionString) {
  if (
    !connectionString ||
    typeof connectionString !== "string" ||
    !connectionString.length
  ) {
    throw new Error(
      `Database connection string is invalid! (type: ${typeof connectionString})`
    );
  }

  sequelizeInstance = new Sequelize(connectionString);
  module.exports.sequelize = sequelizeInstance;

  initConferenceModel(sequelizeInstance);

  // TODO test the connection at app startup
  // await sequelizeInstance.authenticate()
}

module.exports.init = init;
