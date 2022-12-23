import Joi from "joi";

const signUpSchema = Joi.object({
  name: Joi.string().required().trim(),
  email: Joi.string().email().required().trim(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")),
});

export default signUpSchema;
