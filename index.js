 // Form Validation using HTML5 attributes
 (function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// Add your custom JavaScript here
$(document).ready(function(){
    // Activate the carousel
    $("#myCarousel").carousel();
    
    // Enable carousel indicators to change slide on click
    $(".carousel-indicators li").click(function(){
      $("#myCarousel").carousel(parseInt($(this).attr("data-slide-to")));
    });
    
    // Enable left and right controls to change slide
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });
  });
  

