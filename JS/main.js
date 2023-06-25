$(function () {


  // ===================================   слайдер с картинками  ==============


  $('.popular__slider').slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    waitForAnimate: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          // variableWidth: false,
          // centerPadding: '10px',
          // slidesToScroll: 2
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
        }
      },
    ]

  })
  $('.popular__btn-left').on('click', function (e) {
    e.preventDefault()
    $('.popular__slider').slick('slickPrev')
  })
  $('.popular__btn-right').on('click', function (e) {
    e.preventDefault()
    $('.popular__slider').slick('slickNext')
  })


  // ===================================   слайдер  всех туров  ==============


  $('.all__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    waitForAnimate: false,
    // initialSlide: 1,
    // variableWidth: true
    dots: true,
    asNavFor: '.all__slider-dots', // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию)

    responsive: [
      {
        breakpoint: 800,
        settings: {
          variableWidth: false,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.all__slider-dots').slick({ // настройка навигации
    slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
    asNavFor: '.all__slider', // указываем что это навигация для блока выше
    focusOnSelect: true // указываем что бы слайделось по клику
  });

  $('.all__btn-left').on('click', function (e) {
    e.preventDefault()
    $('.all__slider').slick('slickPrev')
  })
  $('.all__btn-right').on('click', function (e) {
    e.preventDefault()
    $('.all__slider').slick('slickNext')
  })


  // ===================================   аккордеон  в слайдере всех туров  ==============


  $(document).ready(function () {
    $('.slide__btn-open').click(function (event) {
      event.preventDefault();
      $('.slide__table-row--down').toggle('slow');
      $('.slide__btn-open').hide();
      $('.slide__btn-clos').show();
    });
    $('.slide__btn-clos').click(function (event) {
      event.preventDefault();
      $('.slide__table-row--down').toggle('slow');
      $('.slide__btn-clos').hide();
      $('.slide__btn-open').show();
    });
  });


  // ===================================   аккордеон в блоге  ==============


  $(document).ready(function () {
    $('.blog a[href^="#"]').click(function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('.blog__item--activ').removeClass('blog__item--activ');
        $(this).addClass('blog__item--activ');
        $('.blog__content--activ').removeClass('blog__content--activ');
        target.addClass('blog__content--activ');
      }
    });
  });


  // ===================================   плавное прокручивание к якорным ссылкам  ==============


  $(".nav__link, .header__logo, .footer__logo, .map__item-linck").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })


  // ===================================   окрашивание значка закладки  ==============


  $('.slider__marck').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('slider__marck--active')) {
      $(this).removeClass('slider__marck--active')
    } else {
      $(this).addClass('slider__marck--active')
    }
  })


  // ===================================   бургер меню  ==============


  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  })

  $('.burger, .overlay, .header__logo, .nav').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('open')
    $('body').toggleClass('body--owerflov')
  })


























































})
