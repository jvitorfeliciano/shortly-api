import connectionDB from "../database/db.js";

export const getRanking = async (req, res) => {

  try {
    const userData = await connectionDB.query(
      `SELECT users.id, users.name, COUNT(urls.id) as "linksCount", COALESCE(SUM(urls."visitCount"),0) as "visitCount"
       FROM users
       LEFT JOIN urls 
       ON users.id = urls."userId"
       GROUP BY users.id
       ORDER BY "visitCount" DESC
       LIMIT 10
            `
    );
    return res.send(userData.rows);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
