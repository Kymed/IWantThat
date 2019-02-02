function displayAds(ads) {
  for (let i=0; i < ads.length; i++) {
    let adCard = createAdCard(ads[i]);
    $("#results").append(adCard);
}

function createAdCard(ad) {
  let $adCard = $("<div>", {
    "class": "card"
  })

  let $adCardBody = $("<div>", {
    "class": "card-body"
  })
  $adCard.append($adCardBody);
  $adCard.append(createAdCardImages(ad));
  $adCardBody.append(createAdCardContent(ad));

  return $adCard;
}

function createAdCardImages(ad) {
  let $image = $("<img>", {
    "class": "card-img-top",
    src: ad.image
  })

  return image;
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
