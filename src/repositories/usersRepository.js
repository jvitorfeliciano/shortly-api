import connectionDB from "../database/db.js";

const getUsersUrls = (userId) => {
  return connectionDB.query(
    `SELECT users.id, users.name, SUM(urls.visit_count) AS "visitCount",
    JSON_AGG(JSON_BUILD_OBJECT('id',urls.id, 'shortUrl', urls.short_url,'url', urls.url, 'visitCount', urls.visit_count)) AS "shortenedUrls"
    FROM   users 
    LEFT JOIN urls ON users.id = urls.user_id
    WHERE users.id=$1
    GROUP BY users.id
            `,
    [userId]
  );
};

const usersRepository = {
  getUsersUrls,
};

export default usersRepository;
