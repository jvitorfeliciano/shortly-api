import bcrypt from "bcrypt";

export const postUser = async (req, res) => {
  const { name, email, password } = res.locals.signUpInformations;
  const encryptedPassword = bcrypt.hashSync(password, 10);
  
  try {
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
