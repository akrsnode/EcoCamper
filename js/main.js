//Changing navbar on scrolling
const navbarDiv = document.querySelector('.navbar');
const menuDiv = document.querySelector('.menu__nav');
const menuLinks = document.querySelectorAll('.menu__nav__link');
const mainLogo = document.querySelector('#nav-logo');
const logoText = document.querySelector('.navbar__wrapper__brand');
const menuBtn = document.querySelector('.navbar__wrapper__btn');
let fixed = false;

const changeNavbar = function() {
  if(fixed == false && scrollY > 120) {
    fixed = true;
    mainLogo.classList.toggle('nodis');
    logoText.classList.toggle('nodis');
    navbarDiv.classList.add('navbar--extend-scrolled');
    menuLinks.forEach(elem => elem.classList.add('menu__nav__link--dark'));
  };
  if(fixed == true && scrollY > 500) {
    navbarDiv.classList.add('navbar--extend-fixed');
  };
  if(fixed == true && scrollY < 120) {
    fixed = false;
    mainLogo.classList.toggle('nodis');
    logoText.classList.toggle('nodis');
    navbarDiv.classList.remove('navbar--extend-fixed');
    navbarDiv.classList.remove('navbar--extend-scrolled');
    menuLinks.forEach(elem => elem.classList.remove('menu__nav__link--dark'));
  };
};

const toggleMenu = function() {
  menuDiv.classList.toggle('nodis');
  console.log('hejka');
};

//Event handling
menuBtn.addEventListener("click", toggleMenu);
window.addEventListener("scroll", changeNavbar);

//Section slide
document.querySelector('.hero-btn').addEventListener('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
});