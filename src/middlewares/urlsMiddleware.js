import connectionDB from "../database/db.js";
import urlSchema from "../models/urlSchema.js";

export const urlSchemaValidation = (req, res, next) => {
  const urlInformation = req.body;

  const { error } = urlSchema.validate(urlInformation, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  res.locals.urlInformation = urlInformation;
  return next();
};

export const urlExistenceValidation = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { rowCount } = await connectionDB.query(
      "SELECT * FROM  urls WHERE id=$1",
      [id]
    );
    if (rowCount === 0) {
      return res.status(409).send({ message: "Url not found" });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
  return next();
};
