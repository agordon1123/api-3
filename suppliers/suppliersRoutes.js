const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('get to /suppliers');
});

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.send(`get to /suppliers/${name}`);
}) 

module.exports = router;
