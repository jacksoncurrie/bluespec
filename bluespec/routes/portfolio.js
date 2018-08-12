'use strict';
var express = require('express');
var router = express.Router();

/* GET portfolio page. */
router.get('/portfolio', function (req, res) {
    res.render('index', { title: 'Portfolio' });
});

module.exports = router;