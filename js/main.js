//Changing navbar on scrolling
const navbarDiv = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.menu__nav__link');
let fixed = false;

const changeNavbar = function() {
  if(fixed == false && scrollY > 120) {
    fixed = true;
    navbarDiv.classList.add('navbar--extend-scrolled');
    menuLinks.forEach(elem => elem.classList.add('menu__nav__link--dark'));
  };
  if(fixed == true && scrollY > 500) {
    navbarDiv.classList.add('navbar--extend-fixed');
  };
  if(fixed == true && scrollY < 120) {
    fixed = false;
    navbarDiv.classList.remove('navbar--extend-fixed');
    navbarDiv.classList.remove('navbar--extend-scrolled');
    menuLinks.forEach(elem => elem.classList.remove('menu__nav__link--dark'));
  };
};

//Event handling

window.addEventListener("scroll", changeNavbar);