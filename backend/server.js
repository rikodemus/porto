const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 3001;

// Initialize Supabase
const supabaseUrl = 'https://nsngouloyohiavnhzcco.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zbmdvdWxveW9oaWF2bmh6Y2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5MjI0ODIsImV4cCI6MjA1NzQ5ODQ4Mn0.5kAkSgR6Lo8tsPQ0XYMKvv7zmi6wQ9WwzpDFlpsjM6g'; // Pastikan menggunakan API Key yang benar
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nextgoat55@gmail.com',
    pass: 'fskt htfp fyhx cvdx', // Ganti dengan App Password dari Google
  },
});

// Routes
app.post('/api/book', async (req, res) => {
  const { name, email, date } = req.body;

  console.log('📩 Received booking request:', { name, email, date });

  try {
    // Kirim email setelah booking berhasil masuk ke database
    const mailOptions = {
      from: 'nextgoat55@gmail.com',
      to: email,
      subject: 'Booking Confirmation',
      text: `Hello ${name},\n\nYour booking for ${date} has been confirmed.\n\nThank you!`,
    };

    console.log('📩 Sending email with options:', mailOptions);
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Error sending email:', error);
        return res.status(500).json({ error: 'Error sending email: ' + error.message });
      }
      console.log('✅ Email sent: ' + info.response);
      res.status(200).json({ message: 'Booking confirmed and email sent.' });
    });

  } catch (err) {
    console.error('❌ Unexpected Error:', err);
    res.status(500).json({ error: 'An unexpected error occurred: ' + err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
