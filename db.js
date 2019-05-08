// Information about sequelize can be found here

// http://docs.sequelizejs.com/manual/getting-started.html

const Sequelize = require('sequelize');

const dotenv = require('dotenv').config();
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const sql = new Sequelize(DB_NAME,DB_USER,DB_PASS, {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres'}
);
// uses promise to test authenticate function,
let testConnection = sql.authenticate()
  .then(function () {
    console.log('connected');
  })
  .catch(function (err) {
    console.log('CONNECTION FAILED')
  })
  .done();
// To connect the database to the app, put require('./db.js')