// commented the last message out //var lastMsgEl = null;
if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);

let Block = document.getElementById("colorBlock")
let onData = data => {
    console.log(data);
  };

/*
I don't think i'll need this
function handleCommand(d) {
   lastMsgEl.innerHTML =  `text: ${d.text} <br />int: ${d.integer} <br />float: ${d.float}`;
}*/

function onDocumentReady() {
    var socket = new ReconnectingWebsocket("ws://" + location.host + "/serial");
    // we are not sending anything //var sendFormEl = document.getElementById('sendForm');
    /* no last msg //var lastMsg = null;
    lastMsgEl = document.getElementById('lastMsg'); */

    socket.onmessage = function(evt) {
        var d = evt.data.trim();

        console.log(d);
     //try to change backgroud
     if(d === "Button1"){
        document.body.style.backgroundColor = "rgb(255, 0, 0)";
    } else if (d === "Button2"){
        document.body.style.backgroundColor = "rgb( 0, 255, 0)";
    } else if (d === "Button3"){
        document.body.style.backgroundColor = "rgb( 0, 0, 255)";
    } else if (d === "Button4"){
        document.body.style.backgroundColor = "rgb(140, 255, 0)";
    } else if (d === "Button5"){
        document.body.style.backgroundColor = "rgb(255, 0, 255)";
    } else if (d === "Button6"){
        document.body.style.backgroundColor = "rgb(255, 255, 0)";
    }
    };
       
    socket.onopen = function(evt) {
        console.log("Socket opened");
    }
}