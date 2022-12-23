import connectionDB from "../database/db.js";

const getRanking = () => {
  return connectionDB.query(
    `SELECT users.id, users.name, COUNT(urls.id) as "linksCount", COALESCE(SUM(urls.visit_count),0) as "visitCount"
     FROM users
     LEFT JOIN urls 
     ON users.id = urls.user_id
     GROUP BY users.id
     ORDER BY "visitCount" DESC
     LIMIT 10
              `
  );
};

const rankingRepository = {
  getRanking,
};

export default rankingRepository;
