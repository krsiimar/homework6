var video;
var volume;
var playPutton = document.getElementsByClassName('play')
console.log(playPutton)
playPutton.innerHTML = "<img src='../images/play_button.png' />"

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector('#volume');
	console.log(volume);
	volume.innerHTML = video.volume * 100 + '%';
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	video.playbackRate *= 0.8;
	console.log("Speed is " + video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60
	if (video.currentTime >= video.duration){
		video.currentTime = 0
		video.playbackRate = 1
		console.log("Current location is " + video.currentTime)
	}

	else{
		console.log("Current location is " + video.currentTime)
	}
} 

function mute() { 
	console.log(video.muted)
	var button = document.querySelector('#mute')
  	if (video.muted ){
  		video.muted = false;
  		console.log("Changing to Unmuted");
  		button.innerHTML = "Muted"
  	}
  	else{
  		video.muted = true;
  		console.log('Changing to Muted');
  		button.innerHTML = "Unmuted"
  	}
}

function changeVolume() {
	let slider = document.querySelector('#volumeSlider');
	console.log(slider.value / 100);
	video.volume = slider.value / 100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = slider.value; 
}
       

function gray() { 
	video.classList.add('grayscale')
	console.log("In grayscale")
}

function color() {
	video.classList.remove('grayscale')
	console.log("In color") 
}


