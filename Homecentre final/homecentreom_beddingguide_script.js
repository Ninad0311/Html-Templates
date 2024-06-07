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