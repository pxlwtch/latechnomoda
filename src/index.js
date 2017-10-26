const $ = require('jquery');
require('./static/sass/aqua.scss');
require('./static/sass/styles.scss');
require('./static/sass/case-study.scss');
require('./static/sass/bandshite.scss');
require('./static/sass/beverly.scss');
require('./static/sass/rosie.scss');

console.log('hi this site was made with ❤︎ by @daliafyi and @0XDEAD37 on twitter');


$('.subtitle').on('click', function(){
  console.log("you clicked on subtitle");
})
$('a').on('click', function(event) {


  if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  }
});
