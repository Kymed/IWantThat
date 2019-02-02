var express = require('express');
var router = express.Router();

// Import controllers
var vision = require('./controllers/visionController')
var scraper = require('./controllers/kijiji_scrape');
var fileSys = require('./controllers/filesystem');
var interface = require('./controllers/interfaceController');

// Create GET Requests
router.get('/', interface.home);

// Create POST Requests
router.post('/uploadImage', fileSys.uploadImage)

module.exports = router;