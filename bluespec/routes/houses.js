'use strict';
var express = require('express');
var router = express.Router();

/* GET houses page. */
router.get('/houses', function (req, res) {
    res.render('houses', {
        title: 'Houses',
        heading: 'Houses For Sale',
        id: 'houses'
    });
});

/* GET house page. */
router.get('/houses/:house', function (req, res) {
    res.render('house', {
        title: 'House',
        heading: 'For Sale',
        id: req.params.house
    });
});

module.exports = router;