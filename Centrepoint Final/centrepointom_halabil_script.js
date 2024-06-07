// var countDownDate = new Date("2019-11-29T00:00:00+04:00").getTime();
var countDownDate = new Date("2022-01-26T23:59:00+03:00").getTime();
var now = 0;
// function lms_static_content() {
$(function() {
  $.ajax({
    url: "https://uatwww2.centrepointstores.com/ecomm/getphptime.php",
    success: function(result) {
      result = parseInt(result);
      cur_date = result;
      //var offer_end =  1574193600; //November 20th, 2019 12:00 AM
      //console.log("--tease_end");
      //console.log(tease_end);
      //console.log("--offer_start");
      //console.log(offer_start);
      //console.log("--offer_end");
      // console.log(cur_date);
      // console.log("--cur_date");
      //console.log(offer_end);
      // cur_date = this.responseText;
      // console.log('--');console.log(cur_date);console.log('--');
      setInt = setInterval(setCountdown, 1000);
      now = Math.floor(cur_date * 1000);
    }
  });
  //  var algo_url = 'https://3hwowx4270-dsn.algolia.net/1/indexes/*/queries?X-Algolia-API-Key=4c4f62629d66d4e9463ddb94b9217afb&X-Algolia-Application-Id=3HWOWX4270&X-Algolia-Agent=Algolia%20for%20vanilla%20JavaScript%202.9.7';
  //  $.ajax({
  //    url: algo_url,
  //    cache: false,
  //    type: 'POST',
  //    // data: '{"requests":[{"indexName":"prod_uae_centrepoint_Product","params":"query=&facetFilters=%5B%22approvalStatus%3A1%22%2C%5B%22objectID%3A'+prod+'%22%5D%5D"}]}',
  //    data: '{"requests":[{"indexName":"prod_uae_centrepoint_Product","params":"query=*&hitsPerPage=5&page=0&facets=*&facetFilters=%5B%22inStock%3A1%22%2C%22approvalStatus%3A1%22%2C%22allCategories%3Amen-footwear-slippers-flipflopsandbeach%22%2C%22badge.title.en%3A-LASTCHANCE%22%5D&getRankingInfo=1&clickAnalytics=true&attributesToHighlight=null&analyticsTags=%5B%22men-footwear-slippers-flipflopsandbeach%22%2C%22en%22%2C%22Desktop%22%5D&attributesToRetrieve=concept%2CmanufacturerName%2Curl%2C333WX493H%2C345WX345H%2C505WX316H%2C550WX550H%2C499WX739H%2Cbadge%2Cname%2Csummary%2CwasPrice%2Cprice%2CemployeePrice%2CshowMoreColor%2CproductType%2CchildDetail%2Csibiling%2CthumbnailImg%2CgallaryImages%2CisConceptDelivery%2CextProdType%2CreviewAvgRating%2CreferencesAvailable%2CitemType&numericFilters=price%20%3E%201&query=*&maxValuesPerFacet=500&tagFilters=%5B%5B%22babyshop%22%2C%22splash%22%2C%22lifestyle%22%2C%22shoemart%22%2C%22centrepoint%22%2C%22shoexpress%22%2C%22sportsone%22%2C%22sminternational%22%2C%22lipsy%22%5D%5D"}]}',      
  //    dataType: 'json',
  //  })
  //  .done(function(home_data) {
  //    var results = home_data.results;
  //    var hit=results[0].hits;
  //    console.log(hit);
  // var prod = "";
  // for (var i=0; i<hit.length; i++) {
  // 	prod+='<div class="prod col-sm-4">';
  // 		prod+='<img class="cat-prod-image d-block w-100" src="'+hit[i]["345WX345H"]+'">';
  // 		prod+='<h3 id="popup_title">'+hit[i].name.en+'</h3>';
  //       prod+='<span class=""current-price"">AED&nbsp;'+hit[i].price+'</span>';
  // 	prod+='</div>';
  // }
  // $('#results').html(prod);
  // });
});

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

// Update the count down every 1 second
function setCountdown() {
  // Get today's date and time
  ///var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  now = now + 1000;
  // Time calculations for days, hours, minutes and seconds
  var days = pad(Math.floor(distance / (1000 * 60 * 60 * 24)), 2);
  var hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2);
  var minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 2);
  var seconds = pad(Math.floor((distance % (1000 * 60)) / 1000), 2);
  // console.log("distance--"+ distance);
  $("#day .numbers").text(days);
  $("#hour .numbers").text(hours);
  $("#minute .numbers").text(minutes);
  $("#second .numbers").text(seconds);
  // console.log(seconds);
  // document.getElementById("flash_deal_days_").innerHTML = days;
  // document.getElementById("flash_deal_hours_").innerHTML = hours;
  // document.getElementById("flash_deal_minutes_").innerHTML = minutes;
  // document.getElementById("flash_deal_seconds_").innerHTML = seconds;
  //document.getElementById("deal_wrapper").style.display = "block";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(setInt);
    var element = document.getElementById("phase2-timer");
    element.parentNode.removeChild(element);
  }
}

jQuery(document).ready(function() {
  jQuery("#signup-email-form").click(function() {
    console.log("in-signup");
    return signup_halabil_add();
  });

  function valid_email(elem) {
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!elem.match(re)) return false;
    else return true;
  }

  function signup_halabil_add() {
    var email = jQuery("#lms-email-add").val();
    var country = jQuery("#signup_country").val();
    var lang = jQuery("#signup_lang").val();
    var error = 0;
    var newsletter_url = "";
    if (window.location.hostname === "uat5.centrepointstores.com") {
      // if (window.location.hostname === "127.0.0.1") { //update here
      newsletter_url =
        "https://uatwww2.centrepointstores.com/ecomm/lms_halabil_signup/" +
        email +
        "/" +
        country +
        "/" +
        lang;
    }
    if (window.location.hostname === "uat1.centrepointstores.com") {
      newsletter_url =
        "https://uatwww2.centrepointstores.com/ecomm/lms_halabil_signup/" +
        email +
        "/" +
        country +
        "/" +
        lang;
    }
    if (window.location.hostname === "www.centrepointstores.com") {
      newsletter_url =
        "https://origin.centrepointstores.com/lms_halabil_signup/" +
        email +
        "/" +
        country +
        "/" +
        lang;
    }
    if (
      email == "" ||
      email == "Enter your email address and click to sign up" ||
      email == "Please check your email address" ||
      email == "Tell us your email address"
    ) {
      error++;
      errorX = 1;
    } else if (valid_email(email) == false) {
      error++;
      errorX = 1;
    }
    if (error > 0) {
      jQuery("#lms-email-add").css("color", "#000");
      jQuery("#lms-email-add").css("border", "1px solid red");
      jQuery("#lms-email-add").val("");
      if (lang == "en") {
        jQuery("#lms-email-add").attr(
          "placeholder",
          "Please enter valid email address."
        );
      } else {
        jQuery("#lms-email-add").attr(
          "placeholder",
          "يرجى إدخال بريد إلكتروني صحيح."
        );
      }
      jQuery("#lms-email-add").focus();
      errorX = 1;
      return false;
    } else {
      jQuery.ajax({
        // url: 'https://origin.centrepointstores.com/lms_halabil_newsletter/'+email+'/'+country+'/'+lang,
        //url: 'https://uatwww2.centrepointstores.com/ecomm/lms_halabil_newsletter/'+email+'/'+country+'/'+lang,
        url: newsletter_url,
        success: function(data) {
          if (data == "registered") {
            /*jQuery('#stocknotif__wrapper--default').hide();
                    jQuery('#span-hidden-xs1').hide();
                    jQuery('#stocknotif__wrapper--success').show();
                    jQuery('#stocknot__success-email').html('<i class="icon-check-green"></i><span id="js-email-populate">'+email+'</span>');
                    jQuery('#js-email-populate').html(email);*/
            if (lang == "en") {
              jQuery("#lms-email-add").val("Thank you for subscribing");
            } else {
              jQuery("#lms-email-add").val("شكرا لك على الاشتراك");
            }
            errorX = 0;
          } else if (data == "already registered") {
            jQuery("#lms-email-add").css("color", "#000");
            jQuery("#lms-email-add").css("border", "1px solid red");
            jQuery("#lms-email-add").val("");
            if (lang == "en") {
              jQuery("#lms-email-add").attr(
                "placeholder",
                "This email address has already been registered."
              );
            } else {
              jQuery("#lms-email-add").attr(
                "placeholder",
                "هذا البريد الإلكتروني قد تم تسجيله مسبقًا."
              );
            }
            jQuery("#span-hidden-xs1").css("display", "none");
            errorX = 1;
            return false;
          } else if (data == "fail") {
            jQuery("#lms-email-add").css("color", "#000");
            jQuery("#lms-email-add").css("border", "1px solid red");
            jQuery("#lms-email-add").val("Please check your email address");
            if (lang == "en") {
              jQuery("#lms-email-add").attr(
                "placeholder",
                "Please check your email address"
              );
            } else {
              jQuery("#lms-email-add").attr(
                "placeholder",
                "الرّجاء التحقق من عنوان بريدك الإلكتروني."
              );
            }
            /* jQuery('#lms-email-add').addClass('sub_error');
                    jQuery('#span-hidden-xs1').css('display','block');*/
            jQuery("#lms-email-add").focus();
            errorX = 1;
            return false;
          } else {
            errorX = 1;
            return false;
          }
        },
        beforeSend: function() {},
        complete: function() {},
      });
      return false;
    }
  }
});