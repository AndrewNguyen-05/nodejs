const connection = require("../config/database");

const getUserData = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

module.exports = {
  getUserData,
};
