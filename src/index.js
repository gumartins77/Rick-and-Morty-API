require('dotenv').config();
const express = require('express');
const cors = require('cors');
const characterRoute = require('./characters/character.route');
const userRoute = require('./users/users.route');
const loginRoute = require('./login/login.route');
const swaggerRoute = require('./swagger/swagger.route')
const connectToDatabase = require('./database/database');

const port = process.env.PORT || 3004;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/characters', characterRoute);
app.use('/users', userRoute);
app.use('/auth', loginRoute);
app.use('/swagger', swaggerRoute)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
