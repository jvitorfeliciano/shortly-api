import connectionDB from "../database/db.js";
import signInSchema from "../models/signInSchema.js";
import signUpSchema from "../models/signUpSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signUpSchemaValidation = (req, res, next) => {
  const signUpInformations = req.body;

  const { error } = signUpSchema.validate(signUpInformations, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  res.locals.signUpInformations = signUpInformations;
  return next();
};

export const emailExistenceValidation = async (req, res, next) => {
  const { email } = res.locals.signUpInformations;

  try {
    const { rowCount } = await connectionDB.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );
    if (rowCount > 0) {
      return res.status(409).send({ message: "User already registered" });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }

  return next();
};

export const signInSchemaValidation = (req, res, next) => {
  const signInInformations = req.body;

  const { error } = signInSchema.validate(signInInformations, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  res.locals.signInInformations = signInInformations;
  return next();
};

export const emailAndPasswordMatchValidation = async (req, res, next) => {
  const { email, password } = res.locals.signInInformations;

  try {
    const user = await connectionDB.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );
    if (
      user.rowCount > 0 &&
      bcrypt.compareSync(password, user.rows[0].password)
    ) {
      res.locals.userInformations = user.rows[0];
      return next();
    } else {
      return res.sendStatus(401);
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const validTokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  let userId;

  if (!token) {
    return res.status(401).send({ message: "Invalid token" });
  }

  jwt.verify(token, process.env.SECRET_JWT, (error, decoded) => {
    if (error) {
      return res.status(401).send({ message: "Invalid token" });
    }
    userId = decoded.id;
  });
  
  try {
    const { rowCount } = await connectionDB.query(
      "SELECT * FROM users WHERE id=$1",
      [userId]
    );
    if (rowCount === 0) {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
  res.locals.userId = userId;
  return next();
};
