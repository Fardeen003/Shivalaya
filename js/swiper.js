document.addEventListener("DOMContentLoaded", function () {

    const swiperSettings ={
            slidesPerView: 1,         // Number of slides visible at once
            spaceBetween: 10,         // Space between slides
            loop: true,               // Infinite loop
            pagination: {
              el: ".swiper-pagination", // Enable pagination
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next", // Enable navigation buttons
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay: 3000, // Autoplay interval (3 seconds)
            },
          };
    const swiper = new Swiper(".mySwiper", {
        ...swiperSettings, }
          );
    const homeProjects = new Swiper(".homeProjects", {
        ...swiperSettings,
      // slidesPerView: 3,         // Number of slides visible at once
      spaceBetween: 20,         // Space between slides
      pagination: {
        el: ".swiper-pagination", // Enable pagination
        clickable: true,
        // dynamicBullets:true,
        // dynamicMainBullets:1,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
    });

    const homeTestimonials = new Swiper(".homeTestimonial_swiper", {
      ...swiperSettings,
      loop: true, 
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // Keeps autoplay after interaction
      },
      // slidesPerView: 1.8,
      spaceBetween: 20,
      centeredSlides: true,
      breakpoints:{
        640:{
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        768:{
          slidesPerView: 1.5,
          spaceBetween: 20, 
        },
        1024:{
          slidesPerView: 2,
          spaceBetween: 25,
        }

      }
    });

    const homeBlogs = new Swiper(".homeBlogs_swiper", {
    ...swiperSettings,
    // slidesPerView: 4,    
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },     // Number of slides visible at once
    })
  // Initialize Swiper
// Initialize Swiper
   const modalSlider = new Swiper('.modalSlider_swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.forward-btn', // Correct forward button
    prevEl: '.back-btn',   // Correct back button
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  
   });



//   const homeNews = new Swiper(".homeEmpanelment_swiper", {
//     slidesPerView: 1,         // Number of slides visible at once
//     spaceBetween: 10,         // Space between slides
//     loop: true,               // Infinite loop
//     pagination: {
//       el: ".swiper-pagination", // Enable pagination
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next", // Enable navigation buttons
//       prevEl: ".swiper-button-prev",
//     },
//     autoplay: {
//       delay: 3000, // Autoplay interval (3 seconds)
//     },
//     modules: [Swiper.Grid],    // Correct use of Grid module
//     grid: {
//       rows: 2,                 // Number of rows in the grid
//       fill: "row",             // Fill the grid by row
//     },
//   });


});