import connectionDB from "../database/db.js";

const getUsersUrls = (userId) => {
  return connectionDB.query(
    `SELECT users.id, users.name, SUM(urls.visit_count) AS "visitCount",
    JSON_AGG(JSON_BUILD_OBJECT('id',urls.id, 'shortUrl', urls.short_url,'url', urls.url, 'visitCount', urls.visit_count)) AS "shortenedUrls"
    FROM   users 
    JOIN urls ON users.id = urls.user_id
    WHERE users.id=$1
    GROUP BY users.id
            `,
    [userId]
  );
};

const getUsersData = (userId) => {
  return connectionDB.query(
    `SELECT users.id, users.name
     FROM users 
     WHERE users.id=$1
          `,
    [userId]
  );
};

const usersRepository = {
  getUsersUrls,
  getUsersData,
};

export default usersRepository;

/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcxODI1ODkzfQ.iRGdOqXvxtWUnvfA7wnVTO9SIh4ljIUVFIeZsZts4Fs */
