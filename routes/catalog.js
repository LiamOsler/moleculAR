var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    const molfiles = './public/molfiles/';
    res.render('catalog', { title: 'Catalog', list: fs.readdirSync(molfiles)});
});

module.exports = router;
