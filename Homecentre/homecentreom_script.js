$(document).ready(function(){$('#faq-menu-mobile').on('click',function(){$(this).toggleClass("open")});$('#faq-menu-mobile #faq-menu-list-mobile li a').on('click',function(){$(this).parent().addClass("active").siblings().removeClass("active");$('#faq-menu-mobile > a').html($(this).html());var openSectionHref=$(this).attr("href");$('#content').find(openSectionHref).addClass("selected").siblings().removeClass("selected")});$('.box.openclose').on('click',function(){if($(this).hasClass('active')){$('#content .box.openclose').removeClass('active');$('#content .box.openclose .slide').addClass("js-slide-hidden");$('#content .box.openclose .slide').css("transition","max-height 0.5s ease")}else{$('#content .box.openclose').removeClass('active');$('#content .box.openclose .slide').addClass("js-slide-hidden");$(this).find(".slide").removeClass('js-slide-hidden');$(this).addClass('active')}});$('ul#faq-menu-list > li > a').click(function(e){e.preventDefault();var curLink=$(this);var scrollPoint=$(curLink.attr('href')).position().top+2;$('body,html').animate({scrollTop:scrollPoint},500)});$(window).scroll(function(){if($(this).scrollTop()>50){$('#faq-menu').addClass('fixed')}else{$('#faq-menu').removeClass('fixed')}
onScroll()});if(window.location.hash){if(window.location.hash.indexOf('faq-question-group-')==1){var htarget=$('#content').find(window.location.hash);$("div > div.box.openclose:first-child",htarget).trigger("click");var window_location_hash=window.location.hash;$('ul#faq-menu-list-mobile a[href^="'+window_location_hash+'"]').trigger("click");$('#faq-menu-mobile').toggleClass("open")}else{var htarget=$('#content').find(window.location.hash);htarget.trigger("click");var window_location_hash='#'+htarget.parent().closest('section').attr('id')}
$('ul#faq-menu-list a[href^="'+window_location_hash+'"]').parent().addClass("active").siblings().removeClass("active")}});function onScroll(event){var scrollPos=$(document).scrollTop();$('#faq-menu-list li a').each(function(){var currLink=$(this);var refElement=$(currLink.attr("href"));if(refElement.position().top<=scrollPos&&refElement.position().top+refElement.height()>scrollPos){$('#faq-menu-list li').removeClass("active");currLink.parent().addClass("active")}else{currLink.parent().removeClass("active")}})}
$(function(){if(window.LMS.pageData.config.baseURL.indexOf('www.homecentre')!==-1){var baseURL='https://origin.homecentre.com'}else{var baseURL='https://uatwww2.homecentre.com/ecomm'}
js_code(window.LMS.pageData.lang,baseURL,window.LMS.pageData.countryIsoCode)});function js_code(lang,base_url,ori_country){$('#notify-submit-form').click(function(){return registration_add()});function valid_email(elem){var re=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(!elem.match(re))
return!1;else return!0}
function valid_phone(phone_no){var re=/^[0-9\+\ ]*$/;if(!phone_no.match(re))
return!1;else return!0}
$('.city').on('change',function(){$('select[name="preferred_store"]').prop('disabled','disabled');var cityVar=$(this).val();$.ajax({url:base_url+'/getstoredata',type:"POST",data:{selectedCity:cityVar,lang:lang},dataType:'json',}).done(function(data){console.log(data);if(lang=='ar'){storeOptions='<option disabled selected value class="choose">اختر المتجر المفضل لديك:</option>'}else{storeOptions='<option disabled selected value class="choose">Choose your preferred store:</option>'}
$.each(data,function(key,store){storeOptions+='<option value="'+key+'">'+store+'</option>'});$('#prefered_store .inputs select').html(storeOptions);$('select[name="preferred_store"]').prop('disabled',!1)})});function registration_add(){var name=$('#lms-name-add').val();var dob=$('#date1').val();var email=$('#lms-email-add-form').val();var mobile=$('#lms-mobile-add').val();var country=$('#lms-country-add').val();var territory=$("input[name=territory]").val();if(territory!='ae'&&territory!='bh'){var city=$("input[name=city]:checked").val()}else{var city=$('select[name="city"]').val()}
var interested=$("input[name=interested_in]:checked").val();var preferred_store=$('select[name="preferred_store"]').val();$('#lms-mobile-add').css('border-color','#fff');$('#lms-order-number-add').css('border-color','#fff');$('#lms-country-add').css('border-color','#fff');$('.jcf-select').css('border-color','#fff');$('#lms-mobile-add').css('border-color','#fff');$('#lms-email-add-form').css('border-color','#fff');$('#lms-name-add').css('border-color','#fff');var error=0;if(name==''){$('#lms-name-add').css('border-color','#D7244C');$('#lms-name-add::placeholder').css('color','#D7244C');$('#signup-name .labels').css('color','#D7244C');error=1}
if(email==''){$('#lms-email-add-form').css('border-color','#D7244C');$('#lms-email-add-form::placeholder').css('color','#D7244C');$('#signup-email .labels').css('color','#D7244C');error=1}
if(email!=''&&valid_email(email)==!1){$('#lms-email-add-form').css('border-color','#D7244C');$('#lms-email-add-form::placeholder').css('color','#D7244C');$('#signup-email .labels').css('color','#D7244C');error=1}
if(mobile==''){$('#lms-mobile-add').css('border-color','#D7244C');$('#lms-mobile-add::placeholder').css('color','#D7244C');$('#signup-phone .labels').css('color','#D7244C');error=1}
if(territory=='ae'||territory=='bh'){if(typeof city=="undefined"||city==null){$('.jcf-select-city_error').attr('style','border-color: #D7244C !important');$('.span_city').css('color','#D7244C');$('#signup-city .labels').css('color','#D7244C');error=1}
if(typeof preferred_store=="undefined"||preferred_store==null){$('.jcf-select').attr('style','border-color: #D7244C !important');$('.span.jcf-option-choose').css('color','#D7244C');error=1}}
if(territory!='ae'){}
if(valid_phone(mobile)==!1){$('#lms-mobile-add').css('border-color','#D7244C');$('#lms-mobile-add::placeholder').css('color','#D7244C');$('#signup-phone .labels').css('color','#D7244C');error=1}
if(country==''){$('#country-error').show();$('#lms-country-add').css('border-color','red');error=1}
if(error==0){$('#lms-order-number-add').css('border-color','#fff');if(lang=='ar'){$('#notify-submit-form').val('الرجاء الانتظار...')}else{$('#notify-submit-form').val('PLEASE WAIT...')}
$.ajax({url:base_url+'/interior_design_save/',type:"POST",data:new FormData(document.getElementById('form_id')),contentType:!1,cache:!1,processData:!1,success:function(resp){console.log(resp);if(resp=="subscribed_new"){$('#email-error_2').hide();$('#signup-submit').hide();$('#success1').click()}else{$('#email-error_2').show();$('#notify-submit-form').val('SUBMIT');$('#lms-email-add-form').css('border-color','#D7244C');$('#signup-email .labels').css('color','#D7244C');error=1;return!1}},})}else{return!1}
if(error==1){console.log(error)}
return!1}}
$(function(){var slickUrl="https://cdn.c1.amplience.net/c/homecentre/slick_js";var country="om";var display_slide_count=1.7;if(country!='ae'&&country!='sa'){display_slide_count=2}
$('.language-en .top-banner').slick({infinite:!1,speed:300,autoplay:!0,autoplaySpeed:7000,slidesToShow:1,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',responsive:[{breakpoint:767,settings:{dots:!0,centerMode:!1,slidesToShow:1,speed:100,autoplay:!0,autoplaySpeed:7000,slidesToScroll:1,}},]});$('.language-ar .top-banner').slick({infinite:!1,speed:300,slidesToShow:1,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!0,autoplaySpeed:7000,rtl:!0,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:1,speed:100,autoplay:!0,autoplaySpeed:7000,slidesToScroll:1,dots:!0,}},]});$('.language-en .spwidth').slick({infinite:!1,speed:300,slidesToShow:5,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,responsive:[{breakpoint:767,settings:"unslick"},]});$('.language-ar .spwidth').slick({infinite:!1,speed:300,slidesToShow:5,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,rtl:!0,responsive:[{breakpoint:767,settings:"unslick"},]});$('.language-en .block1_slider').slick({infinite:!1,speed:300,slidesToShow:4,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:display_slide_count,speed:100,slidesToScroll:1,}},]});$('.language-ar .block1_slider').slick({infinite:!1,speed:300,slidesToShow:4,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,rtl:!0,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:display_slide_count,speed:100,slidesToScroll:1,}},]});$('.language-en .block2_slider').slick({infinite:!1,speed:300,slidesToShow:4,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:1.5,speed:100,slidesToScroll:1,}},]});$('.language-ar .block2_slider').slick({infinite:!1,speed:300,slidesToShow:4,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,rtl:!0,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:1.5,speed:100,slidesToScroll:1,}},]});$('.language-en .block2_slider_mob').slick({infinite:!1,speed:300,slidesToShow:4,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:1.5,speed:100,slidesToScroll:1,}},]});$('.language-ar .block2_slider_mob').slick({infinite:!1,speed:300,slidesToShow:4,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,rtl:!0,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:1.5,speed:100,slidesToScroll:1,}},]});$('.language-en .block4_slider').slick({infinite:!1,speed:300,slidesToShow:5,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:2.6,speed:100,slidesToScroll:2,}},]});$('.language-ar .block4_slider').slick({infinite:!1,speed:300,slidesToShow:5,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!1,autoplaySpeed:2500,rtl:!0,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:2.6,speed:100,slidesToScroll:2,}},]});$('.language-en .block6_slider').slick({infinite:!1,speed:300,slidesToShow:1,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!0,autoplaySpeed:2500,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:1,speed:100,slidesToScroll:1,dots:!0,}},]});$('.language-ar .block6_slider').slick({infinite:!1,speed:300,slidesToShow:1,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',autoplay:!0,autoplaySpeed:2500,rtl:!0,responsive:[{breakpoint:767,settings:{centerMode:!1,slidesToShow:1,speed:100,slidesToScroll:1,dots:!0,}},]})});$(document).ready(function(){var numItems=$('li.fancyTab').length;if(numItems==12){$("li.fancyTab").width('8.3%')}
if(numItems==11){$("li.fancyTab").width('9%')}
if(numItems==10){$("li.fancyTab").width('10%')}
if(numItems==9){$("li.fancyTab").width('11.1%')}
if(numItems==8){$("li.fancyTab").width('12.5%')}
if(numItems==7){$("li.fancyTab").width('14.2%')}
if(numItems==6){$("li.fancyTab").width('16.666666666666667%')}
if(numItems==5){$("li.fancyTab").width('20%')}
if(numItems==4){$("li.fancyTab").width('25%')}
if(numItems==3){$("li.fancyTab").width('33.3%')}
if(numItems==2){$("li.fancyTab").width('50%')}});$(function(){$('.language-en .percale-slider').slick({infinite:!1,speed:300,slidesToShow:1,dots:!0,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',responsive:[{breakpoint:767,settings:"unslick"},]});$('.language-ar .percale-slider').slick({infinite:!1,speed:300,slidesToShow:1,dots:!0,rows:0,slidesToScroll:1,arrows:!0,rtl:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',responsive:[{breakpoint:767,settings:"unslick"},]});$('.language-en .sateen-slider').slick({infinite:!1,speed:300,slidesToShow:1,dots:!0,rows:0,slidesToScroll:1,arrows:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',responsive:[{breakpoint:767,settings:"unslick"},]});$('.language-ar .sateen-slider').slick({infinite:!1,speed:300,slidesToShow:1,dots:!0,rows:0,slidesToScroll:1,arrows:!0,rtl:!0,prevArrow:'<button class="slick-prev hidden-xs"><i class="icon-arrow-left"></i></button>',nextArrow:'<button class="slick-next hidden-xs"><i class="icon-arrow-right"></i></button>',responsive:[{breakpoint:767,settings:"unslick"},]});$('.language-en .perfect-pairings-slider').slick({infinite:!1,speed:300,slidesToShow:4,dots:!1,rows:0,slidesToScroll:4,arrows:!1,responsive:[{breakpoint:9999,settings:"unslick"},{breakpoint:767,settings:{slidesToShow:1.4,slidesToScroll:1,}},]});$('.language-ar .perfect-pairings-slider').slick({infinite:!1,speed:300,slidesToShow:4,dots:!1,rows:0,rtl:!0,slidesToScroll:4,arrows:!1,responsive:[{breakpoint:9999,settings:"unslick"},{breakpoint:767,settings:{slidesToShow:1.4,slidesToScroll:1,}},]});$('.language-en .covers-slider-mob').slick({slidesToShow:3,infinite:!1,speed:300,dots:!1,rows:0,slidesToScroll:3,arrows:!1,responsive:[{breakpoint:767,settings:{slidesToShow:1.4,infinite:!1,speed:300,dots:!1,rows:0,slidesToScroll:1,arrows:!1,}},]});$('.language-ar .covers-slider-mob').slick({slidesToShow:3,infinite:!1,speed:300,dots:!1,rows:0,rtl:!0,slidesToScroll:3,arrows:!1,responsive:[{breakpoint:767,settings:{slidesToShow:1.4,infinite:!1,speed:300,dots:!1,rows:0,slidesToScroll:1,arrows:!1,}},]});$('.language-en .touches-slider').slick({slidesToShow:4,infinite:!1,speed:300,dots:!1,rows:0,slidesToScroll:4,arrows:!1,responsive:[{breakpoint:767,settings:{slidesToShow:1.4,infinite:!1,speed:300,dots:!1,rows:0,slidesToScroll:1,arrows:!1,}},]});$('.language-ar .touches-slider').slick({slidesToShow:4,infinite:!1,speed:300,dots:!1,rows:0,rtl:!0,slidesToScroll:4,arrows:!1,responsive:[{breakpoint:767,settings:{slidesToShow:1.4,infinite:!1,speed:300,dots:!1,rows:0,slidesToScroll:1,arrows:!1,}},]})});function lms_static_content(){$('.bedding-store-main').on('click','a',function(e){var atag=$(this);var title=atag.attr('data-ga');if(title!=undefined){(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=0;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create',LMS.pageData.ga,'auto');ga('send','event',"Ecommerce","Promotion Click",title)}});const slider=document.querySelector('.perfect-pairings-slider');let mouseDown=!1;let startX,scrollLeft;let startDragging=function(e){mouseDown=!0;startX=e.pageX-slider.offsetLeft;scrollLeft=slider.scrollLeft};let stopDragging=function(event){mouseDown=!1};slider.addEventListener('mousemove',(e)=>{e.preventDefault();if(!mouseDown){return}
const x=e.pageX-slider.offsetLeft;const scroll=x-startX;slider.scrollLeft=scrollLeft-scroll});slider.addEventListener('mousedown',startDragging,!1);slider.addEventListener('mouseup',stopDragging,!1);slider.addEventListener('mouseleave',stopDragging,!1)}
$(function(){$("#sleep-tabs").tabs();$("#bedsheets-accordion, #duvets-accordion, #comforters-accordion, #pillows-accordion").accordion({collapsible:!0,heightStyle:"content",active:!1});$('.language-en .fabrics-carousel').slick({infinite:!1,speed:300,slidesToShow:1.4,rows:0,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:767,settings:{dots:!1,centerMode:!1,slidesToShow:1.4,speed:100,autoplay:!1,slidesToScroll:1,}},]});$('.language-ar .fabrics-carousel').slick({infinite:!1,speed:300,slidesToShow:1.4,rows:0,slidesToScroll:1,arrows:!1,rtl:!0,responsive:[{breakpoint:767,settings:{dots:!1,centerMode:!1,slidesToShow:1.4,speed:100,autoplay:!1,slidesToScroll:1,}},]});$('.language-en .comforters-sec-mob').slick({infinite:!1,speed:300,slidesToShow:1.4,rows:0,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:767,settings:{dots:!1,centerMode:!1,slidesToShow:1.4,speed:100,autoplay:!1,slidesToScroll:1,}},]});$('.language-ar .comforters-sec-mob').slick({infinite:!1,speed:300,slidesToShow:1.4,rows:0,slidesToScroll:1,arrows:!1,rtl:!0,responsive:[{breakpoint:767,settings:{dots:!1,centerMode:!1,slidesToShow:1.4,speed:100,autoplay:!1,slidesToScroll:1,}},]});var $owl=$(".sleep-position-slider .owl-carousel");$owl.children().each(function(index){$(this).attr("data-position",index)});$owl.owlCarousel({center:!0,loop:!0,items:3,mouseDrag:!1,});$(document).on("click",".owl-item>div",function(){var $speed=300;$owl.trigger("to.owl.carousel",[$(this).data("position"),$speed]);var current_slide=$(this).attr("data-position");console.log(current_slide);$('.sleep-position-content.right').find('div').removeClass('active-sleep');$('.sleep-position-content.right > div[data-index="'+current_slide+'"]').addClass('active-sleep')});$('.language-en .certificates').slick({speed:4000,autoplay:!0,autoplaySpeed:0,cssEase:'linear',slidesToShow:6,slidesToScroll:1,infinite:!0,swipeToSlide:!0,centerMode:!0,focusOnSelect:!0,pauseOnHover:!0,variableWidth:!0,arrows:!1,dots:!1,responsive:[{breakpoint:767,settings:{slidesToShow:2.2,variableWidth:!1,}},]});$('.language-ar .certificates').slick({speed:4000,autoplay:!0,autoplaySpeed:0,cssEase:'linear',slidesToShow:6,slidesToScroll:1,infinite:!0,swipeToSlide:!0,centerMode:!0,focusOnSelect:!0,pauseOnHover:!0,arrows:!1,dots:!1,rtl:!0,responsive:[{breakpoint:767,settings:{slidesToShow:2.2,}},]});var $certificates=$('#certificates');var certificates=$certificates.children().length;var certificateswidth=(certificates*900);$certificates.css('width',certificateswidth);var rotating=!0;var clientspeed=0;var seeclients=setInterval(rotateCertificates,clientspeed);$(document).on({mouseenter:function(){rotating=!1},mouseleave:function(){rotating=!0}},'.certification-sec');function rotateCertificates(){if(rotating!=!1){var $first=$('#certificates li:first');$first.animate({'margin-left':'-900px'},2000,"linear",function(){$first.remove().css({'margin-left':'0px'});$('#certificates li:last').after($first)})}}});function lms_static_content(){$('.bedding-guid-main').on('click','a',function(e){var atag=$(this);var title=atag.attr('data-ga');if(title!=undefined){(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=0;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create',LMS.pageData.ga,'auto');ga('send','event',"Ecommerce","Promotion Click",title)}})}
$(function(){const slider=document.querySelector('.fabrics-slider');let mouseDown=!1;let startX,scrollLeft;let startDragging=function(e){mouseDown=!0;startX=e.pageX-slider.offsetLeft;scrollLeft=slider.scrollLeft};let stopDragging=function(event){mouseDown=!1};slider.addEventListener('mousemove',(e)=>{e.preventDefault();if(!mouseDown){return}
const x=e.pageX-slider.offsetLeft;const scroll=x-startX;slider.scrollLeft=scrollLeft-scroll});slider.addEventListener('mousedown',startDragging,!1);slider.addEventListener('mouseup',stopDragging,!1);slider.addEventListener('mouseleave',stopDragging,!1)})