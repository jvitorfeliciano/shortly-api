import connectionDB from "../database/db.js";

export const getUsersUrls = async (req, res) => {
  const userId = res.locals.userId;

  try {
    const userData = await connectionDB.query(
      `SELECT users.id, users.name, SUM(urls."visitCount") AS "visitCount",
       JSON_AGG(JSON_BUILD_OBJECT('id',urls.id, 'shortUrl', urls."shortUrl",'url', urls.url, 'visitCount', urls."visitCount")) AS "shortenedUrls"
       FROM   users 
       JOIN urls ON users.id = urls."userId"
       WHERE users.id=$1
       GROUP BY users.id
      `,
      [userId]
    );

    return res.send(userData.rows[0]);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
