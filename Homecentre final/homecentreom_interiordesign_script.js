// Interior design start

$(function() {
  if (window.LMS.pageData.config.baseURL.indexOf('www.homecentre') !== -1) {
    var baseURL = 'https://origin.homecentre.com';
  } else {
    var baseURL = 'https://uatwww2.homecentre.com/ecomm';
  }
  js_code(window.LMS.pageData.lang, baseURL, window.LMS.pageData.countryIsoCode);

  // js_code('en','https://uatwww2.homecentre.com/ecomm','om'); //update here
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