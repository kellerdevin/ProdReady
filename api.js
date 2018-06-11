const express = require('express');
const api = express();

const productRoutes = require('./api/routes/products');

api.use('/products', productRoutes);

module.exports = api;