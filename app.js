var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    path = require('path');
    vision = require('@google-cloud/vision');
    app = express();


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

const image = './public/images/chow.jpg';
// configure vision api
var visionClient = new vision.ImageAnnotatorClient();

// LABEL DETECTION
visionClient.labelDetection(image).then(results => {
    const labels=results[0].labelAnnotations;
    labels.forEach(label => {console.log(label.description);
    console.log(label.score);
    });
}).catch(err => {
    console.error("ERROR: ", err);
})

// home test route
app.get('/', (req, res) => {
    res.send("toby is hot");
})

// start server
app.listen(3000, () => console.log("listening"));
