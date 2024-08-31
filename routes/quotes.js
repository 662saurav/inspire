const express = require('express');
const router = express.Router();
const quotes = require('../controller/quotes')

router.get('/', quotes.getQuotes)
    .post('/', quotes.createQuotes);

exports.router = router;