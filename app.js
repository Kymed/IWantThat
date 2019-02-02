var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    path = require('path');
    multer = require('multer');
    fs = require('fs');
    app = express();
    //appRouter = require('./routes');


// configure views
app.set('views', path.join(__dirname + '/views'));
app.set("view engine", "ejs");

// configure bodyparser to handle post requests
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// configure database
mongoose.connect('mongodb://kymed:iwantthatqhacks2019@ds041992.mlab.com:41992/iwantthat', {
    useNewUrlParser: true
});
var db = mongoose.connection;

//configure multer
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/images')
    }, filename: (req, file, cb) => {
        //cb(null, "image" + path.extname(file.originalname));
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage: storage
});


// Add routes
// home test route
app.get('/', (req, res) => {
    res.render('index');
});


// post request for image
app.post('/uploadImage', upload.single('image'), (req, res) => {
    if (req.file) {
        res.send('file uploaded');
    } else {
        res.send('file not uploaded');
    }
});

// Import controllers
/*router = express.Router();
var vision = require('./controllers/visionController')
var scraper = require('./controllers/kijiji_scrape');
var fileSys = require('./controllers/filesystem');
var interface = require('./controllers/interfaceController');

// Create GET Requests
router.get('/', interface.home);

// Create POST Requests
router.post('/uploadImage', fileSys.uploadImage)

app.use('/', router);*/

// start server
app.listen(3000, () => console.log("listening"));
