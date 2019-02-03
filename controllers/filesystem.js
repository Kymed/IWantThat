var express = require('express'),
    path = require('path'),
    multer = require('multer'),
    fs = require('fs');
    bodyParser = require('body-parser');

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

exports.uploadImage = upload.single('image'), (req, res) => {
    if (req.file) {
        res.send('file uploaded');
    } else {
        res.send('file not uploaded');
    }
}

