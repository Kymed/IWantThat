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
    html: "Date posted: " + ad.date
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


let ad1 = {
 title: 'Two black peterbald kittens with hair, phenotype oriental',
 url: 'https://www.kijiji.ca/v-cats-kittens/city-of-toronto/two-black-peterbald-kittens-with-hair-phenotype-oriental/1388589330',
 price: 1300,
 date: "Some date",
 images: [ 'https://i.ebayimg.com/00/s/Njg3WDgwMA==/z/FD0AAOSwhJFbtl-S/$_57.JPG',
    'https://i.ebayimg.com/00/s/ODAwWDYwMA==/z/suoAAOSw76JcIkSp/$_57.JPG',
    'https://i.ebayimg.com/00/s/ODAwWDYwMA==/z/OQcAAOSwhspcIkQC/$_57.JPG',
    'https://i.ebayimg.com/00/s/ODAwWDc0NA==/z/vssAAOSwQfRcSdUK/$_57.JPG',
    'https://i.ebayimg.com/00/s/ODAwWDQ5OQ==/z/ECgAAOSw8zRcSdTn/$_57.JPG',
    'https://i.ebayimg.com/00/s/NTYzWDgwMA==/z/XfcAAOSw6~Vbtl-s/$_57.JPG',
    'https://i.ebayimg.com/00/s/ODAwWDYwMA==/z/quwAAOSwUQ5btl-l/$_57.JPG',
    'https://i.ebayimg.com/00/s/ODAwWDYwMA==/z/2hYAAOSwXAxcIkMy/$_57.JPG',
    'https://i.ebayimg.com/00/s/ODAwWDYwMA==/z/ItoAAOSweX5cIkb6/$_57.JPG',
    'https://i.ebayimg.com/00/s/ODAwWDYwMA==/z/VloAAOSw2pBcIkNR/$_57.JPG' ]
}

let ad2 = {
  title: "Title 2",
  price: 100,
  date: "Some Other Date",
  images: ["https://www.google.com/logos/doodles/2019/celebrating-sojourner-truth-5641167843622912.6-l.png",
            "https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg"],
  url: "https://www.kijiji.ca/v-cats-kittens/city-of-toronto/two-black-peterbald-kittens-with-hair-phenotype-oriental/1388589330"
}

$(document).ready(function() {
  displayAds([ad1, ad2]);
})
