//Settings
let stageTime = 5000;


//App

let sliderItems = document.querySelectorAll('#slider-item');
let stackable = document.getElementById('slider').getAttribute('data-stackable');
let navigate = document.getElementById('slider').getAttribute('data-nav');

let slideIndex = 0;
let stageQuantity = 1;

const changeSlide = () => {
	for(let i = 0; i < stageQuantity; i++) {
		slideIndex += i;
		if(slideIndex >= sliderItems.length) slideIndex = 0;
		sliderItems[slideIndex].classList.remove('nodis');
	}
};

const clearSlide = () => {
	sliderItems.forEach(elem => elem.classList.add('nodis'));
};

const refreshSlide = () => {
	clearSlide();
	for(let i = 0; i < stageQuantity; i++) {
		slideIndex = i;
		if(slideIndex >= sliderItems.length) slideIndex = 0;
		sliderItems[slideIndex].classList.remove('nodis');
		console.log(slideIndex + " slideind");
	}
}

const runSlider = () => {
	clearSlide();
	changeSlide();
	slideIndex++;
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
	if(this.innerWidth >= 1200) {
		stageQuantity = 3;
	} else if(this.innerWidth >= 768) {
		stageQuantity = 2;
	} else stageQuantity  = 1;
	refreshSlide();
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
		slideIndex = index;
		changeSlide();
		slideInterval = setInterval(runSlider, stageTime);
	}))	
};

runSlider();