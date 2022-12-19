import bcrypt from "bcrypt";
import connectionDB from "../database/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signUp = async (req, res) => {
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

export const signIn = async (req, res) => {
  const { id } = res.locals.userInformations;
  const token = jwt.sign({ id: id }, process.env.SECRET_JWT, {
    expiresIn: 86400,
  });

  try {
    return res.status(200).send({ token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
