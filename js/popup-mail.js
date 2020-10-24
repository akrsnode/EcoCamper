let mailBanner = document.querySelector('.hero__sentBanner');

const popupToggle = ()=> {
  mailBanner.classList.add('hero__sentBanner--showed');
  setTimeout(function() {
    mailBanner.classList.remove('hero__sentBanner--showed');
  }, 6000);
};

setTimeout(popupToggle, 1000)