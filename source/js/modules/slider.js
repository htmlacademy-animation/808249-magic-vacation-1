import Swiper from "swiper";

export default () => {
  let storySlider;
  let sliderContainer = document.getElementById(`story`);
  sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;

  const setSlider = function () {
    const body = document.body;
    if (window.innerWidth / window.innerHeight < 1 || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`,
        },
        keyboard: {
          enabled: true,
        },
        on: {
          slideChange: () => {
            if (
              storySlider.activeIndex === 0 ||
              storySlider.activeIndex === 1
            ) {
              if (body.classList.contains(`slide-two`)) {
                body.classList.remove(`slide-two`);
              }
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
            } else if (
              storySlider.activeIndex === 2 ||
              storySlider.activeIndex === 3
            ) {
              if (!body.classList.contains(`slide-two`)) {
                body.classList.remove(`slide-three`, `slide-four`);
                body.classList.add(`slide-two`);
              }
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg"), linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`;
            } else if (
              storySlider.activeIndex === 4 ||
              storySlider.activeIndex === 5
            ) {
              if (!body.classList.contains(`slide-three`)) {
                body.classList.remove(`slide-two`, `slide-four`);
                body.classList.add(`slide-three`);
              }
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg"), linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`;
            } else if (
              storySlider.activeIndex === 6 ||
              storySlider.activeIndex === 7
            ) {
              if (!body.classList.contains(`slide-four`)) {
                body.classList.remove(`slide-two`, `slide-three`);
                body.classList.add(`slide-four`);
              }
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg"), linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`;
            }
          },
          resize: () => {
            storySlider.update();
          },
        },
        observer: true,
        observeParents: true,
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`,
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true,
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0) {
              if (body.classList.contains(`slide-two`)) {
                body.classList.remove(`slide-two`);
              }
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg")`;
            } else if (storySlider.activeIndex === 2) {
              if (!body.classList.contains(`slide-two`)) {
                body.classList.remove(`slide-three`, `slide-four`);
                body.classList.add(`slide-two`);
              }
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg")`;
            } else if (storySlider.activeIndex === 4) {
              if (!body.classList.contains(`slide-three`)) {
                body.classList.remove(`slide-two`, `slide-four`);
                body.classList.add(`slide-three`);
              }
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg")`;
            } else if (storySlider.activeIndex === 6) {
              if (!body.classList.contains(`slide-four`)) {
                body.classList.remove(`slide-two`, `slide-three`);
                body.classList.add(`slide-four`);
              }
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg")`;
            }
          },
          resize: () => {
            storySlider.update();
          },
        },
        observer: true,
        observeParents: true,
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    setSlider();
  });

  setSlider();
};
