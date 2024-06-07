// faq's script start

  $(document).ready(function () {
      $('#faq-menu-mobile').on('click', function () {
          $(this).toggleClass("open");
      });
      $('#faq-menu-mobile #faq-menu-list-mobile li a').on('click', function () {
          $(this).parent().addClass("active").siblings().removeClass("active");
          $('#faq-menu-mobile > a').html($(this).html());
          var openSectionHref = $(this).attr("href");
          $('#content').find(openSectionHref).addClass("selected").siblings().removeClass("selected");
      });

      $('.box.openclose').on('click', function () {
          if ($(this).hasClass('active')) {
              $('#content .box.openclose').removeClass('active');
              $('#content .box.openclose .slide').addClass("js-slide-hidden");
              $('#content .box.openclose .slide').css("transition", "max-height 0.5s ease");
          } else {
              $('#content .box.openclose').removeClass('active');
              $('#content .box.openclose .slide').addClass("js-slide-hidden");
              $(this).find(".slide").removeClass('js-slide-hidden');
              $(this).addClass('active');
          }
      });

      $('ul#faq-menu-list > li > a').click(function (e) {
          e.preventDefault();
          var curLink = $(this);
          var scrollPoint = $(curLink.attr('href')).position().top + 2;
          $('body,html').animate({
              scrollTop: scrollPoint
          }, 500);
      });

      $(window).scroll(function () {
          if ($(this).scrollTop() > 50) {
              $('#faq-menu').addClass('fixed');
          } else {
              $('#faq-menu').removeClass('fixed');
          }
          onScroll();
      });

      if (window.location.hash) {
          if (window.location.hash.indexOf('faq-question-group-') == 1) {
              var htarget = $('#content').find(window.location.hash);
              $("div > div.box.openclose:first-child", htarget).trigger("click");
              var window_location_hash = window.location.hash;

              $('ul#faq-menu-list-mobile a[href^="' + window_location_hash + '"]').trigger("click");
              $('#faq-menu-mobile').toggleClass("open");
          } else {
              var htarget = $('#content').find(window.location.hash);
              htarget.trigger("click");
              var window_location_hash = '#' + htarget.parent().closest('section').attr('id');
          }
          $('ul#faq-menu-list a[href^="' + window_location_hash + '"]').parent().addClass("active").siblings().removeClass("active");
      }
  });

  function onScroll(event) {
      var scrollPos = $(document).scrollTop();
      $('#faq-menu-list li a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('#faq-menu-list li').removeClass("active");
              currLink.parent().addClass("active");
          } else {
              currLink.parent().removeClass("active");
          }
      });
  }

// faq's script end



// Interior design start

$(function() {
  if (window.LMS.pageData.config.baseURL.indexOf('www.homecentre') !== -1) {
    var baseURL = 'https://origin.homecentre.com';
  } else {
    var baseURL = 'https://uatwww2.homecentre.com/ecomm';
  }
  js_code(window.LMS.pageData.lang, baseURL, window.LMS.pageData.countryIsoCode);

  // js_code('en','https://uatwww2.homecentre.com/ecomm','om');
});
function js_code(lang,base_url, ori_country){

  
  $('#notify-submit-form').click(function() {
    //$('#notify-submit-form').attr('disabled','disabled');
    return registration_add();
  });

  function valid_email(elem) {
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!elem.match(re))
      return false;
    else
      return true;
  }

  function valid_phone(phone_no) {
    var re = /^[0-9\+\ ]*$/;
    //var re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!phone_no.match(re))
      return false;
    else
      return true;
  }
  $('.city').on('change', function() {
    $('select[name="preferred_store"]').prop('disabled', 'disabled');
    var cityVar = $(this).val();
    // if(territory != 'ae'){ 
    //   var cityVar = $("input[name=city]:checked").val();
    // } else {
    //   var cityVar = $('select[name="city"]').val();
    // }
    $.ajax({
      url: base_url + '/getstoredata',
      //url: 'https://uatwww2.homecentre.com/ecomm/getstoredata', 
      type: "POST",            
      data: {selectedCity: cityVar,lang:lang}, 
      dataType: 'json',
    }).done(function (data) {
    	console.log(data); 
      if(lang == 'ar'){   
      storeOptions = '<option disabled selected value class="choose">اختر المتجر المفضل لديك:</option>';
      }else {  
      storeOptions = '<option disabled selected value class="choose">Choose your preferred store:</option>';       
      }
      $.each(data, function(key, store){	         
        storeOptions += '<option value="'+key+'">'+store+'</option>';          
      });
      $('#prefered_store .inputs select').html(storeOptions);  
      $('select[name="preferred_store"]').prop('disabled', false);   
    });
  });
  
  function registration_add() {
    var name = $('#lms-name-add').val();
    var dob = $('#date1').val();
    var email = $('#lms-email-add-form').val();
    var mobile = $('#lms-mobile-add').val();
    var country = $('#lms-country-add').val();
    var territory = $("input[name=territory]").val();
     if(territory != 'ae' && territory != 'bh'){
      var city = $("input[name=city]:checked").val();
    } else {
      var city = $('select[name="city"]').val();
    }
    var interested = $("input[name=interested_in]:checked").val();
 
    var preferred_store = $('select[name="preferred_store"]').val();
    /*$('#name-error').hide();
    $('#email-error').hide();
    $('#email-error_3').hide(); 
    $('#mobile-error').hide();
    $('#mobile-error_2').hide();
    $('#country-error').hide();*/


    $('#lms-mobile-add').css('border-color','#fff');

    $('#lms-order-number-add').css('border-color','#fff');
    $('#lms-country-add').css('border-color','#fff');

    $('.jcf-select').css('border-color','#fff');
    $('#lms-mobile-add').css('border-color','#fff');
    $('#lms-email-add-form').css('border-color','#fff');
    $('#lms-name-add').css('border-color','#fff');


    var error = 0;
    
    if(name == ''){
      /*$('#name-error').show();*/
      $('#lms-name-add').css('border-color','#D7244C');
      $('#lms-name-add::placeholder').css('color','#D7244C');
      $('#signup-name .labels').css('color','#D7244C');
      error = 1;
    }
    if(email == ''){
      $('#lms-email-add-form').css('border-color','#D7244C');
      $('#lms-email-add-form::placeholder').css('color','#D7244C');
      $('#signup-email .labels').css('color','#D7244C');
      error = 1;
    }
   if(email != '' && valid_email(email) == false){
     /* $('#email-error_3').show();*/
      $('#lms-email-add-form').css('border-color','#D7244C');
      $('#lms-email-add-form::placeholder').css('color','#D7244C');
      $('#signup-email .labels').css('color','#D7244C');
      error = 1;
    }

    if(mobile == ''){
      /*$('#mobile-error').show();*/
      $('#lms-mobile-add').css('border-color','#D7244C');
      $('#lms-mobile-add::placeholder').css('color','#D7244C');
      $('#signup-phone .labels').css('color','#D7244C');
      error = 1;
    }
    if(territory == 'ae' || territory == 'bh'){
    if(typeof city == "undefined" || city == null){
      /*$('#mobile-error').show();*/
      $('.jcf-select-city_error').attr('style','border-color: #D7244C !important');
    //  $('#lms-mobile-add').css('border-color','#D7244C'); 
      $('.span_city').css('color','#D7244C');
      $('#signup-city .labels').css('color','#D7244C');
      error = 1;
    }
    
    if(typeof preferred_store == "undefined" || preferred_store == null){
      /*$('#mobile-error').show();*/
      $('.jcf-select').attr('style','border-color: #D7244C !important');
    //  $('#lms-mobile-add').css('border-color','#D7244C'); 
      $('.span.jcf-option-choose').css('color','#D7244C');
      //$('#signup-city .labels').css('color','#D7244C');
      error = 1;
    }
  }
    if(territory != 'ae'){ //Change by ninad
      // if(typeof interested == "undefined"){
      //   /*$('#mobile-error').show();*/
      //   // $('#lms-mobile-add').css('border-color','#D7244C');
      //   $('.radio_tab').css('color','#D7244C');
      //   $('#interested_in .labels').css('color','#D7244C');
      //   error = 1;
      // }
    }

    if(valid_phone(mobile) == false){
      $('#lms-mobile-add').css('border-color','#D7244C');
      $('#lms-mobile-add::placeholder').css('color','#D7244C');
      $('#signup-phone .labels').css('color','#D7244C');
      error = 1;
    }

/*    if(ori_country != 'bh') {
      var phone_val = {};
      phone_val['ae'] = '+9715';
      phone_val['sa'] = '+9665';
     
      var phone_no_val = mobile.substring(0, 5);
      if(mobile != '' && (phone_no_val != phone_val[ori_country] || mobile.length >= 14)){
        $('#mobile-error_2').show();
        $('#lms-mobile-add').css('border-color','red');
        error = 1;
      }
    }*/


    if(country == '' ){
      $('#country-error').show();
      $('#lms-country-add').css('border-color','red');
      error = 1;
    }

    /*if(country_res == 'none'){  
      console.log("In code");

      $('#country-error').show();
      $('#lms-country-add').css('border-color','red');
      error = 1;
    }*/




    // if($('#newsletter_offers').is(":checked")){   
    //   if(!($('#newsletter_lifestyle').is(":checked")) && !($('#newsletter_maybelline').is(":checked"))){   
    //     $('#newsletter_error').show();
    //     error = 1;
    //   }
    // }
   
    if(error == 0) {

      $('#lms-order-number-add').css('border-color','#fff');

      if(lang == 'ar'){
        $('#notify-submit-form').val('الرجاء الانتظار...');
      }else {
        $('#notify-submit-form').val('PLEASE WAIT...');
      }
      //$('#notify-submit-form').css({'background':'#023FCC','color':'#fff'});

      $.ajax({
        url: base_url+'/interior_design_save/', 
        type: "POST",            
        data: new FormData(document.getElementById('form_id')), 
        contentType: false,       
        cache: false,            
        processData:false,
        success: function(resp) {  
          console.log(resp);
          if(resp == "subscribed_new") {
            $('#email-error_2').hide();
            $('#signup-submit').hide();
            $('#success1').click();
            // $('.thank_you').hide();

            /*var scrollPos =  $(".raffle_main").offset().top;
            $(window).scrollTop(scrollPos);*/
          } else {
            $('#email-error_2').show();
            $('#notify-submit-form').val('SUBMIT');
            $('#lms-email-add-form').css('border-color','#D7244C');
            $('#signup-email .labels').css('color','#D7244C');
            error = 1 ;
            return false;
          }
        },
      });
            
    } 
    else {
      //$('#notify-submit-form').removeAttr('disabled');
      return false;
    }

    if(error == 1) {
      console.log(error);
      //$('#notify-submit-form').removeAttr('disabled');
    }
    return false;
  }
}
// Interior design end


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
  
  // $('.top-banner').on('afterChange', function(event, slick, currentSlide){
  //   console.log('change');
  //     if($('.slick-active').find('video').length !== 0) {
  //   console.log('video');
  //       $('.mattress-large').trigger("play");
  //       $('.mattress-small').trigger("play");
  //     }
  //   });
  //   $('.top-banner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //     var mySlideNumber = nextSlide;
  //     console.log(mySlideNumber);
  //  });
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


// bedding store start

$(function () {
  $('.language-en .percale-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    dots : true,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      },
    ]
  });
  $('.language-ar .percale-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    dots : true,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    rtl: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      },
    ]
  });

  $('.language-en .sateen-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    dots : true,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      },
    ]
  });
  $('.language-ar .sateen-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    dots : true,
    rows: 0,
    slidesToScroll: 1,
    arrows: true,
    rtl: true,
    prevArrow: '<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      },
    ]
  });

  $('.language-en .perfect-pairings-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    dots : false,
    rows: 0,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
            breakpoint: 9999,
            settings: "unslick"
        },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.language-ar .perfect-pairings-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    dots : false,
    rows: 0,
    rtl: true,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.language-en .covers-slider-mob').slick({
    slidesToShow: 3,
    infinite: false,
    speed: 300,
    dots : false,
    rows: 0,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.4,
          infinite: false,
          speed: 300,
          dots : false,
          rows: 0,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });
  $('.language-ar .covers-slider-mob').slick({
    slidesToShow: 3,
    infinite: false,
    speed: 300,
    dots : false,
    rows: 0,
    rtl: true,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.4,
          infinite: false,
          speed: 300,
          dots : false,
          rows: 0,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });

  $('.language-en .touches-slider').slick({
    slidesToShow: 4,
    infinite: false,
    speed: 300,
    dots : false,
    rows: 0,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.4,
          infinite: false,
          speed: 300,
          dots : false,
          rows: 0,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });
  $('.language-ar .touches-slider').slick({
    slidesToShow: 4,
    infinite: false,
    speed: 300,
    dots : false,
    rows: 0,
    rtl: true,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.4,
          infinite: false,
          speed: 300,
          dots : false,
          rows: 0,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });

});


// LMS STATIC CONTENT --------------------
$(function () {

  $('.bedding-store-main').on('click', 'a', function (e) {
    var atag = $(this);
    var title = atag.attr('data-ga');

  if(title != undefined){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=0;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', LMS.pageData.ga, 'auto');
    
		ga('send', 'event', "Ecommerce", "Promotion Click", title);
  }
    // console.log(title);
    // return false;
    });

  const slider = document.querySelector('.perfect-pairings-slider');
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
});

// bedding store end

// bedding guide start

$(function () {

  $( "#sleep-tabs" ).tabs();

  $("#bedsheets-accordion, #duvets-accordion, #comforters-accordion, #pillows-accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    active: false
  });

  $('.language-en .fabrics-carousel').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1.4,
    rows: 0,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots : false,
          centerMode: false,
          slidesToShow: 1.4,
          speed: 100,
          autoplay: false,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.language-ar .fabrics-carousel').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1.4,
    rows: 0,
    slidesToScroll: 1,
    arrows: false,
    rtl:true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots : false,
          centerMode: false,
          slidesToShow: 1.4,
          speed: 100,
          autoplay: false,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.language-en .comforters-sec-mob').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1.4,
    rows: 0,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots : false,
          centerMode: false,
          slidesToShow: 1.4,
          speed: 100,
          autoplay: false,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.language-ar .comforters-sec-mob').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1.4,
    rows: 0,
    slidesToScroll: 1,
    arrows: false,
    rtl:true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots : false,
          centerMode: false,
          slidesToShow: 1.4,
          speed: 100,
          autoplay: false,
          slidesToScroll: 1,
        }
      },
    ]
  });


  var $owl = $(".sleep-position-slider .owl-carousel");

  $owl.children().each(function (index) {
    $(this).attr("data-position", index); // NB: .attr() instead of .data()
  });

  $owl.owlCarousel({
    center: true,
    loop: true,
    items: 3,
    mouseDrag: false,
  });

  $(document).on("click", ".owl-item>div", function () {
    var $speed = 300; // in ms
    $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);

    var current_slide = $(this).attr("data-position");
    console.log(current_slide);
    $('.sleep-position-content.right').find('div').removeClass('active-sleep');
    $('.sleep-position-content.right > div[data-index="'+current_slide+'"]').addClass('active-sleep');
  });

  /*$('.language-en .sleep-position-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    rows: 0,
    // slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    // autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      },
    ]
  });*/

  $('.language-en .certificates').slick({
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    pauseOnHover: true,
    variableWidth: true,
    arrows: false,
    dots : false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.2,
          variableWidth: false,
        }
      },
    ]
  });
  $('.language-ar .certificates').slick({
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    pauseOnHover: true,
    arrows: false,
    dots : false,
    rtl : true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.2,
        }
      },
    ]
  });



  var $certificates = $('#certificates');
  var certificates = $certificates.children().length;
  var certificateswidth = (certificates * 900); // 140px width for each client item 
  $certificates.css('width', certificateswidth);

  var rotating = true;
  var clientspeed = 0;
  var seeclients = setInterval(rotateCertificates, clientspeed);
        
  $(document).on({
    mouseenter: function(){
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function(){
      rotating = true;
    }
  }, '.certification-sec');
        
  function rotateCertificates() {
    if(rotating != false) {
      var $first = $('#certificates li:first');
      $first.animate({ 'margin-left': '-900px' }, 2000, "linear", function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('#certificates li:last').after($first);
      });
    }
  }

});


// LMS STATIC CONTENT --------------------
$(function () {

$('.bedding-guid-main').on('click', 'a', function (e) {
    var atag = $(this);
    var title = atag.attr('data-ga');

  if(title != undefined){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=0;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', LMS.pageData.ga, 'auto');
    
		ga('send', 'event', "Ecommerce", "Promotion Click", title);
  }
    // console.log(title);
    // return false;
    });

  
});

$(function () {
  const slider = document.querySelector('.fabrics-slider');
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
})

// $(document).on("click", ".section-5.mobile li.tabs", function(){});

// bedding guide end




// Colette page start
$(document).ready(function() {


  var modulepath = "https://homecentre.a.bigcontent.io/v1/static/";
  var modulepathjson = "https://origin.homecentre.com/sites/ecomm/modules/custom/colette";
  var siteurl = "https://www.homecentre.com/om/en";
  // var siteurl = "window.LMS.pageData.config.redirectUri";
  var slickUrl = "https://cdn.c1.amplience.net/c/homecentre/slick_js";

  var hbTitle = { "curve": "\u0644\u0648\u062d \u0631\u0623\u0633\u064a \u0643\u064a\u0631\u0641", "ray": "\u0644\u0648\u062d \u0631\u0623\u0633\u064a \u0631\u0627\u064a", "straight": "\u0644\u0648\u062d \u0631\u0623\u0633\u064a \u0633\u062a\u0631\u0627\u064a\u062a", "stripe": "\u0644\u0648\u062d \u0631\u0623\u0633\u064a \u0633\u062a\u0631\u0627\u064a\u0628", "wing": "\u0644\u0648\u062d \u0631\u0623\u0633\u064a \u0648\u064a\u0646\u062c" };
  var baseTitle = { "base-drawer": { "en": "Base with storage", "ar": "\u0645\u0639 \u062a\u062e\u0632\u064a\u0646" }, "only-base": { "en": "Base without storage", "ar": "\u0628\u062f\u0648\u0646 \u062a\u062e\u0632\u064a\u0646" } };
  var countryName = "om";
// var countryName = "window.LMS.pageData.countryIsoCode";
  
  var isMobile = false; //initiate as false
  // On Load
  // function lms_static_content() {
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    /*var size = $('.size-images.active').attr('value');
    var color = $('.color-image.active').attr('value');
    loadProductJSON(size, color);*/
  // }
  // if(isMobile) {
  // $.getScript( slickUrl, function() {
  // console.log('getScript');
  sliderSCInit();
  sliderHInit();
  // });
  // }
  // On Size Click
  $(document).on("click", ".select-size .ss-images .size-images", function(e) {
    $(".select-size .size-images.active").removeClass("active");
    $(this).addClass('active');
    var size = $(this).attr('value');
    if (countryName == 'om' || countryName == 'qa') {
      if (size == "120x200") {
        $('.slider-color div[data-slick-index="0"], .slider-color div[data-slick-index="5"]').css('display', 'none');
        //$(".color-image[value='black']").show();
        if ($(".color-image[value='beige']").hasClass('active') || $(".color-image[value='grey']").hasClass('active')) {
          $(".color-image").removeClass('active');
          $(".color-image[value='black']").addClass('active');
        }
      } else {
        $('.slider-color div[data-slick-index="0"], .slider-color div[data-slick-index="5"]').css('display', 'block');
      }
    }
    var color = $('.color-image.active').attr('value');
    loadProductJSON(size, color);
  });
  // On Color Click
  $(document).on("click", ".color .select-colors .color-image", function(e) {
    $(".select-colors .color-image.active").removeClass("active");
    $(this).addClass('active');
    var color = $(this).attr('value');
    var size = $('.size-images.active').attr('value');
    loadProductJSON(size, color);
  });

  function loadProductJSON(size, color) {
    // console.log(size+'_'+color); 
    //console.log(countryName);
    if (countryName == 'om' || countryName == 'qa') {
      var json_url = modulepathjson + "/json/amplience_oman/colette/" + size + "_" + color + ".json";
    } else {
      var json_url = modulepathjson + "/json/" + size + "_" + color + ".json";
    }
    //console.log(json_url);
    $.ajax({
        url: json_url,
        cache: false,
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
          // LMS.Loader.showPageLoader();
          $(".colette-main .overlay").show();
        },
      })
      .done(function(prod_data) {
        //console.log(prod_data);
        $('.content-size-name').html('(' + size + ')');
        headHtml = "";
        headHtml += '<div class="row slider-hb">';
        $.each(prod_data.headboard, function(style, value) {
          headHtml += '<div class="col-md-12">';
          headHtml += '<div class="header-images">';
          headHtml += '<a class="banner ga-link-cl link link-banner gasection" href="' + siteurl + '/p/' + value.item_code + '" target="_blank">';
          headHtml += '<img src="' + modulepath + value.desk_img + '" class="img-responsive center" alt="color">';
          if (false) {  //update here
          // if (window.LMS.pageData.lang == 'ar') {
            headHtml += '<span class="img-desc1" >' + hbTitle[style] + '</span>';
          } else {
            headHtml += '<span class="img-desc1" >' + style + '</span>';
          }
          headHtml += '</a>';
          headHtml += '</div>';
          headHtml += '</div>';
        });
        headHtml += '</div>';
        $('.headboard-desktop .row.slider-hb').remove();
        $('.headboard-desktop .container-fluid').append(headHtml);
        // $('.headboard-desktop .row.slider-hb').slick('slickAdd',headHtml);
        // $('.headboard-desktop .row').html(headHtml); // WORING
        // if(isMobile) {
        //console.log('headHtml'); 
        if ($.fn.slick === undefined) {
          $.getScript(slickUrl, function() {
            //destroyCarousel();
            sliderHInit();
          });
        } else {
          // destroyCarousel();
          sliderHInit();
        }
        // }
        // only base and base with drawer
        var baseHtml = "";
        var baseClass = "";
        var base_count = Object.keys(prod_data.base).length;
        if (base_count == 1) {
          baseClass = "col-md-12";
        } else {
          baseClass = "col-md-6";
        }
        $.each(prod_data.base, function(base, value) {
          baseHtml += '<div class="' + baseClass + '">';
          baseHtml += '<div class="base-img ' + base + '">';
          baseHtml += '<a class="banner ga-link-cl link link-banner gasection" target="_blank" href="' + siteurl + '/p/' + value.item_code + '">                            ';
          baseHtml += '<picture>';
          baseHtml += '<source srcset="' + modulepath + value.desk_img + '" media="(min-width: 768px)">';
          baseHtml += '<source srcset="' + modulepath + value.mob_img + '" media="(max-width: 767px)">';
          baseHtml += '<img src="' + modulepath + value.desk_img + '" class="img-responsive center" alt="base">';
          baseHtml += '</picture>';
          baseHtml += '</a>';
          if (countryName != 'om' && countryName != 'qa') {
            baseHtml += '<span class="img-desc1">' + baseTitle[base]['en'] + '</span>'; //update here
            // baseHtml += '<span class="img-desc1">' + baseTitle[base][window.LMS.pageData.lang] + '</span>';
          }
          baseHtml += '</div>';
          baseHtml += '</div>';
        });
        $('.base-section .row.base-inner').html(baseHtml);
        if (countryName != 'om' && countryName != 'qa') {
          //bench
          $('.bench-section a').attr('href', siteurl + '/p/' + prod_data.bench.item_code);
          if (isMobile) {
            // $('.bench-section img').attr('src', modulepath+prod_data.bench.mob_img);
            $('.bench-section a').html('<img src="' + modulepath + prod_data.bench.mob_img + '" class="img-responsive center" alt="bench">');
          } else {
            // $('.bench-section img').attr('src', modulepath+prod_data.bench.desk_img);
            $('.bench-section a').html('<img src="' + modulepath + prod_data.bench.desk_img + '" class="img-responsive center" alt="bench">');
          }
        }
        // LMS.Loader.hidePageLoader();
        $(".colette-main .overlay").hide();
      });
  }
  // $(document).on('ready', function () {
  function sliderHInit() {
    // console.log('sliderHInit');
    // HeadBoard english and arabic
    $('.language-en .slider-hb').slick({
      infinite: false,
      arrows: true,
      speed: 300,
      slidesToScroll: 3,
      slidesToShow: 3,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          // centerPadding: '40px',
          slidesToScroll: 1,
          slidesToShow: 1.4
        }
      }]
    });
    $('.language-ar .slider-hb').slick({
      infinite: false,
      arrows: true,
      speed: 300,
      slidesToScroll: 3,
      slidesToShow: 3,
      rtl: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          // centerPadding: '40px',
          slidesToScroll: 1,
          slidesToShow: 1.4
        }
      }]
    });
  }
  // });
  function sliderSCInit() {
    // console.log('sliderSCInit');
    // Color english and arabic
    $('.language-en .slider-color').slick({
      infinite: false,
      speed: 300,
      slidesToScroll: 5,
      slidesToShow: 5,
      arrows: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          //centerPadding: '0px',
          slidesToScroll: 2,
          slidesToShow: 2.6
        }
      }]
    });
    $('.language-ar .slider-color').slick({
      infinite: false,
      arrows: true,
      speed: 300,
      slidesToScroll: 5,
      slidesToShow: 5,
      rtl: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          //centerPadding: '0px',
          slidesToScroll: 2,
          slidesToShow: 2.6
        }
      }]
    });
    // Size english and arabic
    $('.language-en .slider-size').slick({
      infinite: false,
      speed: 300,
      slidesToScroll: 5,
      slidesToShow: 5,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          //centerPadding: '40px',
          slidesToScroll: 2,
          slidesToShow: 2
        }
      }]
    });
    $('.language-ar .slider-size').slick({
      infinite: false,
      speed: 300,
      slidesToScroll: 5,
      slidesToShow: 5,
      rtl: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          //centerPadding: '40px',
          slidesToScroll: 2,
          slidesToShow: 2
        }
      }]
    });
  }

  function destroyCarousel() {
    if ($('.slider-hb').hasClass('slick-initialized')) {
      $('.slider-hb').slick("unslick");
      // $('.slider-hb').unslick();
      // $(".slider-hb").unslick("unslick");
      // $('.slider-hb').slick('slickRemove');
    }
  }
});
// Colette page end








// steller page start

$(document).ready(function() {

  function sliderBInit(){
    //console.log('sliderBInit');
    // Base english and arabic
    $('.language-en .slider-base').slick({
      infinite: false,
      speed: 300,
      slidesToScroll: 2, 
      slidesToShow: 2,
      arrows: true,
      responsive: [
        {
            breakpoint: 786,
            settings: "unslick"
        }
    ] 
    });
    $('.language-ar .slider-base').slick({
      infinite: false,
      speed: 300,
      slidesToScroll: 2, 
      slidesToShow: 2,
      arrows: true,
      rtl:true,
      responsive: [
        {
            breakpoint: 786,
            settings: "unslick"
        }
    ] 
    });
}
sliderBInit();
$(window).resize(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth > 768) {
      sliderBInit();   
    }
});
function sliderHInit(){
  //console.log('sliderHInit');

  // HeadBoard english and arabic
  $('.language-en .slider-hb').slick({
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToScroll: 3,
    slidesToShow: 3,    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          // centerPadding: '40px',
          slidesToScroll: 1,
          slidesToShow: 1.4
        }
      }
    ]
  });
  $('.language-ar .slider-hb').slick({
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToScroll: 3,
    slidesToShow: 3,
    rtl:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          // centerPadding: '40px',
          slidesToScroll: 1,
          slidesToShow: 1.4
        }
      }
    ]
  });
}
// });

function sliderSCInit(){
 // console.log('sliderSCInit');

  // Color english and arabic
  $('.language-en .slider-color').slick({
    infinite: false,
    speed: 300,
    slidesToScroll: 5, 
    slidesToShow: 5,
    arrows: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          //centerPadding: '0px',
          slidesToScroll: 2, 
          slidesToShow: 2.6
        }
      }
    ]
  });
  $('.language-ar .slider-color').slick({
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToScroll: 5, 
    slidesToShow: 5,
    rtl:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          //centerPadding: '0px',
          slidesToScroll: 2,
          slidesToShow: 2.6
        }
      }
    ]
  });

  // Size english and arabic
  $('.language-en .slider-size').slick({
    infinite: false,
    speed: 300,
    slidesToScroll: 5,
    slidesToShow: 5,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          //centerPadding: '40px',
          slidesToScroll: 2,
          slidesToShow: 2 
        }
      }
    ]
  });
  $('.language-ar .slider-size').slick({
    infinite: false,
    speed: 300,
    slidesToScroll: 5,
    slidesToShow: 5,
    rtl:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          //centerPadding: '40px',
          slidesToScroll: 2,          
          slidesToShow: 2 
        }
      }
    ]
  });
}

function destroyCarousel() {
  if ($('.slider-hb').hasClass('slick-initialized')) {
    $('.slider-hb').slick("unslick");
    // $('.slider-hb').unslick();
    // $(".slider-hb").unslick("unslick");
    // $('.slider-hb').slick('slickRemove');
  }
}

  var isMobile = false; //initiate as false

// On Load
// function lms_static_content() {
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


	/*var size = $('.size-images.active').attr('value');
	var color = $('.color-image.active').attr('value');
	loadProductJSON(size, color);*/
//

// if(isMobile) {
  // $.getScript( slickUrl, function() {
   // console.log('getScript');
    sliderSCInit();
    sliderHInit();
    sliderBInit();
   // });
// }

// On Size Click
$(document).on("click", ".select-size .ss-images .size-images", function(e){
	$(".select-size .size-images.active").removeClass("active");
	$(this).addClass('active');
	var size = $(this).attr('value');
	var color = $('.color-image.active').attr('value');
	if(size == "180x200")
	{
		$('.slider-color div[data-slick-index="0"], .slider-color div[data-slick-index="1"], .slider-color div[data-slick-index="3"], .slider-color .slick-dots').css('display', 'none');
		//$(".color-image").hide();
		//$(".select-colors .slider-color .slick-track").css ({"display":"grid"});
		$(".color-image[value='grey']").show();
		$(".color-image").removeClass('active');
		$(".color-image[value='grey']").addClass('active');
		color= "grey"; 
    if(isMobile) {
      $(".language-en .select-colors .slider-color .slick-track").css({"margin-left":"31%"});
      $(".language-ar .select-colors .slider-color .slick-track").css({"margin-right":"31%"});
    }
	} 
	else{
		$('.slider-color div[data-slick-index="0"], .slider-color div[data-slick-index="1"], .slider-color div[data-slick-index="3"], .slider-color .slick-dots').css('display', 'block');
		//$(".select-colors .slider-color .slick-track").css ({"display":"flex"});
		//$(".color-image").show();
    if(isMobile) {
      $(".language-en .select-colors .slider-color .slick-track").css({"margin-left":"unset"});
      $(".language-ar .select-colors .slider-color .slick-track").css({"margin-right":"unset"});
    }
	}
	loadProductJSON(size, color);
});

// On Color Click
$(document).on("click", ".color .select-colors .color-image", function(e){
	$(".select-colors .color-image.active").removeClass("active");
	$(this).addClass('active');
	var color = $(this).attr('value');
	var size = $('.size-images.active').attr('value');
	loadProductJSON(size, color);
});


function loadProductJSON(size, color) {
	// console.log(size+'_'+color);
	var json_url = modulepathjson+"/json/" +size+"_"+color+".json";
	//console.log(json_url);

  $.ajax({
    url: json_url,
    cache: false,
    type: 'GET',
    dataType: 'json',
    beforeSend: function () {
      /*LMS.Loader.showPageLoader();*/
      $(".colette-main .overlay").show();
    },
  })
  .done(function(prod_data) {
  	//console.log(prod_data);
    $('.content-size-name').html('('+size+')');

    headHtml = "";    
    headHtml += '<div class="row slider-hb">';
    //prod_data.headboard.sort();
    //console.log(prod_data.headboard);
  	$.each(prod_data.headboard, function(style, value) {
  		headHtml += '<div class="col-md-12">';
			  headHtml += '<div class="header-images">';
			    headHtml += '<a class="banner ga-link-cl link link-banner gasection" href="'+siteurl+'/p/'+value.item_code+'" target="_blank">';
			    	headHtml += '<img src="'+modulepath+value.desk_img+'" class="img-responsive center" alt="color">';
            if (false) {
            // if (window.LMS.pageData.lang == 'ar') {
              headHtml += '<span class="img-desc1" >'+hbTitle[style]+'</span>';
            } else {
              headHtml += '<span class="img-desc1" >'+style+'</span>';
            }
			    headHtml += '</a>';
			  headHtml += '</div>';
			headHtml += '</div>';
		});
    headHtml += '</div>';
    $('.headboard-desktop .row.slider-hb').remove();
    $('.headboard-desktop .container-fluid').append(headHtml);

    // $('.headboard-desktop .row.slider-hb').slick('slickAdd',headHtml);
		// $('.headboard-desktop .row').html(headHtml); // WORING
    // if(isMobile) {
    /* console.log('headHtml'); 
    if ($.fn.slick === undefined) {
    $.getScript( slickUrl, function() { 
        //destroyCarousel();
        sliderHInit();
      });
  } else {
    // destroyCarousel();
    sliderHInit();    
  } */
    // }


    // $('.slider-hb').slick('reinit');
    // $('.slider-hb.visible-xs').slick('unslick');
    // $.getScript( slickUrl, function() {
    //   $('.slider-hb').slick('unslick');
      /*$('.slider-hb').slick({  
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: false,
              arrows: false,
              centerMode: false,
              // centerPadding: '40px',
              slidesToShow: 1.3
            }
          }
        ]
      });*/
    // });

    // only base and base with drawer
    var baseHtml = "";
    var baseClass = "";
    var base_count = Object.keys(prod_data.base).length;
    if (base_count == 1) {
      baseClass = "col-md-12";
    } else {
      baseClass = "col-md-6";
    }

    baseHtml += '<div class="row base-inner slider-base">';
    $.each(prod_data.base, function(base, value) { 
      baseHtml += '<div class="'+baseClass+'">';
        baseHtml += '<div class="base-img">';
          baseHtml += '<a class="banner ga-link-cl link link-banner gasection" target="_blank" href="'+siteurl+'/p/'+value.item_code+'">                            ';
            baseHtml += '<picture>';
              baseHtml += '<source srcset="'+modulepath+value.desk_img+'" media="(min-width: 768px)">';
              baseHtml += '<source srcset="'+modulepath+value.mob_img+'" media="(max-width: 767px)">';
              baseHtml += '<img src="'+modulepath+value.desk_img+'" class="img-responsive center" alt="base">';
            baseHtml += '</picture>';
            
          baseHtml += '</a>';
          baseHtml += '<span class="img-desc1">'+baseTitle[base]['en']+'</span>';
          // baseHtml += '<span class="img-desc1">'+baseTitle[base][window.LMS.pageData.lang]+'</span>';
        baseHtml += '</div>';
      baseHtml += '</div>';
    });
    baseHtml += '</div>';
    $('.base-section .row.slider-base').remove();
    $('.base-section').append(baseHtml);
    
    //console.log(prod_data.base); 
    if ($.fn.slick === undefined) {
    $.getScript( slickUrl, function() { 
        //destroyCarousel();
        sliderHInit();
        sliderBInit();
      });
  } else {
    // destroyCarousel();
    sliderHInit();
    sliderBInit();    
  }

    //only base
  	/*$('.base-section .only-base a').attr('href', siteurl+'/p/'+prod_data.base.item_code);
  	if(isMobile) {
  		$('.base-section .only-base img').attr('src', modulepath+prod_data.base.mob_img);
  	} else {
  		$('.base-section .only-base img').attr('src', modulepath+prod_data.base.desk_img);
  	}*/
    // base with drawer
    /*$('.base-section .base-drawer a').attr('href', siteurl+'/p/'+prod_data.base-drawer.item_code);
  	if(isMobile) {
  		$('.base-section .base-drawer img').attr('src', modulepath+prod_data.base-drawer.mob_img);
  	} else {
  		$('.base-section .base-drawer img').attr('src', modulepath+prod_data.base-drawer.desk_img);
  	}*/
    
    //bench
    // only base and base with drawer
    var nightstandHtml = "";
    var nightstandClass = "";
    var nightstand_count = Object.keys(prod_data.nightstand).length;
    if (nightstand_count == 1) {
      nightstandClass = "col-md-12";
    } else {
      nightstandClass = "col-md-6";
    }
    $.each(prod_data.nightstand, function(nightstand, value) {
      nightstandHtml += '<div class="'+nightstandClass+'">';
        nightstandHtml += '<div class="nightstand-img '+nightstand+'">';
          nightstandHtml += '<a class="banner ga-link-cl link link-banner gasection" target="_blank" href="'+siteurl+'/p/'+value.item_code+'">                            ';
            nightstandHtml += '<picture>';
              nightstandHtml += '<source srcset="'+modulepath+value.desk_img+'" media="(min-width: 768px)">';
              nightstandHtml += '<source srcset="'+modulepath+value.mob_img+'" media="(max-width: 767px)">';
              nightstandHtml += '<img src="'+modulepath+value.desk_img+'" class="img-responsive center" alt="base">';
            nightstandHtml += '</picture>';
          nightstandHtml += '</a>';
        // nightstandHtml += '<span class="img-desc1">'+nightstandTitle[nightstand][LMS.pageData.langIsoCode]+'</span>';
      nightstandHtml += '</div>';
      nightstandHtml += '</div>';
    });
    $('.nightstand-section .row.nightstand-inner').html(nightstandHtml);
  	// LMS.Loader.hidePageLoader();
    $(".colette-main .overlay").hide();
  });
}

// $(document).on('ready', function () {

});
// steller page end
