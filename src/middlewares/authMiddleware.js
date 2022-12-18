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
  next()
};

