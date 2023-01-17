const express = require('express');
const logger = require('morgan')
const carRouter = require('./routes/carRouter')

const app = express();

app.use(logger('dev'));
app.use(express.json())

app.use('/cars/', carRouter);

app.use((err, req, res, next) => {
    res.status(404).json({
        status: 'Failed',
        message: 'This endpoint aint implemented yet'
    })
})

module.exports = app;
