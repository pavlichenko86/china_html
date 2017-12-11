$(document).ready(function() {
  //TOP MENU
  $("[data-toggle]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
    $(".wrap-main__nav").toggleClass("toLeft");
    $(".sidebar__link").toggleClass("link-toLeft");

    let screenW = $(window).width();
    if (screenW >= 580 && screenW < 768) {
      $(".nav__link").toggleClass("menu__block");
    }
  });

  //SHOW PLACES LINKS
  let hw = $(".house-items").offset().top; //расстояние до верха окна

  let winH = $(window).height(); //высота окна
  let toEl = hw - winH; //

  $(window).scroll(function() {
    let winScrollT = $(this).scrollTop(); // высота прокрутки
    //console.log(winScrollT + "///" + hw);
    let imgH = winScrollT - hw;
    let imgW = $('.black__img').width();
    let hgh = imgH / 2;
    console.log(hgh);
    $('.color__img').css('width', imgW);
    if (winScrollT > hw - 100) {
      $(".container-house").css("position", "fixed");
    }
    let mmmT = $('.mmm').css('top');
    mmmT = parseInt(mmmT.replace(/\D+/g,""));
    console.log(Number(mmmT));
    if(hgh < 180 && hgh > 20){
      $('.mmm').css('top', mmmT - 1);
    }
    let imgScr = $('.color__img').css('bottom');
    imgScr = parseInt(imgScr.replace(/\D+/g,""));
    if(hgh < 180 && hgh >= 0 && imgScr >= 65){
      $('.color__img').css('bottom', imgScr - 1);
    }
    $('.mmm').css('height', hgh + 'px');
    $('.white').css('height', hgh + 'px');
    let itH = $(".container-house").height();
    $(".house-links").css("height", itH * 2);
    $(".house-empty").css("height", itH);
    //console.log(itH * 2);
  });

  //BLOCK INFO NAMES

  // по скролу
  var target = $(".block__info__title");
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop === scrollToElem) {
      funShow();
    }
  });

  function funShow() {
    var typed = new Typed("#title1", {
      strings: ["3785 км."],
      typeSpeed: 50,
      startDelay: 1000,
      showCursor: false
    });
    var typed = new Typed("#title2", {
      strings: ["2 миллиона"],
      typeSpeed: 50,
      startDelay: 1000,
      showCursor: false
    });
    var typed = new Typed("#title3", {
      strings: ["Пекин"],
      typeSpeed: 50,
      startDelay: 1000,
      showCursor: false
    });
    var typed = new Typed("#title4", {
      strings: ["379"],
      typeSpeed: 50,
      startDelay: 1000,
      showCursor: false
    });
    var typed = new Typed("#title5", {
      strings: ["25 С<sup>o</sup>"],
      typeSpeed: 50,
      startDelay: 1000,
      showCursor: false,
      contentType: "html"
    });
    var typed = new Typed("#title6", {
      strings: ["10 000"],
      typeSpeed: 50,
      startDelay: 1000,
      showCursor: false
    });
    //$(window).off("scroll");
  }

  //HOUSE

  
  //RULES

  let rulH = $(".rules__col").height();
  let rulR = $(".rules__col-right").height();
  $(".rules__col-right").css("height", rulH);

  $(window).resize(function() {
    let rulH = $(".rules__col").height();
    let rulR = $(".rules__col-right").height();
    $(".rules__col-right").css("height", rulH);
  });
});
