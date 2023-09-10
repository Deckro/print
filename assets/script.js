const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let text = document.getElementById("text");
let img = document.getElementById("img");
let numberSlide = 0;
let dots = document.getElementsByClassName("dots")[0];


function changeDot (){
	dots.innerHTML=''
	for (let i=0; i<slides.length; i++){
		let newDot = document.createElement('span')
		if (i === numberSlide) {
			newDot.classList.add("dot" , "dot_selected")
		}
		else {
			newDot.classList.add("dot")
		} 
		dots.appendChild(newDot)
	}
};

function changeSlide () {
	text.innerHTML = slides[numberSlide].tagLine
	img.src = slides[numberSlide].image
};

changeDot()

let precedent = document.getElementById("precedent");
precedent.addEventListener("click", function () {

	if (
		numberSlide-1 < 0 
	){
		numberSlide = slides.length-1
	}
	else {
		numberSlide = numberSlide-1
	}
	changeSlide()
	changeDot()

	console.log("pour verifier precedent")
});

let suivant = document.getElementById("suivant");
suivant.addEventListener("click", function () {

	if (
		numberSlide+1 >= slides.length
	){
		numberSlide = 0
	}
	else {
		numberSlide = numberSlide+1
	}
	changeSlide()
	changeDot()

	console.log("pour verifier suivant")
});

