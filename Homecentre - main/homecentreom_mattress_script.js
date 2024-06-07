
// mattress page start

$(function () {
  
var slickUrl = "https://cdn.c1.amplience.net/c/homecentre/slick_js";
var country = "om";
// var country = "window.LMS.pageData.countryIsoCode";
  var display_slide_count = 1.7;
  if(country != 'ae' && country !='sa'){
    display_slide_count = 2;
  }
	 $('.language-en .top-banner').slick({
    infinite: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots : true,
          centerMode: false,
          slidesToShow: 1,
          speed: 100,
          autoplay: true,
          autoplaySpeed: 7000,
          slidesToScroll: 1,

        }
      },
    ]
  });
  $('.language-ar .top-banner').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 7000,
    rtl: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          speed: 100,
          autoplay: true,
          autoplaySpeed: 7000,
          slidesToScroll: 1,
	      dots:true,
        }
      },
    ]
  });
  	
    $('.language-en .spwidth').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      rows: 0,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
      nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
      autoplay: false,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick"
        },
      ]
    });
    $('.language-ar .spwidth').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      rows: 0,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
      nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
      autoplay: false,
      autoplaySpeed: 2500,
      rtl: true,
        responsive: [
        {
          breakpoint: 767,
          settings: "unslick"
        },
      ]
    });
 
	
  $('.language-en .block1_slider').slick({
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
    responsive: [
      {
        breakpoint: 767,
        settings: {
          //dots : true,
          centerMode: false,
          slidesToShow: display_slide_count,
          speed: 100,
          slidesToScroll: 1,

        }
      },
    ]
  });
  $('.language-ar .block1_slider').slick({
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
    rtl: true,
      responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: display_slide_count,
          speed: 100,
          slidesToScroll: 1,
      //dots:true,
        }
      },
    ]
  });
  
   $('.language-en .block2_slider').slick({
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
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1.5,
          speed: 100,
          slidesToScroll: 1,
	     //dots:true,
        }
      },
    ]
  });
  
  
   $('.language-ar .block2_slider').slick({
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
    rtl: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1.5,
          speed: 100,
          slidesToScroll: 1,
	     //dots:true,
        }
      },
    ]
  });
  
  
  $('.language-en .block2_slider_mob').slick({
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
      responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1.5,
          speed: 100,
          slidesToScroll: 1,
	     //dots:true,
        }
      },
    ]
  });
  
  
   $('.language-ar .block2_slider_mob').slick({
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
    rtl: true,
      responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1.5,
          speed: 100,
          slidesToScroll: 1,
	     //dots:true,
        }
      },
    ]
  });
  
  
   $('.language-en .block4_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
      responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 2.6,
          speed: 100,
          slidesToScroll: 2,
	     //dots:true,
        }
      },
    ]
  });
  
  
   $('.language-ar .block4_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2500,
    rtl: true,
      responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 2.6,
          speed: 100,
          slidesToScroll: 2,
	     //dots:true,
        }
      },
    ]
  });
  
   $('.language-en .block6_slider').slick({
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
      responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          speed: 100,
          slidesToScroll: 1,
	      dots:true,
        }
      },
    ]
  });
  
  
   $('.language-ar .block6_slider').slick({
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
    rtl: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          speed: 100,
          slidesToScroll: 1,
	      dots:true,
        }
      },
    ]
  });
});



$(document).ready(function() {
  

	  
    var numItems = $('li.fancyTab').length;
		
	
			  if (numItems == 12){
					$("li.fancyTab").width('8.3%');
				}
			  if (numItems == 11){
					$("li.fancyTab").width('9%');
				}
			  if (numItems == 10){
					$("li.fancyTab").width('10%');
				}
			  if (numItems == 9){
					$("li.fancyTab").width('11.1%');
				}
			  if (numItems == 8){
					$("li.fancyTab").width('12.5%');
				}
			  if (numItems == 7){
					$("li.fancyTab").width('14.2%');
				}
			  if (numItems == 6){
					$("li.fancyTab").width('16.666666666666667%');
				}
			  if (numItems == 5){
					$("li.fancyTab").width('20%');
				}
			  if (numItems == 4){
					$("li.fancyTab").width('25%');
				}
			  if (numItems == 3){
					$("li.fancyTab").width('33.3%');
				}
			  if (numItems == 2){
					$("li.fancyTab").width('50%');
				}
		});
    

// mattress page end

