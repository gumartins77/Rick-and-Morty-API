require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/character.route');
const connectToDatabase = require('./src/database/database');

const userRoute = require("./src/routes/users.route")

const port = process.env.PORT || 3004;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());

app.use('/', routes);
app.use('/users', userRoute)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
