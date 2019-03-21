var socket = null;
var frozen = false;
let rot;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
  
  document.getElementById('last').addEventListener('click', e=> {
    frozen = !frozen;
    document.getElementById('last').classList.toggle('frozen');
  });
  
    
  initWebsocket();
}

function onData(e) {
  var accel = e.accel;
  var accelGrav = e.accelGrav;
  rot = e.rot
  console.log(rot.alpha);
  if (!frozen) {
    showData(e);
    //flipDim(e);// runs the changeColor function
    //accelerationColor(e);
   dimRotation(e);
  }
  
}


//Using the DOM to store the html element in a variable
/*var purpleButton = document.getElementById('purple');
var greenButton =  document.getElementById('green');
*/
//Check whether the buttons work when pressed, there should be either hi or no logged to the console
/*purpleButton.addEventListener("click", function(){
  console.log("hi")
});

greenButton.addEventListener("click", function(){
  console.log("no");
})*/


// a function takes the the value of the alpha rotation and changes the hue color of purple according to the rotation value
//let changePurple = 

/*function flipDim(event){
    console.log("It happened,", rot);
    if(rot.alpha <= 60){
      document.body.style.backgroundColor = "#bba3d0";
      console.log("purple1") 
    } else if(rot.alpha <= 100) {
      document.body.style.backgroundColor = "#aa8cc5";
      console.log("purple2");
    } else if (rot.alpha <= 180){
      document.body.style.backgroundColor = "#9975b9";
      console.log("purple3");
    }else if(rot.alpha <= 250){
      document.body.style.backgroundColor = "#885ead";
      console.log("purple4");
    }else if (rot.alpha <= 350){
      document.body.style.backgroundColor="#7647a2";
      console.log("purple5");
    } else{
      document.body.style.backgroundColor="#7647a2";
      console.log("purple6");
    }
  }*/

//rotate to dim the lights
 function dimRotation(event){
    console.log("It happened,", rot);
    if(rot.alpha <= 72){
      document.body.style.backgroundColor = "#ffff00";
      console.log("purple1") 
    } else if(rot.alpha <= 144) {
      document.body.style.backgroundColor = "#ffea00";
      console.log("purple2");
    } else if (rot.alpha <= 216){
      document.body.style.backgroundColor = "#ffd500";
      console.log("purple3");
    }else if(rot.alpha <= 288){
      document.body.style.backgroundColor = "#ffbf00";
      console.log("purple4");
    } else{
      document.body.style.backgroundColor="#000000";
      console.log("purple6");
    }
  }


  



  
  // a function takes the the value of the alpha rotation and changes the hue color of green according to the rotation value

/*let changeGreen = function changeColor(event){
    console.log("Green button is pressed");
    if(rot.alpha <= 60){
      document.body.style.backgroundColor = "#00ff00";
      console.log(" neon light green") 
    } else if(rot.alpha <= 100) {
      document.body.style.backgroundColor = "#00e500";
      console.log("light green");
    } else if (rot.alpha <= 180){
      document.body.style.backgroundColor = "#00cc00";
      console.log("green1");
    }else if(rot.alpha <= 250){
      document.body.style.backgroundColor = "#00b200";
      console.log("green2");
    }else if (rot.alpha <= 350){
      document.body.style.backgroundColor="#009900";
      console.log("green3");
    } else{
      document.body.style.backgroundColor="#007f00";
      console.log("dark green");
    }
   }
*/

  //Calling the function using onclick event 
   /*purpleButton.onclick = changePurple;
   greenButton.onclick = changeGreen;*/

 


// function for chnaging color depending on the value of acceleration or beta rotation 
/*function accelerationColor(event){
if(event.rot.beta >= 1){
  document.body.style.backgroundColor ="yellow"
  console.log("yellow");
} else if(event.rot.beta <= 1 ){
  document.body.style.backgroundColor ="orange";
  console.log("orange");
}

}*/

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
  let html = 'accel';
  html += '<table><tr><td>' + m.accel.x.toFixed(3) + '</td><td>' + m.accel.y.toFixed(3) + '</td><td>' + m.accel.z.toFixed(3) + '</tr></table>';
  html += '</table>';
  
  //Changes the background color of html depending on the values of alpha, beta and gama rotation
  /*document.body.style.backgroundColor = "rgb("+Math.round(m.rot.alpha.toFixed(3)) +","+ Math.round(m.rot.beta.toFixed(3))+","+ Math.round(m.rot.gamma.toFixed(3))+")";*/
 
  html += 'rot';
  html += '<table><tr><td>' + m.rot.alpha.toFixed(3) + '</td><td>' + m.rot.beta.toFixed(3) + '</td><td>' + m.rot.gamma.toFixed(3) + '</tr></table>';
  
  html += 'rotMotion';
  html += '<table><tr><td>' + m.rotMotion.alpha.toFixed(3) + '</td><td>' + m.rotMotion.beta.toFixed(3) + '</td><td>' + m.rotMotion.gamma.toFixed(3) + '</tr></table>';
  
  html += 'accelGrav';
  html += '<table><tr><td>' + m.accelGrav.x.toFixed(3) + '</td><td>' + m.accelGrav.y.toFixed(3) + '</td><td>' + m.accelGrav.z.toFixed(3) + '</tr></table>';
  html += '</table>';
  document.getElementById('last').innerHTML = html;
}