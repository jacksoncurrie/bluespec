'use strict';
var express = require('express');
var router = express.Router();

/* GET houses page. */
router.get('/houses', function (req, res) {
    res.render('index', { title: 'Houses' });
});

/* GET house page. */
router.get('/houses/:house', function (req, res) {
    res.render('index', { title: req.params.house });
});

module.exports = router;