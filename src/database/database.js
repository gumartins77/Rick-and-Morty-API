const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas Connected!'))
    .catch((err) => {
      return console.log(`Error connecting to database: ${err}`);
    });
};

module.exports = connectToDatabase;
