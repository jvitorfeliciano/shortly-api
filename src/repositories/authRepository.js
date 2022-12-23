import connectionDB from "../database/db.js";

const getUserByEmail = (email) => {
  return connectionDB.query("SELECT * FROM users WHERE email=$1", [email]);
};

const getUserById = (id) => {
  return connectionDB.query("SELECT * FROM users WHERE id=$1", [id]);
};

const insertUser = (name, email, password) => {
  return connectionDB.query(
    `INSERT INTO users (name, email, password)
         VALUES ($1,$2,$3)`,
    [name, email, password]
  );
};

const authRepository = {
  getUserByEmail,
  getUserById,
  insertUser,
};

export default authRepository;
