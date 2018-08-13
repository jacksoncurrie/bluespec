'use strict';
var express = require('express');
var router = express.Router();

/* GET portfolio page. */
router.get('/portfolio', function (req, res) {
    res.render('portfolio', {
        title: 'Portfolio',
        heading: 'Building Portfolio',
        id: 'portfolio'
    });
});

module.exports = router;