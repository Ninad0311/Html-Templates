$(document).ready(function () {
    initMenuSlide();
    function initMenuSlide() {
        // Add smooth scrolling to all links
        jQuery(".menu a").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                console.log('in hash');
                event.preventDefault();
                var hash = this.hash;

                jQuery('html, body').animate({
                    scrollTop: jQuery(hash).offset().top - 95
                    // scrollTop: jQuery(hash).offset().top - window.pageYOffset
                }, 800, function () {

                });

            } // End if
        });
    }
});
$(function() {
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-83860634-5', 'auto');
  ga('require', 'ec');
  jQuery(".main_bts a").click(function() {
    var atag = $(this);
    var title = atag.attr('data-ga');
    var id = atag.attr('data-blocks');
    var name = atag.attr('data-name');
    var position = atag.attr('data-ga-position');
    /*var div_id = atag.attr('data-divid');
    var div_position = atag.attr('data-divposition');*/
    /*
    ga('send', {
    	hitType: 'event',
    	eventCategory: 'Ecommerce',
    	eventAction: 'Promotion Click',
    	eventLabel: title 
    });*/
    // return false;
    ga('ec:addPromo', { // Promo details provided in a promoFieldObject.
      'id': "lp_" + id, // Promotion ID. Required (string).
      'name': "back_to_school_" + name, // Promotion name (string).
      'creative': title, // Creative (string).
      'position': position // Position  (string).
    });
    ga('ec:setAction', 'promo_click');
    ga('send', 'event', 'Ecommerce', 'Promotion Click', title);
    //return false;
  });
  var $appeared = $('.main_bts');
  $('.main_bts .gasection').appear();
  section_visited = new Array();
  $(document.body).on('appear', '.gasection', function(e, $affected) {
    $affected.each(function() {
      if (jQuery.inArray($(this).attr('data-ga'), section_visited) == -1) {
        var atag = $(this);
        var title = atag.attr('data-ga');
        var id = atag.attr('data-blocks');
        var name = atag.attr('data-name');
        var position = atag.attr('data-ga-position');
        section_visited.push($(this).attr('data-ga'));
        /*
        ga('send', {
        	hitType: 'promoView',
        	
        	eventCategory: 'Ecommerce',
        	eventAction: 'Promotion Impressions',
        	eventLabel: $(this).attr('data-ga') 
        	//name:this.innerHTML,
        	//position : div_position
        });
        */
        ga('ec:addPromo', { // Promo details provided in a promoFieldObject.
          'id': "lp_" + id, // Promotion ID. Required (string).
          'name': "back_to_school_" + name, // Promotion name (string).
          'creative': title, // Creative (string).
          'position': position // Position  (string).
        });
        ga('ec:setAction', 'promo_view');
        ga('send', 'event', 'Ecommerce', 'Promotion Impressions', title);
        // return false;
        //console.log('adding section ' + this.id); 
      }
    });
  });
});
$(function() {
  $('.language-en #top_banner').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
      }
    }]
  });
  $('.language-ar #top_banner').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
      }
    }]
  });
  $('.language-en .block3_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    // prevArrow: '<div class="scroll-arrow-wrap"><img src="'+ left_arrow +'"></div>',
    // nextArrow: '<div class="scroll-arrow-wrap"><img src="'+ right_arrow +'"></div>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 2,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-en .block4_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    // prevArrow: '<div class="scroll-arrow-wrap"><img src="'+ left_arrow +'"></div>',
    // nextArrow: '<div class="scroll-arrow-wrap"><img src="'+ right_arrow +'"></div>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2.5,
        speed: 100,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-en .block4_slider_set1').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    // prevArrow: '<div class="scroll-arrow-wrap"><img src="'+ left_arrow +'"></div>',
    // nextArrow: '<div class="scroll-arrow-wrap"><img src="'+ right_arrow +'"></div>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2.5,
        speed: 100,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-ar .block4_slider_set1').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    // prevArrow: '<div class="scroll-arrow-wrap"><img src="'+ left_arrow +'"></div>',
    // nextArrow: '<div class="scroll-arrow-wrap"><img src="'+ right_arrow +'"></div>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2.5,
        speed: 100,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-en .block5_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        speed: 100,
        slidesToShow: 3.4,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-en .block6_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 2.4,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-en .block7_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2.8,
        speed: 100,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-en .block8_slider1').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 2,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-en .block8_slider2').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2.4,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-en .block10_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2.4,
        speed: 100,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-ar .block10_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 2.4,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-en .block11_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 3.3,
        row: 2,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-ar .block11_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 3.3,
        rows: 2,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-en .block14_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2.2,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-ar .block14_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2.2,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-ar .block3_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    // prevArrow: '<div class="scroll-arrow-wrap"><img src="'+ left_arrow +'"></div>',
    // nextArrow: '<div class="scroll-arrow-wrap"><img src="'+ right_arrow +'"></div>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 2,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-ar .block4_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    //rtl: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    // prevArrow: '<div class="scroll-arrow-wrap"><img src="'+ left_arrow +'"></div>',
    // nextArrow: '<div class="scroll-arrow-wrap"><img src="'+ right_arrow +'"></div>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      //rtl: true,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 2.5,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-ar .block5_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    //rtl: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      //rtl: true,
      settings: {
        centerMode: false,
        slidesToShow: 3.4,
        speed: 100,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-ar .block6_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    //rtl: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      //rtl: true,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 2.4,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-ar .block7_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    //rtl: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      //rtl: true,
      settings: {
        centerMode: false,
        slidesToShow: 2.8,
        speed: 100,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-ar .block8_slider1').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    //rtl: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      //rtl: true,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 2,
        speed: 100,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-ar .block8_slider2').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    //rtl: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      //rtl: true,
      settings: {
        centerMode: false,
        slidesToShow: 2.4,
        speed: 100,
        slidesToScroll: 1,
        dots: true,
      }
    }, ]
  });
  $('.language-ar .block14_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    //rtl : true,
    prevArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button> ',
    nextArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2.2,
        speed: 100,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-en .block13_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    dots: true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        speed: 100,
        slidesToShow: 2.4,
        slidesToScroll: 1,
      }
    }, ]
  });
  $('.language-ar .block13_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    rows: 0,
    dots: true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    rtl: true,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        speed: 100,
        slidesToShow: 2.4,
        slidesToScroll: 1,
      }
    }, ]
  });
});