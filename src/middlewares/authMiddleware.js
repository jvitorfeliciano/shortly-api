import connectionDB from "../database/db.js";
import signInSchema from "../models/signInSchema.js";
import signUpSchema from "../models/signUpSchema.js";
import bcrypt from "bcrypt";

export const validateSignUpSchema = (req, res, next) => {
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

export const checkEmailExistence = async (req, res, next) => {
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

export const validateSignInSchema = (req, res, next) => {
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

export const checkEmailAndPasswordMatch = async (req, res, next) => {
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
