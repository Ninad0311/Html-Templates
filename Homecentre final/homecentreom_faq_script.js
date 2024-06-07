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
