(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

var token = '216613872.1677ed0.52c7e99b192d45218a380c211d808a6f',
num_photos = 8;

$.ajax({
url: 'https://api.instagram.com/v1/users/self/media/recent',
dataType: 'jsonp',
type: 'GET',
data: {access_token: token, count: num_photos},
success: function(data){
    console.log(data);
    for( x in data.data ){
        $('ol').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
    }
},
error: function(data){
    console.log(data);
}
});

var config = {
  apiKey: "AIzaSyBFUP2NoYuBXSN-cIMKPoAh5CdDDBFt85M",
  authDomain: "this-magic-moment.firebaseapp.com",
  databaseURL: "https://this-magic-moment.firebaseio.com",
  projectId: "this-magic-moment",
  storageBucket: "this-magic-moment.appspot.com",
  messagingSenderId: "401022451753"
};
firebase.initializeApp(config);

  var database = firebase.database();

  var emailCounter = 0;

  $("#click-button").on("click", function() {

    emailCounter++;

    database.ref().push({
      emailCount: emailCounter,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });


