(function ($) {
  "use strict";

  $('.vidplay').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  $(".move").tilt({
    maxTilt: 35,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 500,
    glare: true,
    maxGlare: 0.2,
    scale: 1.04
  });

  // // banner image slider js
  // $('.banner-img-slider').slick({
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   draggable: false,
  // })

  // // testimonial slider js
  // $('.testi-slider').slick({
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   autoplay: false,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
  //   nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
  //   customPaging: function (slider, i) {
  //     let thumb = $(slider.$slides[i]).data();
  //     let v = Number(i + 1);
  //     return '<button>' + '0' + v + '</button>';
  //   },
  //   responsive: [{
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       dots: false,
  //       arrows: true,
  //     }
  //   }]
  // })

  // // blog slider js
  // $('.blog-slider').slick({
  //   dots: true,
  //   arrows: true,
  //   customPaging: function (slider, i) {
  //     let thumb = $(slider.$slides[i]).data();
  //     let v = Number(i + 1);
  //     return '<button>' + '0' + v + '</button>';
  //   },
  //   infinite: true,
  //   autoplay: false,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
  //   nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
  // })

  // // technology slider js
  // $('.technology-slider').slick({
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // })

  // // ar slider js
  // $('.solutions-slider').slick({
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   prevArrow: '<i class="bi bi-arrow-left arrow left"></i>',
  //   nextArrow: '<i class="bi bi-arrow-right arrow right"></i>',
  // })

  // // ar slider js
  // $('.model-slider').slick({
  //   dots: true,
  //   arrows: true,
  //   customPaging: function (slider, i) {
  //     let thumb = $(slider.$slides[i]).data();
  //     let v = Number(i + 1);
  //     return '<button>' + '0' + v + '</button>';
  //   },
  //   infinite: true,
  //   autoplay: false,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   draggable: false,
  //   prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
  //   nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
  // })

  // // features game slider js
  // $('.games-slider').slick({
  //   dots: true,
  //   arrows: true,
  //   customPaging: function (slider, i) {
  //     let thumb = $(slider.$slides[i]).data();
  //     let v = Number(i + 1);
  //     return '<button>' + '0' + v + '</button>';
  //   },
  //   infinite: true,
  //   autoplay: false,
  //   speed: 1000,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: "0",
  //   prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
  //   nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
  // })

  // // features game slider js
  // $('.project-slider').slick({
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   autoplay: false,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: "0",
  //   prevArrow: '<i class="bi bi-chevron-left arrow left"></i>',
  //   nextArrow: '<i class="bi bi-chevron-right arrow right"></i>',
  // })

  // // blog details  banner slider js
  // $('.blog-details-slider').slick({
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: false,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // })

  // $('.vidplay').magnificPopup({
  //   type: 'iframe',
  //   iframe: {
  //     markup: '<div class="mfp-iframe-scaler">' +
  //       '<div class="mfp-close"></div>' +
  //       '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
  //       '</div>',
  //     patterns: {
  //       youtube: {
  //         index: 'youtube.com/',
  //         id: 'v=',
  //         src: 'https://www.youtube.com/embed/%id%?autoplay=1'
  //       },
  //     },
  //     srcAction: 'iframe_src',
  //   }
  // });


  // // -----Country Code Selection
  // $("#mobile_code").intlTelInput({
  //   initialCountry: "bd",
  //   separateDialCode: true,
  // });

  // // back to top js
  // var btn = $('#button');

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 300) {
  //     btn.addClass('show');
  //   } else {
  //     btn.removeClass('show');
  //   }
  // });

  // btn.on('click', function (e) {
  //   e.preventDefault();
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, '300');
  // });

  // // fixed mobile menu js
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 0) {
  //     $('.mobile-menu').addClass('mobile-sticky-top');
  //   } else {
  //     $('.mobile-menu').removeClass('mobile-sticky-top');
  //   }
  // });

  // // mobile menu js
  // $('.mobile-topbar .icon').click(function () {
  //   $('.mobile-menu-main').addClass('show-mobile-menu')
  // })
  // $('.close-m-menu').click(function () {
  //   $('.mobile-menu-main').removeClass('show-mobile-menu')
  // })

  // $('.sub-menu ul').hide();
  // $(".sub-menu a").click(function () {
  //   $(this).parent(".sub-menu").children("ul").slideToggle("100");
  //   $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  // });
})(jQuery);