const mysql = require('mysql2/promise');
const config = require('./config');

async function query(sql, params) {
    const configDb = {
        host: config.DB_HOSTNAME,
        user: config.DB_USERNAME,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
    }
  const connection = await mysql.createConnection(configDb);
  const [results,] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}