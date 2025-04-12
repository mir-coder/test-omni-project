class SwiperSlider {
    constructor(selector, options) {
        this.swiper = new Swiper(selector, options);
    }
}

export class MySwiper extends SwiperSlider {
    constructor() {
        const options = {
            slidesPerView: 2,
            spaceBetween: 18,
            loop:true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                767: { slidesPerView: 2 },
                992: { 
                    slidesPerView: 2,
                    spaceBetween: 10,
                 },
                1280: { 
                    slidesPerView: 2,
                    spaceBetween: 18,
                }
            },
        };
        super(".mySwiper", options);
    }
}

export class MySwiperTwo extends SwiperSlider {
    constructor() {
        const options = {
            slidesPerView: 3,
            spaceBetween: 20,
            loop:true,
            breakpoints: {
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                767: { slidesPerView: 3 },
                992: { 
                    slidesPerView: 3,
                    spaceBetween: 10,
                 },
                1280: { 
                    slidesPerView: 3,
                    spaceBetween: 10,
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        };
        super(".mySwiperTwo", options);
    }
}



