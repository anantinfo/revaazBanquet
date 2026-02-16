
// SHOW / HIDE SCROLL BUTTON

const btn = document.getElementById("scrollTopBtn");

window.onscroll = function(){

if(document.body.scrollTop > 300 ||
document.documentElement.scrollTop > 300){

btn.style.display = "block";

}else{

btn.style.display = "none";

}

};



// SCROLL TO TOP SMOOTH

btn.addEventListener("click", function(){

window.scrollTo({

top:0,
behavior:"smooth"

});

});



// SMOOTH SCROLL FOR MENU

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});
