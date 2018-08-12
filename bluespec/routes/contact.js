'use strict';
var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/contact', function (req, res) {
    res.render('index', { title: 'Contact' });
});

module.exports = router;