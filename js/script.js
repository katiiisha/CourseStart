const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    loopedSlides: 3,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 7,
    spaceBetween: 20,
    slidesPerGroup: 3,
    centeredSlides: true, 
    
  
}); 

