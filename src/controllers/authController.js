import bcrypt from "bcrypt";
import connectionDB from "../database/db.js";

export const postUser = async (req, res) => {
  const { name, email, password } = res.locals.signUpInformations;
  const encryptedPassword = bcrypt.hashSync(password, 10);

  try {
    await connectionDB.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1,$2,$3)`,
      [name, email, encryptedPassword]
    );
    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
