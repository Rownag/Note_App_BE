const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const noteRoutes = require('./routes/notes');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

const dbConnection = require('./database/config');

const app = express();

app.use(express.json());

const port = process.env.PORT;

const hostname = process.env.HOSTNAME


app.get('/', (req, res) => {
  res.send(`
    <h1 style="text-align: center;margin-top: 50px; color: red">Welcome to our Note App APIS</h1>
    `);
});

app.use('/v1', noteRoutes);
app.use('/v1', userRoutes);
app.use('/v1', authRoutes);

dbConnection();

app.listen(port, async () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
