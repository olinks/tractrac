const mysql = require("mysql2");
const { env } = require("../helpers");

const logger = require("../utils/logger");

const db = mysql.createPool({
  host: env.get("DB_HOST"),
  user: env.get("DB_USER"),
  password: env.get("DB_PASSWORD"),
  database: env.get("DB_NAME"),
});

db.getConnection((err, connection) => {
  if (err) throw err;
  logger.info("Connected to database");
});

// Create the initial database
const createDatabase = () => {
  const sql = "CREATE DATABASE IF NOT EXISTS ??";
  db.query(sql, [process.env.DB_NAME], function (err) {
    if (err) throw err;
    console.log(process.env.DB_NAME + " database created");
    // end process
    process.exit();
  });
};

/**
 Create the initial table
 */
const createTable = async () => {
  // const sql = `CREATE TABLE IF NOT EXISTS transactions (
  //     id INT NOT NULL AUTO_INCREMENT,
  //     buyer_address VARCHAR(255),
  //     eth_value FLOAT,
  //     token_value FLOAT,
  //     lottery_percentage INT,
  //     winner BOOLEAN,
  //     transaction_hash VARCHAR(255),
  //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //     PRIMARY KEY (id)
  //   )`;
  const sql = `CREATE TABLE IF NOT EXISTS 'users' (
    'id' INT NOT NULL AUTO_INCREMENT ,
     'email' VARCHAR(128) NOT NULL ,
     'name' VARCHAR(64) NOT NULL ,
     'password' VARCHAR(64) NOT NULL ,
     'role' INT NULL ,
      PRIMARY KEY ('id'))`;
    

   db.query(sql, function (err) {
    if (err) throw err;
    console.log("trac table created");
    // end process
    process.exit();
  });
};

/**
 *
 * @param {{name: string, email: string, password: string}} data
 */

const createUser = async (data) => {
  const transaction = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  let sql = "INSERT INTO users (name, email, password, role) VALUES (? , ?, ?, NULL)";
  try {
    const [rows, fields] = await db.promise().query(sql, transaction);
    return rows;
  } catch (e) {
    logger.error("Error adding User", e);
  }
};



const getUser = async (email) => {
  let sql = "SELECT * FROM users WHERE email = ?";
  try {
    const [rows, fields] = await db.promise().query(sql, [email]);
    return rows;
  } catch (e) {
    logger.error("Error getting User by email", e);
    throw new Error("Error getting User by email");
  }
};

const Auth = async (data) => {
  let sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  try {
    const [rows, fields] = await db.promise().query(sql, [data.email, data.password]);
    return rows;
  } catch (e) {
    logger.error("Error Incorrect Details", e);
    throw new Error("Error Incorrect Details");
  }
};

// const getUserDetails = async (address) => {
//   let sql = "SELECT * FROM transactions WHERE buyer_address = ?";
//   try {
//     const [rows, fields] = await db.promise().query(sql, [address]);
//     return rows;
//   } catch (e) {
//     logger.error("Error getting transactions by address", e);
//     throw new Error("Error getting transactions by address");
//   }
// };

module.exports = {
  Auth,
  createUser,
  getUser,
  createDatabase,
  createTable,
};
