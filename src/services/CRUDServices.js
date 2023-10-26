const connection = require("../config/database");

const createUser = async (email, city, name) => {
  let [results, fields] = await connection.query(
    `
  INSERT INTO Users(email, city, name)
  VALUES (?, ?, ?)`,
    [email, city, name]
  );
};

const getUserData = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (email, city, name, userId) => {
  let [results, fields] = await connection.query(
    `UPDATE Users 
     SET email= ?, city= ?, name= ? 
     WHERE id = ? `,
    [email, city, name, userId]
  );
};

const deleteUserById = async (userId) => {
  await connection.query(`DELETE FROM Users WHERE id = ?`, [userId]);
};

module.exports = {
  getUserData,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
};
