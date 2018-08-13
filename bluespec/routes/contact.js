'use strict';
var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'Contact Us',
        heading: 'Contact Bluespec',
        id: 'contact'
    });
});

module.exports = router;