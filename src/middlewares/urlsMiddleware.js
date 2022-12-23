import urlSchema from "../models/urlSchema.js";
import urlsRepository from "../repositories/urlsRepository.js";

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
    const { rowCount } = await urlsRepository.getUrlById(id);

    if (rowCount === 0) {
      return res.status(404).send({ message: "Url not found" });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }

  return next();
};

export const shortUrlExistenceValidation = async (req, res, next) => {
  const { shortUrl } = req.params;

  try {
    const { rowCount } = await urlsRepository.getUrlByItsShortVersion(shortUrl);

    if (rowCount === 0) {
      return res.status(404).send({ message: "Short url not found" });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
  return next();
};

export const urlOwnerValidation = async (req, res, next) => {
  const { id } = req.params;
  const userId = res.locals.userId;

  try {
    const { rows } = await urlsRepository.getUrlById(id);

    const userIdStored = rows[0].user_id;

    if (userId !== userIdStored) {
      return res
        .status(401)
        .send({ message: "Url not registered in your domain" });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }

  return next();
};
