

// steller page start

$(document).ready(function() {

  var modulepath = "https://homecentre.a.bigcontent.io/v1/static/";
  var modulepathjson = "https://origin.homecentre.com/sites/ecomm/modules/custom/stellar";
  var siteurl = "https://www.homecentre.com/om/en";//update here
  // var siteurl = "window.LMS.pageData.config.redirectUri";
  var slickUrl = "https://cdn.c1.amplience.net/c/homecentre/slick_js";
  var countryName = "om"; //update here
// var countryName = "window.LMS.pageData.countryIsoCode";
  var hbTitle = { 
    "neo": "لوح رأسي نيو", 
    "ace": "لوح رأسي آيس", 
    "ark": "لوح رأسي آرك", 
    "max": "لوح رأسي ماكس", 
    "ora": "لوح رأسي أورا", 
    "vox": "لوح رأسي فوكس" 
};
  var baseTitle = { 
    "default": { "en": "Base without storage", "ar": "قاعدة بدون تخزين" }, 
    "drawer": { "en": "Base with drawer", "ar": "قاعدة مع درج" }, 
    "hydraulic": { "en": "Hydraulic base", "ar": "قاعدة مع مشغّل" }, 
    "actuator": { "en": "Base with actuator", "ar": "قاعدة هدروليكية" } };

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
	var json_url = modulepathjson + "/json/amplience_oman/stellar/" + size + "_" + color + ".json";
	//console.log(json_url);

  $.ajax({
    url: json_url,
    cache: false,
    type: 'GET',
    dataType: 'json',
    beforeSend: function () {
      /*LMS.Loader.showPageLoader();*/
      $(".stellar-main .overlay").show();
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
            if (false) { //update here
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
          baseHtml += '<span class="img-desc1">'+baseTitle[base]['en']+'</span>'; //update here
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
    $(".stellar-main .overlay").hide();
  });
}

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

// $(document).on('ready', function () {

});
// steller page end
