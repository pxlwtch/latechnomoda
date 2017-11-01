const $ = require('jquery');
const scrollreveal = require('scrollreveal');
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

window.sr = scrollreveal({reset:true, viewFactor: 0.25,});
window.sr.reveal('.section-title');
window.sr.reveal('.work-piece');
window.sr.reveal('.header');
window.sr.reveal('.pink-separator');
window.sr.reveal('.bio-content');
window.sr.reveal('.other-info');
window.sr.reveal('.bottom-links');
window.sr.reveal('.blue-text');
window.sr.reveal('.blue-line');
window.sr.reveal('.separated-container');
window.sr.reveal('.large-image');
