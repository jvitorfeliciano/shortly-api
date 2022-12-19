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

export const getUrlById = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await connectionDB.query(
      `SELECT id, "shortUrl", url 
       FROM  urls 
       WHERE id=$1`,
      [id]
    );
    return res.status(200).send(rows[0]);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const redirectToTheCorrespondingLink = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    await connectionDB.query(
      `UPDATE urls 
       SET "visitCount" = "visitCount"+1
       WHERE "shortUrl"=$1`,
      [shortUrl]
    );
    const { rows } = await connectionDB.query(
      'SELECT * FROM  urls WHERE "shortUrl"=$1',
      [shortUrl]
    );
    return res.redirect(rows[0].url);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};


