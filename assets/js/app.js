// Contact Map
function initMap() {
  var myLatLng = {
    lat: 30.284350,
    lng: -97.825702
  };
  var map = new google.maps.Map(document.getElementById('mapContact'), {
    center: myLatLng,
    zoom: 13,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: '1114 Lost Creek Boulevard',
  });
}
function initMapEvents() {
  var myLatLng = {
    lat: 30.284350,
    lng: -97.825702
  };
  var map = new google.maps.Map(document.getElementById('mapEvents'), {
    center: myLatLng,
    zoom: 17,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: '1114 Lost Creek Boulevard',
  });
}

(function () {

  $(document).ready(function () {
    // hamburger
    (function () {
      $('.hamburger-icon').click(function () {
        $(this).toggleClass('open');
      });
    })();
    // Counter
    (function () {
      var counters = $(".count p");
      var countersQuantity = counters.length;
      var counter = [];

      for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
      }

      var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
          if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
          }
        }, 50);
      }

      for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
      }
    })();

    // Form Input animate
    (function () {
      var formGroup = $('.form-group');
      var input = $(formGroup).find('input');

      for (var i = 0; i < input.length; i++) {
        var inputIndex = input[i];
        $(inputIndex).on('focus', function () {
          $(this).parent('.contact__form-field').addClass('input-focused');
        })
        $(inputIndex).on('focusout', function () {
          $(this).parent('.contact__form-field').removeClass('input-focused');
        })
      }
    })();

    // Form Validation
    (function (e) {
      var inputs = $('.contact__form .input__required');

      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      $('.contct__form-btn-submit').on('click', stopSend)

      function stopSend(e) {

        var email = $("#email").val();
        var errorForm = 0;

        for (var i = 0; i < inputs.length; i++) {

          if (inputs[i].value == '') {
            errorForm++;
            inputs[i].parentElement.classList.add('errorInput');
          }
        }

        if (!validateEmail(email)) {
          $('#email').addClass('errorInput');

          if (errorForm > 0) {

            return false;
          }
        } else {
          $('#email').removeClass('errorInput');
          $('.form-submit-succes').addClass('form-submit-succes_show');
          return true;
        }
      }
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].oninput = function () {
          if (this.classList.parentElement.contains('errorInput')) {
            this.classList.parentElement.remove('errorInput');
          }
        }
      }
    })();

    // Home Slider indicators position
    (function(){
      function indicatorsPosition(){
        var innerHeight = $('#mainHeroSlider .carousel-inner').height();
        var sectionPaddingBottom = $('.main__hero').css('padding-bottom');
        var sum = parseInt(innerHeight) +  parseInt(sectionPaddingBottom);
        var indicators = $('.hero__slider-indicators');

        $(indicators).css('top', sum);
      }

      if($(window).width() > 750 ){
        indicatorsPosition();

        $('#mainHeroSlider').on('slid.bs.carousel', function () {
          indicatorsPosition();
        })
      }

      $(window).resize(function(){
        if( $(window).width() > 750 ){
          indicatorsPosition();

          $('#mainHeroSlider').on('slid.bs.carousel', function () {
            indicatorsPosition();
          })
        }

      })

    })();

    (function(){
      function mainAbout(){
        var mainAbout = $('.main-about');
        var asbsdescPicDescHeight = $('.main-about .img-absdesc__pic-desc').height();
        var sum = parseInt(asbsdescPicDescHeight) + parseInt(100);
        $(mainAbout).css('margin-bottom', sum);
      }
      function about(){
        var mainAbout = $('.about');
        var asbsdescPicDescHeight = $(' .about .img-absdesc__pic-desc').height();
        var sum = parseInt(asbsdescPicDescHeight) + parseInt(100);
        $(mainAbout).css('margin-bottom', sum);
      }
      function mainActivity(){
        var mainAbout = $('.main-activity');
        var asbsdescPicDescHeight = $(' .main-activity .img-absdesc__pic-desc').height();
        var sum = parseInt(asbsdescPicDescHeight) + parseInt(100);
        $(mainAbout).css('margin-bottom', sum);
      }
      function mainMision(){
        var mainMision = $('.main-mission');
        var mainMisionBodyHeight = $('.main-mission .main-mission__body-desc-wrap').height();
        var sum = parseInt(mainMisionBodyHeight) + parseInt(100);
        $(mainMision).css('margin-bottom', sum);
      }
      if($(window).width() < 750 ){
        mainAbout();
        mainMision();
        about();
        mainActivity();
      }
      else{
        $('.main-about, .main-activity').css('margin-bottom', '200px');
        $('.main-mission').css('margin-bottom', '150px');
        $('.main-forms, .about').css('margin-bottom', '100px');
      }


      $(window).resize(function(){
        if( $(window).width() < 750 ){
          mainAbout();
          mainMision();
          about();
          mainActivity();
        }
        else{
          $('.main-about, .main-activity').css('margin-bottom', '200px');
          $('.main-mission').css('margin-bottom', '150px');
          $('.main-forms, .about').css('margin-bottom', '100px');
        }
      })
    })();

    // Append mail on footer
    (function(){
        var container = $('.footer__meu');
        var container2 = $('.footer__contact');
        var item = $('.footer__contact-mail');
        if($(window).width() < 974){
          $(item).appendTo(container);
        }
        else{
          $(item).appendTo(container2);
        }

      $(window).resize(function(){
        if($(window).width() < 974){
          $(item).appendTo(container);
        }
        else{
          $(item).appendTo(container2);
        }
      });

    })();

    // Main margin-top
    (function(){
      function mainMargin(){
        var headerHeight = $('.header').outerHeight();
        var main = $('.main_mt');
        $(main).css('margin-top', headerHeight);
      }
      if($(window).width() < 975){
        mainMargin()
      }
      else{
        $('.main_mt').css('margin-top', 0);
      }
      $(window).resize(function(){
        if($(window).width() < 975){
          mainMargin()
        }
        else{
          $('.main_mt').css('margin-top', 0);
        }
      });
    })();

    // Events Listining Append
    (function(){
      var date = $('.events-listining__head-date');
      var container = $('.events-listining__head-col-left');
      var container2 = $('.events-listining__head-col-right');
      
      if($(window).width() <= 558){
        $(date).prependTo(container);
      }
      else{
        $(date).prependTo(container2);
      }

      $(window).resize(function(){
        if($(window).width() <= 558){
          $(date).prependTo(container);
        }
        else{
          $(date).prependTo(container2);
        }
      })

    })();

    // Home Header Menu
    (function(){
      var header = $('.header__home');
      var hamburger = $('.navbar-toggler');
      if( $(window).width() <= 975){
        $(hamburger).on('click', function(){
          $(header).toggleClass('header__home_open');
          if($(header).hasClass('header__home_open')){
            $(header).css('background', '#04BCC6')
          }
          else{
            $(header).css('background', 'transparent')
          }
        })
      }
    })();


  });

})(jQuery)