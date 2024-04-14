var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 150,
    grabCursor: true,
    loop: false,
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
})