import rankingRepository from "../repositories/rankingRepository.js";

export const getRanking = async (req, res) => {
  try {
    const userData = await rankingRepository.getRanking();

    return res.send(userData.rows);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
