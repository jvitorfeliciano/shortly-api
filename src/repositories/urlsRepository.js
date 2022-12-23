import connectionDB from "../database/db.js";

const getUrlById = (id) => {
  return connectionDB.query("SELECT * FROM  urls WHERE id=$1", [id]);
};

const getUrlByItsShortVersion = (shortUrl) => {
  return connectionDB.query("SELECT * FROM  urls WHERE short_url=$1", [
    shortUrl,
  ]);
};

const insertUrl = (shortUrl, url, userId) => {
  return connectionDB.query(
    `INSERT INTO urls (short_url, url, user_id)
     VALUES ($1,$2,$3)
            `,
    [shortUrl, url, userId]
  );
};
const getFormattedUrlById = (id) => {
  return connectionDB.query(
    `SELECT id, short_url AS "shortUrl", url 
     FROM  urls 
     WHERE id=$1`,
    [id]
  );
};

const updateVisitCount = (shortUrl) => {
  return connectionDB.query(
    `UPDATE urls 
     SET visit_count = visit_count+1
     WHERE short_url=$1`,
    [shortUrl]
  );
};

const deleteUrl = (id) => {
  return connectionDB.query("DELETE FROM  urls WHERE id=$1", [id]);
};

const urlsRepository = {
  getUrlById,
  getUrlByItsShortVersion,
  insertUrl,
  getFormattedUrlById,
  updateVisitCount,
  deleteUrl,
};

export default urlsRepository;
