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