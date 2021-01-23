document.addEventListener('DOMContentLoaded', function () {
    initMenu();

    initSwipers();
});

function initSwipers() {
    const swiper = new Swiper('.swiper-illustrator', {
        pagination: '.swiper-pagination',
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
            1280: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
    console.log(swiper);
}

function initMenu() {
    let menuBtn = document.getElementById('menuBtn');
    let menu = document.getElementById('menu');

    menuBtn.addEventListener('click', ()=> {
        menu.classList.toggle("hidden");
    })
}