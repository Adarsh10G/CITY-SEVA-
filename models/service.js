// backend/models/service.js

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;