# ws-serial-bridge

This demonstrates bidirectional communication between an Arduino sketch and Javascript running in the browser.

It is changed and it is based on Clint's serial bridge. (source: https://github.com/ClintH/interactivity)


# Setup and running


1. Open the folder in the terminal and type `npm install`
2. Upload _Arduino\Arduino.ino_ to the Arduino
4. To run the program type `node app "port"`. On Windows the port might be something like `node app com5` or on a Mac: `node app /dev/tty.usbmodem1411`. The port name is the often the same or similar to what shows up in the Arduino IDE.
5. Once started, the terminal will start showing the data collected from the potentiometer.
6. In your browser, open up `http://localhost:4000`. This will allow you to click on buttons to change the led's color. It will present the data from the potentiometer on the bar.

These instructions were taken and changed from https://github.com/ClintH/interactivity/tree/master/websockets/serial-bridge

# Serial commands
This sketch is used to send commands as text in order to change the color of the leds. The idea is to be able to do it on your phone or other portable device so we don't have to get up to the board.

#Contributors
Snezhana Bogeva