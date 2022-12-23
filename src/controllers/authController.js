import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import authRepository from "../repositories/authRepository.js";

dotenv.config();

export const signUp = async (req, res) => {
  const { name, email, password } = res.locals.signUpInformations;
  const encryptedPassword = bcrypt.hashSync(password, 10);

  try {
    await authRepository.insertUser(name, email, encryptedPassword);

    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const signIn = async (req, res) => {
  const { id, name } = res.locals.userInformations;
  const token = jwt.sign({ id: id }, process.env.SECRET_JWT, {
    expiresIn: 86400,
  });

  try {
    return res.status(200).send({ name, token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
