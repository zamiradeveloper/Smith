$(document).ready(function () {

    // Index page hero slider
    (function () {
        var productsSliders = document.querySelectorAll(".hero__slider");
        productsSliders.forEach(function (slider) {
        var productsSliderButtons = slider.querySelector(".swiper--hero + .swiper-buttons");
        var productsSlider = slider.querySelector(".swiper--hero");
        var buttonNext = productsSliderButtons.querySelector(".swiper-button-next");
        var buttonPrev = productsSliderButtons.querySelector(".swiper-button-prev");
        var pagination = productsSlider.querySelector(".swiper-pagination");
        var productsSwiper = new Swiper(productsSlider, {
            slidesPerView: 1,
            spaceBetween: 100,
            watchSlidesProgress: true,
            navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev
            },
            pagination: {
            el: pagination,
            clickable: true
            },
            breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 100
            }
            }
        });
        });
    })();


    // Index page about slider
    (function () {
        var productsSliders = document.querySelectorAll(".about__slider");
        productsSliders.forEach(function (slider) {
        var productsSliderButtons = slider.querySelector(".swiper--about + .swiper-buttons");
        var productsSlider = slider.querySelector(".swiper--about");
        var buttonNext = productsSliderButtons.querySelector(".swiper-button-next");
        var buttonPrev = productsSliderButtons.querySelector(".swiper-button-prev");
        var pagination = productsSlider.querySelector(".swiper-pagination");
        var productsSwiper = new Swiper(productsSlider, {
            slidesPerView: 1,
            spaceBetween: 100,
            watchSlidesProgress: true,
            navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev
            },
            pagination: {
            el: pagination,
            clickable: true
            },
            breakpoints: {
            
            1024: {
                slidesPerView: 1,
                spaceBetween: 100
            }
            }
        });
        });
    })();


    // Index page reviews slider
    (function () {
        var productsSliders = document.querySelectorAll(".reviews__slider");
        productsSliders.forEach(function (slider) {
        var productsSliderButtons = slider.querySelector(".swiper--reviews + .swiper-buttons");
        var productsSlider = slider.querySelector(".swiper--reviews");
        var buttonNext = productsSliderButtons.querySelector(".swiper-button-next");
        var buttonPrev = productsSliderButtons.querySelector(".swiper-button-prev");
        var pagination = productsSlider.querySelector(".swiper-pagination");
        var productsSwiper = new Swiper(productsSlider, {
            slidesPerView: 1,
            spaceBetween: 20,
            watchSlidesProgress: true,
            navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev
            },
            pagination: {
            el: pagination,
            clickable: true
            },
            breakpoints: {
            
            0: {
                slidesPerView: 1,
                spaceBetween: 100
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 100
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
            }
        });
        });
    })();


    // project_3d slider
    (function () {
        var productsSliders = document.querySelectorAll(".project_3d__slider");
        productsSliders.forEach(function (slider) {
        var productsSliderButtons = slider.querySelector(".swiper--project_3d + .swiper-buttons");
        var productsSlider = slider.querySelector(".swiper--project_3d");
        var buttonNext = productsSliderButtons.querySelector(".swiper-button-next");
        var buttonPrev = productsSliderButtons.querySelector(".swiper-button-prev");
        var pagination = productsSlider.querySelector(".swiper-pagination");
        var productsSwiper = new Swiper(productsSlider, {
            slidesPerView: 1,
            spaceBetween: 20,
            watchSlidesProgress: true,
            navigation: {
                nextEl: buttonNext,
                prevEl: buttonPrev
            },
            pagination: {
            el: pagination,
            clickable: true
            },
            breakpoints: {
            
            0: {
                slidesPerView: 1,
                spaceBetween: 100
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 100
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
            }
        });
        });
    })();



    // Index page neptun slider
    (function () {
        var productsSliders = document.querySelectorAll(".neptun__slider");
        productsSliders.forEach(function (slider) {
        var productsSliderButtons = slider.querySelector(".swiper--neptun + .swiper-buttons");
        var productsSlider = slider.querySelector(".swiper--neptun");
        var buttonNext = productsSliderButtons.querySelector(".swiper-button-next");
        var buttonPrev = productsSliderButtons.querySelector(".swiper-button-prev");
        var pagination = productsSlider.querySelector(".swiper-pagination");
        var productsSwiper = new Swiper(productsSlider, {
            slidesPerView: 1,
            spaceBetween: 20,
            watchSlidesProgress: true,
            navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev
            },
            pagination: {
            el: pagination,
            clickable: true
            },
            breakpoints: {
            
            0: {
                slidesPerView: 1,
                spaceBetween: 100
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 100
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            }
            }
        });
        });
    })();


    // Index page neptun_left slider
    (function () {
        var productsSliders = document.querySelectorAll(".neptun_l__slider");
        productsSliders.forEach(function (slider) {
        var productsSliderButtons = slider.querySelector(".swiper--neptun_l + .swiper-buttons");
        var productsSlider = slider.querySelector(".swiper--neptun_l");
        var buttonNext = productsSliderButtons.querySelector(".swiper-button-next");
        var buttonPrev = productsSliderButtons.querySelector(".swiper-button-prev");
        // var pagination = productsSlider.querySelector(".swiper-pagination");
        var productsSwiper = new Swiper(productsSlider, {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: 'vertical',
            watchSlidesProgress: true,
            navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev
            },
            // pagination: {
            // el: pagination,
            // clickable: true
            // },
            breakpoints: {
            
            0: {
                slidesPerView: 1,
                spaceBetween: 100,
                direction: 'horizontal',
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
                direction: 'horizontal',
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
                direction: 'horizontal',
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                direction: 'vertical',
            },
            1440: {
                slidesPerView: 5,
                spaceBetween: 20,
                direction: 'vertical',
            }
            }
        });
        });
    })();



    // FANCYBOX SECTION ABOUT
    if($('[data-fancybox]').length > 0)
    $('[data-fancybox]').fancybox({
        protect: true,
        buttons : [
        'zoom',
        'thumbs',
        'close'
        ]
    });
    
    
    $('[data-fancybox="watermark"]').fancybox({
        protect    : true,
        slideClass : 'watermark',
        toolbar    : false,
        smallBtn   : true
    });





    if ($(window).width() < 769){
        
        // advantages mobile slider
        (function () {
            var productsSliders = document.querySelectorAll(".advantages__slider");
            productsSliders.forEach(function (slider) {
            var productsSliderButtons = slider.querySelector(".swiper--advantages + .swiper-buttons");
            var productsSlider = slider.querySelector(".swiper--advantages");
            var buttonNext = productsSliderButtons.querySelector(".swiper-button-next");
            var buttonPrev = productsSliderButtons.querySelector(".swiper-button-prev");
            var pagination = productsSlider.querySelector(".swiper-pagination");
            var productsSwiper = new Swiper(productsSlider, {
                slidesPerView: 1,
                spaceBetween: 100,
                watchSlidesProgress: true,
                navigation: {
                nextEl: buttonNext,
                prevEl: buttonPrev
                },
                pagination: {
                el: pagination,
                clickable: true
                },
                breakpoints: {
                
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 100
                }
                }
            });
            });
        })(); 
        
        
        // equipment mobile slider
        (function () {
            var productsSliders = document.querySelectorAll(".equipment__slider");
            productsSliders.forEach(function (slider) {
            var productsSliderButtons = slider.querySelector(".swiper--equipment + .swiper-buttons");
            var productsSlider = slider.querySelector(".swiper--equipment");
            var buttonNext = productsSliderButtons.querySelector(".swiper-button-next");
            var buttonPrev = productsSliderButtons.querySelector(".swiper-button-prev");
            var pagination = productsSlider.querySelector(".swiper-pagination");
            var productsSwiper = new Swiper(productsSlider, {
                slidesPerView: 3,
                spaceBetween: 20,
                watchSlidesProgress: true,
                navigation: {
                nextEl: buttonNext,
                prevEl: buttonPrev
                },
                pagination: {
                el: pagination,
                clickable: true
                },
                breakpoints: {
                300: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                391: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                },
                577: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                }
            });
            });
        })();

    }


    // HEADER MENU
    let menuToggler = document.querySelector('.menu_bars a');
    menuToggler.addEventListener('click',function(e){
        e.preventDefault();
        this.classList.toggle('active');
        document.querySelector('.h_menu_mob').classList.toggle('show');
        document.querySelector('.overlay').classList.toggle('show');
    })




    // TAB GALLERY PROJECTS
    let tabHeaderLinkOne = document.querySelectorAll('.neptun_block_left a');
    tabHeaderLinkOne.forEach(function(v,i,a){
        v.addEventListener('click', function(e){
            e.preventDefault();

            // clear other links
            tabHeaderLinkOne.forEach(function(v,i,a){
            v.classList.remove('active');
        })
        this.classList.toggle('active');

        // clear other tab bodies
        let allTabItems = document.querySelectorAll('.neptun_block_right');
        allTabItems.forEach(function(v,i,a){
            v.classList.remove('show');
        })
        let target = this.getAttribute('href');
        document.querySelector(target).classList.add('show')
        })
    })



//   INPUT MASK
    let inputMask = document.querySelector('#tel');
    // if(inputMask)
    $('#tel').inputmask("+7 (999) 999-99-99");


});