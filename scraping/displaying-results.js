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
  let carouselItems = [];
  for (let i=0; i < ad.images.length; i++) {
    carouselItems.push(createCarouselItem(ad.images[i], i==0));
  }
  return createCarousel(carouselItems);
}

function createCarouselItem(imageSource, isFirst) {
  classes = "carousel-item";
  if (isFirst) {
    classes += " active";
  }
  let $item = $("<div>", {
    "class": classes
  })

  $item.append($("<img>", {
    "class": "d-block w-100",
    src: imageSource
  }))

  return $item;
}

function createCarousel(carouselItems) {
  let carouselId = Math.random().toString(36).slice(2);
  let carousel = $("<div>", {
    "class": "carousel slide",
    "data-ride": "carousel",
    id: carouselId,
  })

  let carouselPrev = $("<a>", {
    "class": "carousel-control-prev",
    role: "button",
    "data-slide": "prev",
    href: "#"+carouselId,
  })
  carouselPrev.append($("<span>", {
    "class": "carousel-control-prev-icon",
    "aria-hidden": "true"
  }))
  carouselPrev.append($("<span>", {
    "class": "sr-only",
    html: "Previous"
  }))

  let carouselNext = $("<a>", {
    "class": "carousel-control-next",
    role: "button",
    "data-slide": "next",
    href: "#"+carouselId
  })
  carouselNext.append($("<span>", {
    "class": "carousel-control-next-icon",
    "aria-hidden": "true"
  }))
  carouselNext.append($("<span>", {
    "class": "sr-only",
    html: "Next"
  }))

  let carouselInner = $("<div>", {
    "class": "carousel-inner"
  })
  carouselInner.append(carouselItems);

  carousel.append(carouselInner);
  carousel.append(carouselPrev);
  carousel.append(carouselNext);

  return carousel;
}

function createAdCardContent(ad) {
  let $title = $("<h4>", {
    "class": "card-title",
    html: ad.title
  })

  let $price = $("<p>", {
    "class": "card-text price",
    html: "Price: $" + ad.price
  })

  let $date = $("<p>", {
    "class": "small",
    html: ad.date
  })

  let $seePost = $("<a>", {
    href: ad.url
  })
  $seePost.append($("<button>", {
    "class": "btn btn-primary",
    html: "See Post on Kajiji"
  }))

  return [$title, $price, $date, $seePost]
}
