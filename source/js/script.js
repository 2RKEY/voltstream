const images = document.querySelectorAll('.slider__wrapper .slider__line img');
const sliderLine = document.querySelector('.slider__wrapper .slider__line');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.slider__wrapper').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
  });
  rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider__prev').addEventListener('click', function() {
  count--;
  if (count < 0) {
      count = images.length - 1;
  }
  rollSlider();
});

document.querySelector('.slider__next').addEventListener('click', function() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width +'px)';
}
