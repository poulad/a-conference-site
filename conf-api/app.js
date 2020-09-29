const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();

(function initSequelizeContext() {
  const dbConnection = require('./models')
  const connectionString = process.env['CONF_DB_CONNSTR']
  dbConnection.init(connectionString)
})()

const indexRouter = require('./routes/index');
const conferencesRouter = require('./routes/conferences');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/conferences', conferencesRouter);

module.exports = app;
