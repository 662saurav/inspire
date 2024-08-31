const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema ({
    id: {
        type: Number,
        required: [true, "id is compulsory"],
        min: [1, "Enter natural number"],
        unique: true
    },
    url: {
        type: String,
        required: [true, "Photo is compulsory"],
        unique: true
    }
});

exports.Quotes = mongoose.model('Quote', quoteSchema);