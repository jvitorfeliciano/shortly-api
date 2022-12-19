import urlSchema from "../models/urlSchema.js";

export const urlSchemaValidation = (req, res, next) => {
  const urlInformation = req.body;
  const { error } = urlSchema.validate(urlInformation, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
};
