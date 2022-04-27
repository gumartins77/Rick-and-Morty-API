const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas conectado!'))
    .catch((err) => {
      return console.log(`Erro ao conectar ao banco de dados: ${err}`);
    });
};

module.exports = connectToDatabase;
