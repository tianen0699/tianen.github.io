let data = {
    about: [
        {
            title: "About Me",
            link: "https://www.youtube.com/embed/tY4A_ScrWVo",
        }
    ],
    illustrator: [
        {
            title: "Mascot for a Diploma - School Project",
            description: "This project was to create a mascot for a diploma (multimedia and infocomm technology) I used Adobe Illustrator to create my mascot which is an otter.",
            image: "image/illustrator/07_185011R_TianEn_M8_Assignment 1.jpg",
            video: false,
        },
        {
            title: "100m Race - School Project",
            description: "This animation is about how 2 classmates ended up being friends after a 100m race. The characters were made on Adobe Illustrator and animated on Adobe Animate.",
            image: "image/illustrator/100m.webp",
            video: true,
            link: "https://www.youtube.com/embed/LC86GqiSRos",
        },
        {
            title: "Illustration of Me",
            description: "I did this for my portfolio website using Adobe Illustrator",
            image: "image/illustrator/me.png",
            video: false,
        },
    ],
    photoshop: [
        {
            title: "Travelogue Poster - School Project",
            description: "I went to Singapore’s tourist attractions to take pictures, then took some components from each picture to make this poster.",
            image: "image/photoshop/7_185011R_KohTianEn_M8_Proj_RGB.jpg",
            video: false,
        },
    ],
    premierePro: [
        {
            title: "The Affair - School Project",
            description: "This animation is about an affair that happened between the chess pieces of the different kingdoms. I used Cinema 4D to make the 3d models of the chess board and pieces. The animating part was also done in Cinema 4D, then to premier pro to add in the background music, subtitles and to combine all the scenes together.",
            image: "image/premierepro/theaffair.webp",
            video: true,
            link: "https://www.youtube.com/embed/a5R3pDMLIDI"
        },
        {
            title: "To dad (A short film) - School Project",
            description: "This is a short film that I filmed with my group mates. It is about a father who would do anything for this daughter.",
            image: "image/premierepro/todad.webp",
            video: true,
            link: "https://www.youtube.com/embed/F7luliId590"
        },
        {
            title: "Travelogue Video - School Project",
            description: "To make this video, I went around in Singapore, mainly the attractions to take video. This video is to show how beautiful Singapore is.",
            image: "image/premierepro/sgattraction.webp",
            video: true,
            link: "https://www.youtube.com/embed/BIQ8SwmoA38"
        },
    ],
    c4d: [
        {
            title: "The Affair - School Project",
            description: "This animation is about an affair that happened between the chess pieces of the different kingdoms. I used Cinema 4D to make the 3d models of the chess board and pieces. The animating part was also done in Cinema 4D, then to premier pro to add in the background music, subtitles and to combine all the scenes together.",
            image: "image/c4d/theaffair.webp",
            video: true,
        },
    ]
}

document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initPortfolio();
    initSwipers();
});

function initPortfolio() {
    let aboutCon = document.getElementById("swiper-wrapper-about");
    let illustratorCon = document.getElementById("swiper-wrapper-illustrator");
    let photoshopCon = document.getElementById("swiper-wrapper-photoshop");
    let premiereProCon = document.getElementById("swiper-wrapper-premierepro");
    let c4dCon = document.getElementById("swiper-wrapper-c4d");

    let count = 0;
    let toAppend = "";

    data.about.forEach(x => {
        toAppend += `
        <div class="swiper-slide relative" onclick="showModal('0-${count}')">
            <div class="h-full bg-gray-500 w-full">
            <iframe id="modalVid" src="${x.link}" frameborder="0" class="w-full h-full object-cover"></iframe>
            </div>
        </div>
        `;
        count++;
    })
    aboutCon.innerHTML = toAppend;

    toAppend = ""; count = 0;
    data.illustrator.forEach(x => {
        toAppend += `
        <div class="swiper-slide" onclick="showModal('0-${count}')">
            <div class="h-72 bg-gray-500 w-full relative">
                <img src="${x.image}" alt=${x.title}" class="h-full w-full object-cover">
                <p class="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 text-center">${x.title}</p>
            </div>
        </div>
        `;
        count++;
    })
    illustratorCon.innerHTML = toAppend;

    toAppend = ""; count = 0;
    data.photoshop.forEach(x => {
        toAppend += `
        <div class="swiper-slide" onclick="showModal('1-${count}')">
            <div class="h-72 bg-gray-500 w-full relative">
                <img src="${x.image}" alt=${x.title}" class="h-full w-full object-cover">
                <p class="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 text-center">${x.title}</p>
            </div>
        </div>
        `;
        count++;
    })
    photoshopCon.innerHTML = toAppend;

    toAppend = ""; count = 0;
    data.premierePro.forEach(x => {
        toAppend += `
        <div class="swiper-slide" onclick="showModal('2-${count}')">
            <div class="h-72 bg-gray-500 w-full relative">
                <img src="${x.image}" alt=${x.title}" class="h-full w-full object-cover">
                <p class="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 text-center">${x.title}</p>
            </div>
        </div>
        `;
        count++;
    })
    premiereProCon.innerHTML = toAppend;

    toAppend = ""; count = 0;
    data.c4d.forEach(x => {
        toAppend += `
        <div class="swiper-slide" onclick="showModal('3-${count}')">
            <div class="h-72 bg-gray-500 w-full relative">
                <img src="${x.image}" alt=${x.title}" class="h-full w-full object-cover">
                <p class="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 text-center">${x.title}</p>
            </div>
        </div>
        `;
        count++;
    })
    c4dCon.innerHTML = toAppend;

    toAppend = ""; count = 0;

}

function initSwipers() {
    const swiperAbout = new Swiper('.swiper-about', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-about',
            bulletActiveClass: 'opacity-100'
        },
        navigation: {
            nextEl: '.swiper-button-next-about',
            prevEl: '.swiper-button-prev-about'
        },
        watchOverflow: true,
        observer: true, 
        observeParents: true
    })

    const swiperIllustrator = new Swiper('.swiper-illustrator', {
        pagination: {
            el: '.swiper-pagination-illustrator',
            bulletActiveClass: 'opacity-100'
        },
        navigation: {
            nextEl: '.swiper-button-next-illustrator',
            prevEl: '.swiper-button-prev-illustrator'
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
        },
        watchOverflow: true,
        observer: true, 
        observeParents: true
    });

    const swiperPhotoshop = new Swiper('.swiper-photoshop', {
        pagination: {
            el: '.swiper-pagination-photoshop',
            bulletActiveClass: 'opacity-100'
        },
        navigation: {
            nextEl: '.swiper-button-next-photoshop',
            prevEl: '.swiper-button-prev-photoshop'
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
        },
        watchOverflow: true,
        observer: true, 
        observeParents: true
    });

    const swiperPremierepro = new Swiper('.swiper-premierepro', {
        pagination: {
            el: '.swiper-pagination-premierepro',
            bulletActiveClass: 'opacity-100'
        },
        navigation: {
            nextEl: '.swiper-button-next-premierepro',
            prevEl: '.swiper-button-prev-premierepro'
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
        },
        watchOverflow: true,
        observer: true, 
        observeParents: true
    });
    
    const swiperc4d = new Swiper('.swiper-c4d', {
        pagination: {
            el: '.swiper-pagination-c4d',
            bulletActiveClass: 'opacity-100'
        },
        navigation: {
            nextEl: '.swiper-button-next-c4d',
            prevEl: '.swiper-button-prev-c4d'
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
        },
        watchOverflow: true,
        observer: true, 
        observeParents: true
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
    let type = x.charAt(0);
    let content = x.charAt(x.length-1);

    let temp = {};
    if (type == 0) temp = data.illustrator[content];
    else if (type == 1) temp = data.photoshop[content];
    else if (type == 2) temp = data.premierePro[content];
    else if (type == 3) temp = data.c4d[content];

    console.log(temp);

    let modal = getModal();
    let title = document.getElementById('modalTitle');
    let description = document.getElementById('modalDescription');
    let image = document.getElementById('modalImg');
    let video = document.getElementById('modalVid');

    title.innerHTML = temp.title;
    description.innerHTML = temp.description;
    
    if (temp.video) {
        video.src = temp.link;
        image.classList.add("hidden");
        video.classList.remove("hidden");
    }
    else {
        image.src = temp.image;
        image.classList.remove("hidden");
        video.classList.add("hidden");
    }
    modal.classList.toggle("hidden");
}

function hideModal() {
    let modal = getModal();
    modal.classList.toggle("hidden");
}

function getModal() {
    return document.getElementById('modal');
}

function sendForm(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let enquiry = document.getElementById("enquiry").value;
    let message = document.getElementById('message').value;

    // console.log(`
    //     name: ${name} <br>
    //     email: ${email} <br>
    //     subject: ${subject} <br>
    //     enquiry: ${enquiry} <br>
    //     message: ${message}
    // `);



    Email.send({
        SecureToken: "d806f3f2-c93f-4efc-b2e7-5a828f022f52",
        To: "tianen0699@gmail.com",
        From: "tianen0699@gmail.com",
        Subject: "tianen.github.io | New Contact Form - " + name,
        Body: `
            ===== <br>
            Name: ${name}<br>
            Email: ${email}<br><br>
    
            Subject: ${subject}<br>
            Enquiry Type: ${enquiry}<br><br?
    
            Message: ${message}<br>
        `
        }).then(
            message => alert("Sent! I will get back to you speedy quick.")
        )
            
    return false;
}