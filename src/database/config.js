const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
  console.log('DB connected successfully...');
});

mongoose.connection.on('error', (err) => {
  console.error('DB connection failed:', err.message);
});

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
  } catch (error) {
    console.error('DB connection failed');
  }
};

module.exports = dbConnection;