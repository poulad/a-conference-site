const { Model, DataTypes } = require("sequelize");

class Conference extends Model {}

function initConferenceModel(sequelizeInstance) {
  Conference.init(
    {
      id: { type: DataTypes.INTEGER, field: "conf_id", primaryKey: true },
      display_id: { type: DataTypes.STRING },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      website: DataTypes.STRING,
      logo_url: DataTypes.STRING,
      logo_dark_bg: DataTypes.BOOLEAN,
      created_at: { type: DataTypes.DATE },
    },
    {
      sequelize: sequelizeInstance,
      tableName: "conference",
      timestamps: false,
    }
  );
}

module.exports.Conference = Conference;
module.exports.initConferenceModel = initConferenceModel;
