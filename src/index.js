const express = require('express');

const server = express();
server.use(express.json());

const DemandRoutes = require('./routes/demandRoutes');

server.use('/demand', DemandRoutes);

server.listen(4000, () => {
    console.log('API ONLINE')
})