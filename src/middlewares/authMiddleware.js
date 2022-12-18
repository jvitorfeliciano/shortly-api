import connectionDB from "../database/db.js";
import signUpSchema from "../models/signUpSchema.js";

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
