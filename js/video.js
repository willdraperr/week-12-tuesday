var video = document.querySelector("#player1");
var volume_display = document.querySelector("#volumeDisplay");

window.addEventListener("load", function() {
    console.log("Hi")
})

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume_display.innerHTML = video.volume *100 + "%"
})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	// volume_display.innerHTML = video.volume *100 + "%"
})

function skip() {
	console.log("In Skip");
	console.log("Duration: " + video.duration + " seconds");
	console.log("current location is " + video.currentTime)
	newTime = video.currentTime + 20
	if (newTime > video.duration){
		console.log("Exceeded length")
		newTime = 0
		video.pause()
	}
	video.currentTime = newTime
	console.log("current location is " + video.currentTime)
}

function setStyle(){
	console.log("In setStyle")
	video.classList.toggle('oldSchool')
}

document.querySelector("#vintage").addEventListener("click", setStyle)
