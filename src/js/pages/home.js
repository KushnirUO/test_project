

export const initHome = () => {
    new Swiper('.swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true,
            },
            666: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    })
}