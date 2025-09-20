// backend/routes/services.js

const express = require('express');
const router = express.Router();
const Service = require('../models/service');

// @route   POST /api/services
// @desc    Add a new service
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { shopName, location, contact, category } = req.body;
    const newService = new Service({ shopName, location, contact, category });
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/services
// @desc    Get all services
// @access  Public
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/services/search
// @desc    Search and filter services from the database
// @access  Public
router.get('/search', async (req, res) => {
  try {
    const { query, category } = req.query;
    let searchCriteria = {};

    if (query) {
      searchCriteria.$or = [
        { shopName: new RegExp(query, 'i') },
        { category: new RegExp(query, 'i') },
        { location: new RegExp(query, 'i') },
      ];
    }

    if (category && category.toLowerCase() !== 'all') {
      searchCriteria.category = new RegExp(category, 'i');
    }

    const services = await Service.find(searchCriteria);
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;