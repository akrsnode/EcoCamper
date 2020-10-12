//Settings
let stageTime = 5000;


//App
let sliderItems = document.querySelectorAll('.product__slider__stage__item');
console.log(sliderItems);
let curIndex = 0;

const changeSlide = () => {
    if(curIndex >= sliderItems.length - 1) curIndex = 0
    sliderItems[curIndex].classList.toggle('nodis');
    if(curIndex >= sliderItems.length - 1) curIndex = 0
    sliderItems[curIndex + 1].classList.toggle('nodis');
    curIndex++;
}
setInterval(changeSlide, stageTime);
