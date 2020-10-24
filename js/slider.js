//Settings
let stageTime = 5000;


//App

let sliderItems = document.querySelectorAll('#slider-item');
let stackable = document.getElementById('slider').getAttribute('data-stackable');
let navigate = document.getElementById('slider').getAttribute('data-nav');

let slideIndex = 0;
let stageQuantity = 1;

const changeSlide = (ind) => {
	for(let i = 0; i < stageQuantity; i++) {
		ind += i;
		if(ind >= sliderItems.length) ind = 0;
		sliderItems[ind].classList.remove('nodis');
	}
};

const clearSlide = () => {
	sliderItems.forEach(elem => elem.classList.add('nodis'));
};

const runSlider = () => {
	clearSlide();
	changeSlide(slideIndex++);
};

slideInterval = setInterval(runSlider, stageTime);

//Add nav buttons

const addButtons = () => {
	let sliderBtn = document.getElementById('slider-nav-btn');
	for(let i = 1; i < sliderItems.length; i++) {
		document.getElementById('slider-nav').appendChild(sliderBtn.cloneNode(true))
	}
}

//Stage quantity
const setStageQuantity = function() {
	clearSlide();
	if(this.innerWidth >= 1200) stageQuantity = 3;
	else if(this.innerWidth >= 768) stageQuantity = 2;
	else stageQuantity  = 1;
	changeSlide(slideIndex);
}

//Render
if(stackable == "true") {
	setStageQuantity();
	window.addEventListener('resize', setStageQuantity);
};

if(navigate == "true") {
	addButtons();
	document.querySelectorAll('#slider-nav-btn').forEach((item, index) => item.addEventListener('click', function() {
		clearInterval(slideInterval);
		clearSlide();
		changeSlide(index);
		slideInterval = setInterval(runSlider, stageTime);
	}))	
}