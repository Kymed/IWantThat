$(document).ready(function() {
  var file = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function() {
    imageUrl = reader.result;
  }

  if (file) {
    ready.readAsDataURL(files);
  }

  return false;
});
