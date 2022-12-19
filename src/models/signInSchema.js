import Joi from "joi";

const signInSchema = Joi.object({
  email: Joi.string().email().required().trim(),
  password: Joi.string().required(),
});

export default signInSchema;
