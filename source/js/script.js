let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('slider__next').addEventListener('click', function(){
    offset += 175;
    sliderLine.styleless.left = -offset + 'px';
  });
