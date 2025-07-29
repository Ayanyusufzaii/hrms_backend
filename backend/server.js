require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log('✅ uploads/ folder created');
}

app.use('/uploads', express.static(uploadDir));


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});



// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '000000',
//   database: 'hrms',
// });


db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

const apiRoutes = require('./api')(db);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
