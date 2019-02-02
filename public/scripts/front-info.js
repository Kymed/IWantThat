$(document).ready(function() {
  $('#upload').submit(function () {
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      imageUrl = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
      // IDEA: SEND TO POST
      console.log(reader)
    }



    return false; // Disable default form functionality
  });
});
