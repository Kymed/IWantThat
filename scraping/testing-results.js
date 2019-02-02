function displayAds(ads) {
  for (let i=0; i < ads.length; i++) {
    let adCard = createAdCard(ads[i]);
    $("#results").append(adCard);
  }
}

function createAdCard(ad) {
  let $adCard = $("<div>", {
    "class": "card"
  })

  let $adCardBody = $("<div>", {
    "class": "card-body"
  })

  $adCard.append(createAdCardImages(ad));
  $adCardBody.append(createAdCardContent(ad));
  $adCard.append($adCardBody);

  return $adCard;
}

function createAdCardImages(ad) {
  let $image = $("<img>", {
    "class": "card-img-top",
    src: ad.image
  })

  return $image;
}

function createAdCardContent(ad) {
  let $title = $("<h4>", {
    "class": "card-title",
    html: ad.title
  })

  let $description = $("<p>", {
    "class": "card-text",
    html: ad.description
  })

  let $date = $("<p>", {
    "class": "small",
    html: ad.date
  })

  let $seePost = $("<a>", {
    href: ad.url
  })

  return [$title, $description, $date, $seePost]
}

let ad1 = {
  "title": "Title 1",
  "description": "My Description",
  "date": "Some Date",
  "image": "https://www.google.com/logos/doodles/2019/celebrating-sojourner-truth-5641167843622912.6-l.png",
  "images": [],
  "attributes": {},
  "url": "https://www.google.com/logos/doodles/2019/celebrating-sojourner-truth-5641167843622912.6-l.png"
}

let ad2 = {
  "title": "Title 2",
  "description": "My Other Description",
  "date": "Some Other Date",
  "image": "https://www.google.com/logos/doodles/2019/celebrating-sojourner-truth-5641167843622912.6-l.png",
  "images": [],
  "attributes": {},
  "url": "https://www.google.com/logos/doodles/2019/celebrating-sojourner-truth-5641167843622912.6-l.png"
}

$(document).ready(function() {
  displayAds([ad1, ad2]);
})
