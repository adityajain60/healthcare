const cors = require('cors');
const express = require('express');
const sqlite3 = require('sqlite3');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');


const sqlFilePath = 'database.sql'; 

app.use(cors());
app.use(express.json()); 


const db = new sqlite3.Database('healthdata.db');

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}
const sqlQuery = fs.readFileSync(sqlFilePath, 'utf-8');

db.serialize(() => {
  db.run(sqlQuery, (err) => {
    if (err) {
      console.error('Error executing SQL query:', err.message);
    } else {
      console.log('Table(s) created successfully.');
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  const query = `SELECT * FROM Users WHERE Username = ? AND PasswordHash = ?`; 
  db.get(query, [username, password], (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed. Invalid username or password.' });
    }
    const token = generateRandomString(10);
    res.send({token});
  });
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
