let covidDiv = document.querySelector(".ftco-covid19")

function fixedCovidDiv(){
  covidDiv.style.position="unset";
}
document.onscroll = () => {
  if(scrollY >  covidDiv.scrollHeight) fixedCovidDiv()
};
