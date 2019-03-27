var lastMsgEl = null;
if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);

//get the blocks from the html to color them
let block1 = document.getElementById('1');
let block2 = document.getElementById('2');
let block3 = document.getElementById('3');
let block4 = document.getElementById('4');
let block5 = document.getElementById('5');
let block6 = document.getElementById('6');
let block7 = document.getElementById('7');
let block8 = document.getElementById('8');
let block9 = document.getElementById('9');
let block10 = document.getElementById('10');
let block11 = document.getElementById('11');

function handleCommand(d) {
   lastMsgEl.innerHTML =  `text: ${d.text}`;
}

function onDocumentReady() {
    var socket = new ReconnectingWebsocket("ws://" + location.host + "/serial");
    var sendFormEl = document.getElementById('sendForm');
    var lastMsg = null;
    lastMsgEl = document.getElementById('lastMsg');

    socket.onmessage = function(evt) {

        // Parse message
        var d = evt.data.trim();
        
        /*I added function to check the value from the potentiometer
        and color the blocks according to it. The value goes from 0 to 1023*/
        if(d === 0){
            block00(); // the functions are defined in the bottom
        }else if(d>0 && d<=93){
            block01();    
        } else if(d>=94 && d<=186){
            block02();
        }else if(d>=187 && d<=279){
           block03();
        } else if(d>=280 && d<=372){
            block04();
        } else if(d>=373 && d<=465){
            block05();
        } else if(d>=466 && d<=558){
            block06();
        } else if(d>=559 && d<= 651){
            block07();
        } else if(d>=652 && d<= 744){
            block08();
        } else if(d>=745 && d<= 837){
            block09();
        } else if(d>=838 && d<= 930){
            block010();
        } else if(d>=931 && d<= 1023){
            block011();
        }
    }
    socket.onopen = function(evt) {
        console.log("Socket opened");
    }

    sendFormEl.addEventListener('submit', function(evt) {
        evt.preventDefault();
        var send = document.getElementById('sendtoSerial').value;
        console.log(send);
        socket.send(send);  
    })
}
let block = document.getElementById("block");

function buttonRed(){ // the function for sending the value of the red button
    document.getElementById('sendtoSerial').value = '<red>';
    console.log("The red button is pressed");
    block.style.backgroundColor = "rgb(255,0,0)";
};
function buttonBlue(){ // the function for sending the value of the blue button
    document.getElementById('sendtoSerial').value = '<blue>';
    console.log("The blue button is pressed");
    block.style.backgroundColor = "rgb(0,0,255)";
};
function buttonGreen(){ // the function for sending the value of the green button
    document.getElementById('sendtoSerial').value = '<green>';
    console.log("The green button is pressed");
    block.style.backgroundColor = "rgb(0,255,0)";
};
function buttonYellow(){ // the function for sending the value of the yellow button
    document.getElementById('sendtoSerial').value = '<yellow>';
    console.log("The yellow button is pressed");
    block.style.backgroundColor = "rgb(255,255,0)";
};
function buttonOrange(){ // the function for sending the value of the orange button
    document.getElementById('sendtoSerial').value = '<orange>';
    console.log("The orange button is pressed");
    block.style.backgroundColor = "rgb(255,144,0)";
}; 
function buttonPink(){ // the function for sending the value of the pink button
    document.getElementById('sendtoSerial').value = '<pink>';
    console.log("The pink button is pressed");
    block.style.backgroundColor = "rgb(255, 105, 180)";
};
function buttonPurple(){ // the function for sending the value of the purple button
    document.getElementById('sendtoSerial').value = '<purple>';
    console.log("The purple button is pressed");
    block.style.backgroundColor = "rgb(128,0,128)";
};
function buttonCyan(){ // the function for sending the value of the cyan button
    document.getElementById('sendtoSerial').value = '<cyan>';
    console.log("The cyan button is pressed");
    block.style.backgroundColor = "rgb(0,128,128)";
};
function buttonBrown(){ // the function for sending the value of the brown button
    document.getElementById('sendtoSerial').value = '<brown>';
    console.log("The brown button is pressed");
    block.style.backgroundColor = "rgb(139,69,19)";
};
// The following functions color the blocks according to the potentiometers value
function block00(){
    block1.style.backgroundColor = "rgb(255, 255, 255)";
    block2.style.backgroundColor = "rgb(255, 255, 255)";
    block3.style.backgroundColor = "rgb(255, 255, 255)";
    block4.style.backgroundColor = "rgb(255, 255, 255)";
    block5.style.backgroundColor = "rgb(255, 255, 255)";
    block6.style.backgroundColor = "rgb(255, 255, 255)";
    block7.style.backgroundColor = "rgb(255, 255, 255)";
    block8.style.backgroundColor = "rgb(255, 255, 255)";
    block9.style.backgroundColor = "rgb(255, 255, 255)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";
}
function block01(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(255, 255, 255)";
    block3.style.backgroundColor = "rgb(255, 255, 255)";
    block4.style.backgroundColor = "rgb(255, 255, 255)";
    block5.style.backgroundColor = "rgb(255, 255, 255)";
    block6.style.backgroundColor = "rgb(255, 255, 255)";
    block7.style.backgroundColor = "rgb(255, 255, 255)";
    block8.style.backgroundColor = "rgb(255, 255, 255)";
    block9.style.backgroundColor = "rgb(255, 255, 255)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";
}

function block02(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(255, 255, 255)";
    block4.style.backgroundColor = "rgb(255, 255, 255)";
    block5.style.backgroundColor = "rgb(255, 255, 255)";
    block6.style.backgroundColor = "rgb(255, 255, 255)";
    block7.style.backgroundColor = "rgb(255, 255, 255)";
    block8.style.backgroundColor = "rgb(255, 255, 255)";
    block9.style.backgroundColor = "rgb(255, 255, 255)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";
}

function block03(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(202, 158, 226)";
    block4.style.backgroundColor = "rgb(255, 255, 255)";
    block5.style.backgroundColor = "rgb(255, 255, 255)";
    block6.style.backgroundColor = "rgb(255, 255, 255)";
    block7.style.backgroundColor = "rgb(255, 255, 255)";
    block8.style.backgroundColor = "rgb(255, 255, 255)";
    block9.style.backgroundColor = "rgb(255, 255, 255)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";
}

function block04(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(202, 158, 226)";
    block4.style.backgroundColor = "rgb(192, 140, 212)";
    block5.style.backgroundColor = "rgb(255, 255, 255)";
    block6.style.backgroundColor = "rgb(255, 255, 255)";
    block7.style.backgroundColor = "rgb(255, 255, 255)";
    block8.style.backgroundColor = "rgb(255, 255, 255)";
    block9.style.backgroundColor = "rgb(255, 255, 255)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";
}

function block05(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(202, 158, 226)";
    block4.style.backgroundColor = "rgb(192, 140, 212)";
    block5.style.backgroundColor = "rgb(182, 122, 198)";
    block6.style.backgroundColor = "rgb(255, 255, 255)";
    block7.style.backgroundColor = "rgb(255, 255, 255)";
    block8.style.backgroundColor = "rgb(255, 255, 255)";
    block9.style.backgroundColor = "rgb(255, 255, 255)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";    
}

function block06(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(202, 158, 226)";
    block4.style.backgroundColor = "rgb(192, 140, 212)";
    block5.style.backgroundColor = "rgb(182, 122, 198)";
    block6.style.backgroundColor = "rgb(173, 104, 184)";
    block7.style.backgroundColor = "rgb(255, 255, 255)";
    block8.style.backgroundColor = "rgb(255, 255, 255)";
    block9.style.backgroundColor = "rgb(255, 255, 255)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";    
}

function block07(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(202, 158, 226)";
    block4.style.backgroundColor = "rgb(192, 140, 212)";
    block5.style.backgroundColor = "rgb(182, 122, 198)";
    block6.style.backgroundColor = "rgb(173, 104, 184)";
    block7.style.backgroundColor = "rgb(163, 86, 170)";
    block8.style.backgroundColor = "rgb(255, 255, 255)";
    block9.style.backgroundColor = "rgb(255, 255, 255)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";    
}
function block08(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(202, 158, 226)";
    block4.style.backgroundColor = "rgb(192, 140, 212)";
    block5.style.backgroundColor = "rgb(182, 122, 198)";
    block6.style.backgroundColor = "rgb(173, 104, 184)";
    block7.style.backgroundColor = "rgb(163, 86, 170)";
    block8.style.backgroundColor = "rgb(153, 68, 156)";
    block9.style.backgroundColor = "rgb(255, 255, 255)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";    
}
function block09(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(202, 158, 226)";
    block4.style.backgroundColor = "rgb(192, 140, 212)";
    block5.style.backgroundColor = "rgb(182, 122, 198)";
    block6.style.backgroundColor = "rgb(173, 104, 184)";
    block7.style.backgroundColor = "rgb(163, 86, 170)";
    block8.style.backgroundColor = "rgb(153, 68, 156)";
    block9.style.backgroundColor = "rgb(143, 50, 142)";
    block10.style.backgroundColor = "rgb(255, 255, 255)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";    
}
function block010(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(202, 158, 226)";
    block4.style.backgroundColor = "rgb(192, 140, 212)";
    block5.style.backgroundColor = "rgb(182, 122, 198)";
    block6.style.backgroundColor = "rgb(173, 104, 184)";
    block7.style.backgroundColor = "rgb(163, 86, 170)";
    block8.style.backgroundColor = "rgb(153, 68, 156)";
    block9.style.backgroundColor = "rgb(143, 50, 142)";
    block10.style.backgroundColor = "rgb(133, 32, 128)";
    block11.style.backgroundColor = "rgb(255, 255, 255)";    
}
function block011(){
    block1.style.backgroundColor = "rgb(222, 194, 254)";
    block2.style.backgroundColor = "rgb(212, 174, 240)";
    block3.style.backgroundColor = "rgb(202, 158, 226)";
    block4.style.backgroundColor = "rgb(192, 140, 212)";
    block5.style.backgroundColor = "rgb(182, 122, 198)";
    block6.style.backgroundColor = "rgb(173, 104, 184)";
    block7.style.backgroundColor = "rgb(163, 86, 170)";
    block8.style.backgroundColor = "rgb(153, 68, 156)";
    block9.style.backgroundColor = "rgb(143, 50, 142)";
    block10.style.backgroundColor = "rgb(133, 32, 128)";
    block11.style.backgroundColor = "rgb(124, 14, 115)";    
}