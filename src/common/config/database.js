const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: '1701e-yun',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123123',
  dateStrings: true
};
