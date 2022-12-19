import Joi from "joi";

const urlSchema = Joi.object({
  url: Joi.string()
    .pattern(
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
    )
    .required(),
});

export default urlSchema;
