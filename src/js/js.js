$(document).ready(function() {
  //TOP MENU
  $("[data-toggle]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
    $(".wrap-main__nav").toggleClass("toLeft");
    $(".sidebar__link").toggleClass("link-toLeft");
  });

  //show login
  $(".show-log").click(function() {
    $(this).toggleClass("show-log--show");
    $(".right_log").toggleClass("right_log--show");
  });

  //Typing text
  var wow = new WOW({
    boxClass: "wow1",
    callback: function(box) {
      funAll();
    },
    scrollContainer: null
  });
  wow.init();

  let client_w = document.body.clientWidth;

  //SHOW PLACES LINKS
  let hw = $(".house-items").offset().top; //расстояние до верха окна

  let winH = $(window).height(); //высота окна
  let toEl = hw - winH;
  if (client_w >= 1024) {
    $(window).scroll(function() {
      let winScrollT = $(this).scrollTop(); // высота прокрутки
      let target = $(".container-info");
      let targetPos = target.offset().top;
      let blackTop = $(".black__img").offset();
      let colorTop = $(".color__img").offset();

      $(".color__img").offset({ top: blackTop.top });

      let imgH = winScrollT - hw; //прокрутка - расстояние до верха
      let imgW = $(".black__img").width();
      let hgh = imgH / 2;
      $(".color__img").css("width", imgW);
      let leftColImg = (imgW - 485) / 2;
      $(".color__img").css("left", -leftColImg);
      if (winScrollT > hw - 30) {
        $(".container-house").css("position", "fixed");
      } else if (winScrollT < hw) {
        $(".container-house").css("position", "absolute");
      }
      let mmmT = $(".mmm").css("top");
      mmmT = parseInt(mmmT.replace(/\D+/g, ""));
      if (hgh < 180 && hgh > 0 && mmmT >= 1) {
        //   180
        $(".mmm").css("top", mmmT - 1);
      }
      $(".mmm").css("height", hgh + "px");
      $(".white").css("height", hgh + "px");
      let itH = $(".container-house").height();
      $(".house-links").css("height", itH * 2);
      $(".house-empty").css("height", itH);
    });
  }

  //BLOCK INFO NAMES

  function funAll() {
    if ($(".block__info").hasClass("thai-block__info")) {
      funThai();
    } else if ($(".block__info").hasClass("eg-block__info")) {
      funEg();
    } else if ($(".block__info").hasClass("ind-block__info")) {
      funInd();
    } else if ($(".block__info").hasClass("tur-block__info")) {
      funTur();
    } else {
      funChina();
    }
  }
  function funThai() {
    var typed = new Typed("#thai1", {
      strings: ["3785 км."],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#thai2", {
      strings: ["70 миллионов"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#thai3", {
      strings: ["Бангкок"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#thai4", {
      strings: ["379"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#thai5", {
      strings: ["25 С<sup>o</sup>"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false,
      contentType: "html"
    });
    var typed = new Typed("#thai6", {
      strings: ["10 000"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
  }
  function funChina() {
    var typed = new Typed("#title1", {
      strings: ["3785 км."],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#title2", {
      strings: ["2 миллиона"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#title3", {
      strings: ["Пекин"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#title4", {
      strings: ["379"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#title5", {
      strings: ["25 С<sup>o</sup>"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false,
      contentType: "html"
    });
    var typed = new Typed("#title6", {
      strings: ["10 000"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
  }

  function funEg() {
    var typed = new Typed("#eg1", {
      strings: ["2450 км."],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#eg2", {
      strings: ["95 миллионов"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#eg3", {
      strings: ["Каир"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#eg4", {
      strings: ["379"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#eg5", {
      strings: ["25 С<sup>o</sup>"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false,
      contentType: "html"
    });
    var typed = new Typed("#eg6", {
      strings: ["10 000"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
  }

  function funInd() {
    var typed = new Typed("#ind1", {
      strings: ["7515 км."],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#ind2", {
      strings: ["1 миллиард"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#ind3", {
      strings: ["Нью-Дели"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#ind4", {
      strings: ["379"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#ind5", {
      strings: ["25 С<sup>o</sup>"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false,
      contentType: "html"
    });
    var typed = new Typed("#ind6", {
      strings: ["10 000"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
  }

  function funTur() {
    var typed = new Typed("#tur1", {
      strings: ["3172 км."],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#tur2", {
      strings: ["80 миллионов"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#tur3", {
      strings: ["Анкара"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#tur4", {
      strings: ["379"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
    var typed = new Typed("#tur5", {
      strings: ["25 С<sup>o</sup>"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false,
      contentType: "html"
    });
    var typed = new Typed("#tur6", {
      strings: ["10 000"],
      typeSpeed: 80,
      startDelay: 0,
      showCursor: false
    });
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
