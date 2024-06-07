$(function() {

  // load Branch
  (function(b, r, a, n, c, h, _, s, d, k) {
    if (!b[n] || !b[n]._q) {
      for (; s < _.length;) c(h, _[s++]);
      d = r.createElement(a);
      d.async = 1;
      d.src = "https://cdn.branch.io/branch-latest.min.js";
      k = r.getElementsByTagName(a)[0];
      k.parentNode.insertBefore(d, k);
      b[n] = h
    }
  })(window, document, "script", "branch", function(b, r) {
    b[r] = function() {
      b._q.push([r, arguments])
    }
  }, {
    _q: [],
    _v: 1
  }, "addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking".split(" "), 0);
  // init Branch
  branch.init('key_live_caNfxnvg9V4ljMtzpiWOKfppzuabSLFB', function(err, data) {
    console.log(err, data);
  });

  // render city & store based on country

  if (window.LMS.pageData.config.baseURL.indexOf('www.centrepointstores') !== -1) {
    var backend_url = 'https://origin.centrepointstores.com';
  } else {
    var backend_url = 'https://uatwww2.centrepointstores.com/ecomm';
  }
  form_save(window.LMS.pageData.lang, backend_url, window.LMS.pageData.countryIsoCode);
  // var backend_url = 'https://uatwww2.centrepointstores.com/ecomm';
  // form_save('en', backend_url, 'om'); //update here

  var countryOptions = ''; 
  var cityOptions = '';
  var storeOptions = '';
  var country_id = $('#country').val();
  if (country_id != '') {
    console.log(country_id);
    $.getJSON(backend_url + '/sites/ecomm/modules/custom/app_tracker/json/city.json', function(data) {
      cityOptions = '<option value="">Select city</option>';
      //console.log(data);
      $.each(data, function(key, city) {
        if (country_id == city.country_name) {
          cityOptions += '<option value="' + city.name + '">' + city.name + '</option>';
        }
      });
      $('#city').html(cityOptions);
    });
  } else {
    $('#city').html('<option value="">Select city</option>');
    $('#store').html('<option value="">Select store</option>');
  }
  $(document).on('change', '#country', function() {
    var country_id = $(this).val();
    if (country_id != '') {
      $.getJSON(backend_url + '/sites/ecomm/modules/custom/app_tracker/json/city.json', function(data) {
        cityOptions = '<option value="">Select city</option>';
        //console.log(data);
        $.each(data, function(key, city) {
          if (country_id == city.country_name) {
            cityOptions += '<option value="' + city.name + '">' + city.name + '</option>';
          }
        });
        $('#city').html(cityOptions);
      });
    } else {
      $('#city').html('<option value="">Select city</option>');
      $('#store').html('<option value="">Select store</option>');
    }
  });
  $(document).on('change', '#city', function() {
    var city_id = $(this).val();
    if (city_id != '') {
      $.getJSON(backend_url + '/sites/ecomm/modules/custom/app_tracker/json/store.json', function(data) {
        storeOptions = '<option value="">Select store</option>';
        $.each(data, function(key, store) {
          if (city_id == store.city_name) {
            storeOptions += '<option value="' + store.name + '">' + store.name + '</option>';
          }
        });
        $('#store').html(storeOptions);
      });
    } else {
      $('#store').html('<option value="">Select store</option>');
    }
  });

  
});

// jQuery(document).ready(function() {
//   jQuery("#form_id").submit(function(e) {
//     e.preventDefault();
//   });
// });

function form_save(lang, base_url, ori_country) {
  function valid_phone(phone_no) {
    var re = /^[0-9\+\ ]*$/;
    if (!phone_no.match(re))
      return false;
    else
      return true;
  }
  $('.generate').click(function() {
    var hrms_id = $('#inputUserID').val();
    var name = $('#inputUserName').val();
    error = 0;
    console.log(hrms_id.length);
    $('.hrms_id').css('color', '#2f2f2f');
    $('.hrms_name').css('color', '#2f2f2f');
    if (valid_phone(hrms_id) == false) {
      $('.hrms_id').css('color', 'red');
      error = 1;
    }
    // if (hrms_id.length > 6 || hrms_id.length < 3) {
    if (hrms_id.length < 3) {
      $('.hrms_id').css('color', 'red');
      error = 1;
    }
    if (hrms_id == '') {
      $('.hrms_id').css('color', 'red');
      error = 1;
    }
    if (name == '') {
      $('.hrms_name').css('color', 'red');
      error = 1;
    }
    if (error == 0) {
      return createLink();
    } else {
      return false;
    }
  });
  $('.trackerbutton').click(function() {
    var hrms_id = $('#form_id #inputUserID').val();
    $('#form_individual_data #inputUserID').val(hrms_id);
    $("#form_individual_data .check").trigger("click");
    return fetchcount();
    /* return fetchindividualcount(); */
  });
  $('.check').click(function() {
    return fetchindividualcount();
  });

  function createLink() {
    var userID = document.getElementById('inputUserID').value;
    $('#qrcode canvas').remove();
    if (document.getElementById('inputUserID').checkValidity() == false) {
      console.log("No user ID provided");
      return;
    }
    var marketingTitle = "Refferral Link for Employee " + userID;
    var feature = "Refferal";
    var channel = "Employee Refferal";
    var campaign = "Refferal_link_" + userID;
    var name = document.getElementById('inputUserName').value;
    var country = $('#country').val();
    var city = $('#city').val();
    var store = $('#store').val();
    var linkData = {
      tags: [],
      channel: channel,
      campaign: campaign,
      feature: feature,
      data: {
        /*"$one_time_use": false,*/
        "$marketing_title": marketingTitle,
        "$name": name,
        "country": country,
        "city": city,
        "store": store,
        "hrms_id": userID,
        "$uri_redirect_mode": 0,
        //"$fallback_url": "https://www.centrepointstores.com/" + ori_country + "/" + lang + "/",
        "$canonical_url": "https://www.centrepointstores.com/" + ori_country + "/" + lang + "/"
      }
    };
    branch.link(linkData, function(err, link) {
      if (err == null) {
        document.getElementById('finalLink').value = link;
        $(".main_apptracker #name").text(document.getElementById('inputUserName').value);
        console.log("Here is the final link: " + link);
        $('.main_apptracker .form-group img').remove();
        $('.main_apptracker .form-result').css('opacity', 'unset');
        $('.main_apptracker .form-result').css('cursor', 'unset');
        $('.main_apptracker .share_button').css('cursor', 'unset');
        $('.main_apptracker #finalLink').removeAttr('disabled');
        $('.main_apptracker .trackerbutton').removeAttr('disabled');
        $('.main_apptracker .trackerbutton').attr('id', 'trackerbutton');
        //$('button.btn.btn-primary.trackerbutton').css('background-color' , '#256291 !important');
        //console.log('dd');
        data = new FormData(document.getElementById('form_id'));
        data.append('link', link);
        error = 0;
        new QRCode(document.getElementById("qrcode"), link);
        $("#qrcode img").addClass('img-responsive');
        if (error == 0) {
          $.ajax({
            url: base_url + '/app/form_save/', // Url to which the request is send
            type: "POST", // Type of request to be send, called as method
            //data: new FormData(document.getElementById('form_id')), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
            data: data,
            contentType: false, // The content type used when sending data to the server.
            cache: false, // To unable request pages to be cached
            processData: false,
            success: function(resp) {
              //console.log(resp);
              if (resp == "subscribed_new" || resp == "update_subscription") {
                /*Thank you message*/
                //console.log('success');
              }
            },
          });
        }
        $('#fb_app_share').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + link);
        $('#tr_app_share').attr('href', 'http://twitter.com/intent/tweet?url=' + link);
        $('#wp_app_share').attr('href', 'whatsapp://send?text=' + link);
      } else {
        console.log(err, link);
      }
    });
    return false;
  }

  function fetchcount() {
    $("#name_bottom").text(document.getElementById('inputUserName').value);
    $.ajax({
      url: base_url + '/app/fetch_data/', // Url to which the request is send
      type: "POST", // Type of request to be send, called as method    
      success: function(resp) {
        var content1 = '<table class="table table-striped table-bordered text-center" id="table">';
        content1 += '<thead>';
        content1 += '<tr class="text-center">';
        if (lang == 'en') {
          content1 += '<th scope="col ">HRMS ID<span class="arrow-down-odd"></span></th>';
          content1 += '<th scope="col">Name<span class="arrow-down-even"></span></th>';
          content1 += '<th scope="col">Installs<span class="arrow-down-odd"></span></th>';
          content1 += '<th scope="col">Re-Installs<span class="arrow-down-even"></span></th>';
        } else {
          content1 += '<th scope="col ">رقم التعريف الشخصي<span class="arrow-down-odd"></span></th>';
          content1 += '<th scope="col">الاسم بالكامل<span class="arrow-down-even"></span></th>';
          content1 += '<th scope="col">عدد مرات التحميل<span class="arrow-down-odd"></span></th>';
          content1 += '<th scope="col">عدد مرات إعادة التحميل<span class="arrow-down-even"></span></th>';
        }
        content1 += '</tr>';
        content1 += '</thead>';
        content1 += '<tbody class="results">';
        $.each(JSON.parse(resp), function(key, value) {
          content1 += '<tr>';
          content1 += '<td class="number-font">' + value.hrms_id + '</td>';
          content1 += '<td class="name">' + value.name + ' </td>';
          content1 += '<td class="number-font">' + value.installs + ' </td>';
          content1 += '<td class="number-font">' + value.reinstalls + '  </td>';
          content1 += '</tr>';
        });
        content1 += '</tbody>';
        content1 += '</table>';
        $('.table_result_div').html(content1);
        $('.bottom_div').show();
        $('.indi_result').show();
        var target = '#champ';
        $('html, body').animate({
          scrollTop: ($(target).offset().top)
        }, 2000);
      },
    });
    /* window.scroll({
   top: 2000,
   behavior: 'smooth'
 });*/
  }

  function fetchindividualcount() {
    $.ajax({
      url: base_url + '/app/fetch_individual_data/', // Url to which the request is send
      type: "POST", // Type of request to be send, called as method
      data: new FormData(document.getElementById('form_individual_data')), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
      //data : data,
      contentType: false, // The content type used when sending data to the server.
      cache: false, // To unable request pages to be cached
      processData: false,
      success: function(resp) {
        $.each(JSON.parse(resp), function(key, value) {
          $('#total_install').val(value.installs);
          $('#total_reinstall').val(value.reinstalls);
        });
        //}
      },
    });
    return false;
  }
}

