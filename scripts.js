// Interactivity demo 2
//zoom interaction
var body = document.querySelector('body')
var trigger = document.querySelector('.trigger')
var audio = document.querySelector('audio')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('testing')

	if (body.id != 'zoom')  {
		body.id = 'zoom'
		audio.pause()
		audio.currentTime = 0
	} else {
		body.id = ''
		audio.play()
	}
}





//Eclipse interaction
var mmmoon = document.querySelector('.mmmoon')
mmmoon.addEventListener('mouseenter', showShadow)
mmmoon.addEventListener('mouseleave', hideShadow)

function showShadow() {
	mmmoon.classList.add('eclipse')
}
function hideShadow() {
	mmmoon.classList.remove('eclipse')

}

toggleButton = document.querySelector("button")
var htmlClass = document.querySelector('html').classList

document.body.addEventListener("click", changeColor)

function changeColor() {
	console.log('testing color change')

	if (htmlClass.contains("toggle")) {
			htmlClass.remove("toggle")
	} 
	else {
			htmlClass.add("toggle")
	} 
}



