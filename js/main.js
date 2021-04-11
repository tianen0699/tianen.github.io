let data = {
    about: [
        {
            title: "About Me",
            link: "https://www.youtube.com/embed/tY4A_ScrWVo",
        },
    ],
    works: [
        // 0 - illustrations
        [
            {
                title: "Mascot for a Diploma - School Project",
                description: "This project was to create a mascot for a diploma (multimedia and infocomm technology) I used Adobe Illustrator to create my mascot which is an otter.",
                image: "image/illustrator/07_185011R_TianEn_M8_Assignment 1.jpg",
                video: false,
            },
            {
                title: "Illustration of Me",
                description: "I did this for my portfolio website using Adobe Illustrator.",
                image: "image/illustrator/me.png",
                video: false,
            },
        ],
        // 1 - designs
        [
            {
                title: "Brand Kit - School Project",
                description: "This was for a project that requires me to design a brand kit for a makeshift company.",
                image: "image/illustrator/Brand_kit.png",
                video: false,
            },
        ],
        // 2 - animations
        [
            {
                title: "100m Race - School Project",
                description: "This animation is about how 2 classmates ended up being friends after a 100m race. The characters were made on Adobe Illustrator and animated on Adobe Animate.",
                image: "image/illustrator/100m.webp",
                video: true,
                link: "https://www.youtube.com/embed/LC86GqiSRos",
            },
            {
                title: "The Affair - School Project",
                description: "This animation is about an affair that happened between the chess pieces of the different kingdoms. I used Cinema 4D to make the 3d models of the chess board and pieces. The animating part was also done in Cinema 4D, then to premier pro to add in the background music, subtitles and to combine all the scenes together.",
                image: "image/premierepro/theaffair.webp",
                video: true,
                link: "https://www.youtube.com/embed/a5R3pDMLIDI"
            },
        ],
        // 3 - clips
        [
            {
                title: "A day in my life during COVID - School Project",
                description: "To make this video, I took videos of my daily life during COVID and put them together",
                image: "image/premierepro/adayinmylifeduringcovid.webp",
                video: true,
                link: "https://youtube.com/embed/SZbfLqgaCYo"
            },
        ],
        // 4 - others
        [

        ]
    ],
    // illustrator: [
    //     {
    //         title: "Mascot for a Diploma - School Project",
    //         description: "This project was to create a mascot for a diploma (multimedia and infocomm technology) I used Adobe Illustrator to create my mascot which is an otter.",
    //         image: "image/illustrator/07_185011R_TianEn_M8_Assignment 1.jpg",
    //         video: false,
    //     },
    //     {
    //         title: "100m Race - School Project",
    //         description: "This animation is about how 2 classmates ended up being friends after a 100m race. The characters were made on Adobe Illustrator and animated on Adobe Animate.",
    //         image: "image/illustrator/100m.webp",
    //         video: true,
    //         link: "https://www.youtube.com/embed/LC86GqiSRos",
    //     },
    //     {
    //         title: "Illustration of Me",
    //         description: "I did this for my portfolio website using Adobe Illustrator.",
    //         image: "image/illustrator/me.png",
    //         video: false,
    //     },
    //     {
    //         title: "Brand Kit - School Project",
    //         description: "This was for a project that requires me to design a brand kit for a makeshift company.",
    //         image: "image/illustrator/Brand_kit.png",
    //         video: false,
    //     },
    // ],
    // photoshop: [
    //     {
    //         title: "Travelogue Poster - School Project",
    //         description: "I went to Singapore’s tourist attractions to take pictures, then took some components from each picture to make this poster.",
    //         image: "image/photoshop/7_185011R_KohTianEn_M8_Proj_RGB.jpg",
    //         video: false,
    //     },
    // ],
    // premierePro: [
    //     {
    //         title: "The Affair - School Project",
    //         description: "This animation is about an affair that happened between the chess pieces of the different kingdoms. I used Cinema 4D to make the 3d models of the chess board and pieces. The animating part was also done in Cinema 4D, then to premier pro to add in the background music, subtitles and to combine all the scenes together.",
    //         image: "image/premierepro/theaffair.webp",
    //         video: true,
    //         link: "https://www.youtube.com/embed/a5R3pDMLIDI"
    //     },
    //     {
    //         title: "To dad (A short film) - School Project",
    //         description: "This is a short film that I filmed with my group mates. It is about a father who would do anything for this daughter.",
    //         image: "image/premierepro/todad.webp",
    //         video: true,
    //         link: "https://www.youtube.com/embed/F7luliId590"
    //     },
    //     {
    //         title: "A day in my life during COVID - School Project",
    //         description: "To make this video, I took videos of my daily life during COVID and put them together",
    //         image: "image/premierepro/adayinmylifeduringcovid.webp",
    //         video: true,
    //         link: "https://youtube.com/embed/SZbfLqgaCYo"
    //     },
    // ],
    // c4d: [
    //     {
    //         title: "The Affair - School Project",
    //         description: "This animation is about an affair that happened between the chess pieces of the different kingdoms. I used Cinema 4D to make the 3d models of the chess board and pieces. The animating part was also done in Cinema 4D, then to premier pro to add in the background music, subtitles and to combine all the scenes together.",
    //         image: "image/c4d/theaffair.webp",
    //         video: true,
    //         link: "https://www.youtube.com/embed/a5R3pDMLIDI"
    //     },
    // ]
}

document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initPortfolio();
    initSwipers();
    initWorks(0);
});

function initWorks(type) {
    let worksCon = document.getElementById("worksCon");
    /*
        types:
        0 = illustrator;
        1 = designs;
        2 = animations;
        3 = clips;
        4 = others;
    */

    let btnArr = ["illusBtn", "designsBtn", "animsBtn", "clipsBtn", "othersBtn"];
    btnArr.forEach((e, i) => {
        let btn = document.getElementById(e);
        if (i == type) {
            btn.classList.remove("border-transparent");
            btn.classList.add("border-gray-700");
        }
        else {
            btn.classList.remove("border-gray-700");
            btn.classList.add("border-transparent");
        }
            

    })
    

    let works = data.works[type];
    let toAppend = "";
    console.log(works);
    works.forEach((x, i) => {
        toAppend += `
        <div class="cursor-pointer customHover shadow-md rounded-md" onclick="showModal('${type}-${i}')">
            <div class="h-72 bg-gray-500 w-full relative rounded-md">
                <img src="${x.image}" alt=${x.title}" class="h-full w-full object-cover rounded-md">
                <p class="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 text-center flex justify-center items-center rounded-md">${x.title}</p>
            </div>
        </div>
        `
    })
    worksCon.innerHTML = toAppend;

    
    // toAppend = ""; count = 0;
    // data.illustrator.forEach(x => {
    //     toAppend += `
        // <div class="swiper-slide cursor-pointer customHover" onclick="showModal('0-${count}')">
        //     <div class="h-72 bg-gray-500 w-full relative">
        //         <img src="${x.image}" alt=${x.title}" class="h-full w-full object-cover">
        //         <p class="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 text-center flex justify-center items-center">${x.title}</p>
        //     </div>
        // </div>
    //     `;
    //     count++;
    // })
    // illustratorCon.innerHTML = toAppend;

    // toAppend = ""; count = 0;
}

function initPortfolio() {

    let aboutCon = document.getElementById("swiper-wrapper-about");

    let count = 0;
    let toAppend = "";

    // console.log(data.about);
    data.about.forEach(x => {
        toAppend += `
        <div class="swiper-slide">
            <div class="h-full bg-gray-500 w-full">
            <iframe src="${x.link}" frameborder="0" allowfullscreen class="w-full h-full block"></iframe>
            </div>
        </div>
        `;
        count++;
    })
    aboutCon.innerHTML = toAppend;

}

function initSwipers() {
    const swiperAbout = new Swiper('.swiper-about', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-about',
            bulletActiveClass: 'opacity-100 bg-custom'
        },
        navigation: {
            nextEl: '.swiper-button-next-about',
            prevEl: '.swiper-button-prev-about'
        },
        watchOverflow: true,
    })
}

function initMenu() {
    let menuBtn = document.getElementById('menuBtn');
    let menu = document.getElementById('menu');

    menuBtn.addEventListener('click', ()=> {
        menu.classList.toggle("hidden");
    })
}

function showModal(x) {
    let work = data.works[x.charAt(0)][x.charAt(x.length-1)];
    console.log(work);

    let modal = getModal();
    let title = document.getElementById('modalTitle');
    let description = document.getElementById('modalDescription');
    let image = document.getElementById('modalImg');
    let video = document.getElementById('modalVid');

    title.innerHTML = work.title;
    description.innerHTML = work.description;

    video.src += ' ';
    if (work.video) {
        video.src = work.link;
        image.classList.add("hidden");
        video.classList.remove("hidden");
    }
    else {
        image.src = work.image;
        image.classList.remove("hidden");
        video.classList.add("hidden");
    }
    modal.classList.toggle("hidden");
}

function hideModal() {
    let video = document.getElementById('modalVid');
    video.src = " ";
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
    let msg = document.getElementById('message').value;

    // console.log(`
    //     name: ${name} <br>
    //     email: ${email} <br>
    //     subject: ${subject} <br>
    //     enquiry: ${enquiry} <br>
    //     message: ${message}
    // `);


    console.log(msg);
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
            Enquiry Type: ${enquiry}<br><br>
    
            Message: ${msg}<br>
        `
        }).then(
            message => alert("Sent! I will get back to you speedy quick.")
        )
            
    return false;
}