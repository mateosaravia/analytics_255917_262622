const { Client } = require('vertica-nodejs');
require('dotenv').config();

const verticaConfig = {
  user: process.env['V_USER'],
  host: process.env['V_HOST'],
  database: process.env['V_DATABASE'],
  password: process.env['V_PASSWORD'],
  port: process.env['V_PORT'],
};

const getVerticaClient = async () => {
  return new Client(verticaConfig);
};

module.exports = { getVerticaClient };
