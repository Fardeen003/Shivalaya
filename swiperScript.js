
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,            // Number of slides visible at once
    spaceBetween: 10,            // Space between slides
    loop: true,                  // Infinite loop
    autoplay: {                  // Autoplay configuration
      delay: 2500,               // Delay between slides (in ms)
      disableOnInteraction: false,
    },
    pagination: {                // Pagination configuration
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {                // Navigation buttons
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
