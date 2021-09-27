

var swiper = new Swiper('.s1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 500,
    
  
    // If we need pagination
    pagination: {
        el: '.p1',
        type: 'bullets',
        clickable : 'true',
        bulletClass :'swiper-pagination-bullet uno'
        
      },
  
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      
    },
    autoplay: {
        delay: 4000,
      }
  });
  
  //swiper para equipos

  var swiper = new Swiper(".s2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.p2',
      type: 'bullets',
      clickable : 'true',
      bulletClass :'swiper-pagination-bullet dos'
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });