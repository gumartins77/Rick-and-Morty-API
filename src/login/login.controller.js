const loginService = require("./login.service");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const loginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await login
Service.loginService(email);

    if (!user) {
      return res.status(400).send({ message: "Usuário não encontrado!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send({ message: "Senha inválida!" });
    }

    const token = login
Service.generateToken(user.id);
    
    res.send({ token });
  };

  module.exports = { loginController };
