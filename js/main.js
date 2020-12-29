

import {
    TweenMax,TimelineMax,Expo

} from "gsap"; 


import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

import ScrollHint from 'scroll-hint';
new ScrollHint('.js-scrollable', {
	scrollHintIconAppendClass: 'scroll-hint-icon-white', // white-icon will appear
	applyToParents: true,
	i18n: {
		scrollable: 'スクロールできます'
	}
});

(function ($) {

    $(document).ready(function () {
        $('.ac-parent').on('click', function () {
            $(this).next().slideToggle();

            $(this).toggleClass("open");

            $('.ac-parent').not(this).removeClass('open');

            // 一つ開くと他は閉じるように
            $('.ac-parent').not($(this)).next('.ac-child').slideUp();
        });

            $('.menu_button').on('click', function () {
                if ($(this).hasClass('open')) {
                    $(this).removeClass('open');
                } else {
                    $(this).addClass('open');
                }
            });

    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".swiper1 img").on("mouseenter", function() {
    cursor.addClass("active");
    
});

$(".swiper1 img").on("mouseleave", function() {
    cursor.removeClass("active");
});
$(".ba-inner").on("mouseenter", function() {
    cursorba.addClass("active");
    
});

$(".iba-inner").on("mouseleave", function() {
    cursorba.removeClass("active");
});

$('.nav__item').on('click', function () {
    //  ボタンをクリックしたら、クリックしたい要素のdata属性を取得
    let target = $(this).data('modal-link');
    //  上記で取得した要素と同じclass名を持つ要素を取得
    let modal = document.querySelector('.' + target);
    //  その要素にclassを付け替える
    $(modal).toggleClass('is-show');
});

//  modalを閉じるときの動作
$('.modal__bg').on('click', function () {
    $(this).parents('.modal').toggleClass('is-show');
});


})(jQuery);



let mySwiper = new Swiper('.swiper1', {
    // デフォルトの設定
    slidesPerView: 1,
    spaceBetween: 0,
    slideToClickedSlide: true,
        preventClicksPropagation: false,
        preventClicks: false,
    // レスポンシブブレーポイント（画面幅による設定）
    breakpoints: {
        // 画面幅が 640px 以上の場合（window width >= 640px）
        640: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        // 画面幅が 980px 以上の場合（window width >= 980px）
        980: {
            
            slidesPerView: 1.4,
            spaceBetween: 40,
            loop: true
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },

})
let mySwiper2 = new Swiper('.swiper2', {
    // デフォルトの設定
    slidesPerView: 1,
    spaceBetween: 40,
    // レスポンシブブレーポイント（画面幅による設定）
    breakpoints: {
        // 画面幅が 640px 以上の場合（window width >= 640px）
        640: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        // 画面幅が 980px 以上の場合（window width >= 980px）
        980: {
            centeredSlides: true,
            slidesPerView: 1.4,
            spaceBetween: 80,
            loop: true
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },

})
let mySwiper3 = new Swiper('.swiper3', {
    // デフォルトの設定
    slidesPerView: 1,
    spaceBetween: 40,
    // レスポンシブブレーポイント（画面幅による設定）
    breakpoints: {
        // 画面幅が 640px 以上の場合（window width >= 640px）
        640: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        // 画面幅が 980px 以上の場合（window width >= 980px）
        980: {
            centeredSlides: true,
            slidesPerView: 1.4,
            spaceBetween: 80,
            loop: true
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },

})
let mySwiper4 = new Swiper('.swiper4', {
    // デフォルトの設定
    slidesPerView: 1,
    spaceBetween: 40,
    // レスポンシブブレーポイント（画面幅による設定）
    breakpoints: {
        // 画面幅が 640px 以上の場合（window width >= 640px）
        640: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        // 画面幅が 980px 以上の場合（window width >= 980px）
        980: {
            slidesPerView: 1,
            spaceBetween: 100
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
    },
})
    let mySwiper5= new Swiper('.fp-slider', {
        // デフォルトの設定
        slidesPerView: 1,
        spaceBetween: 40,
        // レスポンシブブレーポイント（画面幅による設定）
        breakpoints: {
            // 画面幅が 640px 以上の場合（window width >= 640px）
            640: {
                slidesPerView: 1,
                spaceBetween: 100
            },
            // 画面幅が 980px 以上の場合（window width >= 980px）
            980: {
                slidesPerView: 1,
                spaceBetween: 100
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
            el: '.swiper-pagination',
            
            clickable: true,
        },
    
})
let labels = ['1','2','3'];
var swiperH = new Swiper('.swiper-container-h', {
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
        // 画面幅が 640px 以上の場合（window width >= 640px）
        640: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        // 画面幅が 980px 以上の場合（window width >= 980px）
        980: {
            // centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 80,
            loop: true
        }
    },
    pagination: '.swiper-pagination-h',
    
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + (labels[index])+ 
        '</div>';
         },
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
var swiperV = new Swiper('.swiper-container-v', {
    pagination: '.swiper-pagination-v',
    spaceBetween: 0,
    // nested: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
    }
});

// menu 
const t1 = new TimelineMax({
    paused: false
});

t1.to(".main-menu", 1, {
    right: "0%",
    ease: Expo.easeInOut,
    delay: .2,
});
t1.staggerFrom(".main-menu ul li", 1.2, {
    x: -100,
    opacity: 0,
    ease: Expo.easeOut
}, .2);
t1.to(".menu-sns .sns", .8, {
    right: "0%",
    ease: Expo.easeInOut,
    delay: .2,
});
t1.staggerFrom(".main-menu .menu-sns .fab", 1.2, {
    x: -100,
    opacity: 0,
    ease: Expo.easeOut
}, .2);
t1.reverse();

$(".menu_button").on("click", function (item) {
    t1.reversed(!t1.reversed());
});
$(".main-menu a").on("click", function (item) {
    t1.reversed(!t1.reversed());
});


var cursor = $(".cursor");
    

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY,
            }
        });
    }
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".swiper1 img").on("mouseenter", function() {
   
    cursor.addClass("active");
    

});

$(".swiper1 img").on("mouseleave", function() {
  
    cursor.removeClass("active");
    
});


var cursorba = $(".cursorba");


var posiX = 0,
posiY = 0,
mouseeX = 0,
mouseeY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
    posiX += (mouseeX - posiX) / 9;
    posiY += (mouseeY - posiY) / 9;


    TweenMax.set(cursorba, {
        css: {
            left: mouseeX,
            top: mouseeY
        }
    });
}
});

$(document).on("mousemove", function(e) {
mouseeX = e.pageX;
mouseeY = e.pageY;
});

$(".ba-innert").on("mouseenter", function() {
cursorba.addClass("active");

});

$(".ba-inner").on("mouseleave", function() {
cursorba.removeClass("active");

});
