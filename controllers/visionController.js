var path = require('path');
var vision = vision = require('@google-cloud/vision');
var visionClient = new vision.ImageAnnotatorClient();


exports.detectAnimal = (imgPath) => {
    const image = imgPath;
    visionClient.labelDetection(imgPath).then(results => {

        const labels=results[0].labelAnnotations;
        let ignoreLabels = ["Companion Dog", "Carnivore", "Snout", "Canidae",
        "Dog breed", "Vertebrate", "Mammal", "Canidae", "Black", "Maroon", "Green", "Olive",
        "Navy", "Purple", "Teal", "Silver", "Gray", "Red", "Lime", "Yellow",
        "Blue", "Fuchsia", "Aqua", "White", "Ancient dog breeds"]

        let labelNames = [];

        labels.forEach(label => {

            if (!ignoreLabels.includes(label.description)) {
                labelNames.push(label.description);
            };

        });
        
        return labelNames;
        
    }).catch(err => {
        console.error("ERROR: ", err);
    })
}

exports.req