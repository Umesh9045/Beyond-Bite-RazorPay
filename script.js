

var swiper = new Swiper('.swiper', {
    slidesPerView: 3,  // Show 3 images on Desktop
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500, // 2.5 seconds per slide
        disableOnInteraction: false, // Continue autoplay even after user interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },   // Show 1 image on Mobile
        768: { slidesPerView: 2 }, // Show 2 images on Tablets
        1024: { slidesPerView: 3 } // Show 3 images on Desktop
    }
});

var ingredientsSwiper = new Swiper('.ingredients-swiper', {
    slidesPerView: 3,  // Show 3 images on Desktop
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500, // 2.5 seconds per slide
        disableOnInteraction: false, // Keeps autoplay even after user swipes
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },   // Show 1 image on Mobile
        768: { slidesPerView: 2 }, // Show 2 images on Tablets
        1024: { slidesPerView: 3 } // Show 3 images on Desktop
    }
});


function showPaymentOptions() {
    document.getElementById('paymentBox').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function hidePaymentOptions() {
    document.getElementById('paymentBox').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function payCOD() {
    window.open('https://wa.me/message/V5PA4DEGARK7P1', '_blank');
}