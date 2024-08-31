require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const quotesRouter = require('./routes/quotes');

const main = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
}

main().catch(err => console.log(err));
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', quotesRouter.router);
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/`);
});