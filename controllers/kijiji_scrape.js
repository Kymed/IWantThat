const kijiji = require("kijiji-scraper");

let options = {
    minResults: 6,
    scrapeResultDetails: true,
};


const pet_Category = 112;
const Kingston = 1700181;
const Guelph = 1700184;
const Hamilton = 80014;
const Kingston_Area = 1700181; 
const Ottawa_Gatineau_Region = 1700184;
const St_Catherines = 80016;
const Peterborough_Area = 1700217;
const Toronto_GTA = 1700272;

 
var params = {
    locationId: Toronto_GTA,  // Same as kijiji.locations.ONTARIO.OTTAWA_GATINEAU_AREA.OTTAWA
    categoryId: pet_Category,  // Same as kijiji.categories.CARS_AND_VEHICLES
    sortByName: "priceAsc",  // Show the cheapest listings first
    keywords: "Black Cat",
    minPrice: 100,
    maxPrice: 2000,
};

function check_wanted(title){

    var want_1 = "wanted";
    var want_2 = "Wanted";
    var want_3 = "WANT";
    var want_4 = "WANTED";
    var want_5 = "Want";
 
    if(title.includes(want_1) || title.includes(want_2) || title.includes(want_3) || title.includes(want_4) || title.includes(want_5)){
        return false;
    }
    return true;
}

// Scrape using optional callback parameter
function callback(err, ads) {
    if (!err) {
        // Use the ads array https://www.kijiji.ca/v-cars-trucks/ottawa/lease-take-over-mercedes-benz-cla/1411235322
        for (let i = 0; i < ads.length; ++i) {
            if(ads[i].attributes["type"] == "OFFER" && check_wanted(ads[i].title)){
                var res = {
                "title": ads[i].title,
                "url" : ads[i].url,
                "price":  ads[i].attributes["price"],
                "images": ads[i].images,
                }
                //console.log(res);
            }
        }
    }
}

exports.search = (keyword, min, max) => {
    params['keywords'] = keyword;
    params['minPrice'] = min;
    params['maxPrice'] = max;
    searchResults = kijiji.search(params,options,callback);
    return kijiji.search(params, options, callback);
};


