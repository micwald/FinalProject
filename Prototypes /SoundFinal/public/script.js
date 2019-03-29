var lastMsgEl = null;
if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);

function handleCommand(d) {
   lastMsgEl.innerHTML =  `text: ${d.text}`;
}
function onDocumentReady() {
    var socket = new ReconnectingWebsocket("ws://" + location.host + "/serial");
    var sendFormEl = document.getElementById('sendForm');
    var lastMsg = null;
    lastMsgEl = document.getElementById('lastMsg');
    socket.onmessage = function(evt) {
        // Debug: see raw received message
        //console.log(evt.data);
        
         // Parse message, assuming <Text>
         var d = evt.data.trim();
         
        // Based on the first character of serial communications received from Arduino, change the LED status text in index.html file.
         if(d[0]=='R'){
            document.getElementById("p1").innerHTML = "Sound Sensitivity is high, Light On with Red Color";
            document.getElementById("Rect").setAttribute("style",style="fill:rgb(255,0,0);stroke-width:3;stroke:rgb(0,0,0)");
         }else if(d[0]=='B'){
            document.getElementById("p1").innerHTML = "Sound Sensitivity is medium, Light On with Blue Color";
            document.getElementById("Rect").setAttribute("style",style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)");

         }else if(d[0]=='G'){
            document.getElementById("p1").innerHTML = "Sound Sensitivity is low, Light On with Green Color";
            document.getElementById("Rect").setAttribute("style",style="fill:rgb(0,255,0);stroke-width:3;stroke:rgb(0,0,0)");

         }else if(d[0]=='O'){
            document.getElementById("p1").innerHTML = "Light is Off";
            document.getElementById("Rect").setAttribute("style",style="fill:rgb(0,0,0);stroke-width:3;stroke:rgb(0,0,0)");


         }
               
        // Doesn't seem to be formatted correctly, just display as-is
        if (evt.data != lastMsg) {
            lastMsgEl.innerText =  evt.data;
            lastMsg = evt.data;
        }
    }
    //Socket open
    socket.onopen = function(evt) {
        console.log("Socket opened");
    }
    // Send the data received from the local host to the Arduino
    sendFormEl.addEventListener('submit', function(evt) {
        evt.preventDefault();
        var send = document.getElementById('sendtoSerial').value;
       // console.log(send);
       // console.log("I am in script.js at the end");
        socket.send(send);  
    })
    
      
}
