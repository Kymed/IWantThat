$(document).ready(function() {
  $('#upload').submit(function () {
    var file = document.querySelector('input[type=file]').files[0];

    reader.onloadend = function () {
      imageUrl = reader.result;
      $('#upload')[0].reset(); // Reset form inputs
    }

    if (file) {
      reader.readAsDataURL(file);
    }

    return false; // Disable default form functionality
  });
});
