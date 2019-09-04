const express = require('express');
const productsRouter = require('../products/productsRouter');
const suppliersRouter = require('../suppliers/suppliersRoutes');

const server = express();
server.use(express.json());

server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' })
});

server.use('/products', productsRouter)

module.exports = server;
