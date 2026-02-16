
// SLIDER WITH SMOOTH FADE

let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}, 4000);


// POPUP GALLERY

let popup = document.getElementById("popup");
let popupImg = document.getElementById("popup-img");

document.querySelectorAll(".gallery img").forEach(img => {

img.addEventListener("click", function(){

popup.style.display = "flex";
popupImg.src = this.src;

});

});


// CLOSE POPUP BUTTON

document.getElementById("close").onclick = function(){

popup.style.display = "none";

};


// CLOSE WHEN CLICK OUTSIDE IMAGE

popup.addEventListener("click", function(e){

if(e.target === popup){

popup.style.display = "none";

}

});


// TOP BUTTON

let btn = document.getElementById("topBtn");

window.onscroll = function(){

if(window.scrollY > 300){

btn.style.display = "block";

}else{

btn.style.display = "none";

}

};

btn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};
