var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 3000,
      disableOnIteration: false,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      540: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      840: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
    },
  });

  // Progress Bar

  let scrollPercentage = () => {
    let scrollProgress = document.getElementById('progress');
    let progress = document.getElementById('progress-value');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#689af8 ${scrollValue}%, #2b2f38 ${scrollValue}%)`
    progress.innerHTML = `${scrollValue}%`
    console.log(scrollValue)
  }

  window.onscroll = scrollPercentage;
  window.onload = scrollPercentage;


  // AOS
  AOS.init();