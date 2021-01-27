document.addEventListener('DOMContentLoaded', function () {
    initMenu();

    initSwipers();
});

function initSwipers() {
    const swiperAbout = new Swiper('.swiper-about', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-about',
            bulletActiveClass: 'opacity-100'
        },
        navigation: {
            nextEl: 'swiper-button-next-about',
            prevEl: 'swiper-button-prev-about'
        }
    })

    const swiperIllustrator = new Swiper('.swiper-illustrator', {
        pagination: {
            el: '.swiper-pagination-illustrator',
            bulletActiveClass: 'opacity-100'
        },
        navigation: {
            nextEl: 'swiper-button-next-about',
            prevEl: 'swiper-button-prev-illustrator'
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 2, 
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    });

    // const swiperIllustrator = new Swiper('.swiper-illustrator', {
    //     pagination: '.swiper-pagination-illustrator',
    //     navigation: {
    //         nextEl: 'swiper-button-next-about',
    //         prevEl: 'swiper-button-prev-illustrator'
    //     },
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2, 
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //             spaceBetween: 20
    //         },
    //         1280: {
    //             slidesPerView: 4,
    //             spaceBetween: 30
    //         }
    //     }
    // });

    // const swiperIllustrator = new Swiper('.swiper-illustrator', {
    //     pagination: '.swiper-pagination-illustrator',
    //     navigation: {
    //         nextEl: 'swiper-button-next-about',
    //         prevEl: 'swiper-button-prev-illustrator'
    //     },
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2, 
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //             spaceBetween: 20
    //         },
    //         1280: {
    //             slidesPerView: 4,
    //             spaceBetween: 30
    //         }
    //     }
    // });

    // const swiperIllustrator = new Swiper('.swiper-illustrator', {
    //     pagination: '.swiper-pagination-illustrator',
    //     navigation: {
    //         nextEl: 'swiper-button-next-about',
    //         prevEl: 'swiper-button-prev-illustrator'
    //     },
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2, 
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //             spaceBetween: 20
    //         },
    //         1280: {
    //             slidesPerView: 4,
    //             spaceBetween: 30
    //         }
    //     }
    // });
    
}

function initMenu() {
    let menuBtn = document.getElementById('menuBtn');
    let menu = document.getElementById('menu');

    menuBtn.addEventListener('click', ()=> {
        menu.classList.toggle("hidden");
    })
}