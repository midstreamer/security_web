/*------------------------------------------------------------------
Project: Antler - Hosting Provider & WHMCS Template
Description: Antler Responsive Premium Template Designed for all web hosting providers
Author: inebur (Rúben Rodrigues)
Author URI: http://inebur.com/
Author Envato: https://themeforest.net/user/inebur
Copyright: 2022 inebur
Version: 3.2.1
-------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    loadWindowSettings();
    loadWindowEvents();
    loadMenu();
    loadTabs();
    izotope();
    popup();
    accordion();
    loadTooltips();
    initSliderUI();
    loadCountdown();
    speacialCount();
    loadSkills();
    misc();
    slick();
    listenSlick();
    loader();
    backtotop();
    isotope();
    livechat();
    contactform();
    popover();
    scrollgoto();
    active();
    display();
    switching();
    headerfooter();
    translate();
    switchVisible();
    sticky();
    changeColorStyle();
});

//----------------------------------------------------/
// Set Settings
//----------------------------------------------------/
function addCss(fileName) {
    var head = document.head
      , link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = fileName;
    link.id = "selected_font";

    head.appendChild(link);
  }

function setCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  function antlerSettings({layout,color,background,font,header,textDirection,showSettings}){
    this.showSettings = showSettings || "hide";
    this.layout = this.showSettings === "show" ? getCookie("layout") || "wide" : layout || "wide" ;
    this.color = this.showSettings === "show" ? getCookie("color") || "pink" : color || "pink" ;
    this.background = this.showSettings === "show" ? getCookie("background") || "dark" : background || "dark" ;
    this.font = this.showSettings === "show" ? getCookie("font") || "opensans" : font || "opensans" ;
    this.header = this.showSettings === "show" ? getCookie("header") || "static" : header || "static" ;
    this.textDirection = this.showSettings === "show" ? getCookie("textDirection") || "ltr" : textDirection || "ltr" ;
    this.manageLayout();
    this.manageColor();
    this.manageBackground();
    this.manageFont();
    this.manageHeader();
    this.manageTextDirection();
    this.manageSettings();
  }
  body = $('body');
  antlerSettings.prototype.manageSettings = function(){
    switch(this.showSettings){
        case "hide":
            break;
        case "show":
            settings();
            break;
        default:
            break;
        }
  }

  antlerSettings.prototype.manageTextDirection = function(){
    switch(this.textDirection){
        case "ltr":
            //LOGIC
            setCookie("textDirection","ltr",365);
            body.attr("data-textDirection","ltr");
            break;
        case "rtl":
            //LOGIC
            $('html').attr('dir','rtl');

            $(function(){
                $("link.rtl").attr("disabled", false);
              });
              

            $(function(){
                $("link.ltr").attr("disabled", true);
              });

            setCookie("textDirection","rtl",365);
            body.attr("data-textDirection","rtl");
            break;
        default:
            break;
        }
  }

  antlerSettings.prototype.manageHeader = function() {
    switch(this.header){
        case "static":
            body.attr("data-header","static");
            setCookie("header","static",365);
            break;
        case "fixed":
            body.attr("data-header","fixed");
            setCookie("header","fixed",365);
            break;
        default:
            body.attr("data-header","static");
            setCookie("header","static",365);
            break;
    }
}

  antlerSettings.prototype.manageLayout = function() {
    switch(this.layout){
        case "wide":
            body.attr("data-layout","wide");
            setCookie("layout","wide",365);
            break;
        case "frame":
            body.attr("data-layout","frame");
            setCookie("layout","frame",365);
            break;
        case "boxed":
            body.attr("data-layout","boxed");
            setCookie("layout","boxed",365);
            break;
        case "wideboxed":
            body.attr("data-layout","wideboxed");
            setCookie("layout","wideboxed",365);
            break;
        default:
            body.attr("data-layout","wide");
            setCookie("layout","wide",365);
            break;
    }
  }
  
  antlerSettings.prototype.manageColor = function() {
    switch(this.color){
        case "pink":
            body.attr("data-color","pink");
            setCookie("color","pink",365);
            break;
        case "green":
            body.attr("data-color","green");
            setCookie("color","green",365);
            break;
        case "blue":
            body.attr("data-color","blue");
            setCookie("color","blue",365);
            break;
        case "black":
            body.attr("data-color","black");
            setCookie("color","black",365);
            break;
        default:
            body.attr("data-color","pink");
            setCookie("color","pink",365);
            break;
    }
  }

  antlerSettings.prototype.manageBackground = function() {
    switch(this.background){
        case "origin":
            body.attr("data-background","origin");
            setCookie("background","origin",365);
            break;
        case "dark":
            body.attr("data-background","dark");
            setCookie("background","dark",365);
            break;
        case "light":
            body.attr("data-background","light");
            setCookie("background","light",365);
            break;
        case "modern":
            body.attr("data-background","modern");
            setCookie("background","modern",365);
            break;
        default:
            body.attr("data-background","origin");
            setCookie("background","origin",365);
            break;
    }
}

antlerSettings.prototype.manageFont = function() {
    switch(this.font){
        case "opensans":
            body.attr("data-font","opensans");
            addCss('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap');
            setCookie("font","opensans",365);
            break;
        case "poppins":
            body.attr("data-font","poppins");
            addCss('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap');
            setCookie("font","poppins",365);
            break;
        case "nunito":
            body.attr("data-font","nunito");
            addCss('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap');
            setCookie("font","nunito",365);
            break;
        case "raleway":
            body.attr("data-font","raleway");
            addCss('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap');
            setCookie("font","raleway",365);
            break;
        default:
            body.attr("data-font","opensans");
            addCss('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap');
            setCookie("font","opensans",365);
            break;
    }
}
//----------------------------------------------------/
// SVG Change color style 
//----------------------------------------------------/
function changeColorStyle(){
$("img.svg")
.each(function() {
    var $img = jQuery(this);
    var attributes = $img.prop("attributes");
    var imgURL = $img.attr("src");
    $.get(imgURL, function(data) {
        var $svg = $(data)
        .find('svg');
        $svg = $svg.removeAttr('xmlns:a');
        $.each(attributes, function() {
            $svg.attr(this.name, this.value);
        });
        $img.replaceWith($svg);
    });
});
}
//----------------------------------------------------/
// Custom VPS - Periodicity 
//----------------------------------------------------/
function switchVisible() {
    if (document.getElementById('price-val')) {
        if (document.getElementById('price-val')
            .style.display == 'none') {
            document.getElementById('price-val')
        .style.display = 'block';
        document.getElementById('priceon-val')
        .style.display = 'none';
    } else {
        document.getElementById('price-val')
        .style.display = 'none';
        document.getElementById('priceon-val')
        .style.display = 'block';
    }
}
}
//----------------------------------------------------/
// Active Menu
//----------------------------------------------------/
jQuery(function($) {
    var path = window.location.href;
    $('#menu ul li a')
    .each(function() {
        if (this.href === path) {
            $(this)
            .addClass('active');
            $(this)
            .parent()
            .parent()
            .closest("li")
            .addClass('active2');
            $('.active2 a:first')
            .addClass('active');
        }
    });
});
//----------------------------------------------------/
// Open Menu Mobile
//----------------------------------------------------/
$(".mobile .menu-item")
.on('click',
    function() {
        if ($(".sub-menu", this)
            .css('display') === 'none') {
            $(".sub-menu", this)
        .css("display", "block");
    } else {
        $(".sub-menu", this)
        .css("display", "none");
    }
}
);
//----------------------------------------------------/
// i18next translate
//----------------------------------------------------/
function translate() {
    $.getScript('assets/js/lib/i18next.min.js', function() {
        $.getScript('assets/js/lib/i18nextXHRBackend.min.js', function() {
            $.getScript('assets/js/lib/jquery-i18next.min.js', function() {

                var language = localStorage.getItem('lng');
                if (!language) {
                    localStorage.setItem('lng', 'en-US');
                    language = 'en-US';
                }
                i18next.use(i18nextXHRBackend)
                .init({
                    lng: language,
                    fallbackLng: 'en-US',
                    backend: {
                        loadPath: 'assets/locales/{{lng}}/translations.json'
                    }
                }, function(err, t) {
                    jqueryI18next.init(i18next, $, {
                        tName: 't',
                        i18nName: 'i18n',
                        handleName: 'localize',
                        selectorAttr: 'data-i18n',
                        targetAttr: 'i18n-target',
                        optionsAttr: 'i18n-options',
                        useOptionsAttr: false,
                        parseDefaultValueFromContent: true
                    });
                    $(document)
                    .localize();
                });
            });
        });
    });
}
/*---------------------------------*/
/*   Settings                      */
/*---------------------------------*/
function settings() {
    $("#settings")
    .load("settings.html", function(res, status, xhr) {
        changeColorStyle();
    });
}
/*---------------------------------*/
/*   Load header and footer file   */
/*---------------------------------*/
function headerfooter() {
    $("#header")
    .load("header.html", function(res, status, xhr) {
        $('#drop-lng [data-lng="' + localStorage.getItem('lng') + '"]')
        .addClass('xpto active');
        $('#drop-lng label')
        .click(function(e) {
            e.preventDefault();
            localStorage.setItem('lng', $(this)
                .attr('data-lng'));
            location.reload(true);
        });
        changeColorStyle();
    });
    $("#footer")
    .load("footer.html", function(res, status, xhr) {
        $('#drop-lng [data-lng="' + localStorage.getItem('lng') + '"]')
        .addClass('xpto active');
        $('#drop-lng label')
        .click(function(e) {
            e.preventDefault();
            localStorage.setItem('lng', $(this)
                .attr('data-lng'));
            location.reload(true);
        });
        changeColorStyle();
    });
}
/*----------------------*/
/*        Switch        */
/*----------------------*/
function switching() {
    $(window)
    .on('load', function() {
        var dToggle = $('#run-switch');
        var planPeriod = $('.price-content .period', '.price-container');
        dToggle.on('click', function() {
            $('.mo', this)
            .toggleClass('active');
            $('.an', this)
            .toggleClass('active');
            $('.month', this)
            .toggleClass('active');
            $('.switch', this)
            .toggleClass('on');
            $('.year', this)
            .toggleClass('active');
            if (planPeriod.hasClass('annually')) {
                planPeriod.text('month');
                for (var i = 0; i <= 4; i++) {
                    $('.price-container:eq('+i+') .value').text(parseFloat(Number($('.price-container:eq('+i+') .value').text())/12).toFixed(2));
                    $('.price-container:eq('+i+') .discount').text(parseFloat(Number($('.price-container:eq('+i+') .discount').text())/12).toFixed(2));
                }
            } else {
                planPeriod.text('year');
                for (var i = 0; i <= 4; i++) {
                    $('.price-container:eq('+i+') .value').text(parseFloat(Number($('.price-container:eq('+i+') .value').text())*12).toFixed(2));
                    $('.price-container:eq('+i+') .discount').text(parseFloat(Number($('.price-container:eq('+i+') .discount').text())*12).toFixed(2));
                }
            }
            planPeriod.toggleClass('annually');
        });
    });
}
/*----------------------*/
/*   Full Nav Open      */
/*----------------------*/
function openNav() {
    document.getElementById('myNav')
    .style.display = 'block';
}

function closeNav() {
    document.getElementById('myNav')
    .style.display = 'none';
}
/*----------------------*/
/*   Display & Hide     */
/*----------------------*/
function display() {
    $('#showall')
    .on("click", function() {
        $('.targetDiv')
        .show();
    });
    $('.showSingle')
    .on("click", function() {
        $('.targetDiv')
        .hide();
        $('#div' + $(this)
            .attr('target'))
        .show();
    });
}
/*----------------------*/
/*   Active Button      */
/*----------------------*/
function active() {
    $(".heading a")
    .on("click", function() {
        $(".heading a")
        .removeClass("active");
        $(this)
        .addClass("active");
    });
}
/*----------------------*/
/*    Scroll Goto       */
/*----------------------*/
function scrollgoto() {
    $('.gocheck')
    .on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body')
            .stop()
            .animate({
                scrollTop: target.offset()
                .top
            }, 0);
        }
    });
}
/*----------------------*/
/*       Popover        */
/*----------------------*/
function popover() {
    $('[data-bs-toggle="popover"]')
    .popover()
}
/*----------------------*/
/*    Contact Form      */
/*----------------------*/
function contactform() {
    $('#contactForm')
    .on('submit', function(e) {
        $.ajax({
            type: "POST",
            url: 'assets/php/form-process.php',
            data: $(this)
            .serialize(),
            success: function() {
                $('#msgSubmit')
                .fadeIn(100)
                .show();
            }
        });
        e.preventDefault();
    });
};
/*----------------------*/
/*    Live Chat         */
/*----------------------*/
function livechat() {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6104204d649e0a0a5cceb6e3/1fbs1scan';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
}
/*----------------------*/
/*     Isotope          */
/*----------------------*/
function isotope() {
    $(window)
    .on('load', function() {
        var selectedCategory;
        var $grid = $('.featured')
        .isotope({
            itemSelector: '.isotope-item',
            masonry: {
                columnWidth: '.isotope-item',
            },
            getSortData: {
                selectedCategory: function(itemElem) {
                    return $(itemElem)
                    .hasClass(selectedCategory) ? 0 : 1;
                }
            }
        });
        var $items = $('.featured')
        .find('.featured-items');
        $('.sort-button-group')
        .on('click', '.button', function() {
            selectedCategory = $(this)
            .attr('data-category');
            if (selectedCategory === 'all') {
                $grid.isotope({
                    sortBy: 'original-order'
                });
                $items.css({
                    opacity: 1
                });
                return;
            }
            var selectedClass = '.' + selectedCategory;
            $items.filter(selectedClass)
            .css({
                opacity: 1
            });
            $items.not(selectedClass)
            .css({
                opacity: 0
            });
            $grid.isotope('updateSortData');
            $grid.isotope({
                sortBy: 'selectedCategory'
            });
        });
        $('.button-group')
        .each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function() {
                $buttonGroup.find('.active')
                .removeClass('active');
                $(this)
                .addClass('active');
            });
        });
    });
}
/*----------------------*/
/*         FLICKITY     */
/*----------------------*/
$('.header-main-slider').flickity({
  fullscreen: true,
  draggable: true,
  prevNextButtons: false,
  pageDots: true,
  autoPlay: 6000,
  fade: true
});
$('.header-main-nav').flickity({
  asNavFor: '.header-main-slider',
  prevNextButtons: false,
  pageDots: false,
  contain: true
});
$('.banner-slider').flickity({
  prevNextButtons: false,
  pageDots: true,
});

(function($) {
    $('.carousel').flickity({
        cellSelector: '.carousel-cell',
    });
})(jQuery);

/*----------------------*/
/*     Back to top      */
/*----------------------*/
function backtotop() {
// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 0,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');
//hide or show the "back to top" link
$(window)
.scroll(function() {
    ($(this)
        .scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this)
        .scrollTop() > offset_opacity) {
        $back_to_top.addClass('cd-fade-out');
}
});
//smooth scroll to top
$back_to_top.on('click', function(event) {
    event.preventDefault();
    $('body,html')
    .animate({
        scrollTop: 0,
    }, scroll_top_duration);
});
}
/*----------------------*/
/*       Loader         */
/*----------------------*/
function loader() {
    $(window)
    .on('load', function() {
        $("#spinner-area")
        .fadeOut("slow");
    })
}
/*----------------------*/
/*     Listen Slick     */
/*----------------------*/
function listenSlick() {
    $('.slick')
    .on('unslick', function() {
        var resizeCheck = setInterval(function() {
            if ($(window)
                .width() > 590) {
                clearInterval(resizeCheck);
            slick();
        }
    }, 100);
    });
}
/*----------------------*/
/*     Slick Slider     */
/*----------------------*/
function slick() {
    $('#slider')
    .slick({
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        rtl: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 590,
            settings: "unslick"
        }]
    });

    if($('#slider').length)
        $('#slider').slick('slickSetOption', 'rtl', getCookie("textDirection") === "rtl");  

}
/*----------------------*/
/*         Popup        */
/*----------------------*/
function popup() {
    if ($('.popup-with-form')
        .length) {
        $('.popup-with-form')
    .magnificPopup({
        type: 'image',
        preloader: true,
        focus: '#name',
        closeOnBgClick: true,
        callbacks: {
            beforeOpen: function() {
                if ($(window)
                    .width() < 700) {
                    this.st.focus = false;
            } else {
                this.st.focus = '#name';
            }
        }
    }
});
}
$('.gallery-item')
.magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
});
// Initialize popup as usual
$('.image-link')
.magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    image: {
            // options for image content type
            titleSrc: 'title'
        },
        zoom: {
            enabled: true,
            navigateByImgClick: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
    });
}
$(document)
.ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps')
    .magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

function misc() {
    /*----------------------*/
    /*         Modal        */
    /*----------------------*/
    $('#myModal')
    .on('shown.bs.modal', function() {
        $('#myInput')
        .focus()
    })
}
/*----------------------*/
/*        Swiper        */
/*----------------------*/
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        speed: 1000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
/*-------------------------*/
/*        Tooltips         */
/*-------------------------*/
function loadTooltips() {
    $('#element')
    .tooltip('show')
    $(function() {
        $('[data-bs-toggle="tooltip"]')
        .tooltip()
    })
}
$(function() {
    $('[data-bs-toggle="tooltip"]')
    .tooltip()
})
/*-------------------------*/
/*          Slider         */
/*-------------------------*/
function initSliderUI() {
    var initIterator = 0;
    if ($(".slider-ui")
        .length) {
        $(".slider-ui")
    .each(function() {
        var self = $(this),
        sliderUI = self.find('.slider-line'),
        sliderInp = self.find('.slider-inp'),
        sliderUniqueId = 'sliderUI' + initIterator,
        inputUniqueId = 'inputUI' + initIterator,
        start = parseInt(sliderInp.attr('data-start')),
        count_step = parseInt(sliderInp.attr('data-count-step'));
        sliderUI.attr('id', sliderUniqueId);
        sliderInp.attr('id', inputUniqueId);
        initIterator++;
        count_step = count_step ? count_step : 300;
        var keypressSlider = document.getElementById(sliderUniqueId),
        input = document.getElementById(inputUniqueId);
        noUiSlider.create(keypressSlider, {
            start: start ? start : 1,
            step: 1,
            connect: "lower",
            tooltips: true,
            format: {
                to: function(value) {
                    return "VPS" + value;
                        //return parseInt(value);
                    },
                    from: function(value) {
                        return value;
                    }
                },
                range: {
                    'min': 1,
                    'max': count_step
                },
                pips: {
                    mode: 'values',
                    values: [1, 2, 3, 4, 5],
                    density: 5,
                    stepped: true
                }
            });
            // Calculate Docker Product second and third  diagram
            function getValue2(values, handle, unencoded, tap) {
                var circle = $(this.target)
                .closest('.sidebar')
                .find('.circle');
                circle.attr('data-percent', parseInt(unencoded) / count_step * 100);
            }
            keypressSlider.noUiSlider.on('change', getValue2);
            keypressSlider.noUiSlider.on('update', function(values, handle) {
                refreshInfo(values[handle]);
                input.value = values[handle];
                change_global_cloud_pkgs_href(values[handle]);
            });
            input.addEventListener('change', function() {
                keypressSlider.noUiSlider.set([null, this.value]);
            });
            // Listen to keydown events on the input field.
            input.addEventListener('keydown', function(e) {
                // Convert the string to a number.
                var value = Number(keypressSlider.noUiSlider.get()),
                sliderStep = keypressSlider.noUiSlider.steps()
                    // Select the stepping for the first handle.
                    sliderStep = sliderStep[0];
                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch (e.which) {
                    case 13:
                    keypressSlider.noUiSlider.set(this.value);
                    break;
                    case 38:
                    keypressSlider.noUiSlider.set(value + sliderStep[1]);
                    break;
                    case 40:
                    keypressSlider.noUiSlider.set(value - sliderStep[0]);
                    break;
                }
            });
            function getServicesInfo() {
                var info = {
                    VPS1: {
                        name: "Service A",
                        disk: "100GB",
                        ram: "1GB",
                        cpu: "1 Core",
                        bandwith: "100GB",
                        setup: "8€",
                        ip: "2 IPs",
                        price: "99.09",
                        priceon: "8.26",
                        orderlink: "http://inebur.com/whmcs/cart.php?a=add&pid=4&carttpl=antler"
                    },
                    VPS2: {
                        name: "Service B",
                        disk: "200GB",
                        ram: "4GB",
                        cpu: "2 Core",
                        setup: "15€",
                        ip: "4 IPs",
                        bandwith: "500GB",
                        price: "155.00",
                        priceon: "12.92",
                        orderlink: "http://inebur.com/whmcs/cart.php?a=add&pid=5&carttpl=antler"
                    },
                    VPS3: {
                        name: "Service C",
                        disk: "300GB",
                        ram: "8GB",
                        cpu: "4 Core",
                        setup: "Free",
                        ip: "8 IPs",
                        bandwith: "2TB",
                        price: "299.99",
                        priceon: "25.00",
                        orderlink: "http://inebur.com/whmcs/cart.php?a=add&pid=6&carttpl=antler"
                    },
                    VPS4: {
                        name: "Service D",
                        disk: "400GB",
                        ram: "12GB",
                        cpu: "4 Core",
                        setup: "Free",
                        ip: "8 IPs",
                        bandwith: "Unlimited",
                        price: "395.22",
                        priceon: "32.94",
                        orderlink: "http://inebur.com/whmcs/cart.php?a=confproduct&i=3&carttpl=antler"
                    },
                    VPS5: {
                        name: "Service E",
                        disk: "500GB",
                        ram: "16GB",
                        cpu: "8 Core",
                        setup: "Free",
                        ip: "12 IPs",
                        bandwith: "Unlimited",
                        price: "545.00",
                        priceon: "45.42",
                        orderlink: "http://inebur.com/whmcs/cart.php?a=confproduct&i=4&carttpl=antler"
                    }
                };
                return info;
            }
            function refreshInfo(key) {
                var info = getServicesInfo();
                $("#disk-val")
                .html(info[key].disk);
                $("#cpu-val")
                .html(info[key].cpu);
                $("#ram-val")
                .html(info[key].ram);
                $("#setup-val")
                .html(info[key].setup);
                $("#ip-val")
                .html(info[key].ip);
                $("#bw-val")
                .html(info[key].bandwith);
                $("#price-val")
                .html(info[key].price);
                $("#priceon-val")
                .html(info[key].priceon);
                $("#orderlink-val")
                .html(info[key].orderlink);
            }
            function change_global_cloud_pkgs_href(key) {
                var info = getServicesInfo();
                $("#orderlink")
                .attr("href", info[key].orderlink);
            }
        });
    }
}
/*-------------------------*/
/*          Menu           */
/*-------------------------*/
function loadMenu() {
    $(".nav-menu .menu-toggle")
    .on("click", function() {
        $(this)
        .closest(".menu-wrap")
        .toggleClass("active");
    });
    $('.btn-scroll')
    .on("click", function() {
        $('html, body')
        .animate({
            scrollTop: $($.attr(this, 'href'))
            .offset()
            .top - 10
        }, 500);
        return false;
    });
}
/*-------------------------*/
/*          Izotope        */
/*-------------------------*/
function izotope() {
    if ($('.izotope-container')
        .length) {
        var $container = $('.izotope-container');
    $container.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.item'
        }
    });
}
$('#filters')
.on('click', '.but', function() {
    $('.izotope-container')
    .each(function() {
        $(this)
        .find('.item')
        .removeClass('animated');
    });
    $('#filters .but')
    .removeClass('activbut');
    $(this)
    .addClass('activbut');
    var filterValue = $(this)
    .attr('data-filter');
    $container.isotope({
        filter: filterValue
    });
});
}
/*-------------------------*/
/*          Tabs           */
/*-------------------------*/
function loadTabs() {
    $('.tabs-header')
    .on('click', 'li:not(.active)', function() {
        var index_el = $(this)
        .index();
        $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
        $(this)
        .closest('.tabs')
        .find('.tabs-item')
        .removeClass('active')
        .eq(index_el)
        .addClass('active');
    });
}
/*----------------------*/
/*       Accordion      */
/*----------------------*/
function accordion() {
    $('.accordion')
    .on('click', '.panel-title', function() {
        var self = $(this);
        var panelWrap = self.parent();
        panelWrap.find('.panel-collapse')
        .slideToggle('200');
        self.toggleClass('active');
        panelWrap.siblings()
        .find('.panel-collapse')
        .slideUp('200');
        panelWrap.siblings()
        .find('.panel-title')
        .removeClass('active');
    });
    accordHeight();
}

function accordHeight() {
    $(".accordion.faq .square")
    .each(function() {
        $(this)
        .css({
            "height": $(this)
            .parent()
            .outerHeight(true),
            "padding-top": $(this)
            .parent()
            .outerHeight(true) / 2 - 20
        });
    });
}
/*-------------------------*/
/*          SKILLS         */
/*-------------------------*/
function loadSkills() {
//Circle skills
$('.circle')
.not('.animated')
.each(function() {
    if ($(window)
        .scrollTop() >= $(this)
        .offset()
        .top - $(window)
        .height() * 0.7) {
        $(this)
    .addClass('animated')
    .circliful();
}
});
}
/*-------------------------*/
/*           Select        */
/*-------------------------*/
function selectInit() {
    $('.selectpicker')
    .each(function() {
        var self = $(this);
        var selectStyle = self.attr('data-class'); //additional style attribute, not required
        self.selectpicker({
            style: 'cst-select ' + selectStyle //add classes to customize select field
        });
    });
}
function loadWindowEvents() {
    /*-------------------------*/
    /*  Run Resize Functions   */
    /*-------------------------*/
    $(window)
    .on("resize", function() {
        offheight();
        accordHeight();
    });
    /*-------------------------*/
    /*  RUN SCROLL FUNCTIONS   */
    /*-------------------------*/
    $(window)
    .on("scroll", function() {
        loadSkills();
    });
    /*-------------------------*/
    /*  RUN SCROLL FUNCTIONS   */
    /*-------------------------*/
    $(window)
    .on('scroll', function() {
        if ($(window)
            .scrollTop() >= 100) {
            $('.menu-wrap')
        .addClass('fixed');
    } else {
        $('.menu-wrap')
        .removeClass('fixed');
    }
});
}
/*-------------------------*/
/*         Countdown       */
/*-------------------------*/
function loadCountdown() {
    $('#clock')
    .countdown('2022/10/24 00:00', function(event) {
        var $this = $(this)
        .html(event.strftime('' +
            '<div>%w <span class="title">Weeks</span></div>' +
            '<div>%d <span class="title">days</span></div>' +
            '<div>%H <span class="title">hours</span></div>' +
            '<div>%S <span class="title">seconds</span></div>'));
    });
}

function speacialCount() {
    $('#specialclock')
    .countdown('2022/12/6', function(event) {
        $(this)
        .html(event.strftime('Time left: [ %D days %H:%M:%S ]'));
    });
}
function offheight() {
    if ($(window)
        .width() > 750) {
        var offerHeight = $(".offers")
    .outerHeight(true);
    $(".offers.light")
    .css("height", offerHeight + 1);
}
}
/*-------------------------*/
/*       Fixed Menu        */
/*-------------------------*/
function loadWindowSettings() {
    offheight();
    if ($(window).width() < 750) {
        $(".nav-menu .main-menu > .menu-item-has-children > a").on("click", function() {
            if ($(this).attr('href') !== '#') {
                $(this).next().slideToggle(0);
                return false;
            }
        });
    }
}
function updateSlidesPerView(xsValue, smValue, mdValue, lgValue) {
    var winW = $(window)
    .width();
    var winH = $(window)
    .height();
    var xsPoint = 700,
    smPoint = 991,
    mdPoint = 1199;
    if (winW > mdPoint) return lgValue;
    else if (winW > smPoint) return mdValue;
    else if (winW > xsPoint) return smValue;
    else return xsValue;
}
/*----------------------*/
/*   Sticky Sidebar     */
/*----------------------*/
function sticky() {
    $.fn.scrollBottom = function() {
        return $(document).height() - this.scrollTop() - this.height();
    };
    var $el = $('#sidebar');
    if(!$el.length)
        return;
    var $content = $('#sidebar_content');
    if(!$content.length)
        return;
    var $window = $(window);
    var top = $el.parent().position().top;
    $window.bind("scroll resize", function() {
        var scrollTop = $window.scrollTop()
        if (scrollTop < $content.offset().top + -35) {
            $el.css({
                top: (top - scrollTop) + "px",
                bottom: "auto"
            });
        } else if (scrollTop > $content.offset().top + $content.outerHeight(true) - $el.height() - 165) {
            $el.css({
                top: "auto",
                bottom: $window.height() + scrollTop - ($content.offset().top + $content.outerHeight(true)) + "px"
            });
        } else {
            $el.css({
                top: -35,
                bottom: "auto"
            });
        }
    }).scroll();
}
/* AOS Scroll Effect */
AOS.init();