
// Initialize all Swipers
document.addEventListener('DOMContentLoaded', function () {



    var giftHampersSwiper = new Swiper(".giftHampersSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        dots: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     enabled: false,  // Add this line to hide the pagination
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        // Optional: Add autoplay
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // Optional: Add responsive breakpoints
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    // Gift Hampers Swiper
    // const giftHampersSwiper = new Swiper('.giftHampersSwiper', {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     loop: true,

    //     autoplay: {
    //         delay: 1000,

    //     },
    // });

    // Bags Swiper
    var bagsSwiper = new Swiper(".bagsSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        dots: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     enabled: false,  // Add this line to hide the pagination
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        // Optional: Add autoplay
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // Optional: Add responsive breakpoints
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });



    let bagsTab = document.getElementById('bags-tab');

    bagsTab.addEventListener('click', () => {
        // Fix the selector - it should be 'bagsSwiper' not 'bagsSwipe'
        let bagSwiper = document.querySelector('.bagsSwiper');

        // The active/show classes should be added to the tab-pane, not the swiper
        let bagsPane = document.getElementById('bags');
        bagsPane.classList.add('active');
        bagsPane.classList.add('show');

        // Optional: Reinitialize the swiper when tab is clicked
        if (bagSwiper.swiper) {
            bagSwiper.swiper.update();
        }
    });

    // Initialize other Swipers similarly

    var electronicsswiper = new Swiper(".electronicsswiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        dots: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     enabled: false,  // Add this line to hide the pagination
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        // Optional: Add autoplay
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // Optional: Add responsive breakpoints
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });


    // const electronicsswiper = new Swiper('.electronicsswiper', {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     loop: true,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    // });


    let electronicsTab = document.getElementById('electronics-tab');

    electronicsTab.addEventListener('click', () => {

        let electronics = document.querySelector('.electronicsswiper');

        electronics.classList.add('active');
        electronics.classList.add('show');

        if (electronics.swiper) {
            electronics.swiper.update();
        }

    })

    // desktop swiper
    var desktopswiper = new Swiper(".desktopswiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        dots: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     enabled: false,  // Add this line to hide the pagination
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        // Optional: Add autoplay
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // Optional: Add responsive breakpoints
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });



    let desktoptab = document.getElementById("desktop-tab");
    desktoptab.addEventListener("click", () => {

        let desktopswiper = document.querySelector(".desktopswiper");
        desktopswiper.classList.add("active");
        desktopswiper.classList.add("show");
        if (desktopswiper.swiper) {
            desktopswiper.swiper.update();
        }

    })




    // const desktopswiper = new Swiper('.desktopswiper', {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     loop: true,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    // });


    // Bottles swiper initialization and tab handling
    var bottlesswiper = new Swiper(".bottlesswiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     enabled: false,  // Add this line to hide the pagination
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    let bottlestab = document.getElementById("bottles-tab");
    bottlestab.addEventListener("click", () => {
        // Get the bottles pane element
        let bottlesPane = document.getElementById("bottles");

        // Add active and show classes to the tab pane
        bottlesPane.classList.add("active");
        bottlesPane.classList.add("show");

        // Update the swiper
        if (bottlesswiper) {
            bottlesswiper.update();
        }
    });

    // const bottlesswiper = new Swiper('.bottlesswiper', {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     loop: true,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    // });


    // cloths swiper initialization and tab handling
    new Swiper(".clothsswiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     enabled: false,  // Add this line to hide the pagination
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });


    let clothstab = document.getElementById("cloths-tab");

    clothstab.addEventListener("click", () => {

        let clothsswiper = document.querySelector(".clothsswiper");


        let cloths = document.getElementById("cloths");
        cloths.classList.add("active");
        cloths.classList.add("show")

        if (clothsswiper.swiper) {
            clothsswiper.swiper.update()
        }




    })




});
