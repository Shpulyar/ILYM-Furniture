$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.metal__slide');
  const btnLeft = document.querySelector('.metal__btn--left');
  const btnRight = document.querySelector('.metal__btn--right');
  const dotContainer = document.querySelector('.metal__dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="metal__dots-dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.metal__dots-dot')
      .forEach(dot => dot.classList.remove('metal__dots-dot--active'));

    document
      .querySelector(`.metal__dots-dot[data-slide="${slide}"]`)
      .classList.add('metal__dots-dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('metal__dots-dot')) {
      const {
        slide
      } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();



// let a = document.getElementById('a');
// let bear = document.querySelector('.bear');
// console.log(bear);

const audio = new Audio();
audio.src = "./audio/click.wav";

const audioClick = new Audio();
audio.src = "./audio/bear-roar.wav";




