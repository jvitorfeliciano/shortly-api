import { customAlphabet } from "nanoid";
import urlsRepository from "../repositories/urlsRepository.js";

export const postShortUrl = async (req, res) => {
  const { url } = res.locals.urlInformation;
  const userId = res.locals.userId;
  const nanoid = customAlphabet("1234567890abcdef", 8);
  const shortUrl = nanoid();

  try {
    await urlsRepository.insertUrl(shortUrl, url, userId);

    return res.status(201).send({ shortUrl: shortUrl });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const getUrlById = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await urlsRepository.getFormattedUrlById(id);
    return res.status(200).send(rows[0]);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const redirectToTheCorrespondingLink = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    await urlsRepository.updateVisitCount(shortUrl);
    const { rows } = await urlsRepository.getUrlByItsShortVersion(shortUrl);

    return res.redirect(rows[0].url);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const deleteUrl = async (req, res) => {
  const { id } = req.params;

  try {
    await urlsRepository.deleteUrl(id);
    return res.sendStatus(204);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
