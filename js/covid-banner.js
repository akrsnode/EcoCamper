const covidBanner = document.querySelector(".covidBanner");

function fixedCovidBanner() {
  covidBanner.style.position = "unset";
};

document.onscroll = () => {
  if(scrollY >  covidBanner.scrollHeight) fixedCovidBanner();
};

setTimeout(fixedCovidBanner, 5000);