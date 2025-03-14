const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Change the port here

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Update the hostname to 'localhost'
  user: 'rikodemus', // Replace with your MySQL username
  password: 'frigate10', // Replace with your MySQL password
  database: 'porto',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('MySQL connected...');
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nextgoat55@gmail.com',
    pass: 'ngwa nfes xkxy fsgd',
  },
});

// Routes
app.post('/api/book', (req, res) => {
  const { name, email, date } = req.body;

  const checkQuery = 'SELECT * FROM bookings WHERE name = ? AND email = ? AND date = ?';
  db.query(checkQuery, [name, email, date], (checkErr, checkResult) => {
    if (checkErr) {
      console.error('Error checking for existing booking:', checkErr);
      return res.status(500).send(checkErr.toString());
    }
    if (checkResult.length > 0) {
      return res.status(400).send('Booking already exists.');
    }

    const query = 'INSERT INTO bookings (name, email, date) VALUES (?, ?, ?)';
    db.query(query, [name, email, date], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send(err.toString());
      }

      const mailOptions = {
        from: 'nextgoat55@gmail.com',
        to: email,
        subject: 'Booking Confirmation',
        text: `Hello ${name},\n\nYour booking for ${date} has been confirmed.\n\nThank you!`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).send(error.toString());
        }
        res.status(200).send('Booking confirmed and email sent.');
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
