"use strict"
let settings = {
	width:0,
	height:0,
	transitionMode:'none',
	speed:2000,
	navigationButton:'circle',
	navigationButtonColor:'green',
}
let slides = document.getElementsByClassName('sliderElement');
let activeNumber = 0;
setTimeout(() => {
	slides[activeNumber].style.display = 'block'
},0)
function slideTransition(clearTime,reverse){
	let condition = ((activeNumber+1)<slides.length);
	let nextSlideInIf = 1;
	let nextSlideInElse = 0;
	if(reverse){
		condition =((activeNumber+1)<=slides.length && (activeNumber+1)>1);
		nextSlideInIf = -1;
		nextSlideInElse = slides.length-1;
	}
	if(condition){
		slides[activeNumber].style.display="none"
		activeNumber += nextSlideInIf;
		slides[activeNumber].style.display="block"
	} 
	else{
		slides[activeNumber].style.display="none"
		activeNumber = nextSlideInElse;
		slides[activeNumber].style.display="block"
	}
	nextSlideTimer = setTimeout(slideTransition,settings.speed);
	clearTime;
}
let nextSlideTimer = setTimeout(slideTransition,settings.speed);