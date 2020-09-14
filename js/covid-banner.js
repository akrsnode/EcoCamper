function closeCovidDiv(){
    document.getElementById("covid19").style.display="none";
}

window.setTimeout(closeCovidDiv, 5000)
document.onscroll = () => {
  if(scrollY) closeCovidDiv()
};
