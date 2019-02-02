var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    path = require('path');
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

// home test route
app.get('/', (req, res) => {
    res.render('home.ejs');
})

// start server
app.listen(3000, () => console.log("listening"));
