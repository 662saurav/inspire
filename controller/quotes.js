const express = require('express');
const app = express();

const model = require('../model/quotes');
const Quotes = model.Quotes;

exports.getQuotes = async (req, res) => {
    try {
        const quotes = await Quotes.find({});
        res.status(200).json(quotes);
    }

    catch (err) {
        res.status(400).json(err.message);
    }
};

exports.createQuotes = async (req, res) => {
    try {
        const quotes = new Quotes(req.body);
        quotes.save()
            .then(() => res.status(200).json(req.body))
            .catch(err => res.status(400).json(err.message));
    }

    catch (err) {
        res.status(400).json(err.message);
    }
}