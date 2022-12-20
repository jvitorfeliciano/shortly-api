import connectionDB from "../database/db.js";

export const getUsersUrls = async (req, res) => {
  const userId = res.locals.userId;

  try {
    const userInformation = await connectionDB.query(
      `SELECT users.id, users.name, SUM(urls."visitCount") AS "visitCount" 
       FROM   users 
       JOIN urls ON users.id = urls."userId"
       WHERE users.id=$1
       GROUP BY users.id
      `,
      [userId]
    );
    const urls = await connectionDB.query(
      `SELECT id, "shortUrl", url, "visitCount" FROM urls WHERE "userId" = $1`,
      [userId]
    );

    userInformation.rows[0].shortenedUrls = urls.rows;
    return res.send(userInformation.rows[0]);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
