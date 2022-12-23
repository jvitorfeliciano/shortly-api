import usersRepository from "../repositories/usersRepository.js";

export const getUsersUrls = async (req, res) => {
  const userId = res.locals.userId;

  try {
    const userData = await usersRepository.getUsersUrls(userId);

    if (userData.rowCount > 0) {
      return res.send(userData.rows[0]);
    } else {
      const userDataWithoutUrls = await usersRepository.getUsersData(userId);
      userDataWithoutUrls.rows[0].visitCount = 0;
      userDataWithoutUrls.rows[0].shortenedUrls = [];

      return res.send(userDataWithoutUrls.rows[0]);
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
