// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Import your routes
const servicesRouter = require('./routes/services');
const authRouter = require('./routes/auth'); // NEW: Import the auth router

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use your routes
app.use('/api/services', servicesRouter);
app.use('/api/auth', authRouter); // NEW: Use the auth router

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});