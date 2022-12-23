import usersRepository from "../repositories/usersRepository.js";

export const getUsersUrls = async (req, res) => {
  const userId = res.locals.userId;

  try {
    const userData = await usersRepository.getUsersUrls(userId);
  
    return res.send(userData.rows[0]);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
