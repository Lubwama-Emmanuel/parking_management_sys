const carController = require('../controllers/carController');
const express = require('express');
const route = express.Router();

route.post('/register', carController.registerCar)
route.get('/getPrices/:id', carController.generateReceipt)

module.exports = route;