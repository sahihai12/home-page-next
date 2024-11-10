const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/user.route');
const sequelize = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Database connection failed:', err));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
