const multer = require('multer');

const HandleError = (req, res) => {
    res.status(500).contentType("text.plain").end("Something went wrong");
}