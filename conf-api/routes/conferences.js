const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');
// const { Model } = require('sequelize');

const router = express.Router();

class Conference extends Model {
}

async function queryConferences() {
  const connectionString = process.env['CONF_DB_CONNSTR']
  const sequelize = new Sequelize(connectionString)
  Conference.init({
    id: { type: DataTypes.INTEGER, field: 'conf_id', primaryKey: true },
    display_id: { type: DataTypes.STRING, },
    name: DataTypes.STRING,
    website: DataTypes.STRING,
    logo_url: DataTypes.STRING,
    created_at: { type: DataTypes.DATE, },
  }, { sequelize, modelName: 'conference', freezeTableName: true, timestamps: false })

  await sequelize.authenticate()
  // await sequelize.close()

  return Conference.findAll()
}

router.get('/', async (req, res, next) => {
  try {
    const confs = await queryConferences()
    res.send(confs);
  } catch (e) {
    res.send(JSON.stringify(e));
  }
});

module.exports = router;
