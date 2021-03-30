const mongosse = require('mongoose');

const url = 'mongodb://localhost:27017/anotaai';
mongosse.connect(url, 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true, 
    });

module.exports = mongosse;