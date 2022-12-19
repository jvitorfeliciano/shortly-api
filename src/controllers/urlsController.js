import { customAlphabet } from "nanoid";
import connectionDB from "../database/db.js";

export const postShortUrl = async (req, res) => {
  const { url } = res.locals.urlInformation;
  const userId = res.locals.userId;
  const nanoid = customAlphabet("1234567890abcdef", 8);
  const shortUrl = nanoid();

  try {
    await connectionDB.query(
      `INSERT INTO urls ("shortUrl", url, "userId")
       VALUES ($1,$2,$3)
          `,
      [shortUrl, url, userId]
    );

    return res.status(201).send({ shortUrl: shortUrl });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
