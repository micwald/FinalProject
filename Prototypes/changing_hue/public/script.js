var socket = null;
var frozen = false;
let rot;

//Global variable for the buttonState = false
let buttonState = false;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
	document.getElementById('last').addEventListener('click', (e) => {
		frozen = !frozen;
		document.getElementById('last').classList.toggle('frozen');
	});

	initWebsocket();
}

function onData(e) {
	var accel = e.accel;
	var accelGrav = e.accelGrav;
	rot = e.rot;
	console.log(rot.alpha);
	if (!frozen) {
		showData(e);
		//Calling the dimming function
		flipDim(e);
		//accelerationColor(e);
	}
}

//Getting the button element by its id and storing it in a global variable
let offButton = document.getElementById('off');

/*Function for the off button, if the buttonState is false begin the motion stream, if the buttonState is
true stop the motion stream and change the background-color to black*/
function off() {
	//Setting a condition for the buttonState
	if (buttonState === true) {
		buttonState = false; //begins the motion stream
		console.log('test');
		document.getElementById('off').value = 'Off'; // Value of the input button is set to off
		document.getElementById('off').style.backgroundColor = '#8b0000'; // Sets the color of the button to green
		document.getElementById('heading').style.color = '#000000'; //Sets the color of the heading to black
	} else {
		buttonState = true; // When button is pressed the motion stream is stopped and the background color is black
		document.body.style.backgroundColor = '#000000'; //Sets the background to black when button is pressed
		document.getElementById('off').value = 'On'; // When the button is pressed the value changes to on
		document.getElementById('off').style.backgroundColor = '#006400'; //Sets the color of the button to dark red
		document.getElementById('heading').style.color = '#ffffff'; //Sets the heading color to white
	}
}

//function for dimming the lights, takes the value of rot.beta and changes the background-color according to the set rounded rot.beta values
function flipDim(event) {
	//When buttonState is false, begin the motion stream
	if (buttonState == false) {
		console.log(buttonState);
		//Changes the color of the canvas according to the rounded value of beta rotation
		if (Math.round(event.rot.beta) <= 20) {
			document.body.style.backgroundColor = '#fffc3a';
			console.log('#fffc3a');
		} else if (Math.round(event.rot.beta) >= 30 && Math.round(event.rot.beta) <= 60) {
			document.body.style.backgroundColor = '#ffee25';
			console.log('##ffee25');
		} else if (Math.round(event.rot.beta) >= 70 && Math.round(event.rot.beta) <= 90) {
			document.body.style.backgroundColor = '#ffdf00';
			console.log('#ffdf00');
		} else if (Math.round(event.rot.beta) >= 100 && Math.round(event.rot.beta) <= 120) {
			document.body.style.backgroundColor = '#efd100';
			console.log('#efd100');
		} else if (Math.round(event.rot.beta) >= 130 && Math.round(event.rot.beta) <= 150) {
			document.body.style.backgroundColor = '#dfc200';
			console.log('#dfc200');
		} else if (Math.round(event.rot.beta) >= 160 && Math.round(event.rot.beta) <= 180) {
			document.body.style.backgroundColor = '#cfb400';
			console.log('#cfb400');
		}
	}
}

function initWebsocket() {
	const url = 'ws://' + location.host + '/ws';
	socket = new ReconnectingWebsocket(url);

	// Connection has been established
	socket.onopen = function(evt) {
		console.log('Web socket opened: ' + url);
	};

	// Received a message
	socket.onmessage = function(evt) {
		// To convert text back to an object (if it was sent with 'sendObject'):
		var o = JSON.parse(evt.data);
		onData(o);
	};
}

function showData(m) {
	let html = '';
	//Removing the table from canvas
	/*html += '<table><tr><td>' + m.accel.x.toFixed(3) + '</td><td>' + m.accel.y.toFixed(3) + '</td><td>' + m.accel.z.toFixed(3) + '</tr></table>';
  html += '</table>';
  
  //Changes the background color of html depending on the values of alpha, beta and gama rotation
  //document.body.style.backgroundColor = "rgb("+Math.round(m.rot.alpha.toFixed(3)) +","+ Math.round(m.rot.beta.toFixed(3))+","+ Math.round(m.rot.gamma.toFixed(3))+")";
 
  html += 'rot';
  html += '<table><tr><td>' + m.rot.alpha.toFixed(3) + '</td><td>' + m.rot.beta.toFixed(3) + '</td><td>' + m.rot.gamma.toFixed(3) + '</tr></table>';
  
  html += 'rotMotion';
  html += '<table><tr><td>' + m.rotMotion.alpha.toFixed(3) + '</td><td>' + m.rotMotion.beta.toFixed(3) + '</td><td>' + m.rotMotion.gamma.toFixed(3) + '</tr></table>';
  
  html += 'accelGrav';
  html += '<table><tr><td>' + m.accelGrav.x.toFixed(3) + '</td><td>' + m.accelGrav.y.toFixed(3) + '</td><td>' + m.accelGrav.z.toFixed(3) + '</tr></table>';
  html += '</table>';*/
	document.getElementById('last').innerHTML = html;
}
