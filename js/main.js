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
            nextEl: 'swiper-button-next-illustrator',
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
}

function initMenu() {
    let menuBtn = document.getElementById('menuBtn');
    let menu = document.getElementById('menu');

    menuBtn.addEventListener('click', ()=> {
        menu.classList.toggle("hidden");
    })
}

function showModal(x) {
    console.log(x);
    let modal = getModal();
    let title = document.getElementById('modalTitle');
    let description = document.getElementById('modalDescription');

    title.innerHTML = "Lorem Ipsum";
    description.innerHTML = "Lorem Ipsum Dolor Sit Amet";
    modal.classList.toggle("hidden");
}

function hideModal() {
    let modal = getModal();
    modal.classList.toggle("hidden");
}

function getModal() {
    return document.getElementById('modal');
}